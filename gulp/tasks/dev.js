'use strict';

import gulp from 'gulp';
import { APP_HTML, APP_JS, APP_SCSS, APP_TEMPLATES } from '../const';

gulp.task('dev', ['html', 'assets', 'webpack'], () => {
  gulp.watch(APP_HTML, ['html']);
  gulp.watch(APP_TEMPLATES, ['htmlhint', 'htmlindent']);
  gulp.watch(APP_JS, ['webpack', 'eslint']);
  gulp.watch(APP_SCSS, ['webpack', 'stylelint']);
});
