import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

export async function POST(req, res) {
  return NextResponse.json(
    {},
    {
      headers: { token: "123-XYZ" },
    }
  );
}
