import "./globals.css";
import type { Metadata, Viewport } from "next";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Marathi Learn Hub - मोफत मराठी शिक्षा",
  description: "मोफत शिका • प्रयोग करा • वाढा. Marathi Learn Hub is a free learning platform with tutorials, quizzes, projects and interactive coding in Marathi.",
  manifest: "/manifest.json",
  metadataBase: new URL(siteUrl()),
  verification: {
    google: "vpLqYEpBQV9Gi3okCKfZzBfII8sLsCSRLPaxTN3ac8o",
  },
  icons: {
    icon: [
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/icons/icon-192.png",
  },
  openGraph: {
    title: "Marathi Learn Hub - मोफत मराठी शिक्षा",
    description: "मोफत शिका • प्रयोग करा • वाढा.",
    siteName: "Marathi Learn Hub",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="mr" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("mlh_dark_mode");if(t!==null){var d=t==="true"}else{d=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches}if(d){document.documentElement.classList.add("dark")}}catch(e){}})();`,
          }}
        />
        <script
          async
          id="adsense-script"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8509787083957252"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  name: "Marathi Learn Hub",
                  alternateName: "MLH",
                  url: new URL("/", siteUrl()).toString(),
                  description: "मोफत मराठी शिक्षा — tutorials, quiz, projects, interactive coding.",
                  inLanguage: "mr",
                },
                {
                  "@type": "Organization",
                  name: "Marathi Learn Hub",
                  url: new URL("/", siteUrl()).toString(),
                  logo: new URL("/icons/icon-512.png", siteUrl()).toString(),
                },
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}

