import "@/styles/globals.css"
import { ThemeProvider } from "styled-components"
import { theme } from "../styles/theme"
import { GlobalStyle } from "../styles/GlobalStyle"

if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  const originalLog = console.log
  const originalWarn = console.warn

  console.log = (...args) => {
    if (args[0]?.includes?.("[HMR]") || args[0]?.includes?.("Fast Refresh"))
      return
    originalLog(...args)
  }

  console.warn = (...args) => {
    if (args[0]?.includes?.("Fast Refresh")) return
    originalWarn(...args)
  }
}

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
