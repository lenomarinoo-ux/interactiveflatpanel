const fs = require('fs');
const path = require('path');

const file = 'c:\\interactiveflatplanel\\index.html';
let html = fs.readFileSync(file, 'utf8');

// Replace the entire Hero Section to fix it completely
const fixedHero = `    <!-- 1. Hero Section -->
    <section id="home" class="bg-dots border-bottom-black-2 pt-5 pb-5 mt-5">
        <div class="container pt-5 pb-5">
            <div class="row align-items-center gy-5">
                <div class="col-lg-6">
                    <span class="d-inline-block bg-white px-3 py-1 rounded-pill border-black-2 shadow-neo-4 fw-bold mb-4" style="font-size: 0.875rem;">
                        BARU: Layar Sentuh Multi-Titik 4K
                    </span>
                    <h1 class="font-cabinet fw-bolder display-2 mb-4 text-white" style="line-height: 1.2; letter-spacing: -2px; text-shadow: 4px 4px 0 #000;">
                        Kolaborasi <br>
                        Lebih Baik Dengan <br>
                        Panel Interaktif.
                    </h1>
                    <p class="fs-5 fw-medium mb-4 text-white" style="max-width: 450px; text-shadow: 2px 2px 0 #000;">Tingkatkan produktivitas ruang rapat dan kelas dengan panel datar interaktif yang mudah digunakan dan responsif.</p>
                    <div class="d-flex flex-wrap gap-3">
                        <a href="#produk" class="btn btn-dark px-4 py-3 border-black-2 rounded-xl shadow-neo-8 neo-btn-8 fw-bold fs-5 text-white text-decoration-none">
                            Lihat Produk
                        </a>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="bg-white border-black-2 rounded-2xl shadow-neo-12 overflow-hidden">
                        <div class="bg-black px-3 d-flex align-items-center gap-2 border-bottom-black-2" style="height: 40px;">
                            <div class="rounded-circle" style="width: 12px; height: 12px; background-color: #ff5f57;"></div>
                            <div class="rounded-circle" style="width: 12px; height: 12px; background-color: #febc2e;"></div>
                            <div class="rounded-circle" style="width: 12px; height: 12px; background-color: #28c840;"></div>
                        </div>
                        <img loading="lazy" src="img/hero.webp" alt="Panel Interaktif Meeting" class="w-100" style="height: 360px; object-fit: cover; display: block;">
                    </div>
                </div>
            </div>
        </div>
    </section>`;

// Replace from <!-- 1. Hero Section --> to </section> before <!-- 2. About Us
const regex = /<!-- 1\. Hero Section -->[\s\S]*?<\/section>/;
html = html.replace(regex, fixedHero);

fs.writeFileSync(file, html);
console.log("Fixed Hero section completely");
