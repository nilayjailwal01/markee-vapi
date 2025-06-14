
const envURL = {
    local: 'http://localhost:5000/',
    dev: 'https://markee.latentview.com/',
    stage: '',
    prod: ''
}

let env = 'dev'
let URL=''

if (env === 'local') {
    URL = envURL.local;
}
else if (env === 'dev') {
    URL = envURL.dev;
}
else if (env === 'stage') {
    URL = envURL.stage;
}
else if (env === 'prod') {
    URL = envURL.prod;
}

console.log('URLURL', URL)

export default URL
