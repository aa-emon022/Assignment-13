import { NextResponse } from "next/server";

export async function POST(req, res) {
  return NextResponse.json(
    {},
    {
      status: 201,
      headers: { "Set-Cookie": `language=en;path:/` },
    }
  );
}
