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
        },
        copy: {
            "mi24-bootstrap-css": {
                expand: true,
                cwd: "vendor/mi24-bootstrap/dist/css/",
                src: "mi24-bootstrap.min.css",
                dest: "../media/css/",
                flatten: false,
                filter: "isFile"
            },
            "mi24-theme-css": {
                expand: true,
                cwd: "vendor/mi24-bootstrap/dist/css/",
                src: "mi24-theme.min.css",
                dest: "../media/css/",
                flatten: false,
                filter: "isFile"
            }
        }
    });
    grunt.registerTask('default', ['less', 'autoprefixer', 'copy']);
    grunt.registerTask('go', ['default', 'simple-watch']);
};
