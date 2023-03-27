const express = require('express');
const fs = require('fs');
const crypto = require('crypto');

const app = express();
const port = process.argv[2] || 3000;
const volumeDir = '/serverdata';

app.get('/', (req, res) => {
  const fileData = crypto.randomBytes(1024);
  const fileName = 'random.txt';
  const filePath = `${volumeDir}/${fileName}`;

  // Write file to volume
  fs.writeFile(filePath, fileData, (err) => {
    if (err) throw err;
    console.log(`File ${fileName} has been written`);

    // Calculate checksum of file
    const hash = crypto.createHash('sha256');
    const stream = fs.createReadStream(filePath);
    stream.on('data', (data) => {
      hash.update(data);
    });
    stream.on('end', () => {
      const checksum = hash.digest('hex');
      console.log(`Checksum of ${fileName}: ${checksum}`);

      // Return file and checksum to client
      const fileStream = fs.createReadStream(filePath);
      res.set({
        'Content-Disposition': `attachment; filename=${fileName}`,
        'Content-Type': 'text/plain',
        'Checksum': checksum
      });
      fileStream.pipe(res);
    });
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
