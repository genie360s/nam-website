import type { Metadata } from "next";
import localFont from 'next/font/local'
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./globals.css";



export const metadata: Metadata = {
  title: "Nam & Associates",
  description: "Copyrights © Nam & Associates , The Top Legal Advisory Firm in Tanzania , also offering 360 DSP relocation services",
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
      </head>
      <body className={`${centuryGothic.className}  bg-brand-blue antialiased overflow-x-hidden scroll-smooth`}>
        {children}
      </body>
    </html>
  );
}
