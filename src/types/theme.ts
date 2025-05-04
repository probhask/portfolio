export enum Theme {
  Light = "light",
  Dark = "dark",
}

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}
