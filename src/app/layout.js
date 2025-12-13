import "./globals.css";

export const metadata = {
  title: "Archaelix",
  description: "Reveal the unseen",
};

import SmoothScroll from "../components/SmoothScroll";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
