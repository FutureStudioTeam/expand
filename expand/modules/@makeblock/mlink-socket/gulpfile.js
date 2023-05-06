const path = require('path');
const { series, parallel } = require('gulp');
const shell = require(`shelljs`);

const buildDir = path.resolve('build');
const JSDir = path.resolve('js');
const TSDir = path.resolve('ts');

const cleanBuild = async (cb) => {
    shell.rm('-rf', buildDir);
    shell.rm('-rf', JSDir);
}

const cleanForJS = async (cb) => {
    shell.mkdir([JSDir]);
    shell.mv('-f', buildDir + "/*", JSDir);
    shell.rm('-rf', JSDir + "/**/*.map");
    shell.rm('-rf', JSDir + "/**/*.d.ts");
};

const buildJS = series(
    cleanBuild,
    async function build(cb) {
        shell.exec('tsc');
    },
    cleanForJS)

exports.default = series(buildJS)
