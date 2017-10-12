class FilesToCopy {

    constructor() {
        this.files = {};
        this.copyFiles();
        return this;
    }

    copyFile(name, fromPath, toPath) {
        this.files[name.toUpperCase()] = {
            FROM: fromPath,
            TO: toPath || fromPath
        };
        return this;
    }

    copyFiles() {
        return this.copyFile('PACKAGE', 'package.json')
            .copyFile('README', 'README.md')
            .copyFile('LICENSE', 'LICENSE.md')
            .copyFile('GITIGNORE', '.gitignore')
            .copyFile('NPMIGNORE', '.npmignore')
            .copyFile('KARMACONF', 'karma.conf.js')
            .copyFile('TSCONFIG', 'tsconfig.json')
            .copyFile('INDEXDTS', 'index.d.ts')
            .copyFile('EDITORCONFIG', '.editorconfig')
            .copyFile('TSDOC', 'tsdoc.json')
            .copyFile('INDEX', 'src/index.ts')
            .copyFile('INDEXTEST', 'test/index.spec.ts')
            .copyFile('WEBPACK', 'webpack.config.js')
            .copyFile('TYPINGS', 'typings.json')
            .copyFile('TSLINT', 'tslint.json');
    }
}

module.exports = FilesToCopy;