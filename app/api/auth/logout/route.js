import { NextResponse } from "next/server";

const FAI = "https://fai-platform-alpha.vercel.app";

export async function POST(req) {
  try {
    const cookieHeader = req.headers.get("cookie") || "";
    const res = await fetch(`${FAI}/api/auth/logout`, {
      method: "POST",
      headers: { cookie: cookieHeader },
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
