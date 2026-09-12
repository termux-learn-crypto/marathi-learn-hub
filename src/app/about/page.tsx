"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-extrabold marathi mb-6 text-center">आमच्याबद्दल</h1>

        <div className="space-y-8">
          <section className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-xl font-semibold marathi mb-3">🎯 आमचे ध्येय</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed marathi">
              Marathi Learn Hub चे उद्दिष्ट सोपे आणि स्पष्ट आहे - मराठी भाषेत मोफत, सोपी आणि उपयुक्त शैक्षणिक माहिती देणे. आमचा विश्वास आहे की भाषा कोणत्याही ज्ञानात अडथळा नसावी.
            </p>
          </section>

          <section className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-xl font-semibold marathi mb-3">💎 आमची तत्त्वे</h2>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300 marathi">
              <li>🔓 <strong>100% मोफत</strong> - कोणतेही paid courses, payment नाही.</li>
              <li>📖 <strong>शिका → वाचा → करा</strong> - Theory नाही, प्रॅक्टिसल ज्ञान.</li>
              <li>🌐 <strong>Marathi + English</strong> - सोपी मराठी explanation + technical terms.</li>
              <li>🧩 <strong>Interactive</strong> - Code editor, quiz आणि projects.</li>
              <li>📱 <strong>सर्वत्र उपलब्ध</strong> - Mobile-first design, login शिवाय.</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-xl font-semibold marathi mb-3">🚫 आम्ही काय देत नाही</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed marathi">
              हे एक course selling platform नाही. इथे तुम्हाला certificate साठी पैसे द्यावे लागत नाहीत, कोणतेही subscriptions नाहीत, आणि कोणतीही जाहिरातींनी भरलेलं अस्पष्टता नाही. फक्त स्वच्छ, सोपे आणि उपयुक्त ज्ञान.
            </p>
          </section>

          <section className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-xl font-semibold marathi mb-3">👥 आमच्यासाठी</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed marathi">
              ही website विद्यार्थ्यांसाठी, नवीन शिकणाऱ्यांसाठी, ऑफिस कामासाठी computer किंवा coding शिकणाऱ्यांसाठी आणि सर्वसामान्यांसाठी आहे. जर तुम्हाला मराठीतून तंत्रज्ञान शिकायचे असेल तर एवढे पुरे.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
