import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "सर्व Tutorials — Free Marathi Lessons | Marathi Learn Hub" },
  description:
    "सर्व मराठी tutorials एकाच ठिकाणी — HTML, CSS, JavaScript, Python, Android, Electronics, IoT. All free coding lessons in Marathi.",
  openGraph: {
    title: "सर्व Tutorials — Free Marathi Lessons",
    description: "HTML, CSS, JavaScript, Python, Android, Electronics tutorials मराठीत. Free lessons in Marathi.",
    url: "/tutorials",
    type: "website",
    siteName: "Marathi Learn Hub",
    locale: "mr_IN",
    images: ["/icons/icon-512.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "सर्व Tutorials — Free Marathi Lessons",
    description: "HTML, CSS, JavaScript, Python, Android tutorials मराठीत. Free lessons in Marathi.",
    images: ["/icons/icon-512.png"],
  },
  alternates: { canonical: "/tutorials" },
};

export default function TutorialsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}