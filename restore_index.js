const fs = require('fs');
const path = require('path');

const file = 'c:\\interactiveflatplanel\\index.html';
let html = fs.readFileSync(file, 'utf8');

// The replacement tool accidentally deleted everything before <div class="col-lg-6"> (the right column)
// We need to restore it and inject the updated texts.

const missingBlock = `            <div class="row align-items-center gy-5">
                <div class="col-lg-6">
                    <span class="d-inline-block bg-white px-3 py-1 rounded-pill border-black-2 shadow-neo-4 fw-bold mb-4" style="font-size: 0.875rem;">
                        BARU: Layar Sentuh Multi-Titik 4K
                    </span>
                    <h1 class="font-cabinet fw-bolder display-3 mb-4 text-white" style="line-height: 1.1; letter-spacing: -1px; text-shadow: 4px 4px 0 #000;">
                        Jual Interactive Flat Panel &<br>
                        Smart Board 4K
                    </h1>
                    <p class="fs-5 fw-medium mb-4 text-white" style="max-width: 500px; text-shadow: 2px 2px 0 #000;">Tingkatkan kolaborasi tim dan ruang kelas dengan Interactive Flat Panel (IFP) resolusi 4K dari PanelPro. Solusi layar sentuh interaktif cerdas masa depan.</p>
                    <div class="d-flex flex-wrap gap-3">
                        <a href="package.html" class="btn btn-dark px-4 py-3 border-black-2 rounded-xl shadow-neo-8 neo-btn-8 fw-bold fs-5 text-white text-decoration-none">
                            Lihat Paket
                        </a>
                    </div>
                </div>`;

// Find where it was removed. It was right before:
// <div class="col-lg-6">
//    <div class="bg-white border-black-2 rounded-2xl shadow-neo-12 overflow-hidden">
//        <img loading="lazy" src="img/hero.webp"

// Let's just do string replacement
const searchTarget = `<div class="col-lg-6">
                    <div class="bg-white border-black-2 rounded-2xl shadow-neo-12 overflow-hidden">`;

html = html.replace(searchTarget, missingBlock + '\n                ' + searchTarget);

fs.writeFileSync(file, html);
console.log("Restored missing hero section in index.html");
