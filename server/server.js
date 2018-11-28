const express = require('express');
const path = require('path');
const os = require('os');

const app = express();

const filePath = path.resolve(__dirname, '../public');
app.use(express.static(filePath));

// find user's IP address (IPv4 and non internal address)
async function findIP(req, res) {
  const ifaces = os.networkInterfaces();

  Object.keys(ifaces).forEach((ifname) => {
    ifaces[ifname].forEach((iface) => {
      // find IPv4 non internal (i.e. 127.0.0.1) ip address
      if (iface.family === 'IPv4' && !iface.internal) {
        console.log(iface.address);
      }
    });
  });
}

app.get('/test', findIP);

app.listen(3000, () => console.log('Listening on PORT: 3000'));