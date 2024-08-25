import fs from 'fs';
const minutes = (new Date).getMinutes();

const content = "Elo Żelo \n".repeat(minutes);

console.log(content);

fs.writeFile('Elo Żelo.txt', content, (err) => {
  if (err) {
      // Handle the error
      console.error('Error writing to file:', err);
  } else {
      // Success message
      console.log('File has been written successfully.');
  }
});

