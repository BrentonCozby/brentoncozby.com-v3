import {resolve} from 'path'

const Dir = {
    root: __dirname,
    src: resolve(__dirname),
    client: resolve(__dirname, 'src', 'client'),
    views: resolve(__dirname, 'src', 'views'),
    pages: resolve(__dirname, 'src', 'views', 'pages'),
    assets: resolve(__dirname, 'assets'),
    images: resolve(__dirname, 'assets', 'images'),
    dist: resolve(__dirname, 'dist')
}

export {Dir}
