import "./globals.css";
import type { Metadata, Viewport } from "next";
import { siteUrl } from "@/lib/site";

const defaultTitle = "Marathi Learn Hub — मोफत मराठी शिक्षा";
const defaultDesc = "मराठीमध्ये कोडिंग, वेब, Python आणि तंत्रज्ञान शिका. Free tutorials, quizzes and interactive projects — Learn programming and tech in Marathi.";

export const metadata: Metadata = {
  title: defaultTitle,
  description: defaultDesc,
  keywords: [
    "learn coding in marathi", "मराठीत कोडिंग शिका",
    "python marathi tutorial", "html css javascript marathi",
    "free marathi tutorials", "मराठी ट्यूटोरियल",
    "learn python in marathi", "मराठीत पायथॉन शिका",
    "web development marathi", "मराठी वेब डेव्हलपमेंट",
    "electronics marathi", "iot marathi",
  ],
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
    title: defaultTitle,
    description: defaultDesc,
    siteName: "Marathi Learn Hub",
    type: "website",
    locale: "mr_IN",
    images: ["/icons/icon-512.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDesc,
    images: ["/icons/icon-512.png"],
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

