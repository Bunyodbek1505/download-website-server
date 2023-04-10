import scrape from 'website-scraper' // only as ESM, no CommonJS 
const options = { 
 urls: ['https://www.olivierifrah.com/about'], 
 // urlFilter: (url) => url.startsWith('https://.uz'), 
 directory: 'olivier-about', 
 // recursive: true, 
 filenameGenerator: 'bySiteStructure', 
 maxRecursiveDepth: 10, 
} 
 
// with async/await 
const result = await scrape(options) 
 
// with promise 
// scrape(options).then((result) => {});
