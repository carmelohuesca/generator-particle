const FilesToCopy = require('./files-to-copy');
const Question = require('./question');
const Generator = require('yeoman-generator');

const FILES_TO_COPY = new FilesToCopy().files;
const MKDIRP = require('mkdirp');

module.exports = class GeneratorParticle extends Generator {

    constructor(args, opts) {
        super(args, opts);
    }

    prompting() {
        return this.prompt([
            new Question('name', 'Nombre de la Partícula', this.appname),
            new Question('description', 'Descripción de la Partícula', 'La partícula abstrae un ' + this.appname),
            new Question('version', 'Versión', '0.0.1')
        ]).then(answers => {
            this.particle = {
                name: answers.name,
                moduleName: [answers.name, 'Module'].join(''),
                description: answers.description,
                version: answers.version
            };
            this.copyFiles();
        });
    }

    createFolders() {
        let foldername = this.particle.name || 'no_name';
        MKDIRP(foldername + '/test');
        MKDIRP(foldername + '/src');
    }

    copyFiles() {
        let files = Object.keys(FILES_TO_COPY);
        if ((this.particle.name) !== undefined) {
            files.forEach((key) => {
                this.copyFile(FILES_TO_COPY[key].FROM, FILES_TO_COPY[key].TO);
            });
        }
    }

    copyFile(pathFromPackage, pathToPackage) {
        if (pathFromPackage) {
            this.fs.copyTpl(
                this.templatePath(this.getPathFrom(pathFromPackage)),
                this.destinationPath(this.getPathTo(pathToPackage)),
                this.particle
            );
        }
    }

    getPathFrom(fileName) {
        if (fileName) {
            return [__dirname, 'templates', fileName].join('/');
        }
    }

    getPathTo(fileName) {
        if (fileName) {
            return [this.particle.name, fileName].join('/');
        };
    }

}