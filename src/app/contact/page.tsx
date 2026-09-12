"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    // In production this would send an email or save to backend
  };

  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-extrabold marathi mb-6 text-center">📩 संपर्क करा</h1>
        <p className="text-center text-gray-500 mb-8 marathi">
          तुमच्या सूचना, प्रश्न किंवा feedback आम्हाला पाठवा.
        </p>

        {sent ? (
          <div className="p-8 rounded-2xl bg-green-50 dark:bg-green-900/30 text-center">
            <div className="text-5xl mb-4">✅</div>
            <h2 className="text-xl font-semibold mb-2">धन्यवाद!</h2>
            <p className="text-gray-600 dark:text-gray-300 marathi">
              तुमचा message आम्हाला मिळाला. लवकरच तुम्हाला उत्तर देऊ.
            </p>
            <button
              onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); }}
              className="mt-4 px-4 py-2 text-sm rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              नवीन message लिहा
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1 marathi">तुमचे नाव</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="तुमचे नाव"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">ईमेल</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 marathi">तुमचा Message</label>
              <textarea
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 outline-none min-h-[150px] focus:ring-2 focus:ring-primary-500 marathi"
                placeholder="तुमचा message..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg marathi"
            >
              📨 Send Message
            </button>
          </form>
        )}
      </main>
      <Footer />
    </>
  );
}
