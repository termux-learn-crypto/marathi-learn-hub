import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "माझी प्रगती — My Progress | Marathi Learn Hub" },
  description:
    "तुमची शिकण्याची प्रगती track करा — completed tutorials, bookmarks आणि quiz scores. Track your Marathi learning progress, bookmarks and quiz scores.",
  openGraph: {
    title: "माझी प्रगती — My Progress",
    description: "Completed tutorials, bookmarks आणि quiz scores track करा. Track your learning progress in Marathi.",
    url: "/notes",
    type: "website",
    siteName: "Marathi Learn Hub",
    locale: "mr_IN",
    images: ["/icons/icon-512.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "माझी प्रगती — My Progress",
    description: "तुमची शिकण्याची प्रगती track करा — tutorials, bookmarks आणि quiz scores.",
    images: ["/icons/icon-512.png"],
  },
  alternates: { canonical: "/notes" },
};

export default function NotesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}