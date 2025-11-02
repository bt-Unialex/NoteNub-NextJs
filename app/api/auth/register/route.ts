import { NextRequest, NextResponse } from "next/server";
import { notesApi } from "../../api";
import { parse } from "cookie";
import { cookies } from "next/headers";
import { ApiError } from "@/types/notes";

export async function POST(req: NextRequest) {
  // Парсимо body
  const body = await req.json();
  try {
    // Запит до бекенду
    const apiRes = await notesApi.post("auth/register", {
      email: body.email,
      password: body.password,
    });
    console.log("apiRes:", apiRes);

    // Отримуємо інстанс для роботи з cookies
    const cookieStore = await cookies(); // Отримуємо значення set-cookie з хедерів
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
      return NextResponse.json(apiRes.data);
    }
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  } catch (error) {
    const errMessage = `${(error as ApiError).response?.data?.message}: ${
      (error as ApiError).response?.data?.validation?.body.message || ""
    }`;
    return NextResponse.json(
      { error: errMessage },
      { status: (error as ApiError).status }
    );
  }
}
