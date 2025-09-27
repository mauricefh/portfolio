import "./globals.css";

export const metadata = {
  title: "Portfolio",
  description: "Portfolio of mauricefh. Full Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
