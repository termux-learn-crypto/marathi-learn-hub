import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Projects — मराठीत प्रोजेक्ट्स | Marathi Learn Hub" },
  description:
    "मराठीत step-by-step coding projects — Python, HTML, CSS, JavaScript, electronics आणि IoT. Build real projects and learn in Marathi.",
  openGraph: {
    title: "Projects — मराठीत प्रोजेक्ट्स",
    description: "Python, HTML, CSS, JavaScript, IoT projects मराठीत step-by-step. Learn by building in Marathi.",
    url: "/projects",
    type: "website",
    siteName: "Marathi Learn Hub",
    locale: "mr_IN",
    images: ["/icons/icon-512.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects — मराठीत प्रोजेक्ट्स",
    description: "Python, HTML, CSS, JavaScript, IoT projects मराठीत step-by-step.",
    images: ["/icons/icon-512.png"],
  },
  alternates: { canonical: "/projects" },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}