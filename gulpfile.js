const gulp = require('gulp')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

gulp.task('rem', function () {
  const basename = 'rem'
  const version = 'v1.0.0'
  return (
    gulp.src([`src/${basename}/${version}.js`])
      .pipe(babel()) // 转码
      .pipe(uglify()) // 压缩
      .pipe(rename({
        basename,
        suffix: '-' + version
      })) // 重命名
      .pipe(gulp.dest('api')) // 输出 
  )
})
