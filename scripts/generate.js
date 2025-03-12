import { generateHydrationScript } from 'solid-js/web';
import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');

async function generate() {
  // Ensure dist directory exists
  const distDir = path.join(projectRoot, 'dist');
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  // First import the bundled server entry
  const serverEntryPath = path.join(projectRoot, 'dist', 'entry-server.js');
  console.log('Loading server entry from:', serverEntryPath);
  const render = await import(pathToFileURL(serverEntryPath).href).then(m => m.default);

  // Copy index.html to dist if it doesn't exist
  const sourceHtml = path.join(projectRoot, 'index.html');
  const destHtml = path.join(distDir, 'index.html');
  if (!fs.existsSync(destHtml)) {
    fs.copyFileSync(sourceHtml, destHtml);
  }

  // Read the built index.html from dist
  const template = fs.readFileSync(destHtml, 'utf-8');

  // Get the rendered content from the server entry
  const renderedContent = await  render();
  const hydrationScript = generateHydrationScript();

  // Inject the rendered content and scripts
  let finalHtml = template.replace(
    '<div id="root"></div>',
    `<div id="root">${renderedContent}</div>`
  );

  // Add hydration script and client bundle to head
  finalHtml = finalHtml.replace(
    '</head>',
    `    ${hydrationScript}\n    <script type="module" src="/entry-client.js"></script>\n  </head>`
  );

  // Write the final HTML back to dist
  fs.writeFileSync(destHtml, finalHtml);

  console.log('Static site generated successfully!');
}

generate().catch(error => {
  console.error('Error generating static site:', error);
  process.exit(1);
}); 