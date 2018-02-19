var fs = require('fs');
var jsonSass = require('json-sass');

function convertjsontosass() {
    console.log('Entered jsontosass conversion..');
    fs.createReadStream('src/themes/json/tenants.json')
        .pipe(jsonSass({
            prefix: '$theme: ',
        }))
        .pipe(fs.createWriteStream('src/themes/sass/theme.scss'));
    console.log('Output sass file at destination..');
}
convertjsontosass();