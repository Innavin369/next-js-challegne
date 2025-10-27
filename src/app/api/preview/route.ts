import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const redirect = searchParams.get("redirect") || "/";
  const secret = searchParams.get("secret");

  if (secret !== process.env.NEXT_PREVIEW_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  (await draftMode()).enable();
  return NextResponse.redirect(redirect);
}
