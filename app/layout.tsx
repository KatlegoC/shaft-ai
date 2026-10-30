import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { site, siteUrl } from "@/content/site";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#111315",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Shaft AI | Underground fleet, safety and people data",
    template: "%s | Shaft AI",
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    locale: "en_ZA",
    siteName: site.name,
    title: "Shaft AI | Underground fleet, safety and people data",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Shaft AI | Underground fleet, safety and people data",
    description: site.description,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  description: site.description,
  url: siteUrl,
  parentOrganization: {
    "@type": "Organization",
    name: site.parentCompany,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.street}, ${site.suburb}`,
    addressLocality: site.city,
    postalCode: site.postalCode,
    addressCountry: "ZA",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-ZA" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-ink font-sans text-paper">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main" tabIndex={-1} className="flex-1">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </body>
    </html>
  );
}
