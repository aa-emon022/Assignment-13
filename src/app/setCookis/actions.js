"use server";
import { cookies } from "next/headers";

export async function setCookies() {
  cookies().set({
    name: "language",
    value: "en",
    path: "/",
  });
}
