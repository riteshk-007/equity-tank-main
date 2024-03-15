import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Equity Tank",
  description: "A platform for equity research and analysis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/sm-logo.png" sizes="any" />
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
