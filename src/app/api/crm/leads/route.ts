import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    // Store in memory (replace with real DB/CRM later)
    console.log("[CRM Lead]", JSON.stringify(data));
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
