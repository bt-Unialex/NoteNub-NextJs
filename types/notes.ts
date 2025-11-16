import { AxiosError } from "axios";

export type Note = {
  id: string;
  title: string;
  content: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  tag: string;
};

export type NewNoteData = {
  title: string;
  content: string;
  tag: string;
};
export type NoteListResponse = {
  notes: Note[];
  totalPages: number;
};

export type Category = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type ApiError = AxiosError<{
  error: string;
  message?: string;
  validation?: { body: { message: string } };
}>;

export type RegisterRequest = {
  email: string;
  password: string;
  userName: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type User = {
  id: string;
  email: string;
  userName?: string;
  photoUrl?: string;
  createdAt: Date;
  updatedAt: Date;
};

export type getNotesParams = {
  page?: number;
  perPage?: number;
  sortBy?: "created" | "updated";
  search?: string;
  tag?: string;
};
