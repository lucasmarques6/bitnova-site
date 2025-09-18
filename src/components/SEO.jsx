import { Helmet } from 'react-helmet';

const SEO = ({ 
  title = "Bitnova - Desarrollo Web y Marketing Digital",
  description = "Soluciones digitales innovadoras para PYMEs y sector público. Desarrollo web, marketing digital y consultoría tecnológica especializada.",
  keywords = "desarrollo web, marketing digital, pymes, sector público, consultoría tecnológica, sitios web responsivos, google ads, seo",
  image = "/bitnova-og.png",
  url = window.location.href,
  type = "website"
}) => {
  const siteTitle = "Bitnova";
  const fullTitle = title.includes(siteTitle) ? title : `${title} | ${siteTitle}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Bitnova - Soluciones Digitales" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#5A67D8" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content="es_ES" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": siteTitle,
          "description": description,
          "url": url,
          "logo": `${window.location.origin}/bitnova-logo.png`,
          "sameAs": [
            "https://www.linkedin.com/company/bitnova",
            "https://github.com/bitnova"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "sales",
            "availableLanguage": "Spanish"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Argentina"
          },
          "serviceType": [
            "Desarrollo Web",
            "Marketing Digital", 
            "Consultoría Tecnológica",
            "SEO",
            "Google Ads"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
