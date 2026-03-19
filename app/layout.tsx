import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StaticFooter from "./components/StaticFooter";
import FloatingDock from "./components/FloatingDock";
import NavigationTracker from "./components/NavigationTracker";
import { ThemeProvider } from "./components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vikramaditya Mishra | AI Engineer",
  description: "Portfolio of Vikramaditya Mishra - Building RAG Systems & Agentic Workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (() => {
                try {
                  const stored = localStorage.getItem('portfolio-theme');
                  const theme = stored === 'light' || stored === 'dark'
                    ? stored
                    : 'light';
                  document.documentElement.dataset.theme = theme;
                  document.documentElement.style.colorScheme = theme;
                } catch (error) {
                  document.documentElement.dataset.theme = 'light';
                  document.documentElement.style.colorScheme = 'light';
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <NavigationTracker />
          {children}
          <FloatingDock />
          <StaticFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
