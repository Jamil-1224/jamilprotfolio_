const siteUrl = "https://rousonjamil.vercel.app";

export function GET() {
  const lastModified = new Date().toISOString();

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url>
<loc>${siteUrl}</loc>
<lastmod>${lastModified}</lastmod>
<changefreq>weekly</changefreq>
<priority>1</priority>
</url>
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}