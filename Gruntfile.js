module.exports = function(grunt) {

	'use strict';

	var config = {

		sass: {

			live: {
				options: {
					style: 'compressed',
					sourceMap: true
				},

				files: {
					'assets/css/combined.min.css': 'assets/scss/main.scss'
				}
			}
		},

		cssmin: {

			options: {
				sourceMap: true
			},

			live: {
				files: {
					'assets/css/combined.min.css': [
						'assets/css/combined.min.css'
					]
				}
			}
		},

		uglify : {

			dev: {
				options: {
					mangle : true,
					preserveComments: false,
					sourceMap: true
				},

				files : {

					// Main application
					'assets/js/combined.min.js' : [

						// Libraries
						'assets/js/jquery.min.js',
						'assets/js/jquery.mobile.min.js',
						'assets/js/jquery-migrate.min.js',
						'assets/js/jquery-ui.min.js',
						'assets/js/modernizr.min.js',

						// Partials
						'assets/js/project.js'
					]
				}
			}
		},

		smushit: {
			live: {
				src: [
					'assets/images/{,*/}*.{png,jpg,gif}'
				]
			}
		},

		autoprefixer: {
            dist: {
                files: {
                    'assets/css/combined.min.css': 'assets/css/combined.min.css'
                }
            }
        },

		svgstore: {
			options: {
				prefix : 'icon-', // This will prefix each <g> ID
			},
			default : {
				files: {
					'assets/images/svg-defs.svg': ['assets/images/svg/*.svg'],
				}
			}
		},

		watch: {

			sass: {
				files: ['assets/scss/{,*/}{,*/}{,*/}*.scss'],
				tasks: ['sass:live', 'autoprefixer']
			},

			js: {
				files: ['assets/js/*.js'],
				tasks: ['uglify:live'],

				options: {
					livereload: true
				}
			},

			svg: {
				files: ['assets/images/svg/*.svg'],
				tasks: ['svgstore'],

				options: {
					livereload: true
				}
			},

			css: {
				files: ['assets/css/*.css', '!assets/css/*.min.css'],

				options: {
					livereload: true
				}
			},

			config: {
				files: ['Gruntfile.js'],

				options: {
					reload: true
				}
			}
		}
	};

	// Turn off source maps for uglify:live
	config.uglify.live = JSON.parse(JSON.stringify(config.uglify.dev));
	config.uglify.live.options.sourceMap = false;

	// Configure
	grunt.initConfig(config);

	// Load all grunt tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.registerTask('images', ['smushit:live']);
	grunt.registerTask('dev', ['sass:live', 'uglify:dev', 'autoprefixer', 'svgstore', 'watch']);
	grunt.registerTask('live', ['sass:live', 'uglify:live', 'cssmin:live']);

};