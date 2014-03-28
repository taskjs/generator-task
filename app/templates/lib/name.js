var Execution = require('execution');

module.exports = Execution.extend({
    // The type of option could be HTML5 input types: file, directory, number, range, select,
    // url, email, tel, color, date, time, month, time, week, datetime(datetime-local),
    // string(text), boolean(checkbox), array, function and object.
    options: {
        foo: {
            label: 'Amount of parallelism',
            default: 5,
            type: 'range',
            min: 1,
            max: 10
        },
        bar: {
            label: 'File encoding',
            default: 'utf8',
            type: 'select',
            options: ['utf8', 'ascii', 'base64']
        },
        baz: {
            label: 'Paths',
            type: 'file',
            multiple: true,
            accept: 'image/*',
            placeholder: 'Try selecting more than one file when browsing for files.'
        }
    },
    run: function (inputs, options, logger) {
        return this._run(inputs, options, logger);
    },
    execute: function (resolve, reject) {
        var options = this.options;
        var inputs = this.inputs;
        var logger = this.logger;

        resolve(inputs);

    }
})
