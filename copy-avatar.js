/* eslint-disable */
const fs = require('fs');
const path = require('path');

const srcPath = 'C:\\Users\\mahal\\.gemini\\antigravity-ide\\brain\\8572393a-e9a7-4b59-932e-46745381595f\\female_developer_avatar_1782550213370.png';
const destDir = path.join(__dirname, 'public');
const destPath = path.join(destDir, 'avatar.png');

try {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log('Successfully copied avatar image to public/avatar.png!');
  } else {
    console.warn('Source avatar image was not found at the generated path.');
  }
} catch (error) {
  console.error('Failed to copy avatar:', error);
}
