const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// 源文件夹路径
const sourceDir = './input';
// 目标文件夹路径
const destinationDir = './docs/public/cms';

// 确保目标文件夹存在
if (!fs.existsSync(destinationDir)) {
	fs.mkdirSync(destinationDir, { recursive: true });
}

// 遍历源文件夹
fs.readdirSync(sourceDir).forEach((file) => {
	const filePath = path.join(sourceDir, file);
	const stats = fs.statSync(filePath);

	// 检查是否为文件
	if (stats.isFile()) {
		// 提取文件扩展名
		const ext = path.extname(file).toLowerCase();
		// 检查是否为图片文件
		// if (['.jpg', '.jpeg', '.png'].includes(ext)) {
		// 构建目标文件路径
		const destinationPath = path.join(destinationDir, file);

		// 使用 sharp 压缩图片
		sharp(filePath)
			// .resize (800) // 设置最大宽度，例如 800px
			.jpeg({ quality: 10 }) // 调整质量为80（默认为100），数值越低，压缩率越高，图片质量越低
			.toFile(destinationPath, (err, info) => {
				if (err) {
					console.error(`Error compressing ${filePath}:`, err);
				} else {
					console.log(`Compressed ${filePath} to ${destinationPath}`);
				}
			});
		// }
	}
});

console.log('Image compression completed.');
