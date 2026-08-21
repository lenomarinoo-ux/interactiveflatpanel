const fs = require('fs');
const path = require('path');

const file = 'c:\\interactiveflatplanel\\about.html';
let html = fs.readFileSync(file, 'utf8');

// Replace H1
html = html.replace(
    /<h1 class="font-cabinet fw-bolder display-3 text-white mb-4"[^>]*>Penyedia Interactive Flat Panel<br>Terpercaya.<\/h1>/i,
    '<h1 class="font-cabinet fw-bolder display-2 mb-4 text-white" style="line-height: 1.2; letter-spacing: -2px; text-shadow: 4px 4px 0 #000;">Mengubah Cara Dunia<br>Berkolaborasi.</h1>'
);
html = html.replace(
    /<h1 class="font-cabinet fw-bolder display-3 text-white mb-4"[^>]*>Penyedia Interactive Flat Panel Terpercaya.<\/h1>/i,
    '<h1 class="font-cabinet fw-bolder display-2 mb-4 text-white" style="line-height: 1.2; letter-spacing: -2px; text-shadow: 4px 4px 0 #000;">Mengubah Cara Dunia Berkolaborasi.</h1>'
);

// Replace P
const newP = `<p class="fs-4 fw-medium text-white mb-5" style="text-shadow: 1px 1px 0 #000;">Kenali PanelPro, penyedia solusi teknologi Interactive Flat Panel terdepan. Kami berkomitmen mengubah cara Anda berkolaborasi di ruang kerja dan ruang kelas.</p>`;
const oldP = `<p class="fs-4 fw-medium text-white mb-5" style="max-width: 600px; text-shadow: 2px 2px 0 #000;">Kami hadir untuk memastikan setiap presentasi, rapat, dan sesi belajar mengajar berjalan tanpa batas.</p>`;
html = html.replace(newP, oldP);

fs.writeFileSync(file, html);
console.log("Reverted about.html visual text to original");
