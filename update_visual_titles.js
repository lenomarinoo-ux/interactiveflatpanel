const fs = require('fs');
const path = require('path');

const dir = 'c:\\interactiveflatplanel\\';

// Update index.html
let indexContent = fs.readFileSync(path.join(dir, 'index.html'), 'utf8');
indexContent = indexContent.replace(
    /<h1[^>]*>Kolaborasi Lebih Baik Dengan<br>Panel Interaktif\.<\/h1>/i, 
    '<h1 class="font-cabinet fw-bolder display-3 text-white mb-4" style="text-shadow: 4px 4px 0 #000; letter-spacing: -1px; line-height: 1.1;">Jual Interactive Flat Panel &<br>Smart Board 4K.</h1>'
);
// In case there is no <br>
indexContent = indexContent.replace(
    /<h1[^>]*>Kolaborasi Lebih Baik Dengan Panel Interaktif\.<\/h1>/i, 
    '<h1 class="font-cabinet fw-bolder display-3 text-white mb-4" style="text-shadow: 4px 4px 0 #000; letter-spacing: -1px; line-height: 1.1;">Jual Interactive Flat Panel & Smart Board 4K.</h1>'
);
indexContent = indexContent.replace(
    /<p class="fs-4 fw-medium text-white mb-5">Tingkatkan produktivitas ruang rapat dan kelas dengan panel datar interaktif yang mudah digunakan\.<\/p>/i,
    '<p class="fs-4 fw-medium text-white mb-5" style="text-shadow: 1px 1px 0 #000;">Tingkatkan kolaborasi tim dan ruang kelas dengan Interactive Flat Panel (IFP) resolusi 4K dari PanelPro. Solusi layar sentuh interaktif cerdas masa depan.</p>'
);
fs.writeFileSync(path.join(dir, 'index.html'), indexContent);


// Update about.html
let aboutContent = fs.readFileSync(path.join(dir, 'about.html'), 'utf8');
aboutContent = aboutContent.replace(
    /<h1[^>]*>Mengubah Cara Dunia<br>Berkolaborasi\.<\/h1>/i,
    '<h1 class="font-cabinet fw-bolder display-3 text-white mb-4" style="text-shadow: 4px 4px 0 #000; letter-spacing: -1px; line-height: 1.1;">Penyedia Interactive Flat Panel<br>Terpercaya.</h1>'
);
aboutContent = aboutContent.replace(
    /<h1[^>]*>Mengubah Cara Dunia Berkolaborasi\.<\/h1>/i,
    '<h1 class="font-cabinet fw-bolder display-3 text-white mb-4" style="text-shadow: 4px 4px 0 #000; letter-spacing: -1px; line-height: 1.1;">Penyedia Interactive Flat Panel Terpercaya.</h1>'
);
aboutContent = aboutContent.replace(
    /<p class="fs-4 fw-medium text-white mb-5">.*?<\/p>/i,
    '<p class="fs-4 fw-medium text-white mb-5" style="text-shadow: 1px 1px 0 #000;">Kenali PanelPro, penyedia solusi teknologi Interactive Flat Panel terdepan. Kami berkomitmen mengubah cara Anda berkolaborasi di ruang kerja dan ruang kelas.</p>'
);
fs.writeFileSync(path.join(dir, 'about.html'), aboutContent);

console.log("Updated visual text on index.html and about.html");
