import { cookies } from "next/headers";
import { notesApi } from "../../api";
import { NextResponse } from "next/server";

export async function POST() {
  const cookieStore = await cookies();
  notesApi.post("/auth/logout", {
    headers: { Cookies: cookieStore.toString() },
  });

  cookieStore.delete("accessToken");
  cookieStore.delete("refreshToken");

  return NextResponse.json({ message: "Logged out successfully" });
}
