import { ApiError } from "@/types/notes";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { parse } from "cookie";
import { notesApi } from "@/lib/api/serverApi";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;
    const refreshToken = cookieStore.get("refreshToken")?.value;

    if (accessToken) return NextResponse.json({ success: true });

    if (refreshToken) {
      const apiRes = await notesApi.get("/auth/session", {
        headers: { Cookie: cookieStore.toString() },
      });
      const setCookie = apiRes.headers["set-cookie"];
      // Додаємо перевірку існування setCookie
      if (setCookie) {
        // Примусово робимо масив
        const cookieArray = Array.isArray(setCookie) ? setCookie : [setCookie];
        // Проходимось по масиву та парсимо кожне значення
        // щоб отримати результат у вигляді обʼєкту
        for (const cookieStr of cookieArray) {
          const parsed = parse(cookieStr);

          // Створюємо налаштування для cookies
          const options = {
            expires: parsed.Expires ? new Date(parsed.Expires) : undefined,
            path: parsed.Path,
            maxAge: Number(parsed["Max-Age"]),
            httpOnly: true,
            secure: true,
          };

          // cookieStore.set('імʼя ключа',  'значення токену',  додаткові налаштування)
          if (parsed.accessToken) {
            cookieStore.set("accessToken", parsed.accessToken, options);
          }
          if (parsed.refreshToken) {
            cookieStore.set("refreshToken", parsed.refreshToken, options);
          }
        }

        // Тільки якщо є setCookie повертаємо результат
        return NextResponse.json({ success: true });
      }
    }
    return NextResponse.json({ success: false }); //tokens expaired
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
