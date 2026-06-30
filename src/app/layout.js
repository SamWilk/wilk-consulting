import "./globals.css";

export const metadata = {
  title: "Sam Wilk Consulting | Websites for Local Businesses",
  description:
    "Modern, fast websites for local businesses, backed by software engineering experience and a practical delivery mindset.",
  icons: {
    icon: "/site-icon.svg",
  },
  keywords: [
    "Sam Wilk",
    "Jacksonville web design",
    "website consultant",
    "local business websites",
    "software engineer Jacksonville",
    "local SEO Jacksonville",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
