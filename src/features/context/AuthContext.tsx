import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

type AuthContextType = {
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
};

type Props = {
  children?: React.ReactNode;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider: React.FC<Props> = ({ children }) => {
  const [isAuthenticated, setisAuthenticated] = useState(
    localStorage.getItem('token') ? true : false
  );

  const login = useCallback((token: string) => {
    localStorage.setItem('token', token);
    setisAuthenticated(true);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('token');
    setisAuthenticated(false);
  }, []);

  const value = useMemo(
    () => ({
      login,
      logout,
      isAuthenticated,
    }),
    [login, logout, isAuthenticated]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
