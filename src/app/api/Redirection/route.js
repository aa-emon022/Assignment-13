import { redirect } from "next/navigation";
import React from "react";

export async function GET() {
  redirect("/");
}
