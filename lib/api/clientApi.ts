import {
  Category,
  LoginRequest,
  NewNoteData,
  Note,
  RegisterRequest,
  User,
} from "@/types/notes";
import axios from "axios";

export const nextServer = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
});

// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getSingleNote = async (id: string) => {
  const response = await nextServer.get<Note>(`/notes/${id}`);
  return response.data;

  // const response = fallbackNotes.notes.find((note) => note.id === id);
  // return response as Note;
};

export const getCategories = () => {
  return nextServer.get<Category[]>("/categories").then((res) => res.data);
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

export type UpdateUserRequest = {
  userName?: string;
  photoUrl?: string;
};

export const updateMe = async (payload: UpdateUserRequest) => {
  const res = await nextServer.put<User>("/auth/me", payload);
  return res.data;
};
