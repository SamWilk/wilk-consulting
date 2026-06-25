import "./globals.css";

export const metadata = {
  title: "Jacksonville Website Design for Local Service Businesses",
  description:
    "Modern, fast, SEO-ready websites for Jacksonville pressure washing, construction, landscaping, and home service companies.",
  icons: {
    icon: "/site-icon.svg",
  },
  keywords: [
    "Jacksonville web design",
    "local SEO Jacksonville",
    "contractor websites",
    "pressure washing website",
    "landscaping website design",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
