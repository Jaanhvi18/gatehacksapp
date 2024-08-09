// pages/api/_middleware.js
// middleware.js (at the root or pages directory)
import { NextResponse } from "next/server";

export function middleware(req) {
  // If you don't want to do anything special, just pass the request through
  return NextResponse.next();
}

