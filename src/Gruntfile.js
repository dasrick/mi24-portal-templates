module.exports = function (grunt) {
    'use strict';
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            less: {
                files: ['../uit/less/*.less'],
                tasks: 'default'
            }
        },
        less: {
            allFiles: {
                options: {
                    cleancss: true,
                    compress: false
                },
                files: {
                    "../uit/css/style.css": "../uit/less/style.less"
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 9']
            },
            allFiles: {
                src: ['../*/css/*.css', '!../*/css/*.min.css']
            }
        }
    });
    grunt.registerTask('default', ['less', 'autoprefixer']);
    grunt.registerTask('go', ['default', 'simple-watch']);
};
