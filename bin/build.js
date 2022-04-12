"use strict"
const fs = require("fs");
const path = require("path");
const ejs = require('ejs');
const markdown = require("./markdown")
// let indexjs = fs.readFileSync(path.resolve(__dirname, "..", "src", "index.ejs")).toString();
async function main() {
    var outDir = path.resolve(__dirname, "..", "dist");
    fs.rmSync(outDir, { recursive: true, force: true });
    fs.mkdirSync(outDir);
    copyFolderRecursiveSync(path.resolve(__dirname, "..", "src", "css"),
        path.resolve(__dirname, "..", "dist"))
    copyFolderRecursiveSync(path.resolve(__dirname, "..", "src", "images"),
        path.resolve(__dirname, "..", "dist"))
    let content = await ejs.renderFile(path.resolve(__dirname, "..", "src", "index.ejs"), { current: "", rootDir: "." });
    fs.writeFileSync(path.resolve(__dirname, "..", "dist", "index.html"), content);

    await markdown.build(path.resolve(__dirname, "..", "src", "api"), path.resolve(__dirname, "..", "dist", "api"),
        path.resolve(__dirname, "..", "src", "_templates", "page.ejs"), { current: "api", rootDir: "./.." });

    await markdown.build(path.resolve(__dirname, "..", "src", "docs"), path.resolve(__dirname, "..", "dist", "docs"),
        path.resolve(__dirname, "..", "src", "_templates", "page.ejs"), { current: "docs", rootDir: "./.." });

}
main();

function copyFileSync(source, target) {

    var targetFile = target;

    // If target is a directory, a new file with the same name will be created
    if (fs.existsSync(target)) {
        if (fs.lstatSync(target).isDirectory()) {
            targetFile = path.join(target, path.basename(source));
        }
    }

    fs.writeFileSync(targetFile, fs.readFileSync(source));
}

function copyFolderRecursiveSync(source, target) {
    var files = [];

    // Check if folder needs to be created or integrated
    var targetFolder = path.join(target, path.basename(source));
    if (!fs.existsSync(targetFolder)) {
        fs.mkdirSync(targetFolder);
    }

    // Copy
    if (fs.lstatSync(source).isDirectory()) {
        files = fs.readdirSync(source);
        files.forEach(function (file) {
            var curSource = path.join(source, file);
            if (fs.lstatSync(curSource).isDirectory()) {
                copyFolderRecursiveSync(curSource, targetFolder);
            } else {
                copyFileSync(curSource, targetFolder);
            }
        });
    }
}
