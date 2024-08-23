import { NextUIProvider as Provider } from "@nextui-org/react"
import { ThemeProvider } from 'next-themes'
import { ReactNode } from "react"

export const NextUiProvider = ({children}: { children: ReactNode})  => {
  return <Provider>
    <ThemeProvider attribute="class" defaultTheme="light" themes={['light', 'dark']}>
      {children}
    </ThemeProvider>
  </Provider>
}