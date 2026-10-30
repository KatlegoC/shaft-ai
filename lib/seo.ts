import type { Metadata } from "next";

import { site, siteUrl } from "@/content/site";

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = new URL(path, siteUrl).toString();

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      description,
      url,
      siteName: site.name,
    },
    twitter: {
      description,
    },
  };
}
