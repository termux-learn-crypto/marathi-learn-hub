import type { Metadata } from "next";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { buildMetadata } from "@/lib/seo/seo";

export const metadata: Metadata = buildMetadata({
  title: "गोपनीयता धोरण — Marathi Learn Hub",
  description: "Marathi Learn Hub चे गोपनीयता धोरण — आम्ही कोणती माहिती गोळा करतो आणि का.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-extrabold marathi mb-6">🔒 गोपनीयता धोरण</h1>
        <div className="prose prose-gray dark:prose-invert space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            <strong>Marathi Learn Hub</strong> अभ्यासक्रम पूर्णपणे वाचण्यासाठी कोणतीही लॉगिन
            किंवा वैयक्तिक माहिती आवश्यक नाही. आम्ही किमान पद्धतीने data संग्रह ठेवतो.
          </p>
          <h2 className="text-xl font-semibold marathi">आम्ही काय संग्रह करतो</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>तुमच्या ब्राउझरमध्ये (localStorage) — तुमची dark mode निवड आणि शिकण्याची प्रगती. ही माहिती तुमच्या device वरच राहते.</li>
            <li>Google AdSense सेवा — जाहिराती दाखवण्यासाठी अतिरिक्त cookies वापरू शकते.</li>
            <li>साधी, anonymous usage metrics (पेज व्ह्यू) — कोणत्याही वैयक्तिक ओळखीशिवाय.</li>
          </ul>
          <h2 className="text-xl font-semibold marathi">आम्ही काय करत नाही</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>तुमची personal माहिती (नाव, ईमेल, फोन) तुम्ही ಒद्यत न दिल्याशिवाय विचारत नाही.</li>
            <li>तुमचा data तृतीय पक्षांना विकत नाही.</li>
          </ul>
          <h2 className="text-xl font-semibold marathi">बाह्य दुवे</h2>
          <p>
            या site वरील काही लिंक्स बाह्य संकेतस्थळांवर जातात (उदा. अधिकृत दस्तऐवज).
            त्यांच्या गोपनीयता धोरणांसाठी कृपया त्या site ला भेट द्या.
          </p>
          <p>प्रश्न असल्यास <a className="text-primary-600 underline" href="/contact">Contact पेज</a> वरून विचारा.</p>
          <p className="text-sm text-gray-500">शेवटचे अपडेट: 2026</p>
        </div>
      </main>
      <Footer />
    </>
  );
}