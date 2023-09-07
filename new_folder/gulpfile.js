var gulp = require ("gulp");
//�������� ������ Gulp
var sass = require ("gulp-sass"), //�������� SASS � CSS
cssnano = require ("gulp-cssnano"), //�������� CSS
autoprefixer = require ('gulp-autoprefixer'), //��������� �������� �
                                                  //CSS ��� ��������
    //������ �������� 
    imagemin = require('gulp-imagemin'), //��������� ���������
 
    concat = require("gulp-concat"), //��'������� ����� - ������������ 
    uglify = require("gulp-uglify"), //�������� javascript
    rename = require("gulp-rename"); //�������������� �����

gulp.task ( "html", function () {
return gulp.src("src / *. html")
    .pipe(gulp.dest("dist")); });
//��'�������, ��������� Sass � CSS, ��������� �������� � �������� �������� ����
gulp.task("sass", function () {
    return gulp.src("src / sass / *. sass").pipe(concat('styles.sass')).pipe(sass())
        .pipe(autoprefixer({
        });
    browsers: ['last 2 versions'],
        cascade: false
}))
.pipe(cssnano())
    .pipe(rename({ suffix: '.min' })).pipe(gulp.dest("dist / css"));
//��'������� � ��������� JS-����� 
gulp.task("scripts", function () {
    return gulp.src("src / js / *. js") //������� ��������� ����� 
    .pipe(concat('scripts.js')) // ������������ js-����� � ���� 
    .pipe(uglify()) //��������� ����
    .pipe(rename({ suffix: '.min' })) //�������������� ����� �
});
//���������� .min
.pipe(gulp.dest("dist / js")); // ��������� ����������
//c�������� ���������
gulp.task('imgs', function () {
    return gulp.src("src / images /*.+ (jpg | jpeg | png | gif)").pipe(imagemin({
    });
    progressive: true,
        svgoPlugins: [{ removeViewBox: false }], interlaced: true
})).pipe(gulp.dest("dist / images"))

gulp.task("watch", function () {
gulp.watch("src / *. html", ["html"]);
gulp.watch("src / js / *. js", ["scripts"]);
gulp.watch("src / sass / *. sass", ["sass"]);
gulp.watch("src / images /*.+ (jpg | jpeg | png | gif)", ["imgs"]);
});

gulp.task("default", ["html", "sass", "scripts", "imgs", "watch"]);

