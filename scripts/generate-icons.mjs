import { promises as fs } from "fs";
import { createCanvas } from "canvas";
import path from "path";

const publicDir = path.join(process.cwd(), "public");

// Create directories
await fs.mkdir(publicDir, { recursive: true });

// Function to draw icon
async function createIcon(filename, size) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext("2d");

  // Background
  ctx.fillStyle = "#11110f";
  ctx.fillRect(0, 0, size, size);

  // Rounded border
  const radius = Math.floor(size / 5.3);
  ctx.strokeStyle = "rgba(216, 226, 199, 0.6)";
  ctx.lineWidth = Math.max(1, size / 32);
  ctx.beginPath();
  ctx.moveTo(radius, 0);
  ctx.lineTo(size - radius, 0);
  ctx.quadraticCurveTo(size, 0, size, radius);
  ctx.lineTo(size, size - radius);
  ctx.quadraticCurveTo(size, size, size - radius, size);
  ctx.lineTo(radius, size);
  ctx.quadraticCurveTo(0, size, 0, size - radius);
  ctx.lineTo(0, radius);
  ctx.quadraticCurveTo(0, 0, radius, 0);
  ctx.stroke();

  // Draw star/diamond in center
  const centerX = size / 2;
  const centerY = size / 2;
  const diamondSize = size / 4;

  ctx.fillStyle = "#d8e2c7";
  ctx.globalAlpha = 0.9;

  // Central diamond
  ctx.beginPath();
  ctx.moveTo(centerX, centerY - diamondSize);
  ctx.lineTo(centerX + diamondSize, centerY);
  ctx.lineTo(centerX, centerY + diamondSize);
  ctx.lineTo(centerX - diamondSize, centerY);
  ctx.closePath();
  ctx.fill();

  // Corner dots
  ctx.globalAlpha = 0.7;
  const dotRadius = size / 20;
  const cornerDist = diamondSize * 0.6;
  const corners = [
    [centerX + cornerDist, centerY - cornerDist],
    [centerX + cornerDist, centerY + cornerDist],
    [centerX - cornerDist, centerY + cornerDist],
    [centerX - cornerDist, centerY - cornerDist],
  ];

  for (const [x, y] of corners) {
    ctx.beginPath();
    ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
    ctx.fill();
  }

  // Save PNG
  const buffer = canvas.toBuffer("image/png");
  await fs.writeFile(path.join(publicDir, filename), buffer);
  console.log(`✓ Created ${filename} (${size}x${size})`);
}

// Create favicon and apple icon
try {
  await createIcon("favicon.png", 32);
  await createIcon("apple-touch-icon.png", 180);
  console.log("\n✓ Icons generated successfully");
} catch (error) {
  console.error("Error generating icons:", error);
  process.exit(1);
}
