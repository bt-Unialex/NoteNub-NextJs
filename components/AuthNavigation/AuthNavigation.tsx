"use client";

import { logout } from "@/lib/api";
import { useAuthStore } from "@/lib/stores/authStore";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthNavigation = () => {
  const router = useRouter();
  // Отримуємо поточну сесію та юзера
  const { isAuthenticated, user } = useAuthStore();
  const clearIsAuthenticated = useAuthStore(
    (store) => store.clearIsAuthenticated
  );

  const handleLogout = async () => {
    await logout();
    clearIsAuthenticated();
    router.push("/sign-in");
  };

  return isAuthenticated ? (
    <li>
      <p>{user?.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </li>
  ) : (
    <>
      <li>
        <Link href="/sign-in">Login</Link>
      </li>
      <li>
        <Link href="/sign-up">Sign up</Link>
      </li>
    </>
  );
};

export default AuthNavigation;
