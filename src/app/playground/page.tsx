import type { Metadata } from "next";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import PlaygroundClient from "./PlaygroundClient";
import { buildMetadata } from "@/lib/seo/seo";

export const metadata: Metadata = buildMetadata({
  title: "कोड Playground — Marathi Learn Hub",
  description: "Browser मध्येच Python, HTML, CSS, JavaScript — कोड लिहा आणि चालवा, मोफत.",
  path: "/playground",
});

export default function PlaygroundPage() {
  return (
    <>
      <Navbar />
      <PlaygroundClient />
      <Footer />
    </>
  );
}