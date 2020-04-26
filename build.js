const fs = require('fs-extra');

const build = async () => {
  await fs.remove('dist');
  await fs.mkdir('dist');
  // css = await fs.readFile('styles.css');
  // css = css
  //   .toString()
  //   .replace(/\n/g, '')
  //   .replace(/  /g, '');
  // html = await fs.readFile('index.html');
  // html = html
  //   .toString()
  //   .replace(/\n/g, '')
  //   .replace(/  /g, '');
  // html = html.replace(
  //   '<link href="styles.css" rel="stylesheet" />',
  //   `<style>${css}</style>`
  // );
  // await fs.writeFile('dist/index.html', html);

  const files = await fs.readdir(__dirname);
  for (const file of files) {
    for (const ext of [
      '.png',
      '.xml',
      '.ico',
      '.svg',
      '.webmanifest',
      '.txt',
      '.html',
      '.css'
    ]) {
      if (file.endsWith(ext)) {
        await fs.copy(file, `dist/${file}`);
      }
    }
  }
};

build();
