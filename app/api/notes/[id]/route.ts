import { NextRequest, NextResponse } from "next/server";
import { ApiError } from "@/types/notes";
import { notesApi } from "@/lib/api/serverApi";

type Props = {
  params: Promise<{ id: string }>;
};

export async function GET(request: NextRequest, { params }: Props) {
  const { id } = await params;
  try {
    const { data } = await notesApi.get(`/notes/${id}`);

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

export async function POST(request: NextRequest) {
  // Отримуємо дані з тіла запиту
  const body = await request.json();

  try {
    // Передаємо їх далі на бекенд нотаток
    const { data } = await notesApi.post("/notes", body);

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
