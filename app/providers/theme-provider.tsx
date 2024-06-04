"use client"

// DONE REVIEWING: GITHUB COMMIT

import {ThemeProvider as NextThemeProvider} from "next-themes"
import {type ThemeProviderProps} from "next-themes/dist/types"

const ThemeProvider = function ThemeProvider({children, ...props}: ThemeProviderProps) {
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>
}

export default ThemeProvider
