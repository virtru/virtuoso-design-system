/**
 * Transforms CSS @font-family declarations into
 * CSS & HTML classes that
 * test how every font renders in every locale
*/

const fs = require("fs"); // reading & writing files
const css = require("css"); // parsing CSS
const { exec } = require("child_process"); // opening files on macOS

const BASE_DIR = `../../`;
const OUTPUT_DIR = `./css/test/`;
const generated_css_path = `${OUTPUT_DIR}generated.css`;
const generated_html_path = `${OUTPUT_DIR}generated.html`;
const ENCODING = `utf8`;

const [ node, self, ...CSS_FILES ] = process.argv;
const raw_locales = fs.readFileSync(`${OUTPUT_DIR}locales.json`, ENCODING);
const localized_strings = JSON.parse(raw_locales);

main();

function main() {
  let css_classes = generateCSSForEachFont(CSS_FILES);
  generateHTMLForEachLocale(
    Object.keys(localized_strings),
    css_classes,
    CSS_FILES
  );
  console.log("✓ Finished generating test CSS and HTML");
  exec(`open ${generated_html_path}`);
}

/**
 * Writes a CSS file of classes that can be used to render content in every font.
 * Classes are generated based on @font-face declarations.
 *
 * @param {Array} css_files - paths to CSS files that should be parsed
 * @returns {Array} list of generated class names
 */
function generateCSSForEachFont(css_files) {
  fs.writeFileSync(generated_css_path, "", { encoding: ENCODING });
  console.log(`Erased ${generated_css_path}`);

  // we'll need these for HTML classes later
  let class_names = [];
  let extracted_css = css_files.map((css_file) => {
    console.log(`Extracting ${css_file}`);
    let parsed = parseFontFace(css_file);
    class_names = class_names.concat(parsed.class_names);
    return parsed.css;
  }).
  join("\n");

  fs.appendFileSync(generated_css_path, extracted_css, { encoding: ENCODING });
  console.log(`Wrote extracted CSS to ${generated_css_path}`);
  // exec(`open ${generated_css_path}`); // DEBUG

  return class_names;
}

/**
 * @typedef {Object} ParsedFontCSS
 * @property {Array} class_names - parsed CSS class names, based on font names
 * @property {string} css - CSS rules based on font names
 */

/**
 * Converts CSS @font-face declarations like these:
 *
 * @font-face {
 *   font-family: 'Open Sans';
 *   src:
 *     local('Open Sans ExtraBold'),
 *     local('OpenSans-ExtraBold'),
 *     url('../fonts/open_sans/opensans-extrabold.woff2') format('woff2'),
 *     url('../fonts/open_sans/opensans-extrabold.woff') format('woff'),
 *     url('../fonts/open_sans/OpenSans-ExtraBold.ttf') format('truetype');
 *   font-weight: 800;
 *   font-style: normal;
 * }
 *
 * into testable CSS like this:
 *
 * .OpenSans-ExtraBold {
 *   font-family: 'Open Sans';
 *   font-weight: 800;
 *   font-style: normal;
 * }
 *
 * @param {string} css_path - path to CSS file that should be parsed for @font-face declarations
 * @returns {ParsedFontCSS}
 */
function parseFontFace(css_path) {
  const raw_css = fs.readFileSync(css_path, ENCODING);
  const parsed_css = css.parse(raw_css);
  let extracted_css = "";
  let class_names = [];

  parsed_css.stylesheet.rules.
  filter((rule) => { if (rule.type === "font-face") return rule; }).
  forEach((font_face) => {
    // parse local font name from `src` property's `local()` value
    let src = font_face.declarations.find((decl) => {
      if (decl.property === "src") return decl;
    }).value;
    let new_class_name = src.
      match(/local\(.+\)/g)[0].
      replace("local", "").
      replace(/\W+/g, '');

    // add to the list of names we'll return when we're done
    class_names.push(new_class_name);

    // start a new CSS class declaration
    extracted_css += `.${new_class_name} {\n`;

    // copy relevant CSS properties and values into new class
    let properties = ["font-family", "font-weight", "font-style"];
    font_face.declarations.forEach((decl) => {
      if (properties.includes(decl.property)) {
        extracted_css += `  ${decl.property}: ${decl.value};\n`;
      }
    });

    // finish new CSS class declaration
    extracted_css += `}\n\n`;
  });

  return { class_names, css: extracted_css };
}

/**
 * Writes a localized HTML file with every locale and every CSS class.
 *
 * @param {Array} locales - a list of language-locale identifiers such as "en-US"
 * @param {Array} css_classes - a list of CSS classes to wrap, and ultimately style, each localized piece of HTML
 * @param {Array} css_files - paths to CSS files that should be linked to in the HTML output
 */
function generateHTMLForEachLocale(locales, css_classes, css_files) {
  fs.writeFileSync(generated_html_path, "", { encoding: ENCODING });
  console.log(`Erased ${generated_html_path}`);

  let locale_links = locales.map(locale => {
    return `<a href="#${ locale }">${ locale }</a>`;
  });
  let intro = `
<h1>Font test page</h1>
<div>
  The following page renders every font in a localized string for every locale.
</div>
<nav>
  <h1>Supported Locales</h1>
  <ol>
${ locale_links.map(link => "<li>" + link + "</li>").join("\n") }
  </ol>
</nav>
`;
  let content = "\n<hr />\n" +
  locales.map((locale) => {
    return `\n<a name="${locale}"></a>\n` +
      `\n<h1>${locale}</h1>\n` +
      localizeHTMLForEachFont(locale, css_classes);
  }).
  join("\n<hr />\n");
  // console.log(content); // DEBUG

  let link_tags = css_files.map(css_file => {
    return `\n    <link rel="stylesheet" href="${BASE_DIR + css_file}" />`;
  }).join("");
  let html = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Font test page</title>
    <style type="text/css">
      body {
        /* intentionally different from fonts being tested */
        font-family: monospace;
      }
    </style>
    ${ link_tags }
    <link rel="stylesheet" href="${BASE_DIR + generated_css_path}" />
  </head>
  <body>
    ${ intro }
    ${ content }
  </body>
</html>
`;

  fs.appendFileSync(generated_html_path, html, { encoding: ENCODING });
  console.log(`Wrote localized HTML to ${generated_html_path}`);
  // exec(`open ${generated_html_path}`); // DEBUG
}

/**
 * Generates localized HTML elements each of which we expect to render in a certain font (based on CSS classes).
 *
 * @param {string} locale - a language-locale identifier such as "en-US"
 * @param {Array} css_classes - a list of CSS classes to wrap, and ultimately style, each localized piece of HTML
 * @returns {string} - localized HTML
 */
function localizeHTMLForEachFont(locale, css_classes) {
  let html = css_classes.map((font_name) => {
    return `
<section lang="${ locale }" class="${ font_name }">
  <h1>${ font_name }</h1>
${ localized_strings[locale].map(str => `  <p>${ str }</p>`).join("\n") }
</section>
`;
  }).
  join("");
  // console.log(html); // DEBUG
  return html;
}
