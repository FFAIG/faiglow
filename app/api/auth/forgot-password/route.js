import { NextResponse } from "next/server";

const FAI = "https://fai-platform-alpha.vercel.app";

export async function POST(req) {
  try {
    const body = await req.json();
    const res = await fetch(`${FAI}/api/auth/forgot-password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
