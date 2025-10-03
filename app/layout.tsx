import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Navbar } from "@/components/navbar";

export default function RootLayout({ children}: {children: React.ReactNode}){
  return(
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="container py-10">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}