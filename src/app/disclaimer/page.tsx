import type { Metadata } from "next";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { buildMetadata } from "@/lib/seo/seo";

export const metadata: Metadata = buildMetadata({
  title: "अस्वीकरण — Marathi Learn Hub",
  description: "Marathi Learn Hub चे अस्वीकरण — माहितीची अचूकता आणि वापराची जबाबदारी.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-extrabold marathi mb-6">⚠️ अस्वीकरण</h1>
        <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            <strong>Marathi Learn Hub</strong> वरील सर्व माहिती, ट्यूटोरियल्स आणि कोड शैक्षणिक
            हेतूने प्रदान करण्यात आले आहेत. आम्ही माहिती अचूक आणि अद्ययावत ठेवण्याचा प्रयत्न करतो,
            पण कोणतीही निर्णायक हमी देत नाही.
          </p>
          <h2 className="text-xl font-semibold marathi">माहितीचा वापर</h2>
          <p>
            दिलेल्या मार्गदर्शनाचे पालन करताना (विशेषतः इलेक्ट्रॉनिक्स, सुरक्षा किंवा कोड
            execution) स्वतःच्या जबाबदारीवर करा. विजेच्या सर्किट्स किंवा सिस्टम ऑपरेशनवर काम
            करताना आवश्यक खबरदारी घ्या. आमच्या site वरील content वापरण्यामुळे होणाऱ्या
            कोणत्याही नुकसानीसाठी आम्ही जबाबदार राहणार नाही.
          </p>
          <h2 className="text-xl font-semibold marathi">अधिकृत साधनांच्या दुव्यांसाठी</h2>
          <p>
            या site वर दिलेले अधिकृत साधनांचे (official resources) दुवे हे अधिकृत मूळ
            स्त्रोतांकडे नेतात. त्यांच्या content आणि availability साठी ते संकेतस्थळच जबाबदार
            आहेत.
          </p>
          <h2 className="text-xl font-semibold marathi">जाहिराती</h2>
          <p>
            साइटवर दिसणाऱ्या जाहिराती तृतीय-पक्ष networks (उदा. Google AdSense) द्वारे
            नियंत्रित होतात; त्यांची सामग्री आमच्या नियंत्रणात नाही.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}