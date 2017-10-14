import { resolve } from 'path'

// Use the following variables in src/views. They are made available in
// build-tools/ejs-to-html.js in the 'transformer' function

// The following variables are used in ./build-tools/ejs-to-html.js in the 'transformer' function
export const PP = process.env.NODE_ENV === 'production'
    ? '/'
    : '/'
export const SITE_TITLE = 'Brenton Cozby'
export const SITE_NAME = 'brentoncozby.com'
export const DESCRIPTION = 'Hello! I am a software developer. This website is a portfolio of my work.'
export const SITE_URL = 'brentoncozby.com'
export const SITE_IMAGE = 'https://s3-us-west-1.amazonaws.com/brentoncozby.com/gardens-pic.jpg'
export const DEVELOPER_NAME = 'Brenton Cozby'
export const DEVELOPER_URL = 'https://brentoncozby.com'
export const GOOGLE_ANALYTICS_ID = ''
export const DEV_PATH = __dirname

export const Dir = {
    dist: resolve(__dirname, 'dist'),
    src: resolve(__dirname, 'src'),
    css: resolve(__dirname, 'src', 'css'),
    js: resolve(__dirname, 'src', 'js'),
    static: resolve(__dirname, 'src', 'static'),
    images: resolve(__dirname, 'src', 'static', 'images'),
    videos: resolve(__dirname, 'src', 'static', 'videos'),
    vendor: resolve(__dirname, 'src', 'vendor'),
    views: resolve(__dirname, 'src', 'views'),
    pages: resolve(__dirname, 'src', 'views', 'pages'),
    partials: resolve(__dirname, 'src', 'views', 'partials'),
}
