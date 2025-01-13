import type { Metadata } from "next";
import localFont from 'next/font/local'
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./globals.css";



export const metadata: Metadata = {
  title: "NAM & Associates| Discover Dar es Salaam with Confidence",
  description: "Copyrights © NAM & Associates ,Discover Dar es Salaam with Confidence | The Top Legal Advisory Firm in Tanzania , also offering 360 DSP relocation services",
};

const centuryGothic = localFont({
  src: [
    {
      path: './fonts/century-gothic/centurygothic_regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/century-gothic/centurygothic_bold.ttf',
      weight: '600',
      style: 'bold',
    },

  ],
})



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <head>

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Nam & Associates: Your trusted partner for legal, corporate, and relocation services in Tanzania. Specializing in tax advisory, immigration law, company registration, and business setup in Dar es Salaam. NAM & Associates is a leading law firm and relocation service provider in Dar es Salaam, Tanzania. Specializing in corporate law, tax advisory, immigration law, and comprehensive relocation solutions, we help individuals and businesses seamlessly navigate legal and logistical challenges. Experience stress-free transitions and expert legal support in Tanzania's vibrant commercial capital." />
        <meta name="keywords" content="law firm in Dar es Salaam, corporate lawyer in Tanzania, tax advisory, immigration law, company registration, relocation services, business setup, real estate in Tanzania" />
        <meta name="author" content="Nam & Associates" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.namassociates.co.tz" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Nam & Associates | Best Law & Legal Firm In Tanzania" />
        <meta property="og:description" content="Nam & Associates: Your trusted partner for legal, corporate, and relocation services in Tanzania. Specializing in tax advisory, immigration law, company registration, and business setup in Dar es Salaam." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.namassociates.co.tz" />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:locale" content="en_US" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "LegalService",
            "name": "Nam & Associates",
            "description": "Leading law and relocation service provider in Dar es Salaam, Tanzania.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Nam & Associates",
              "addressLocality": "Dar es Salaam",
              "addressCountry": "TZ",
            },
            "telephone": "+255 753 678 768",
            "email": "info@namassociates.co.tz",
          })}
        </script>
      </head>
      <body className={`${centuryGothic.className}  bg-brand-blue antialiased overflow-x-hidden scroll-smooth`}>
        {children}
      </body>
    </html>
  );
}
