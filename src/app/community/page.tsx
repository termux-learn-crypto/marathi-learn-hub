import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { telegramUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Community — समुदाय | Marathi Learn Hub" },
  description:
    "मराठीत शिकणाऱ्यांचा Telegram समुदाय — प्रश्न विचारा, doubts सोडवा आणि progress share करा. Join our Marathi learning community on Telegram.",
  keywords: [
    "marathi learning community", "मराठी शिक्षा समुदाय",
    "telegram group marathi", "मराठी telegram group",
    "coding doubts marathi", "मराठीत कोडिंग शिका group",
    "learn marathi programming community",
  ],
  openGraph: {
    title: "Community — समुदाय",
    description: "मराठीत शिकणाऱ्यांचा Telegram समुदाय — प्रश्न, doubts आणि progress share करा.",
    url: "/community",
    type: "website",
    siteName: "Marathi Learn Hub",
    locale: "mr_IN",
    images: ["/icons/icon-512.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Community — समुदाय",
    description: "मराठीत शिकणाऱ्यांचा Telegram समुदाय — प्रश्न, doubts आणि progress share करा.",
    images: ["/icons/icon-512.png"],
  },
  alternates: { canonical: "/community" },
};

export default function CommunityPage() {
  const link = telegramUrl();
  const features = [
    { icon: "❓", text: "प्रश्न विचारा — कोणताही topic, कोणतीही अडचण" },
    { icon: "💻", text: "तुमच्या code snippets आणि projects share करा" },
    { icon: "📈", text: "तुमची शिकण्याची प्रगती दाखवा आणि प्रेरणा मिळवा" },
    { icon: "💡", text: "Tips, shortcuts आणि ट्रिक्स शिका" },
    { icon: "👥", text: "इतर शिकणाऱ्यांशी गप्पा मारा आणि नेटवर्क बनवा" },
  ];

  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold marathi mb-4 text-center">
        👥 Community — समुदाय
      </h1>
      <p className="text-center text-gray-500 mb-8 marathi">
        मराठीत शिकणाऱ्या विद्यार्थ्यांचा Telegram गट. Join the group and learn together!
      </p>

      <div className="rounded-2xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/30 p-8 text-center mb-10">
        <div className="text-6xl mb-4">📱</div>
        <h2 className="text-2xl font-bold marathi mb-2">Telegram Group मध्ये सामील व्हा</h2>
        <p className="text-gray-600 dark:text-gray-300 marathi mb-6">
          एकटे शिकण्यापेक्षा सोबत शिकणे जास्त सोपे आणि मजेदार आहे. आजच join करा!
        </p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg transition-colors"
        >
          📱 Telegram Group Join करा
        </a>
      </div>

      <div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-gray-800">
        <h2 className="text-xl font-semibold marathi mb-4">Group मध्ये काय करता येईल?</h2>
        <ul className="space-y-3">
          {features.map((f) => (
            <li key={f.text} className="flex items-start gap-3 text-gray-700 dark:text-gray-300 marathi">
              <span className="text-xl">{f.icon}</span>
              <span className="leading-relaxed">{f.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-gray-800 text-sm text-gray-500 dark:text-gray-400 marathi">
        <h3 className="font-semibold text-gray-700 dark:text-gray-200 mb-2">💛 जरा सूचना</h3>
        <p>
          एकमेकांना आदर देऊन बोला. Spam टाळा. प्रश्न विचारताना जितका स्पष्ट असाल तितकं उत्तर झटपट मिळेल — code, screenshot किंवा error message जोडा. ही जागा मोफत आणि सर्वांसाठी खुली आहे.
        </p>
      </div>
      </main>
      <Footer />
    </>
  );
}