import type { Metadata } from "next";
import "./globals.css";
import StaticFooter from "./components/StaticFooter";
import FloatingDock from "./components/FloatingDock";
import NavigationTracker from "./components/NavigationTracker";
import { ThemeProvider } from "./components/ThemeProvider";
import { profile } from "./data/site";

export const metadata: Metadata = {
  title: "Vikramaditya Mishra | AI Engineer",
  description: "Portfolio of Vikramaditya Mishra - Building RAG Systems & Agentic Workflows.",
  metadataBase: new URL(profile.siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vikramaditya Mishra | AI Engineer",
    description: "Portfolio of Vikramaditya Mishra - Building RAG Systems & Agentic Workflows.",
    url: profile.siteUrl,
    siteName: "Vikramaditya Mishra Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Vikramaditya Mishra portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vikramaditya Mishra | AI Engineer",
    description: "Portfolio of Vikramaditya Mishra - Building RAG Systems & Agentic Workflows.",
    creator: "@kyunbhaii",
    images: ["/twitter-image"],
  },
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
      <body className="antialiased">
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
