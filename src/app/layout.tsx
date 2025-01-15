import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SideMenu from "@/components/Side-menu";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "This is a Title",
  description: "this is a Description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex relative flex-col min-h-[calc(100vh-120px)] max-h-[calc(100vh-120px)] px-2 antialiased`}
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
