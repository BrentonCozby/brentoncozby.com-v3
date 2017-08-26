import { resolve } from 'path'

// The following variables are used in ./build-tools/ejs-to-html.js in the 'transformer' function
export const DEV_PATH = __dirname
export const PUBLIC_PATH = '/'
export const SITE_TITLE = 'Brenton Cozby'
export const SITE_NAME = 'brentoncozby.com'
export const DESCRIPTION = 'Hello! I am a software developer. This website is a portfolio of my work.'
export const SITE_URL = 'brentoncozby.com'
export const SITE_IMAGE = 'https://s3-us-west-1.amazonaws.com/brentoncozby.com/gardens-pic.jpg'
export const DEVELOPER_NAME = 'Brenton Cozby'
export const DEVELOPER_URL = 'https://brentoncozby.com'

const Dir = {
    dist: resolve(__dirname, 'dist'),
    src: resolve(__dirname, 'src'),
    css: resolve(__dirname, 'src', 'css'),
    js: resolve(__dirname, 'src', 'js'),
    misc: resolve(__dirname, 'src', 'misc'),
    images: resolve(__dirname, 'src', 'images'),
    videos: resolve(__dirname, 'src', 'videos'),
    vendor: resolve(__dirname, 'src', 'vendor'),
    views: resolve(__dirname, 'src', 'views'),
    pages: resolve(__dirname, 'src', 'views', 'pages'),
    partials: resolve(__dirname, 'src', 'views', 'partials'),
}

export { Dir }
