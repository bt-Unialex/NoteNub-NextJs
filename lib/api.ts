import axios from "axios";

export type Note = {
  id: string;
  title: string;
  content: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  tag: string;
};

export type NoteListResponse = {
  notes: Note[];
  total: number;
};

export type Category = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

const fallbackNotes: NoteListResponse = {
  notes: [
    {
      id: "clty1kn9u0000hnq9bopx9h8b",
      title: "Grocery list",
      content: "Milk, eggs, bread",
      createdAt: "2024-05-05T10:15:00Z",
      updatedAt: "2024-05-06T12:30:00Z",
      userId: "clty1k1230000hnq9bopx9h8a",
      tag: "Work",
    },
    {
      id: "clty1kn9u0000hnq9bopx9h8c",
      title: "Another list",
      content: "Milk, eggs, bread",
      createdAt: "2024-05-05T10:15:00Z",
      updatedAt: "2024-05-06T12:30:00Z",
      userId: "clty1k1230000hnq9bopx9h8a",
      tag: "Personal",
    },
    {
      id: "clty1kn9u0000hnq9bopx9h8d",
      title: "Third list",
      content: "Milk, eggs, bread",
      createdAt: "2024-05-05T10:15:00Z",
      updatedAt: "2024-05-06T12:30:00Z",
      userId: "clty1k1230000hnq9bopx9h8a",
      tag: "Todo",
    },
  ],
  total: 3,
};

const fallbackCategories: Category[] = [
  //   "Shopping",
  //   "Ideas",
  //   "Travel",
  //   "Finance",
  //   "Health",
  //   "Important",
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

axios.defaults.baseURL = "https://next-docs-api.onrender.com";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getNotes = async (categoryId?: string) => {
  await delay(2000);

  let response: NoteListResponse;
  if (categoryId) {
    const categoryName =
      fallbackCategories.find((cat) => cat.id === categoryId)?.name || "";

    const filteredNotes = fallbackNotes.notes.filter(
      (note) => note.tag === categoryName
    );
    response = {
      notes: filteredNotes,
      total: filteredNotes.length,
    };
  } else {
    response = fallbackNotes;
  }
  return response;

  //   const res = await axios.get<NoteListResponse>("/notes");
  //   return res.data;
};

export const getSingleNote = async (id: string) => {
  const res = fallbackNotes.notes.find((note) => note.id === id);
  return res;
  //   const res = await axios.get<Note>(`/notes/${id}`);
  //   return res.data;
};

export const getCategories = async () => {
  return fallbackCategories;

  //   const res = await axios<Category[]>("/categories");
  //   return res.data;
};
