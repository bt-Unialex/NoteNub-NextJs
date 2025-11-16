import { NextResponse } from "next/server";
import { possibleCategories } from "@/lib/api/serverApi";

export async function GET() {
  const categories = possibleCategories;

  return NextResponse.json(categories);
}
