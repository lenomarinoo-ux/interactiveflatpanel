const fs = require('fs');
const path = require('path');

const file = 'c:\\interactiveflatplanel\\index.html';
let html = fs.readFileSync(file, 'utf8');

// Replace the new H1 back to the old H1
const newH1 = `<h1 class="font-cabinet fw-bolder display-3 mb-4 text-white" style="line-height: 1.1; letter-spacing: -1px; text-shadow: 4px 4px 0 #000;">
                        Jual Interactive Flat Panel &<br>
                        Smart Board 4K
                    </h1>`;
const oldH1 = `<h1 class="font-cabinet fw-bolder display-2 mb-4 text-white" style="line-height: 1.2; letter-spacing: -2px; text-shadow: 4px 4px 0 #000;">
                        Kolaborasi <br>
                        Lebih Baik Dengan <br>
                        Panel Interaktif.
                    </h1>`;
html = html.replace(newH1, oldH1);

// Replace the new P back to the old P
const newP = `<p class="fs-5 fw-medium mb-4 text-white" style="max-width: 500px; text-shadow: 2px 2px 0 #000;">Tingkatkan kolaborasi tim dan ruang kelas dengan Interactive Flat Panel (IFP) resolusi 4K dari PanelPro. Solusi layar sentuh interaktif cerdas masa depan.</p>`;
const oldP = `<p class="fs-5 fw-medium mb-4 text-white" style="max-width: 450px; text-shadow: 2px 2px 0 #000;">Tingkatkan produktivitas ruang rapat dan kelas dengan panel datar interaktif yang mudah digunakan dan responsif.</p>`;
html = html.replace(newP, oldP);

fs.writeFileSync(file, html);
console.log("Reverted index.html visual text to original");
