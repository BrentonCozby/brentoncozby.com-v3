// title, description, png-src, gif-src, demo-link, code-link
const creationsFeatured = [
    {
        title: 'Techlaunch.io',
        description: 'Website for the Techlaunch Coding and IT School in Miami, FL.',
        tools: ['PHP', 'SASS', 'Webpack', 'NodeJS', 'jQuery'],
        jpg: 'https://s3-us-west-1.amazonaws.com/brentoncozby.com/techlaunch.jpg',
        demo: 'https://techlaunch.io',
        code: 'https://github.com/FVItech/Techlaunch.io',
        date: 'June 2017'
    }, {
        title: 'Myocortex',
        description: 'Website for Myocortex Human Performance Systems in Miami, FL. I created the Webpack 2 configurations from scratch. Webpack is controlling the entire build process, from development to production. The animations are built from scratch without any libraries.',
        tools: ['Pug', 'SASS', 'Webpack', 'jQuery'],
        jpg: 'https://s3-us-west-1.amazonaws.com/brentoncozby.com/myocortex.jpg',
        demo: 'http://www.myocortex.com',
        code: 'https://github.com/BrentonCozby/myocortex-website',
        date: 'June 2017'
    }, {
        title: 'Blog React App',
        description: 'A single-page blogging application with a UI like a magazine and a WYSIWYG editor. Full-stack CRUD app using REST APIs.',
        tools: ['React', 'Redux', 'Firebase', 'Froala-editor', 'Webpack', 'SASS'],
        jpg: 'https://s3-us-west-1.amazonaws.com/brentoncozby.com/blog-react-redux.jpg',
        demo: 'https://d9yyyn6b48yl1.cloudfront.net/posts',
        code: 'https://github.com/BrentonCozby/blog-react-redux',
        date: 'April 2017'
    }, {
        title: 'FVI Continuing Eduation',
        description: 'Website for Continuing Eduation department at the Florida Vocational Institute.',
        tools: ['Webpack', 'Pug', 'SASS', 'jQuery'],
        jpg: 'https://s3-us-west-1.amazonaws.com/brentoncozby.com/continuing-education.jpg',
        demo: 'https://fvitech.github.io/continuing-education',
        code: 'https://github.com/fvitech/continuing-education',
        date: 'March 2017'
    }, {
        title: 'Lumber Calculator',
        description: 'Optimizes lumber orders and generates cut lists for various City Year Care Force schematics.',
        tools: ['Browserify', 'Pug', 'SASS', 'jQuery'],
        jpg: 'https://s3-us-west-1.amazonaws.com/brentoncozby.com/lumber-calculator.jpg',
        gif: 'https://i.imgur.com/e52JDDd.gif',
        'demo': 'https://brentoncozby.com/CareForce-Lumber-Calculator/',
        code: 'https://github.com/BrentonCozby/CareForce-Lumber-Calculator',
        date: 'June 2016'
    }, {
        title: 'Recipe App',
        description: 'React application that uses Firebase for the client-side database.',
        tools: ['React', 'create-react-app', 'Firebase', 'Express'],
        jpg: 'https://s3-us-west-1.amazonaws.com/brentoncozby.com/recipe-app.jpg',
        demo: 'https://brentoncozby.com/free-code-camp/fcc-recipe-app/',
        code: 'https://github.com/BrentonCozby/fcc-recipe-app',
        date: 'December 2016'
    }, {
        title: 'Youtube Clone',
        description: 'Youtube created with react, SASS, Webpack, and the Youtube API.',
        tools: ['React', 'Webpack', 'SASS', 'Youtube API'],
        jpg: 'https://s3-us-west-1.amazonaws.com/brentoncozby.com/youtube-react.jpg',
        demo: 'https://brentoncozby.github.io/youtube-react',
        code: 'https://github.com/BrentonCozby/youtube-react',
        date: 'December 2016'
    }, {
        title: 'Quote Collage',
        description: 'Organize your favorite quotes in a beautiful Pinterest-style layout.',
        tools: ['React', 'create-react-app', 'Firebase', 'Express'],
        jpg: 'https://s3-us-west-1.amazonaws.com/brentoncozby.com/quote-collage.jpg',
        gif: 'https://i.imgur.com/FM2GSEV.gif',
        demo: 'https://d3jcu1mtlvo8ex.cloudfront.net/',
        code: 'https://github.com/BrentonCozby/quote-collage',
        date: 'November 2016'
    }, {
        title: 'Image Search API',
        description: 'Returns JSON data for images based on the query string parameters.',
        tools: ['Browserify', 'Express', 'EJS', 'Google APIs', 'SASS', 'Mongo DB'],
        jpg: 'https://s3-us-west-1.amazonaws.com/brentoncozby.com/image-search-api.jpg',
        demo: 'http://image-search-fcc-cozby.herokuapp.com/',
        code: 'https://github.com/BrentonCozby/image-search-fcc-cozby',
        date: 'January 2017'
    }, {
        title: 'Simon Game from the 80s',
        description: 'It really is that simon game from the 80s.',
        tools: ['Webpack', 'SASS', 'Latest JavaScript', 'EJS', 'NodeJS'],
        jpg: 'https://s3-us-west-1.amazonaws.com/brentoncozby.com/simon-game.png',
        demo: 'https://d35zt8tt8drw4a.cloudfront.net/',
        code: 'https://github.com/BrentonCozby/simon-game-fcc',
        date: 'January 2017'
    }, {
        title: 'Calculator',
        description: 'Like the ones I used in elementary school to cheat on math homework',
        tools: ['Webpack', 'SASS', 'Latest JavaScript', 'EJS', 'NodeJS'],
        jpg: 'https://s3-us-west-1.amazonaws.com/brentoncozby.com/calculator.jpg',
        demo: 'https://d30l212gx59yk4.cloudfront.net/',
        code: 'https://github.com/BrentonCozby/calculator-fcc',
        date: 'June 2016'
    }, {
        title: 'Tic Tac Toe',
        description: 'Written in vanilla JavaScript',
        tools: ['Webpack', 'SASS', 'Latest JavaScript', 'EJS', 'NodeJS'],
        jpg: 'https://s3-us-west-1.amazonaws.com/brentoncozby.com/tic-tac-toe-fcc.jpg',
        demo: 'https://d1w0yr82gppuev.cloudfront.net/',
        code: 'https://github.com/BrentonCozby/tic-tac-toe-fcc',
        date: 'June 2016'
    }
]

