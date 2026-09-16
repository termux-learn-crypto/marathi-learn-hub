import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SectionHeader } from "@/components/Cards";
import PathCardGrid from "@/components/PathCardGrid";
import { learningPaths } from "@/data/learningPaths";

export const metadata: Metadata = {
  title: { absolute: "Learning Paths — शिकण्याचे मार्ग | Marathi Learn Hub" },
  description:
    "शून्यापासून प्रोजेक्टपर्यंतची संपूर्ण शिकण्याची journey — Learning Paths सह मराठीत शिका. Beginner ते advanced, step-by-step.",
  keywords: [
    "learning paths marathi", "मराठी शिकण्याचे मार्ग",
    "python learning path", "web development learning path",
    "कोडिंग शिका मराठीत", "programming journey",
    "beginner to project", "मराठी course",
  ],
  openGraph: {
    title: "Learning Paths — शिकण्याचे मार्ग",
    description: "शून्यापासून प्रोजेक्टपर्यंत — संपूर्ण journey मध्ये मराठीतून शिका.",
    url: "/paths",
    type: "website",
    siteName: "Marathi Learn Hub",
    locale: "mr_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Learning Paths — शिकण्याचे मार्ग",
    description: "शून्यापासून प्रोजेक्टपर्यंत मराठीतून शिका.",
    images: ["/icons/icon-512.png"],
  },
  alternates: { canonical: "/paths" },
};

export default function PathsPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <SectionHeader
          title="🧭 Learning Paths"
          subtitle={`${learningPaths.length} संपूर्ण journeys — निवडा आणि सुरुवात करा`}
        />

        <div className="rounded-2xl border border-primary-200 dark:border-primary-800 bg-primary-50 dark:bg-primary-900/20 p-6 mb-8">
          <h2 className="text-lg font-bold marathi mb-2">संपूर्ण journey — एका क्लिकवर</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 marathi leading-relaxed">
            प्रत्येक path मध्ये <strong>सुरुवात → मध्यम → प्रोजेक्ट → पुढे</strong> असे टप्पे आहेत.
            टप्प्यानुसार lessons पूर्ण करा, quiz द्या आणि शेवटी खरं project बनवा. तुमची प्रगती
            browser मध्ये save होते.
          </p>
        </div>

        <PathCardGrid />
      </main>
      <Footer />
    </>
  );
}