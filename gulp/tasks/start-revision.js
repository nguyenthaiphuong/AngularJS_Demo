'use strict';

import gulp from 'gulp';
import gulpRev from 'gulp-rev-all';
import { BUILD_PATH, PUBLIC_JS, PUBLIC_STYLE, PUBLIC_ASSETS } from '../const';

gulp.task('start-revision', () => {
  let revFiles = gulp.src([ PUBLIC_JS, PUBLIC_STYLE ].concat(PUBLIC_ASSETS));
  return revFiles
    .pipe(gulpRev.revision({ includeFilesInManifest: ['.css', '.js', '.ico', '.png'] }))
    .pipe(gulp.dest(BUILD_PATH))
    .pipe(gulpRev.manifestFile())
    .pipe(gulp.dest(BUILD_PATH));
});
