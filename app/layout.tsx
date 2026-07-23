"use client";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7955956906960062"
          crossOrigin="anonymous"
        ></script>
        <meta
          name="naver-site-verification"
          content="bd3ca25b65db38024528a993afba434724bd16bb"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
