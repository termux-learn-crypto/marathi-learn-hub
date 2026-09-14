import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Marathi Learn Hub",
  description: "Marathi Learn Hub ची Privacy Policy - आम्ही कोणती माहिती गोळा करतो, कशी वापरतो आणि तुमची माहिती कशी सुरक्षित ठेवतो.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-extrabold marathi mb-2 text-center">Privacy Policy</h1>
        <p className="text-center text-sm text-gray-500 mb-8">शेवटचे अपडेट: सप्टेंबर 2026</p>

        <div className="space-y-8">
          <section className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-xl font-semibold marathi mb-3">1. परिचय</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed marathi">
              Marathi Learn Hub ({"marathi-learn-hub.vercel.app"}) ही एक मोफत शैक्षणिक वेबसाइट आहे. ही प्रायव्हसी पॉलिसी वेबसाइट वापरताना कोणती माहिती गोळा होते आणि ती कशी वापरली जाते याची स्पष्ट माहिती देते.
            </p>
          </section>

          <section className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-xl font-semibold marathi mb-3">2. आम्ही कोणती माहिती गोळा करतो</h2>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300 marathi">
              <li>🔐 <strong>लॉगिन आवश्यक नाही</strong> - ही वेबसाइट वापरण्यासाठी अकाउंट, email किंवा नाव द्यावे लागत नाही.</li>
              <li>💾 <strong>लोकल डेटा</strong> - तुमची प्रगती, bookmarks आणि dark mode पसंती फक्त तुमच्या ब्राउझरच्या localStorage मध्ये साठवली जातात. ही माहिती आमच्या server वर पोचत नाही.</li>
              <li>🌐 <strong>सामान्य logs</strong> - सर्व्हर प्रदाता (Vercel) मानक server logs मध्ये IP address, browser type आणि visited pages साठवू शकतो.</li>
              <li>📊 <strong>अॅड्स/ॲनॅलिटिक्स</strong> - भविष्यात Google AdSense किंवा analytics जोडल्यास Google तुमच्या डिव्हाइसबद्दल मर्यादित माहिती (browser, approximate location, viewed pages) गोळा करू शकते.</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-xl font-semibold marathi mb-3">3. Cookies</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed marathi">
              आमच्या वेबसाइटमध्ये सध्या तृतीय-पक्ष tracking cookies नाहीत. फक्त ब्राउझरची localStorage यंत्रणा वापरली जाते. जर Google AdSense उपलब्ध झाले, तर Google/DoubleClick त्यांची जाहिरात cookies वापरू शकतात; त्या तुमच्या ब्राउझरमधूनच control केल्या जाऊ शकतात.
            </p>
          </section>

          <section className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-xl font-semibold marathi mb-3">4. Google AdSense</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed marathi">
              ही वेबसाइट मोफत शिक्षण देण्यासाठी Google AdSense वापरू शकते. AdSense जाहिराती personalized दाखवण्यासाठी Google तुमच्या interest नुसार (browser cookies वर आधारित) जाहिराती दाखवू शकते. तुम्ही जाहिरात यंत्रणेचे व्यवस्थापन <a className="underline text-primary-600" href="https://adssettings.google.com">Google Ads Settings</a> मध्ये करू शकता किंवा <a className="underline text-primary-600" href="https://www.aboutads.info">aboutads.info</a> वर opt-out करू शकता.
            </p>
          </section>

          <section className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-xl font-semibold marathi mb-3">5. माहिती शेअरिंग</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed marathi">
              आम्ही तुमची वैयक्तिक माहिती कोणालाही विकत नाही किंवा भाड्याने देत नाही. माहिती फक्त कायदेशीर गरज किंवा वरील तृतीय-पक्ष सेवा (जसे hosting, advertising) पुरवण्यासाठी शेअर केली जाऊ शकते.
            </p>
          </section>

          <section className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-xl font-semibold marathi mb-3">6. मुलांची माहिती</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed marathi">
              ही वेबसाइट 13 वर्षांखालील मुलांकडून जाणूनबुजून कोणतीही वैयक्तिक माहिती गोळा करत नाही.
            </p>
          </section>

          <section className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-xl font-semibold marathi mb-3">7. पॉलिसीतील बदल</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed marathi">
              ही पॉलिसी वेळोवेळी अपडेट केली जाऊ शकते. मोठे बदल झाल्यास याच पानावर तारीख बदलली जाईल.
            </p>
          </section>

          <section className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-xl font-semibold marathi mb-3">8. संपर्क</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed marathi">
              काही प्रश्न असल्यास <Link className="underline text-primary-600" href="/contact">संपर्क पान</Link> वरून आमच्याशी संपर्क करा.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}