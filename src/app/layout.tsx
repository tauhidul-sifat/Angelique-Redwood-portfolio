import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SideMenu from "@/components/Side-menu";
import { Toaster } from "@/components/ui/toaster";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "auto",
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Angelique Redwood | Freelance Writer & Author",
  description:
    "Discover the captivating world of words crafted by Angelique Redwood. Explore her portfolio of compelling stories, insightful articles, and engaging books",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex relative flex-col min-h-[calc(100vh-120px)] max-h-[calc(100vh-120px)] px-2 antialiased ${dmSans.className}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>
            <Navbar />
            <div className="container mx-auto flex flex-grow gap-10">
              <SideMenu />
              {children}
            </div>
            <Footer />
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
