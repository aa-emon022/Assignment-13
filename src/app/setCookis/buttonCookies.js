"use client";
import React from "react";
import { setCookies } from "./actions"; // Correct the import path.

export default function CookiesButton() {
  const handleCookies = async () => {
    await setCookies();
  };
  return (
    <div>
      <button onClick={handleCookies}>Set Cookies</button>
    </div>
  );
}
