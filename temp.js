const fs = require('fs');
const files = fs.readdirSync('public/img/Services');
files.forEach(f => {
  console.log(f, fs.statSync('public/img/Services/' + f).size);
});
