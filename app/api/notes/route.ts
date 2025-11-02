import { NextRequest, NextResponse } from "next/server";
import { notesApi } from "../api";
import { ApiError } from "@/types/notes";

export async function GET(request: NextRequest) {
  const categoryId = request.nextUrl.searchParams.get("categoryId");
  try {
    const { data } = await notesApi("/notes", {
      params: { categoryId },
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
