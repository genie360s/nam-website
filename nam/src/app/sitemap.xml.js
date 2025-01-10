
const Sitemap = () => {
    return null;
};

export const getServerSideProps = async ({ res }) => {
    const baseUrl = 'https://namassociates.co.tz/';

    const staticPages = [
        '',
        'Expertise',
        'Legal',
        '#profile',
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${staticPages
            .map((page) => {
                return `
                    <url>
                        <loc>${baseUrl}/${page}</loc>
                        <lastmod>${new Date().toISOString()}</lastmod>
                        <changefreq>monthly</changefreq>
                        <priority>0.7</priority>
                    </url>
                `;
            })
            .join('')}
    </urlset>`;

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
};

export default Sitemap;