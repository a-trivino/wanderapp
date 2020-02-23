import { createContext, Context } from 'react';

export const ThemeContext: Context<{
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
} | null> = createContext<{
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
} | null>(null);
