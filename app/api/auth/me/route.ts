// app/api/auth/me/route.ts

import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { ApiError } from "@/types/notes";
import { notesApi } from "@/lib/api/serverApi";

export async function GET() {
  const cookieStore = await cookies();

  try {
    const { data } = await notesApi.get("/users/me", {
      headers: {
        Cookie: cookieStore.toString(),
      },
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      {
        error:
          (error as ApiError).response?.data?.error ??
          (error as ApiError).message,
      },
      { status: (error as ApiError).status }
    );
  }
}
