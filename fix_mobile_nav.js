const fs = require('fs');
const path = require('path');

const dir = 'c:\\interactiveflatplanel\\';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const offcanvasMenu = `
    <!-- Mobile Offcanvas Menu -->
    <div class="offcanvas offcanvas-end bg-primary-custom text-white border-start border-2 border-dark" tabindex="-1" id="mobileMenu" aria-labelledby="mobileMenuLabel">
      <div class="offcanvas-header border-bottom border-2 border-dark">
        <h5 class="offcanvas-title font-cabinet fw-bolder fs-4" id="mobileMenuLabel" style="text-shadow: 2px 2px 0 #000;">Menu Navigasi</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="list-unstyled fw-bold fs-5 d-grid gap-4 mt-3" style="text-shadow: 1px 1px 0 #000;">
            <li><a href="index.html" class="text-white text-decoration-none">Beranda</a></li>
            <li><a href="about.html" class="text-white text-decoration-none">Tentang kami</a></li>
            <li>
                <div class="dropdown">
                    <a href="#" class="text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Produk</a>
                    <ul class="dropdown-menu neo-dropdown mt-2" style="background-color: #fff; text-shadow: none;">
                        <li><span class="dropdown-item-text text-secondary fw-bold small">Layar Interaktif (IFP)</span></li>
                        <li><a class="dropdown-item" href="ifp-65.html">PanelPro 65"</a></li>
                        <li><a class="dropdown-item" href="ifp-75.html">PanelPro 75"</a></li>
                        <li><a class="dropdown-item" href="ifp-86.html">PanelPro 86"</a></li>
                        <li><a class="dropdown-item" href="ifp-98.html">PanelPro 98"</a></li>
                        <li><hr class="dropdown-divider border-black-2"></li>
                        <li><span class="dropdown-item-text text-secondary fw-bold small">Aksesoris & Modul</span></li>
                        <li><a class="dropdown-item" href="modul-ops.html">Modul PC (OPS)</a></li>
                        <li><a class="dropdown-item" href="stand.html">Stand Beroda</a></li>
                    </ul>
                </div>
            </li>
            <li><a href="package.html" class="text-white text-decoration-none">Paket</a></li>
            <li><a href="blog.html" class="text-white text-decoration-none">Blog</a></li>
            <li><a href="https://wa.me/6288989643555" class="text-white text-decoration-none">Kontak</a></li>
        </ul>
      </div>
    </div>
`;

files.forEach(file => {
    const filePath = path.join(dir, file);
    let html = fs.readFileSync(filePath, 'utf8');

    // Skip if already has mobileMenu
    if (html.includes('id="mobileMenu"')) {
        console.log(`Skipping ${file}, already has mobileMenu.`);
        return;
    }

    // Replace the WhatsApp button block in the header
    const waRegex = /<a href="https:\/\/wa\.me\/6288989643555" class="btn btn-dark text-white px-4 py-2 border-black-2 shadow-neo-4 neo-btn fw-bold rounded-3 text-decoration-none">\s*WhatsApp\s*<\/a>/;
    
    const newHeaderRight = `<div class="d-flex align-items-center gap-2">
                <a href="https://wa.me/6288989643555" class="btn btn-dark text-white px-3 py-2 border-black-2 shadow-neo-4 neo-btn fw-bold rounded-3 text-decoration-none d-none d-sm-inline-block">
                    WhatsApp
                </a>
                <button class="btn bg-white d-lg-none border-black-2 shadow-neo-4 p-2 neo-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu">
                    <svg style="width: 24px; height: 24px;" fill="none" stroke="#000" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>
            </div>`;

    if (waRegex.test(html)) {
        html = html.replace(waRegex, newHeaderRight);
        
        // Inject Offcanvas menu after </header>
        html = html.replace('</header>', '</header>\n' + offcanvasMenu);
        
        fs.writeFileSync(filePath, html);
        console.log(`Fixed mobile nav in ${file}`);
    } else {
        console.log(`Could not find WA button in ${file}`);
    }
});
