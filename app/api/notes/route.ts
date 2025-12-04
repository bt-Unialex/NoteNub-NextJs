import { NextRequest, NextResponse } from "next/server";
import { ApiError, getNotesParams, NoteListResponse } from "@/types/notes";
import { notesApi, possibleCategories } from "@/lib/api/serverApi";

export async function GET(request: NextRequest) {
  const categoryId = request.nextUrl.searchParams.get("categoryId");

  const getnotesParams: getNotesParams = {
    // page:1, perPage:10, sortBy:"created", //byDefault
    // search, tag
  };

  // let response: NoteListResponse;
  if (categoryId)
    getnotesParams.tag =
      possibleCategories.find((cat) => cat.id === categoryId)?.name || "";

  try {
    const { data } = await notesApi.get<NoteListResponse>("/notes", {
      params: { ...getnotesParams },
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
