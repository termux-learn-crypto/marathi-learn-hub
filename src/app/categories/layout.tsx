import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Categories — मराठी शिक्षण श्रेणी | Marathi Learn Hub" },
  description:
    "सर्व categories एकाच ठिकाणी — Computer, Web Development, Python, Android आणि Electronics. Browse all Marathi learning categories — computer, web, python, android and electronics.",
  openGraph: {
    title: "Categories — मराठी शिक्षण श्रेणी",
    description: "Computer, Web Development, Python, Android आणि Electronics — सर्व मराठी learning categories.",
    url: "/categories",
    type: "website",
    siteName: "Marathi Learn Hub",
    locale: "mr_IN",
    images: ["/icons/icon-512.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Categories — मराठी शिक्षण श्रेणी",
    description: "Computer, Web Development, Python, Android आणि Electronics categories मराठीत.",
    images: ["/icons/icon-512.png"],
  },
  alternates: { canonical: "/categories" },
};

export default function CategoriesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}