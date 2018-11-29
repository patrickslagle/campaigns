const os = require('os');

// find user's IP address (IPv4 and non internal address)
function findIpAddress(req, res, next) {
  const ifaces = os.networkInterfaces();
  const IpAdress = [];

  Object.keys(ifaces).forEach((ifname) => {
    ifaces[ifname].forEach((iface) => {
      // find IPv4 non internal (i.e. 127.0.0.1) ip address
      if (iface.family === 'IPv4' && !iface.internal) {
        IpAdress.push(iface.address);
      }
    });
  });
  console.log(IpAdress);
  next(IpAdress);
}

module.exports = {
  findIpAddress,
};
