export function siteUrl(): string {
  if (process.env.SITE_URL) {
    return process.env.SITE_URL.replace(/\/$/, "");
  }
  if (process.env.NODE_ENV !== "production") {
    return "http://localhost:3000";
  }
  return "https://marathi-learn-hub.vercel.app";
}

export function telegramUrl(): string {
  return process.env.TELEGRAM_GROUP_URL || "https://t.me/+xYK2B1LXh7djMzJl";
}