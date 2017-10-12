class Question {

    constructor(name, message, defaultValue) {
        this.type = 'input';
        this.name = name;
        this.message = message;
        this.default = defaultValue || name;
        return this;
    }

}

module.exports = Question;