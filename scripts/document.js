const fs = require("fs");
const path = require("path");

const jsdocToMarkdown = require('jsdoc-to-markdown');
const { title } = require("process");

const config = JSON.parse(fs.readFileSync(path.normalize(path.join(__dirname, '..', 'config.json')), 'utf-8'));

const EXERCISES_DIR = path.normalize(path.join(__dirname, '..', config.path));
const DOCS_README_PATH = path.normalize(path.join(EXERCISES_DIR, 'README.md'));

try {
  fs.accessSync(EXERCISES_DIR);
} catch (err) {
  console.log(`--- creating ${config.path} directory ---`);
  fs.mkdirSync(EXERCISES_DIR);
};


let newToc = '\n> ' + (new Date()).toLocaleString() + '\n';

let newDocs = '';

const paths = fs.readdirSync(EXERCISES_DIR);

for (let nextPath of paths) {

  const subPath = path.normalize(path.join(EXERCISES_DIR, nextPath));

  const isDirectory = fs.statSync(subPath).isDirectory();
  if (nextPath.includes('.git')) { continue; }

  if (isDirectory) {

    const indexPath = path.normalize(path.join(subPath, 'index.js'));
    const hasIndex = fs.existsSync(indexPath);

    if (!hasIndex) { continue; }

    const reportPath = path.normalize(path.join(subPath, 'report.txt'));
    const report = fs.existsSync(reportPath)
      ? fs.readFileSync(reportPath)
      : '';

    const docs = jsdocToMarkdown.renderSync({ files: indexPath });
    const kindlessDocs = docs.replace(/\*\*Kind[^\n]+/g, '');
    newDocs += '\n---\n\n'
      + `## [./${nextPath}](./${nextPath})\n\n`
      + kindlessDocs
      + '**Tests**\n'
      + '```\n' + report + '\n```\n\n'
      + `[TOP](#${config.title.split(' ').join('-')})\n\n`;

    newToc += `\n- [${nextPath}](#${nextPath})`

  }
};


const oldReadme = fs.existsSync(DOCS_README_PATH)
  ? fs.readFileSync(DOCS_README_PATH, 'utf-8')
  : '';

const tocRegex = /(<!--[ \t]*BEGIN TOC[ \t]*-->)([\s\S]*)(<!--[ \t]*END TOC[ \t]*-->)/;
const tocReplacer = `<!-- BEGIN TOC -->${newToc}\n<!-- END TOC -->`;
const tocedReadme = oldReadme.match(tocRegex)
  ? oldReadme.replace(tocRegex, tocReplacer)
  : `${tocReplacer}\n\n${oldReadme}`;


const titleRegex = /(<!--[ \t]*BEGIN TITLE[ \t]*-->)([\s\S]*)(<!--[ \t]*END TITLE[ \t]*-->)/;
const titleReplacer = `<!-- BEGIN TITLE -->\n# ${config.title}\n<!-- END TITLE -->`;
const titledReadme = tocedReadme.match(titleRegex)
  ? tocedReadme.replace(titleRegex, titleReplacer)
  : `${titleReplacer}\n\n${tocedReadme}`;

const docsRegex = /(<!--[ \t]*BEGIN DOCS[ \t]*-->)([\s\S]*)(<!--[ \t]*END DOCS[ \t]*-->)/;
const docsReplacer = `<!-- BEGIN DOCS -->${newDocs}<!-- END DOCS -->`;
const newReadme = titledReadme.match(docsRegex)
  ? titledReadme.replace(docsRegex, docsReplacer)
  : `${titledReadme}\n\n${docsReplacer}`;

fs.writeFileSync(DOCS_README_PATH, newReadme, 'utf-8');
