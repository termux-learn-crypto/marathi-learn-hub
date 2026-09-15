import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Tools — मराठी Coding Tools | Marathi Learn Hub" },
  description:
    "मराठी शिकणाऱ्यांसाठी उपयुक्त coding tools — HTML, CSS, Python आणि practices scripts. Free developer tools for Marathi learners.",
  openGraph: {
    title: "Tools — मराठी Coding Tools",
    description: "HTML, CSS, Python उपयुक्त tools मराठी शिकणाऱ्यांसाठी. Free developer tools.",
    url: "/tools",
    type: "website",
    siteName: "Marathi Learn Hub",
    locale: "mr_IN",
    images: ["/icons/icon-512.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tools — मराठी Coding Tools",
    description: "HTML, CSS, Python उपयुक्त tools मराठी शिकणाऱ्यांसाठी.",
    images: ["/icons/icon-512.png"],
  },
  alternates: { canonical: "/tools" },
};

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}