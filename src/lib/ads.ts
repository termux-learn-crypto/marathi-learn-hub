export const adsenseClient =
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "ca-pub-8509787083957252";
export const adsenseSlot = process.env.NEXT_PUBLIC_ADSENSE_SLOT || "";

export function adFreq(minutes: number): 1 | 2 | 3 {
  if (minutes <= 15) return 1;
  if (minutes <= 25) return 2;
  return 3;
}