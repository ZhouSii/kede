// 引入gulp
// 模块：函数|对象

// 印象本地安装的gulp
var gulp = require('gulp');//得到一个对象
var sass = require('gulp-sass');


// 编译sass文件
// gulp的使用
// 任务：
// .. ：上层目录
// .  ：当前目录


// 创建一个gulp任务：编译sass
gulp.task('compileSass',function(){
	// 查找sass文件
	gulp.src('./src/sass/*.scss')	//得到文件流（文件在内存中的状态）scss

	// 通过管道传输
	// 编译
	.pipe(sass({outputStyle:'expanded'}).on('error', sass.logError))						//编译后的文件流 css


	// 输出到硬盘
	.pipe(gulp.dest('./src/css/'))
});


// 创建文件监听任务：文件有修改，则自动编译
gulp.task('jtSass',function(){
	// 当文件有修改，则执行complieSass任务
	gulp.watch('./src/sass/*.scss',['compileSass'])
});

gulp.task('jtSass',function(){
	// 当文件有修改，则执行complieSass任务
	gulp.watch('./src/sass/*.scss',['compileSass'])
});

// 合并压缩js文件
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
gulp.task('mergeJs',function(){
	// 查找js文件
	gulp.src(['./src/js/*.js','!./src/js/{jquery-3.2.1,all,all.min,require}.js'])

	// 合并js
	.pipe(concat('all.js'))

	// 输出到硬盘
	.pipe(gulp.dest('./src/js/'))

	// 压缩
	.pipe(uglify())

	// 重命名
	.pipe(rename({suffix:'.min'}))

	// 输出到硬盘
	.pipe(gulp.dest('./src/js/'))
});



// 自动刷新页面
var browserSync = require('browser-sync');

gulp.task('server',function(){
	// 启动一个自动刷新的服务器
	browserSync({
		// 创建一个静态服务器
		// server:'./src',

		// 指定端口
		port:11110,

		// 代理服务器
		// 用browserSync代理php服务器
		// 	* 识别php
		// 	* 自动刷新
		proxy:'http://localhost:10804',

		// 监听文件修改
		files:['./src/**/*.html','./src/css/*.css','./src/api/*.php']
	});

	// 监听sass修改
	gulp.watch('./src/sass/*.scss',['compileSass']);
});
