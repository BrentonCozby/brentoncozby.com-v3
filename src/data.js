// title, description, png-src, gif-src, demo-link, code-link
const creations = [];

// title, description, png-src, gif-src, demo-link, code-link
const creationsFeatured = [
    {
        title: 'Techlaunch.io',
        description: 'Website for the Techlaunch Coding and IT School in Miami, FL.',
        tools: ['PHP', 'SASS', 'Webpack', 'NodeJS', 'jQuery'],
        jpg: 'images/techlaunch.jpg',
        demo: 'https://techlaunch.io',
        code: 'https://github.com/FVItech/Techlaunch.io',
        date: 'June 2017'
    }, {
        title: 'Myocortex',
        description: 'Website for Myocortex Human Performance Systems in Miami, FL. I created the Webpack 2 configurations from scratch. Webpack is controlling the entire build process, from development to production. The animations are built from scratch without any libraries.',
        tools: ['Pug', 'SASS', 'Webpack', 'jQuery'],
        jpg: 'images/myocortex.jpg',
        demo: 'http://www.myocortex.com',
        code: 'https://github.com/BrentonCozby/myocortex-website',
        date: 'June 2017'
    }, {
        title: 'Blog React App',
        description: 'A single-page blogging application with a UI like a magazine and a WYSIWYG editor. Full-stack CRUD app using REST APIs.',
        tools: ['React', 'Redux', 'Firebase', 'Froala-editor', 'Webpack', 'SASS'],
        jpg: 'images/blog-react-redux.jpg',
        demo: 'https://brentoncozby.com/blog-react-redux',
        code: 'https://github.com/BrentonCozby/blog-react-redux',
        date: 'April 2017'
    }, {
        title: 'Rally Point Webinars',
        description: 'Website for Rally Point Webinars. Build tools created and customized with NodeJS, including EJS compilation, CSS/HTML/JS minification, filename hashing for cache-busting, service worker integration, and responsive polyfills from polyfill.io.',
        tools: ['EJS', 'SASS', 'jQuery', 'Webpack', 'NodeJS'],
        jpg: 'images/rally-point-webinars.jpg',
        demo: 'http://rallypointwebinars.com',
        code: 'https://github.com/BrentonCozby/rally-point-webinars',
        date: 'April 2017'
    }, {
        title: 'FVI Continuing Eduation',
        description: 'Website for Continuing Eduation department at the Florida Vocational Institute.',
        tools: ['Webpack', 'Pug', 'SASS', 'jQuery'],
        jpg: 'images/continuing-education.jpg',
        demo: 'https://fvitech.github.io/continuing-education',
        code: 'https://github.com/fvitech/continuing-education',
        date: 'March 2017'
    }, {
        title: 'Lumber Calculator',
        description: 'Optimizes lumber orders and generates cut lists for various City Year Care Force schematics.',
        tools: ['Browserify', 'Pug', 'SASS', 'jQuery'],
        jpg: 'images/lumber-calculator.jpg',
        gif: 'https://i.imgur.com/e52JDDd.gif',
        'demo': 'https://brentoncozby.com/CareForce-Lumber-Calculator/',
        code: 'https://github.com/BrentonCozby/CareForce-Lumber-Calculator',
        date: 'June 2016'
    }, {
        title: 'Recipe App',
        description: 'React application that uses Firebase for the client-side database.',
        tools: ['React', 'create-react-app', 'Firebase', 'Express'],
        jpg: 'images/recipe-app.jpg',
        demo: 'https://brentoncozby.com/free-code-camp/fcc-recipe-app/',
        code: 'https://github.com/BrentonCozby/fcc-recipe-app',
        date: 'December 2016'
    }, {
        title: 'Youtube Clone',
        description: 'Youtube created with react, SASS, Webpack, and the Youtube API.',
        tools: ['React', 'Webpack', 'SASS', 'Youtube API'],
        jpg: 'images/youtube-react.jpg',
        demo: 'https://brentoncozby.github.io/youtube-react',
        code: 'https://github.com/BrentonCozby/youtube-react',
        date: ''
    }, {
        title: 'Quote Collage',
        description: 'Organize your favorite quotes in a beautiful Pinterest-style layout.',
        tools: ['React', 'create-react-app', 'Firebase', 'Express'],
        jpg: 'images/quote-collage.jpg',
        gif: 'https://i.imgur.com/FM2GSEV.gif',
        'demo': 'https://brentoncozby.com/quote-collage/',
        code: 'https://github.com/BrentonCozby/quote-collage',
        date: 'November 2016'
    }, {
        title: 'Image Search API',
        description: 'Returns JSON data for images based on the query string parameters.',
        tools: ['Browserify', 'Express', 'EJS', 'Google APIs', 'SASS', 'Mongo DB'],
        jpg: 'images/image-search-api.jpg',
        demo: 'http://image-search-fcc-cozby.herokuapp.com/',
        code: 'https://github.com/BrentonCozby/image-search-fcc-cozby',
        date: 'January 2017'
    }, {
        title: 'Simon Game from the 80s',
        description: 'It really is that simon game from the 80s.',
        tools: ['Browersify', 'SASS', 'Express'],
        jpg: 'images/simon-game.png',
        demo: 'https://brentoncozby.com/free-code-camp/simon-game-fcc/',
        code: 'https://github.com/BrentonCozby/simon-game-fcc',
        date: 'January 2017'
    }
];

const images = {
    'images/rainbow-hat.jpg': 'Brenton Cozby in a rainbow hat.',
    'images/unibrow.jpg': 'Brenton Cozby modeling the two-in-one mustache/unibrow!',
    'images/professional.jpg': 'Brenton Cozby doing the corporate look.',
    'images/eggnog.jpg': 'Brenton Cozby drinking eggnog at City Year Miami',
    'images/cords.jpg': 'Brenton Cozby with City Year Miami beautifying Cutler Bay Middle School',
    'images/ukulele-camping.jpg': 'Brenton Cozby playing ukulele, singing, and camping.',
    'images/paint.jpg': 'Brenton Cozby really putting some elbow into it with City Year Miami at Georgia Jones-Ayers Middle School.',
    'images/date-auction.jpg': 'Brenton Cozby being auctioned off at a date auction for Philippines disaster relief.',
    'images/happy-baby-brenton.jpg': 'Brenton Cozby looking forward to life ahead.',
    'images/little-brenton-lawnmower.jpg': 'Brenton Cozby learning the meaning of "chores".',
    'images/catastrophe.jpg': 'Brenton Cozby realizing college is ending.',
    'images/alligators.jpg': 'Brenton Cozby at an alligator park in Miami.',
    'images/boxing.jpg': 'Brenton Cozby "Not now God, I\'m doing pushups"',
    'images/city-year.jpg': 'Brenton Cozby making new friends at City Year Miami.',
    'images/cozby-boys.jpg': 'Brenton Cozby with the Cozby Boys.',
    'images/smoke.jpg': 'Brenton Cozby practicing the instagram selfie.',
    'images/studying.jpg': 'Brenton Cozby candid shot whilst studying.',
    'images/superbowl.jpg': 'Brenton Cozby at superbowl XLVII.',
    'images/too-big-for-cart.jpg': 'Brenton Cozby too big for that cart. And too big to be pushed in one.'
};

export {images}
export {creations}
export {creationsFeatured}
