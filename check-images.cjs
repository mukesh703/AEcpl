const https = require('https');

const urls = [
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581092921461-eabfbbe4bbcb?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop"
];

Promise.all(urls.map(url => {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve(`${res.statusCode} ${url}`);
    }).on('error', (e) => {
      resolve(`Error ${url} ${e.message}`);
    });
  });
})).then(results => {
  console.log(results.join('\n'));
});
