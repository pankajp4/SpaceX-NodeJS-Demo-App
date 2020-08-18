module.exports = function (grunt) {
	// project configuration with basic tasks
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		run: {
			npm_run_lint: {
				cmd: "npm",
				args: ["run", "lint"]
			}
		},
		uglify: {
			build: {
				files: [{
					cwd: "src/",
					src: ["**/*.js", "!**/*.min.js"],
					dest: "build/",
					ext: ".js",
					expand: true,
					flatten: false,
				}],
			}
		},
		cssmin: {
			build: {
				files: [{
					cwd: "src/",
					src: ["**/*.css", "!**/*.min.css"],
					dest: "build/",
					ext: ".css",
					expand: true,
					flatten: false,
				}]
			}
		},
		imagemin: {
			build: {
				files: [{
					cwd: "src/",
					src: ["**/*.{png,jpg,gif,ico}"],
					dest: "build/",
					expand: true,
				}]
			}
		},
		copy: {
			build: {
				files: [{
					expand: true,
					cwd: "src/models/",
					src: ["**"],
					dest: "build/models/",
				},
				{
					expand: true,
					cwd: "src/views/",
					src: ["**"],
					dest: "build/views/",
				}]
			}
		}
	});

	// load the plugins that provides the configured tasks
	grunt.loadNpmTasks("@sailshq/grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks("grunt-contrib-imagemin");
	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-run");

	// default task(s).
	grunt.registerTask("default", ["run:npm_run_lint", "uglify", "cssmin", "imagemin", "copy"]);
};