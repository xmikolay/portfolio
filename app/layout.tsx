import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import {Inter} from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export default function RootLayout({ children}: {children: React.ReactNode}){
  return(
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="relative mx-auto w-full max-w-5xl px-4 py-10">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

export const metadata = {
  metadataBase: new URL("https://mikosweb.eu"),
  title: "Mikolaj Makoszewski – Full-Stack Developer",
  description:
    "Clean, well-documented web & desktop apps. Strong UI sense, readable code, and clean deployment.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Mikolaj Makoszewski",
    description:
      "Clean, well-documented web & desktop apps. Strong UI sense, readable code, and clean deployment.",
    url: "https://mikosweb.eu",
    siteName: "Mikolaj Makoszewski",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Mikolaj Makoszewski",
    description:
      "Clean, well-documented web & desktop apps. Strong UI sense, readable code, and clean deployment.",
    images: ["/og.jpg"]
  },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" }
};
