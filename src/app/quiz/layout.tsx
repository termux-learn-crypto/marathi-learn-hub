import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Quiz — मराठीत Quiz द्या | Marathi Learn Hub" },
  description:
    "मराठी coding quiz द्वारे तुमची प्रगती तपासा. Python, HTML, CSS, JavaScript quizzes in Marathi — test your skills for free.",
  openGraph: {
    title: "Quiz — मराठीत Quiz द्या",
    description: "Python, HTML, CSS, JavaScript quizzes मराठीत. Test your coding skills in Marathi.",
    url: "/quiz",
    type: "website",
    siteName: "Marathi Learn Hub",
    locale: "mr_IN",
    images: ["/icons/icon-512.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quiz — मराठीत Quiz द्या",
    description: "Python, HTML, CSS, JavaScript quizzes मराठीत.",
    images: ["/icons/icon-512.png"],
  },
  alternates: { canonical: "/quiz" },
};

export default function QuizLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}