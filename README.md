# ejs-sass-static-boilerplate
Boilerplate for a Static website using EJS and SASS.

## Source of Truth
Set site information in the config.js file. These variables are used throughout the site.

## DEVELOPMENT
```yarn setup-for-dev``` and then ```yarn dev```

**Features:**
- Watch css, js, and html files and recompile on change


## PRODUCTION

**Usage:** ```yarn prod```

**Features:**
- Hashes css and js filenames in production for cache busting
- Minification for CSS, JS, and HTML files
- Autoprefix css
- Separates vendor code from your code

## Other Features
- Generate favicons for all devices and media
- Use the latest JavaScript (babel-preset-stage-0)
- A Polyfills.js file that only loads if the client doesn't have
- certain features
