const fs = require('fs');


fs.writeFile('sample.txt', 'Hello, this is a sample text.', (err) => {
    if (err) {
        console.error('Error writing to sample.txt:', err);
    } else {
        console.log('sample.txt created and text written.');
    }
});




fs.writeFile('output.txt', 'This is the output text.', (err) => {
    if (err) {
        console.error('Error writing to output.txt:', err);
    } else {
        console.log('output.txt created and text written.');
    }
});
