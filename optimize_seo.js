const fs = require('fs');
const path = require('path');

const dir = 'c:\\interactiveflatplanel\\';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));
const domain = 'https://interactiveflatpanel.web.id';

files.forEach(file => {
    const filePath = path.join(dir, file);
    let html = fs.readFileSync(filePath, 'utf8');
    
    // 1. Extract title for metadata
    const titleMatch = html.match(/<title>(.*?)<\/title>/i);
    const title = titleMatch ? titleMatch[1] : 'PanelPro - Interactive Flat Panel Indonesia';
    const desc = 'PanelPro menyediakan Interactive Flat Panel (IFP) berkualitas tinggi untuk ruang kelas modern, ruang rapat, dan auditorium di seluruh Indonesia.';
    const fileUrl = `${domain}/${file === 'index.html' ? '' : file}`;
    const mainImgUrl = `${domain}/img/hero.webp`;

    // The injected metadata
    const metaTags = `
    <!-- SEO & Metadata Optimization -->
    <meta name="description" content="${desc}">
    <meta name="keywords" content="Interactive Flat Panel, IFP, Smart Board, Papan Tulis Interaktif, Layar Sentuh Rapat, PanelPro">
    <meta name="author" content="PanelPro">
    
    <!-- OpenGraph & Social Cards -->
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${desc}">
    <meta property="og:image" content="${mainImgUrl}">
    <meta property="og:url" content="${fileUrl}">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="PanelPro Interactive Flat Panel">
    
    <!-- Favicon -->
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <link rel="apple-touch-icon" href="favicon.png">
    <link rel="canonical" href="${fileUrl}">

    <!-- Preconnect for Performance -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <!-- Schema.org for AEO/GEO (Search Generative Experience) -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "PanelPro",
      "url": "${domain}",
      "logo": "${mainImgUrl}",
      "description": "Penyedia Interactive Flat Panel (IFP) terkemuka di Indonesia.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+6288989643555",
        "contactType": "sales",
        "areaServed": "ID",
        "availableLanguage": "Indonesian"
      }
    }
    </script>
    `;

    // Clean up previously injected meta tags if any (to avoid duplicates during dev)
    html = html.replace(/<!-- SEO & Metadata Optimization -->[\s\S]*?<\/script>\s*/, '');

    // Inject after viewport meta tag
    html = html.replace(/(<meta name="viewport" content="width=device-width, initial-scale=1.0">)/i, `$1\n${metaTags}`);

    // 2. Fix Mobile Horizontal Scroll
    const cssFix = `
        /* Mobile Scroll Fix */
        html, body {
            overflow-x: hidden;
            width: 100%;
            max-width: 100vw;
            position: relative;
        }
`;
    // Clean up previous css fix if any
    html = html.replace(/\/\* Mobile Scroll Fix \*\/[\s\S]*?position: relative;\s*\}/, '');
    
    if (html.includes('</style>')) {
        html = html.replace('</style>', `${cssFix}    </style>`);
    } else {
        html = html.replace('</head>', `<style>${cssFix}</style>\n</head>`);
    }

    // 3. PageSpeed Image Lazy Loading
    // Replace <img ...> with <img loading="lazy" ...> but skip those that already have it
    html = html.replace(/<img (?!.*?loading="lazy")/g, '<img loading="lazy" ');

    // Write back
    fs.writeFileSync(filePath, html);
    console.log(`Optimized ${file}`);
});
