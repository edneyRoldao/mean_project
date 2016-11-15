module.exports = function(grunt) {
	grunt.initConfig({
		// Task one
		copy: {
			project: {
				expand: true,
				cwd: ".",
				src: ["**", "!Gruntfile.js", "!package.json", "!bower.json"],
				dest: "dist"
			}
		},

		// Task two
		clean: {
			dist: {
				src: "dist"
			}
		},

		// Task three
		usemin: {
			html: "dist/app/views/**/*.ejs"
		},

		// Task four
		useminPrepare: {
			options: {
				root: "dist/public",
				dest: "dist/public"
			},
			html: "dist/app/views/**/*.ejs"
		},

		// Task five
		ngAnnotate: {
			scripts: {
				expand: true,
				src: ["dist/public/js/**/*.js"]
			}
		}
	});

	grunt.registerTask("default", ["dist", "minify"]);
	grunt.registerTask("dist", ["clean", "copy"]);
	grunt.registerTask("minify", ["useminPrepare", "ngAnnotate", "concat", "uglify", "cssmin", "usemin"]);
	grunt.loadNpmTasks("grunt-usemin");
	grunt.loadNpmTasks("grunt-ng-annotate");
	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-uglify");

}; 