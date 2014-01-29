'use strict';

module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.initConfig({
        mochaTest: {
            options: {
                // reporters include 'spec', 'min', 'dot', and 'nyan'.
                // See mocha docs for more details: http://visionmedia.github.io/mocha/
                reporter: 'spec'
            },
            unit: ['test/**/*.js']
        },

        jshint: {
            options: {
                node: true
            },
            test: {
                options: {
                    expr: true,
                    globals: {
                        exports: true,
                        describe: true,
                        it: true,
                        beforeEach: true,
                        before: true
                    }
                },
                files: {
                    src: '<%= mochaTest.unit %>',
                }
            },


            lib: 'lib/**/*.js'
        }
    });

    grunt.registerTask('test', ['jshint', 'mochaTest:unit'])

};