/* eslint-disable no-await-in-loop, no-console */

const path = require('path');
const glob = require('glob');
const fs = require('fs-extra');
const showdown = require('showdown');

const converter = new showdown.Converter();

// eslint-disable-next-line require-jsdoc
function escapeUnsafeChar(unsafe) {
  return unsafe.replace(/{/g, '&#123;').replace(/}/g, '&#125;');
}

// eslint-disable-next-line require-jsdoc
function getDemo(content) {
  const lines = content.split(/[\n\r]/);
  let extension = null;

  const tsxStartLine = lines.findIndex((line) => {
    const changedLine = line.replace(/\s/g).toLowerCase();
    if (changedLine.includes('```tsx')) {
      extension = 'tsx';
      return true;
    }
    if (changedLine.includes('```jsx')) {
      extension = 'jsx';
      return true;
    }
    return false;
  });

  if (tsxStartLine < 0) {
    return null;
  }

  const description = content
    .substring(content.indexOf('## en-US') + 1, content.indexOf('```'))
    .trim();

  const tsxEndLine = lines.findIndex(
    (line, index) => index > tsxStartLine && line.trim() === '```',
  );

  let script = lines.slice(tsxStartLine + 1, tsxEndLine).join('\n');

  // insert React & ReactDOM
  if (!script.includes('import React') && !script.includes('import * as React')) {
    script = `import React from 'react';\n${script}`;
  }
  script = `import { storiesOf } from '@storybook/react';\n${script}`;
  script = `import 'antd/dist/antd.less';\n${script}`;

  if (extension === 'jsx') {
    script = script.replace(': React.FC', '');
  }

  if (extension === 'tsx') {
    script = script.replace('= [];', '= Array();');
  }

  return { script, extension, description };
}

(async () => {
  console.time('Execution...');

  const demoFiles = glob.sync(path.join(process.cwd(), 'lib/components/**/demo/*.md'));

  const tmpFolder = path.resolve('stories/vrc-stories');

  for (let i = 0; i < demoFiles.length; i += 1) {
    const demoPath = demoFiles[i];

    const content = await fs.readFile(demoPath, 'utf8');
    // eslint-disable-next-line prefer-const
    let { script, extension, description } = getDemo(content, demoPath);

    const dirs = path.dirname(demoPath).split(path.sep);

    if (script) {
      await fs.ensureDir(path.join(tmpFolder, dirs[dirs.length - 2]));

      script = script.replace(
        'ReactDOM.render(',
        `storiesOf('${dirs[dirs.length - 2]}', module).add('${path
          .basename(demoPath)
          .replace(/\..*/, '')}', () => `,
      );

      script = script.replace(
        /mountNode+,?\n?/g,
        `{ docs: { page: () => (<>${escapeUnsafeChar(converter.makeHtml(description))}</>) } }`,
      );

      const file = path.join(
        tmpFolder,
        `${dirs[dirs.length - 2]}/${path.basename(demoPath).replace(/\..*/, '')}.${extension}`,
      );
      await fs.writeFile(file, script, 'utf8');
    }
  }
})();
