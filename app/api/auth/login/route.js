import { NextResponse } from "next/server";

const FAI = "https://fai-platform-alpha.vercel.app";

export async function POST(req) {
  try {
    const body = await req.json();
    const res = await fetch(`${FAI}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    const nextRes = NextResponse.json(data, { status: res.status });
    const cookie = res.headers.get("set-cookie");
    if (cookie) nextRes.headers.set("set-cookie", cookie);
    return nextRes;
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
