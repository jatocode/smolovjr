var gulp = require('gulp');
var rsync  = require('gulp-rsync');

gulp.task('default', function() {
    console.log('default task');
});

gulp.task('deploy', function() {
        rsyncPaths = ['index.html', 'scripts' ];

        // Default options for rsync
        rsyncConf = {
                progress: false,
                incremental: true,
                relative: true,
                emptyDirectories: true,
                recursive: true,
                clean: true,
                silent: true,
                exclude: ['.AppleDouble', '.DS_Store'],
                hostname: 'datakille.se',
        username : 'tobias',
        destination: '/var/www/datakille/smolovjr',
        };

        return gulp.src(rsyncPaths).pipe(rsync(rsyncConf));
});
