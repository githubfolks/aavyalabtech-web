import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/layout";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', "800", "900", "300"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: null,
  description: null,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="fuPE8kScj8ia4Z4b1shuDQ" async></script>
        <meta name="keywords" content="" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-VWTKEDRDPW"
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || []; 
            function gtag(){dataLayer.push(arguments);} 
            gtag('js', new Date());
            gtag('config', 'G-VWTKEDRDPW');`,
          }}
        />
      </head>
      <body className={`antialiased ${nunito.className}`}>  {/* Apply the Nunito font class */}
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
