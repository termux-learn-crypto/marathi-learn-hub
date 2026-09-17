import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { telegramUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "संपर्क करा | Marathi Learn Hub",
  description: "Marathi Learn Hub च्या साठी Telegram group आणि GitHub Issues द्वारे संपर्क करा.",
};

const GITHUB_REPO = "https://github.com/termux-learn-crypto/marathi-learn-hub";
const GITHUB_ISSUES = `${GITHUB_REPO}/issues/new`;

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-extrabold marathi mb-6 text-center">📩 संपर्क करा</h1>
        <p className="text-center text-gray-500 mb-10 marathi">
          तुमच्या सूचना, प्रश्न किंवा feedback — आम्ही इथे सक्रिय आहोत:
        </p>

        <div className="space-y-5">
          <a
            href={telegramUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 rounded-2xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
          >
            <span className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center text-2xl shrink-0">
              ✈️
            </span>
            <div>
              <h2 className="text-lg font-semibold marathi">Telegram Community</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 marathi mt-1">
                doubts विचारा, community मध्ये चर्चा करा. सर्वात जलद उत्तर येथे मिळेल.
              </p>
            </div>
          </a>

          <a
            href={GITHUB_ISSUES}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <span className="w-12 h-12 rounded-xl bg-gray-800 dark:bg-gray-600 text-white flex items-center justify-center text-2xl shrink-0">
              🐙
            </span>
            <div>
              <h2 className="text-lg font-semibold marathi">GitHub Issue</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 marathi mt-1">
                bug आढळला, नवीन topic सुचवायचं असेल किंवा सुधारणा हवी असेल — Issue खोला.
              </p>
            </div>
          </a>

          <div className="flex items-center gap-4 p-6 rounded-2xl border border-gray-200 dark:border-gray-700">
            <span className="w-12 h-12 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center text-2xl shrink-0">
              📧
            </span>
            <div>
              <h2 className="text-lg font-semibold marathi">ईमेल</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 marathi mt-1">
                सविस्तर प्रतिसादासाठी:{" "}
                <a href="mailto:contact@marathi-learn-hub.example" className="text-primary-600 underline">
                  contact@marathi-learn-hub.example
                </a>
              </p>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-10">
          Project open-source आहे —{" "}
          <a href={GITHUB_REPO} target="_blank" rel="noopener noreferrer" className="underline">
            GitHub
          </a>{" "}
          वर स्रोत कोड पहा.
        </p>
      </main>
      <Footer />
    </>
  );
}