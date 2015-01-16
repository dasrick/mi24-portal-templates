module.exports = function (grunt) {
    'use strict';
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            less: {
                files: ['less/*.less'],
                tasks: 'default'
            }
        },
        less: {
            compileCore: {
                options: {
                    paths: ['less'],
                    strictMath: true,
                    sourceMap: true,
                    outputSourceFiles: true,
                    cleancss: true,
                    compress: false,
                    optimization: 2,
                    sourceMapFilename: 'dist/css/mi24-bootstrap.css.map'
                },
                expand: true,
                flatten: false,
                cwd: 'less/',
                src: 'mi24-bootstrap.less',
                dest: 'dist/css/',
                ext: '.css'
            },
            compileTheme: {
                options: {
                    paths: ['less'],
                    strictMath: true,
                    sourceMap: true,
                    outputSourceFiles: true,
                    cleancss: true,
                    compress: false,
                    optimization: 2,
                    sourceMapFilename: 'dist/css/mi24-theme.css.map'
                },
                expand: true,
                flatten: false,
                cwd: 'less/',
                src: 'mi24-theme.less',
                dest: 'dist/css/',
                ext: '.css'
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 9']
            },
            app: {
                src: ['dist/css/*.css', '!dist/css/*.min.css']
            }
        },
        cssmin: {
            minify: {
                expand: true,
                cwd: 'dist/css/',
                src: ['*.css', '!*.min.css'],
                dest: 'dist/css/',
                ext: '.min.css'
            }
        }
    });
    grunt.registerTask('default', ['less', 'autoprefixer', 'cssmin']);
    grunt.registerTask('go', ['default', 'simple-watch']);
};
