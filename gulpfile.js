const gulp = require("gulp"),
      connect = require("gulp-connect"),
      less = require("gulp-less"),
      minify = require("gulp-clean-css"),
      sourcemaps = require("gulp-sourcemaps"),
      rename = require("gulp-rename");

const sources = {
  html: "index.html",
  css: {
    input: "src/batteries-components.less",
    output: "dist/",
    watch: "src/**/*.less"
  }
};

gulp.task("serve", () => {
  return connect.server({
    root: ".",
    livereload: true
  });
});

gulp.task("css", () => {
  return gulp.src(sources.css.input)
    .pipe(sourcemaps.init())
    .pipe(less({
      plugins: [
        require("less-plugin-glob")
      ]
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(sources.css.output))
    .pipe(minify())
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(gulp.dest(sources.css.output))
    .pipe(connect.reload());
});

gulp.task("default", ["css"]);

gulp.task("watch", ["serve"], () => {
  gulp.watch(sources.html).on("change", () => {
    gulp.src(sources.html)
        .pipe(connect.reload());
  });

	gulp.watch(sources.css.watch, ["css"]);
});
