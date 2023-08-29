import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import React from "react";

export default async function middleware(req, res) {
  if (req.nextUrl.pathname.startsWith("/api/HeaderModification/tokenSet")) {
    const requestHeader = new Headers(req.headers);
    requestHeader.set("Token", "Bearer");

    return NextResponse.next({
      request: { headers: requestHeader },
    });
  }
}
