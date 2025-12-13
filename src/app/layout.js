import "./globals.css";

export const metadata = {
  title: "Archaelix",
  description: "Reveal the unseen",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
