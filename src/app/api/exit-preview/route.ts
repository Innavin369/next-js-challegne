import { draftMode } from "next/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  draftMode().disable();
  return NextResponse.redirect(new URL("/", request.url));
}
