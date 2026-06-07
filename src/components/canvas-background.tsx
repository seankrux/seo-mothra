"use client";

import { useEffect } from "react";

export function CanvasBackground() {
  useEffect(() => {
    // WebGL Shader Canvas
    const canvas = document.getElementById(
      "shader-canvas",
    ) as HTMLCanvasElement;
    const glRaw = canvas?.getContext("webgl");

    if (glRaw) {
      const gl: WebGLRenderingContext = glRaw;
      const vs = `
        attribute vec2 position;
        varying vec2 v_uv;
        void main() {
          v_uv = position * 0.5 + 0.5;
          v_uv.y = 1.0 - v_uv.y;
          gl_Position = vec4(position, 0.0, 1.0);
        }
      `;
      const fs = `
        precision highp float;
        uniform float u_time;
        uniform vec2 u_res;
        uniform vec2 u_mouse;
        varying vec2 v_uv;

        vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
        float snoise(vec2 v) {
          const vec4 C = vec4(0.211324865,0.366025403,-0.577350269,0.024390244);
          vec2 i = floor(v + dot(v, C.yy));
          vec2 x0 = v - i + dot(i, C.xx);
          vec2 i1 = (x0.x > x0.y) ? vec2(1.0,0.0) : vec2(0.0,1.0);
          vec4 x12 = x0.xyxy + C.xxzz;
          x12.xy -= i1;
          i = mod(i, 289.0);
          vec3 p = permute(permute(i.y + vec3(0.0,i1.y,1.0)) + i.x + vec3(0.0,i1.x,1.0));
          vec3 m = max(0.5 - vec3(dot(x0,x0),dot(x12.xy,x12.xy),dot(x12.zw,x12.zw)), 0.0);
          m = m*m; m = m*m;
          vec3 x = 2.0 * fract(p * C.www) - 1.0;
          vec3 h = abs(x) - 0.5;
          vec3 ox = floor(x + 0.5);
          vec3 a0 = x - ox;
          m *= 1.79284291 - 0.85373472 * (a0*a0 + h*h);
          vec3 g;
          g.x = a0.x * x0.x + h.x * x0.y;
          g.yz = a0.yz * x12.xz + h.yz * x12.yw;
          return 130.0 * dot(m, g);
        }

        void main() {
          vec2 uv = v_uv;
          vec2 mouse = u_mouse / u_res;
          float n1 = snoise(uv * 2.0 + u_time * 0.1);
          float n2 = snoise(uv * 4.0 - u_time * 0.15);
          float dist = distance(uv, mouse);
          float glow = smoothstep(0.6, 0.0, dist) * 0.15;
          vec3 c1 = vec3(0.976, 0.976, 0.973);
          vec3 c2 = vec3(0.369, 0.443, 0.325);
          vec3 c3 = vec3(0.941, 0.941, 0.933);
          vec3 col = mix(c1, c3, 0.5 + 0.5 * n1);
          col = mix(col, c2, clamp(n2 * 0.12 + glow, 0.0, 1.0));
          float grain = snoise(uv * 100.0) * 0.018;
          col += grain;
          gl_FragColor = vec4(col, 1.0);
        }
      `;

      function makeShader(type: number, src: string) {
        const s = gl.createShader(type)!;
        gl.shaderSource(s, src);
        gl.compileShader(s);
        return s;
      }

      const prog = gl.createProgram()!;
      gl.attachShader(prog, makeShader(gl.VERTEX_SHADER, vs));
      gl.attachShader(prog, makeShader(gl.FRAGMENT_SHADER, fs));
      gl.linkProgram(prog);
      gl.useProgram(prog);

      const buf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
        gl.STATIC_DRAW,
      );
      const pos = gl.getAttribLocation(prog, "position");
      gl.enableVertexAttribArray(pos);
      gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

      const tLoc = gl.getUniformLocation(prog, "u_time");
      const rLoc = gl.getUniformLocation(prog, "u_res");
      const mLoc = gl.getUniformLocation(prog, "u_mouse");

      let mx = 0,
        my = 0;
      const onMove = (e: MouseEvent) => {
        mx = e.clientX;
        my = e.clientY;
      };
      window.addEventListener("mousemove", onMove);

      let raf: number;
      function render(t: number) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        gl.viewport(0, 0, canvas.width, canvas.height);
        gl.uniform1f(tLoc, t * 0.001);
        gl.uniform2f(rLoc, canvas.width, canvas.height);
        gl.uniform2f(mLoc, mx, canvas.height - my);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
        raf = requestAnimationFrame(render);
      }
      raf = requestAnimationFrame(render);

      return () => {
        cancelAnimationFrame(raf);
        window.removeEventListener("mousemove", onMove);
      };
    }

    // Particle Canvas
    const pCanvas = document.getElementById(
      "particle-canvas",
    ) as HTMLCanvasElement;
    const pCtxRaw = pCanvas?.getContext("2d");
    if (!pCtxRaw) return;
    const pCtx: CanvasRenderingContext2D = pCtxRaw;

    let pMouse = { x: -999, y: -999 };
    let lastScrollY = window.scrollY;
    let scrollVel = 0;
    const green = "#46583c";

    class Particle {
      x = 0;
      y = 0;
      size = 0;
      speedY = 0;
      opacity = 0;
      angle = 0;
      amp = 0;
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * pCanvas.width;
        this.y = Math.random() * pCanvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedY = Math.random() * 0.3 + 0.1;
        this.opacity = Math.random() * 0.3 + 0.05;
        this.angle = Math.random() * Math.PI * 2;
        this.amp = Math.random() * 0.5;
      }
      update() {
        const si = scrollVel * 0.08;
        this.y -= this.speedY + si;
        this.x += Math.sin(this.angle) * this.amp;
        this.angle += 0.015;
        const dx = this.x - pMouse.x;
        const dy = this.y - pMouse.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 120) {
          const f = (120 - d) / 120;
          this.x += (dx / d) * f * 1.5;
          this.y += (dy / d) * f * 1.5;
        }
        if (this.y < -10) this.y = pCanvas.height + 10;
      }
      draw() {
        pCtx.beginPath();
        pCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        pCtx.fillStyle = green;
        pCtx.globalAlpha = this.opacity;
        pCtx.fill();
      }
    }

    let particles: Particle[] = [];
    function initP() {
      pCanvas.width = window.innerWidth;
      pCanvas.height = window.innerHeight;
      particles = Array.from({ length: 150 }, () => new Particle());
    }

    const onPMove = (e: MouseEvent) => {
      pMouse = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onPMove);

    let pRaf: number;
    function animP() {
      pCtx.clearRect(0, 0, pCanvas.width, pCanvas.height);
      const cy = window.scrollY;
      scrollVel = cy - lastScrollY;
      lastScrollY = cy;
      scrollVel *= 0.9;
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      pCtx.globalAlpha = 1;
      pRaf = requestAnimationFrame(animP);
    }

    initP();
    animP();

    const onResize = () => initP();
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(pRaf);
      window.removeEventListener("mousemove", onPMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <canvas id="shader-canvas" aria-hidden="true" />
      <canvas id="particle-canvas" aria-hidden="true" />
    </>
  );
}
