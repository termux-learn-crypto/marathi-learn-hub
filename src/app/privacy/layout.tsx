import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy — गोपनीयता धोरण | Marathi Learn Hub" },
  description:
    "Marathi Learn Hub गोपनीयता धोरण — data, cookies आणि AdSense विषयी माहिती. Privacy policy of Marathi Learn Hub — how we handle data, cookies and advertising.",
  openGraph: {
    title: "Privacy Policy — गोपनीयता धोरण",
    description: "Marathi Learn Hub गोपनीयता धोरण — data, cookies आणि AdSense विषयी माहिती.",
    url: "/privacy",
    type: "website",
    siteName: "Marathi Learn Hub",
    locale: "mr_IN",
    images: ["/icons/icon-512.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy — गोपनीयता धोरण",
    description: "Marathi Learn Hub गोपनीयता धोरण — data, cookies आणि AdSense.",
    images: ["/icons/icon-512.png"],
  },
  alternates: { canonical: "/privacy" },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}