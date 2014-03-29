'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

var TaskGenerator = yeoman.generators.Base.extend({
    init: function () {
        this.pkg = require('../package.json');

        this.on('end', function () {
            if (!this.options['skip-install']) {
                this.installDependencies();
            }
        });
    },

    askFor: function () {
        var done = this.async();

        // have Yeoman greet the user
        this.log(this.yeoman);

        // replace it with a short and sweet description of your generator
        this.log(chalk.magenta('You\'re using the fantastic JavaScript Task generator.'));

        var prompts = [{
            name: 'name',
            message: 'Task NPM Name',
            default: path.basename(process.cwd())
        }, {
            name: 'description',
            message: 'Description',
            default: 'The best task ever.'
        }, {
            name: 'version',
            message: 'Version',
            default: '0.0.1'
        }, {
            name: 'githubUsername',
            message: 'GitHub username'
        }, {
            name: 'license',
            message: 'License',
            default: 'MIT'
        }, {
            name: 'authorName',
            message: 'Author name'
        }, {
            name: 'authorEmail',
            message: 'Author email'
        }, {
            name: 'authorUrl',
            message: 'Author url'
        }, {
            name: 'taskVersion',
            message: 'What version of task does it supported?',
            default: '1.0'
        }];

        this.currentYear = (new Date()).getFullYear();

        this.prompt(prompts, function (props) {
            this.slugname = this._.slugify(props.name);
            this.safeSlugname = this.slugname.replace(
                /-([a-z])/g,
                function (g) { return g[1].toUpperCase(); }
            );
            this.shortSlugname = this.slugname.replace(/^task[\-_]?/, '');
            this.shortSafeSlugname = this.shortSlugname.replace(
                /-([a-z])/g,
                function (g) { return g[1].toUpperCase(); }
            );

            this.shortSafeSlugnameClass = this.shortSafeSlugname.replace(
                /^([a-z])/,
                function (g) { return g.toUpperCase(); }
            );

            if(props.githubUsername){
                this.repoUrl = 'https://github.com/' + props.githubUsername + '/' + this.slugname;
            } else {
                this.repoUrl = 'user/repo';
            }

            if (!props.homepage) {
                props.homepage = this.repoUrl;
            }

            this.props = props;

            done();
        }.bind(this));

    },

    app: function () {
        this.mkdir('lib');
        this.template('lib/name.js', 'lib/' + this.shortSlugname + '.js');
    },

    test: function(){
        this.mkdir('test');
        this.template('test/name_test.js', 'test/' + this.shortSlugname + '_test.js');
    },

    projectfiles: function () {
        this.copy('editorconfig', '.editorconfig');
        this.copy('gitignore', '.gitignore');
        this.copy('npmignore', '.npmignore');
        this.copy('jshintrc', '.jshintrc');

        this.template('_README.md', 'README.md');
        this.template('_package.json', 'package.json');
    }
});

module.exports = TaskGenerator;
