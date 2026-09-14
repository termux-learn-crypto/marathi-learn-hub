export function siteUrl(): string {
  if (process.env.SITE_URL) {
    return process.env.SITE_URL.replace(/\/$/, "");
  }
  if (process.env.NODE_ENV !== "production") {
    return "http://localhost:3000";
  }
  return "https://marathi-learn-hub.vercel.app";
}