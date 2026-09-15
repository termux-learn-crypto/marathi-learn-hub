import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "संपर्क — Contact Us | Marathi Learn Hub" },
  description:
    "आमच्याशी संपर्क साधा — suggestions, questions किंवा feedback साठी. Contact Marathi Learn Hub for feedback, suggestions and questions in Marathi.",
  openGraph: {
    title: "संपर्क — Contact Us",
    description: "आमच्याशी संपर्क साधा — suggestions, questions किंवा feedback साठी.",
    url: "/contact",
    type: "website",
    siteName: "Marathi Learn Hub",
    locale: "mr_IN",
    images: ["/icons/icon-512.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "संपर्क — Contact Us",
    description: "आमच्याशी संपर्क साधा — suggestions, questions किंवा feedback साठी.",
    images: ["/icons/icon-512.png"],
  },
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}