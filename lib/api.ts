import {
  Category,
  LoginRequest,
  NewNoteData,
  Note,
  NoteListResponse,
  RegisterRequest,
  User,
} from "@/types/notes";
import axios from "axios";

// const fallbackNotes: NoteListResponse = {
//   notes: [
//     {
//       id: "clty1kn9u0000hnq9bopx9h8b",
//       title: "Grocery list",
//       content: "Milk, eggs, bread",
//       createdAt: "2024-05-05T10:15:00Z",
//       updatedAt: "2024-05-06T12:30:00Z",
//       userId: "clty1k1230000hnq9bopx9h8a",
//       tag: "Work",
//     },
//     {
//       id: "clty1kn9u0000hnq9bopx9h8c",
//       title: "Another list",
//       content: "Milk, eggs, bread",
//       createdAt: "2024-05-05T10:15:00Z",
//       updatedAt: "2024-05-06T12:30:00Z",
//       userId: "clty1k1230000hnq9bopx9h8a",
//       tag: "Personal",
//     },
//     {
//       id: "clty1kn9u0000hnq9bopx9h8d",
//       title: "Third list",
//       content: "Milk, eggs, bread",
//       createdAt: "2024-05-05T10:15:00Z",
//       updatedAt: "2024-05-06T12:30:00Z",
//       userId: "clty1k1230000hnq9bopx9h8a",
//       tag: "Todo",
//     },
//   ],
//   total: 3,
// };

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

const nextServer = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
});

// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getNotes = async (categoryId?: string) => {
  // await delay(2000);

  //-----------TEMP-DATA--------------
  // let response: NoteListResponse;
  // if (categoryId) {
  //   const categoryName =
  //     fallbackCategories.find((cat) => cat.id === categoryId)?.name || "";
  //   const filteredNotes = fallbackNotes.notes.filter(
  //     (note) => note.tag === categoryName
  //   );
  //   response = {
  //     notes: filteredNotes,
  //     total: filteredNotes.length,
  //   };
  // } else {
  //   response = fallbackNotes;
  // }
  // return response;
  //-----------TEMP-DATA--------------

  const { data: allNotes } = await nextServer.get<NoteListResponse>("/notes", {
    params: { categoryId },
  });
  // console.log("allNotes:", allNotes);
  let response: NoteListResponse;
  if (categoryId) {
    const categoryName =
      fallbackCategories.find((cat) => cat.id === categoryId)?.name || "";

    const filteredNotes = allNotes.notes.filter(
      (note) => note.tag === categoryName
    );
    response = {
      notes: filteredNotes,
      total: filteredNotes.length,
    };
  } else {
    response = allNotes;
  }
  return response;
};

export const getSingleNote = async (id: string) => {
  const response = await nextServer.get<Note>(`/notes/${id}`);
  return response.data;

  // const response = fallbackNotes.notes.find((note) => note.id === id);
  // return response as Note;
};

export const getCategories = async () => {
  return fallbackCategories;

  //   const res = await axios<Category[]>("/categories");
  //   return res.data;
};

export const createNote = async (data: NewNoteData) => {
  const result = await nextServer.post<Note>("/notes", data);
  return result.data;
};

//--------------Auth--------------

export const register = async (data: RegisterRequest) => {
  const res = await nextServer.post<User>("/auth/register", data);
  return res.data;
};

export const login = async (data: LoginRequest) => {
  const res = await nextServer.post<User>("/auth/login", data);
  return res.data;
};

type CheckSessionRequest = {
  success: boolean;
};
export const checkSession = async () => {
  const res = await nextServer.get<CheckSessionRequest>("/auth/session");
  return res.data.success;
};

export const getMe = async () => {
  const { data } = await nextServer.get<User>("/auth/me");
  return data;
};

export const logout = async (): Promise<void> => {
  await nextServer.post("/auth/logout");
};
