const fs = require("fs");
const path = require("path");
const ejs = require('ejs');

var md = require('markdown-it')({
    html: true,
    linkify: true,
    typographer: true
  });
  
var markdownPlugin = {
    async build(inDir, outDir, template, vars) {
        fs.mkdirSync(outDir);
        let files = fs.readdirSync(inDir);
        for (f of files) {
            let fpath = path.resolve(inDir, f);
            if (fs.statSync(fpath).isDirectory()) continue;
            if (fpath.toString().endsWith(".md")) {
                let html = md.render(fs.readFileSync(fpath).toString());
                html = html.replace(/\.md"/g, ".html\"")
                html = html.replace(/<table/g, "<table class=\"table\"")
                vars["pageContent"] = html;
                html = await ejs.renderFile(template, vars);
                fs.writeFileSync(path.resolve(outDir, f.substring(0, f.length - 3) + ".html"), html);
            }
        }
    }
}

module.exports = markdownPlugin;