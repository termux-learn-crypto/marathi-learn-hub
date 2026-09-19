import type { Metadata } from "next";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { buildMetadata } from "@/lib/seo/seo";

export const metadata: Metadata = buildMetadata({
  title: "वापराच्या अटी — Marathi Learn Hub",
  description: "Marathi Learn Hub वापरण्याच्या अटी आणि नियम.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-extrabold marathi mb-6">📜 वापराच्या अटी</h1>
        <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            <strong>Marathi Learn Hub</strong> शैक्षणिक हेतूने तयार केलेले एक मोफत मराठी
            शिक्षण संकेतस्थळ आहे.
          </p>
          <h2 className="text-xl font-semibold marathi">वापर</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>सर्व अभ्यास साहित्य विनामूल्य आणि login शिवाय उपलब्ध आहे.</li>
            <li>शैक्षणिक वापरासाठी तुम्ही content वाचू, शेअर करू आणि वापरू शकता.</li>
            <li>तांत्रिक साहित्याचे कोणतेही पुनरुत्पादन (commercial) परवानगीशिवाय करू नये.</li>
          </ul>
          <h2 className="text-xl font-semibold marathi">दायित्व अस्वीकार</h2>
          <p>
            शिकवलेले तंत्र आणि कोड उदाहरणे वापरण्यापूर्वी त्यांची तुमच्या स्थानिक परिस्थितीत
            चाचणी करा. संकेतस्थळ वापरामुळे येणाऱ्या कोणत्याही नुकसानीसाठी आम्ही जबाबदार नाही.
          </p>
          <h2 className="text-xl font-semibold marathi">बदल</h2>
          <p>ह्या अटी आम्ही वेळोवेळी अद्ययावत करू शकतो.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}