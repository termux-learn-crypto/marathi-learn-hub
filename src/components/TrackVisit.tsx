"use client";

import { useEffect } from "react";
import { saveLastVisited } from "@/lib/storage";

export default function TrackVisit({ slug }: { slug: string }) {
  useEffect(() => {
    saveLastVisited(slug);
  }, [slug]);

  return null;
}