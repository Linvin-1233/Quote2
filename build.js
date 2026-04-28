const fs = require('fs');
const path = require('path');

const imgDir = './images';
// 过滤出常见的图片格式
const files = fs.readdirSync(imgDir).filter(f =>
    /\.(jpg|jpeg|png|gif|webp)$/i.test(f)
);

// 生成包含所有文件名的清单
const data = {
    total: files.length,
    images: files,
    updatedAt: new Date().toLocaleString()
};

fs.writeFileSync('manifest.json', JSON.stringify(data, null, 2));
console.log(`✨ 成功索引 ${files.length} 张逆天语录！`);