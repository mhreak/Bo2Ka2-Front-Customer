"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";
import { User } from "@/types/api/auth";

interface LoginDto {
  username: string;
  password: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;

  login: (data: LoginDto) => Promise<void>;
  logout: () => void;

  setUser: (user: User | null) => void;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface Props {
  children: ReactNode;
}

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("user");

    if (stored) {
      setUser(JSON.parse(stored));
    }

    setIsLoading(false);
  }, []);

  async function login(data: LoginDto) {
    /**
     * این قسمت را با API خودت جایگزین کن
     */

    const response = {
      id: 1,
      fullName: "Nima",
      username: data.username,
      email: "test@test.com",
      roles: ["Admin"],
      token: "JWT_TOKEN",
    };

    localStorage.setItem("user", JSON.stringify(response));

    setUser(response);
  }

  function logout() {
    localStorage.removeItem("user");
    setUser(null);
  }

  async function refreshUser() {
    /**
     * اگر API داری:
     * GET /me
     */

    const stored = localStorage.getItem("user");

    if (!stored) {
      setUser(null);
      return;
    }

    setUser(JSON.parse(stored));
  }

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: !!user,
      isLoading,
      login,
      logout,
      setUser,
      refreshUser,
    }),
    [user, isLoading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) throw new Error("useAuth must be used inside AuthProvider");

  return context;
}
