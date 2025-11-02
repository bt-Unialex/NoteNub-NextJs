import axios from "axios";

const apiURL = process.env.NEXT_API_URL;
// const accessToken = process.env.NEXT_API_ACCESS_TOKEN;
export const notesApi = axios.create({
  baseURL: apiURL,
  timeout: 1000,
  // headers: { Authorization: `Bearer ${accessToken}` },
  // headers: { Cookie: `accessToken=${accessToken}` },
  withCredentials: true,
});
