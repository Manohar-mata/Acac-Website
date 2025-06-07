import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import ChatBot from "@/components/chat-bot"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "American Cricket Academy & Club - St. Louis",
  description:
    "A Non-Profit Organization dedicated to promoting cricket in St. Louis. Cricket is our passion. Our goal is your dream.",
  keywords: "cricket, academy, St. Louis, sports, training, coaching, tournaments",
  openGraph: {
    title: "American Cricket Academy & Club - St. Louis",
    description: "A Non-Profit Organization dedicated to promoting cricket in St. Louis",
    url: "https://americancricketacademy.org",
    siteName: "American Cricket Academy",
    images: [
      {
        url: "/images/acac-logo.png",
        width: 400,
        height: 400,
        alt: "American Cricket Academy Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "American Cricket Academy & Club - St. Louis",
    description: "A Non-Profit Organization dedicated to promoting cricket in St. Louis",
    images: ["/images/acac-logo.png"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <ChatBot />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
