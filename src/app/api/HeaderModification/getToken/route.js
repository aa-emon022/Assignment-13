import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import React from "react";

export default async function GET(req, res) {
  const headersList = headers();
  const Token = headersList.get("token");
  return NextResponse.json({Token:Token})
  
}
