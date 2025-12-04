import { cookies } from "next/headers";
import { Category, getNotesParams, NoteListResponse } from "@/types/notes";
import axios from "axios";

export const possibleCategories: Category[] = [
  {
    id: "ShoppingID",
    name: "Shopping",
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

const apiURL = process.env.NEXT_API_URL;
export const notesApi = axios.create({
  baseURL: apiURL,
  timeout: 1000,
  withCredentials: true,
});

export const checkServerSession = async () => {
  // Дістаємо поточні cookie
  const cookieStore = await cookies();
  const res = await notesApi.get("/auth/session", {
    headers: {
      // передаємо кукі далі
      Cookie: cookieStore.toString(),
    },
  });
  // Повертаємо повний респонс, щоб middleware мав доступ до нових cookie
  return res;
};

export const getNotes = async (quaryParams: getNotesParams = {}) => {
  const { page, perPage, tag, search, sortBy } = quaryParams;
  const tagName = possibleCategories.find((cat) => cat.id === tag)?.name || "";
  const searchParams: getNotesParams = {};
  if (page) searchParams.page = page;
  if (perPage) searchParams.perPage = perPage;
  if (tag) searchParams.tag = tagName;
  if (search) searchParams.search = search;
  if (sortBy) searchParams.sortBy = sortBy;

  const cookieStore = await cookies();
  const response = await notesApi.get<NoteListResponse>("/notes", {
    params: searchParams,
    headers: { Cookie: cookieStore.toString() },
  });
  console.log("allNotes:", response.data);
  return response.data;
};
