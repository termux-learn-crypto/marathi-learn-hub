"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center px-4">
          <div className="text-6xl mb-4">😕</div>
          <h1 className="text-3xl font-bold marathi mb-2">404</h1>
          <p className="text-gray-500 mb-6 marathi">हा पृष्ठ सापडले नाही</p>
          <Link
            href="/"
            className="px-6 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium inline-block"
          >
            🏠 Home वर परत जा
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
