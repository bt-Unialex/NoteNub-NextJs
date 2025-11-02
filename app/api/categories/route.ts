import { NextResponse } from "next/server";
// import { notesApi } from "../api";
import { ApiError, Category } from "@/types/notes";

export async function GET() {
  const fallbackCategories: Category[] = [
    {
      id: "ShopingID",
      name: "Shoping",
      description: "Shopping Description",
      createdAt: "2024-05-05T10:15:00Z",
      updatedAt: "2024-05-05T10:15:00Z",
    },
    {
      id: "IdeasID",
      name: "Ideas",
      description: "Ideas Description",
      createdAt: "2024-05-05T10:15:00Z",
      updatedAt: "2024-05-05T10:15:00Z",
    },
    {
      id: "TravelID",
      name: "Travel",
      description: "Travel Description",
      createdAt: "2024-05-05T10:15:00Z",
      updatedAt: "2024-05-05T10:15:00Z",
    },
    {
      id: "FinanceID",
      name: "Finance",
      description: "Finance Description",
      createdAt: "2024-05-05T10:15:00Z",
      updatedAt: "2024-05-05T10:15:00Z",
    },
    {
      id: "HealthID",
      name: "Health",
      description: "Health Description",
      createdAt: "2024-05-05T10:15:00Z",
      updatedAt: "2024-05-05T10:15:00Z",
    },
    {
      id: "ImportantID",
      name: "Important",
      description: "Important Description",
      createdAt: "2024-05-05T10:15:00Z",
      updatedAt: "2024-05-05T10:15:00Z",
    },
    {
      id: "WorkID",
      name: "Work",
      description: "Work Description",
      createdAt: "2024-05-05T10:15:00Z",
      updatedAt: "2024-05-05T10:15:00Z",
    },
    {
      id: "PersonalID",
      name: "Personal",
      description: "Personal Description",
      createdAt: "2024-05-05T10:15:00Z",
      updatedAt: "2024-05-05T10:15:00Z",
    },
    {
      id: "MeetingID",
      name: "Meeting",
      description: "Meeting Description",
      createdAt: "2024-05-05T10:15:00Z",
      updatedAt: "2024-05-05T10:15:00Z",
    },
    {
      id: "TodoID",
      name: "Todo",
      description: "Todo Description",
      createdAt: "2024-05-05T10:15:00Z",
      updatedAt: "2024-05-05T10:15:00Z",
    },
  ];
  try {
    // const { data } = await notesApi("/categories");
    return NextResponse.json(fallbackCategories);
    // return fallbackCategories;
  } catch (error) {
    // У випадку помилки — повертаємо обʼєкт з помилкою
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
