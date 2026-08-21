const fs = require('fs');
const path = require('path');

const dir = 'c:\\interactiveflatplanel\\';

const pages = [
    {
        file: 'index.html',
        title: 'Jual Interactive Flat Panel & Smart Board 4K | PanelPro',
        desc: 'Tingkatkan kolaborasi tim dan ruang kelas dengan Interactive Flat Panel (IFP) resolusi 4K dari PanelPro. Solusi layar sentuh interaktif cerdas masa depan.',
        keywords: 'interactive flat panel, jual panel interaktif, smart board indonesia, papan tulis digital, layar sentuh interaktif'
    },
    {
        file: 'about.html',
        title: 'Tentang Kami | Penyedia Interactive Flat Panel Terpercaya - PanelPro',
        desc: 'Kenali PanelPro, penyedia solusi teknologi Interactive Flat Panel terdepan. Kami berkomitmen mengubah cara Anda berkolaborasi di ruang kerja dan ruang kelas.',
        keywords: 'tentang panelpro, distributor interactive flat panel, vendor smart board, penyedia layar interaktif'
    }
];

pages.forEach(page => {
    const filePath = path.join(dir, page.file);
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf8');

    // Replace Title
    content = content.replace(/<title>.*?<\/title>/gi, `<title>${page.title}</title>`);
    
    // Replace Meta Description
    content = content.replace(/<meta name="description" content="[^"]*">/i, `<meta name="description" content="${page.desc}">`);
    
    // Replace Meta Keywords
    content = content.replace(/<meta name="keywords" content="[^"]*">/i, `<meta name="keywords" content="${page.keywords}">`);
    
    // Replace OG Title
    content = content.replace(/<meta property="og:title" content="[^"]*">/i, `<meta property="og:title" content="${page.title}">`);
    
    // Replace OG Description
    content = content.replace(/<meta property="og:description" content="[^"]*">/i, `<meta property="og:description" content="${page.desc}">`);

    fs.writeFileSync(filePath, content);
    console.log(`Updated meta tags for ${page.file}`);
});
