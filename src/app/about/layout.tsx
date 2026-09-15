import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "आमच्याबद्दल — About Us | Marathi Learn Hub" },
  description:
    "Marathi Learn Hub बद्दल जाणून घ्या — मोफत मराठी शिक्षा platform. Learn about Marathi Learn Hub, a free Marathi learning platform for coding and technology.",
  openGraph: {
    title: "आमच्याबद्दल — About Us",
    description: "Marathi Learn Hub बद्दल जाणून घ्या — मोफत मराठी शिक्षा platform.",
    url: "/about",
    type: "website",
    siteName: "Marathi Learn Hub",
    locale: "mr_IN",
    images: ["/icons/icon-512.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "आमच्याबद्दल — About Us",
    description: "Marathi Learn Hub बद्दल जाणून घ्या — मोफत मराठी शिक्षा platform.",
    images: ["/icons/icon-512.png"],
  },
  alternates: { canonical: "/about" },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}