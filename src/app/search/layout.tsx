import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Search — मराठीत शोधा | Marathi Learn Hub" },
  description:
    "Marathi Learn Hub मध्ये tutorials, projects आणि topics शोधा. Search Marathi tutorials, projects and coding topics in one place.",
  openGraph: {
    title: "Search — मराठीत शोधा",
    description: "Marathi Learn Hub मध्ये tutorials, projects आणि topics शोधा.",
    url: "/search",
    type: "website",
    siteName: "Marathi Learn Hub",
    locale: "mr_IN",
    images: ["/icons/icon-512.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Search — मराठीत शोधा",
    description: "Tutorials, projects आणि topics मराठीत शोधा.",
    images: ["/icons/icon-512.png"],
  },
  robots: { index: false, follow: true },
  alternates: { canonical: "/search" },
};

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}