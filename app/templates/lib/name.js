var Execution = require('execution');

module.exports = Execution.extend({
    name: '<%= shortSafeSlugname %>',
    description: '<%= props.description %>',
    // The type of option could be path, url, stream, array, string, number, date,
    // and array of them like paths or urls that suffix with 's'.
    options: {
        paths: {
            description: 'Files path',
            type: 'paths'
        },
        encoding: {
            description: 'File encoding',
            default: 'utf8',
            type: ['utf8', 'ascii', 'base64']
        }
    },
    execute: function (resolve, reject) {
        var options = this.options;
        var inputs = this.inputs;
        var logger = this.logger;

        resolve(inputs);

    }
})
