"use client";

import { useEffect } from "react";
import { adsenseClient, adsenseSlot } from "@/lib/ads";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export default function AdUnit() {
  useEffect(() => {
    if (!adsenseSlot || !window.adsbygoogle) {
      return;
    }
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // ad slot unavailable
    }
  }, []);

  if (!adsenseSlot) {
    return null;
  }

  return (
    <div className="my-6 w-full overflow-hidden text-center" aria-label="Advertisement">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={adsenseClient}
        data-ad-slot={adsenseSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}