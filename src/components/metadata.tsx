import React from "react";
import {Helmet} from "react-helmet-async"

interface MetaProps {
  url: string;
  page?: string;
  pageTitle: string;
  description?: string;
  previewImage?: string;
  contentLanguage?: string;
  children?: React.ReactNode;
  contentType?: "website" | "article";
}

export const MetaData = ({
  url,
  page,
  pageTitle,
  description,
  contentType,
  previewImage,
  children,
}: MetaProps) => {
  const defaultDescription =
    "Join verified thrift savings groups, contribute securely, and receive payouts in rotation. Transparent, reliable, and built for your goals";
  const finalDescription = description || defaultDescription;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      {/* linkedin post inspector */}
      <meta name="image" property="og:image" content={previewImage}></meta>
      <meta name="title" property="og:title" content={pageTitle}></meta>
      <meta
        name="description"
        property="og:description"
        content={finalDescription}></meta>

      {/* Google's meta */}
      <meta itemProp="name" content={pageTitle} />
      <meta itemProp="description" content={pageTitle} />
      <meta itemProp="image" content={previewImage} />
      {/* Facebook's meta */}
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={pageTitle} />
      <meta property="og:image" content={previewImage} />
      {/* Twitter's meta */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:site" content={url} />
      <meta name="twitter:image" content={previewImage} />

      <meta
        httpEquiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      />

      {children}

      {/* Schema.org markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": contentType === "article" ? "Article" : "WebPage",
          headline: pageTitle,
          description: description,
          image: previewImage,
          url: url,
        })}
      </script>
    </Helmet>
  );
};
