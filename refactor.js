/*
Original callback-based code

const fs = require('fs');

fs.readFile('file.txt', 'utf8', function(err, data) {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File contents (callback-based):', data);
});
*/

// Refactored code using Promises and async/await
const fsPromises = require('fs').promises;

async function readFileAsync() {
  try {
    const data = await fsPromises.readFile('file.txt', 'utf8');
    console.log('File contents (async/await):', data);
  } catch (err) {
    console.error('Error reading file:', err);
  }
}

readFileAsync();
