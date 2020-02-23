import { createContext, Context } from 'react';

export const LayoutContext: Context<{
  layout: string;
  setLayout: React.Dispatch<React.SetStateAction<string>>;
} | null> = createContext<{
  layout: string;
  setLayout: React.Dispatch<React.SetStateAction<string>>;
} | null>(null);
