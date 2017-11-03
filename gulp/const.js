'use strict';

import Dotenv from 'dotenv';

Dotenv.load();

const DEVELOPMENT = process.env.NODE_ENV === 'development';
const APP_NAME = process.env.APP_NAME;
const APP_URL = process.env.APP_URL;
const APP_SRC = './src/';
const APP_PUBLIC = './public/';
const APP_DIST = './dist/';
const APP_JS = './src/**/*.js';
const APP_TEMPLATES = './src/**/*.html';
const APP_SCSS = './src/**/*.scss';
const APP_ASSETS = './assets/**/*';
const APP_HTML = 'index.html';
const APP_INDEX = './src/index.js';
const BUILD_PATH = DEVELOPMENT ? APP_DIST : APP_PUBLIC;
const PUBLIC_HTML = BUILD_PATH + 'index.html';
const PUBLIC_JS = BUILD_PATH + 'main.js';
const PUBLIC_STYLE = BUILD_PATH + 'style.css';
const PUBLIC_ASSETS = [
  BUILD_PATH + 'icons/favicon.ico',
  BUILD_PATH + 'icons/favicon-57.png',
  BUILD_PATH + 'icons/favicon-72.png',
  BUILD_PATH + 'icons/favicon-114.png',
  BUILD_PATH + 'icons/favicon-144.png',
  BUILD_PATH + 'images/user-avatar.png'
];
const PUBLIC_MANIFEST = BUILD_PATH + 'rev-manifest.json';

export {
  APP_NAME,
  APP_URL,
  APP_SRC,
  APP_JS,
  APP_HTML,
  APP_TEMPLATES,
  APP_SCSS,
  APP_ASSETS,
  APP_INDEX,
  APP_PUBLIC,
  APP_DIST,
  DEVELOPMENT,
  BUILD_PATH,
  PUBLIC_HTML,
  PUBLIC_JS,
  PUBLIC_STYLE,
  PUBLIC_MANIFEST,
  PUBLIC_ASSETS
};
