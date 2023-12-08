export const homeSchema = {
  "@context" : "https://schema.org",
  "@type" : "WebSite",
  "name" : "Courtney Osborne",
  "alternateName" : "Court",
  "url" : "nosborne.co",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://nosborne.co/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}