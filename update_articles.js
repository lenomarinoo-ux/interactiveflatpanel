const fs = require('fs');
const path = require('path');

const dir = 'c:\\interactiveflatplanel\\';
const indexContent = fs.readFileSync(path.join(dir, 'index.html'), 'utf8');

// Extract footer from index.html
const footerRegex = /(<!-- Footer -->[\s\S]*?<\/footer>)/;
const footerMatch = indexContent.match(footerRegex);
const footerHtml = footerMatch ? footerMatch[1] : '';

const articles = [
    { 
        id: 'artikel-memilih-panel.html', 
        title: 'Panduan Memilih Interactive Flat Panel yang Tepat', 
        img: 'blog_1_tips_1786533293586.jpg', 
        tag: 'Tips & Panduan',
        desc: 'Jangan sampai salah investasi. Kenali faktor-faktor krusial seperti ukuran, resolusi, jenis sentuhan, hingga sistem operasi bawaan...'
    },
    { 
        id: 'artikel-kolaborasi-tim.html', 
        title: 'Mengapa Perusahaan Modern Beralih ke Layar Interaktif', 
        img: 'blog_2_corp_1786533308169.jpg', 
        tag: 'Korporat',
        desc: 'Di era hybrid working, miskomunikasi sering terjadi akibat keterbatasan alat. Temukan bagaimana PanelPro menjadi pusat komando presentasi...'
    },
    { 
        id: 'artikel-ruang-kelas.html', 
        title: 'Masa Depan Ruang Kelas Pintar & Pembelajaran Interaktif', 
        img: 'blog_3_edu_1786533525205.jpg', 
        tag: 'Edukasi',
        desc: 'Tinggalkan metode papan tulis usang. Generasi alpha membutuhkan stimulus visual dan kinestetik. Lihat bagaimana layar sentuh merubah cara belajar...'
    }
];

articles.forEach(currentArticle => {
    const filePath = path.join(dir, currentArticle.id);
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf8');

    // Generate Related Articles HTML
    const relatedArticles = articles.filter(a => a.id !== currentArticle.id);
    let cardsHtml = '';
    
    relatedArticles.forEach(a => {
        cardsHtml += `
            <div class="col-md-6">
                <div class="bg-white border-black-2 p-4 rounded-3xl shadow-neo-8 h-100 d-flex flex-column neo-card">
                    <div class="position-relative mb-4">
                        <img loading="lazy" src="${a.img}" alt="${a.title}" class="border-black-2 rounded-2xl w-100" style="height: 220px; object-fit: cover; display: block;">
                        <span class="position-absolute top-0 start-0 m-3 badge bg-primary-custom text-white border-black-2 shadow-neo-4 px-3 py-2">${a.tag}</span>
                    </div>
                    <h3 class="font-cabinet fw-bold fs-4 mb-3 text-dark">${a.title}</h3>
                    <p class="text-secondary fw-medium mb-4 flex-grow-1">${a.desc}</p>
                    <a href="${a.id}" class="btn btn-outline-dark w-100 py-2 fw-bold border-black-2 shadow-neo-4 neo-btn" style="border-radius: 0.5rem;">Baca Artikel</a>
                </div>
            </div>`;
    });

    const relatedHtml = `
    <!-- Related Articles -->
    <section class="py-5 bg-sage border-bottom-black-2">
        <div class="container py-5">
            <h2 class="font-cabinet fw-bolder display-5 mb-5 text-dark text-center">Baca Artikel Lainnya</h2>
            <div class="row g-5 justify-content-center">
                ${cardsHtml}
            </div>
        </div>
    </section>
    `;

    const ctaHtml = `
    <!-- Article CTA -->
    <section class="py-5 bg-charcoal border-bottom-black-2">
        <div class="container py-5 text-center">
            <h2 class="font-cabinet fw-bolder display-4 mb-4 text-white">Siap Beralih ke Layar Interaktif?</h2>
            <p class="fs-4 fw-medium text-secondary mb-5 mx-auto" style="max-width: 700px;">
                Tingkatkan produktivitas ruang rapat atau ruang kelas Anda dengan teknologi PanelPro terbaik. Hubungi tim konsultan kami sekarang untuk mendapatkan rekomendasi.
            </p>
            <a href="https://wa.me/6288989643555" target="_blank" class="btn btn-wa px-5 py-3 fs-5 fw-bold border-black-2 shadow-neo-8 neo-btn rounded-3" style="background-color: #25D366; color: white;">
                Konsultasi Gratis via WhatsApp
            </a>
        </div>
    </section>
    `;

    // Remove any previously injected sections if exist (for idempotency)
    content = content.replace(/<!-- Related Articles -->[\s\S]*?<\/section>/, '');
    content = content.replace(/<!-- Article CTA -->[\s\S]*?<\/section>/, '');
    content = content.replace(/<!-- Footer -->[\s\S]*?<\/footer>/, '');

    // Inject CTA + Related + Footer right before <!-- Floating WhatsApp -->
    const targetRegex = /(<!-- Floating WhatsApp -->)/;
    if (content.includes('<!-- Floating WhatsApp -->')) {
        content = content.replace(targetRegex, ctaHtml + '\n' + relatedHtml + '\n\n' + footerHtml + '\n\n$1');
        fs.writeFileSync(filePath, content);
        console.log(`Updated ${currentArticle.id}`);
    } else {
        console.log(`Could not find injection point in ${currentArticle.id}`);
    }
});
