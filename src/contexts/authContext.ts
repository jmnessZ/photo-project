import { createContext } from "react";

// 定义用户类型
export interface User {
  id: string;
  username: string;
  phone: string;
  role: 'admin' | 'user';
  userType?: 'student' | 'teacher'; // 新增用户类型字段
  createdAt: string;
}

// 定义认证上下文类型
export interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  setIsAuthenticated: (value: boolean) => void;
  setUser: (user: User | null) => void;
  login: (phone: string, password: string) => Promise<boolean>;
  register: (phone: string, username: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAdmin: () => boolean;
}

// 默认管理员账号
const DEFAULT_ADMIN: User = {
  id: 'admin-001',
  username: '管理员',
  phone: '13800138000',
  role: 'admin',
  createdAt: new Date().toISOString(),
};

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  setIsAuthenticated: () => {},
  setUser: () => {},
  login: async () => false,
  register: async () => false,
  logout: () => {},
  isAdmin: () => false,
});