const images = {
    'https://s3-us-west-1.amazonaws.com/brentoncozby.com/rainbow-hat.jpg': 'Brenton Cozby in a rainbow hat.',
    'https://s3-us-west-1.amazonaws.com/brentoncozby.com/unibrow.jpg': 'Brenton Cozby modeling the two-in-one mustache/unibrow!',
    'https://s3-us-west-1.amazonaws.com/brentoncozby.com/professional.jpg': 'Brenton Cozby doing the corporate look.',
    'https://s3-us-west-1.amazonaws.com/brentoncozby.com/eggnog.jpg': 'Brenton Cozby drinking eggnog at City Year Miami',
    'https://s3-us-west-1.amazonaws.com/brentoncozby.com/cords.jpg': 'Brenton Cozby with City Year Miami beautifying Cutler Bay Middle School',
    'https://s3-us-west-1.amazonaws.com/brentoncozby.com/ukulele-camping.jpg': 'Brenton Cozby playing ukulele, singing, and camping.',
    'https://s3-us-west-1.amazonaws.com/brentoncozby.com/paint.jpg': 'Brenton Cozby really putting some elbow into it with City Year Miami at Georgia Jones-Ayers Middle School.',
    'https://s3-us-west-1.amazonaws.com/brentoncozby.com/date-auction.jpg': 'Brenton Cozby being auctioned off at a date auction for Philippines disaster relief.',
    'https://s3-us-west-1.amazonaws.com/brentoncozby.com/happy-baby-brenton.jpg': 'Brenton Cozby looking forward to life ahead.',
    'https://s3-us-west-1.amazonaws.com/brentoncozby.com/little-brenton-lawnmower.jpg': 'Brenton Cozby learning the meaning of "chores".',
    'https://s3-us-west-1.amazonaws.com/brentoncozby.com/catastrophe.jpg': 'Brenton Cozby realizing college is ending.',
    'https://s3-us-west-1.amazonaws.com/brentoncozby.com/alligators.jpg': 'Brenton Cozby at an alligator park in Miami.',
    'https://s3-us-west-1.amazonaws.com/brentoncozby.com/boxing.jpg': 'Brenton Cozby "Not now God, I\'m doing pushups"',
    'https://s3-us-west-1.amazonaws.com/brentoncozby.com/city-year.jpg': 'Brenton Cozby making new friends at City Year Miami.',
    'https://s3-us-west-1.amazonaws.com/brentoncozby.com/cozby-boys.jpg': 'Brenton Cozby with the Cozby Boys.',
    'https://s3-us-west-1.amazonaws.com/brentoncozby.com/smoke.jpg': 'Brenton Cozby practicing the instagram selfie.',
    'https://s3-us-west-1.amazonaws.com/brentoncozby.com/studying.jpg': 'Brenton Cozby candid shot whilst studying.',
    'https://s3-us-west-1.amazonaws.com/brentoncozby.com/superbowl.jpg': 'Brenton Cozby at superbowl XLVII.',
    'https://s3-us-west-1.amazonaws.com/brentoncozby.com/too-big-for-cart.jpg': 'Brenton Cozby too big for that cart. And too big to be pushed in one.'
}

export {images}
export {creationsFeatured}
