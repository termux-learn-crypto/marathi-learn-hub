import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "शिका मराठीत — Learn in Marathi | Marathi Learn Hub" },
  description:
    "मराठीमध्ये HTML, CSS, JavaScript, Python, Android आणि Electronics शिका. Learn coding and technology in Marathi — free tutorials for beginners.",
  openGraph: {
    title: "शिका मराठीत — Learn in Marathi",
    description: "मराठीमध्ये HTML, CSS, JavaScript, Python, Android आणि Electronics शिका. Free tutorials in Marathi.",
    url: "/learn",
    type: "website",
    siteName: "Marathi Learn Hub",
    locale: "mr_IN",
    images: ["/icons/icon-512.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "शिका मराठीत — Learn in Marathi",
    description: "मराठीमध्ये HTML, CSS, JavaScript, Python शिका. Free tutorials in Marathi.",
    images: ["/icons/icon-512.png"],
  },
  alternates: { canonical: "/learn" },
};

export default function LearnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}