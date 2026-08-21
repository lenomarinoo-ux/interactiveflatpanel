const fs = require('fs');
const path = require('path');

const dir = 'c:\\interactiveflatplanel\\';
const files = ['artikel-kolaborasi-tim.html', 'artikel-memilih-panel.html', 'artikel-ruang-kelas.html'];

files.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');
    
    // Replace artifact names with correct img/blogX.webp paths
    content = content.replace(/blog_1_tips_1786533293586\.jpg/g, 'img/blog1.webp');
    content = content.replace(/blog_2_corp_1786533308169\.jpg/g, 'img/blog2.webp');
    content = content.replace(/blog_3_edu_1786533525205\.jpg/g, 'img/blog3.webp');
    
    fs.writeFileSync(path.join(dir, file), content);
    console.log(`Fixed images in ${file}`);
});
