const os = require('os');
const pool = require('../database/sql-pool');

// find user's IP address (IPv4 and non internal address)
function findIpAddress(req, res, next) {
  const ifaces = os.networkInterfaces();
  Object.keys(ifaces).forEach((ifname) => {
    ifaces[ifname].forEach((iface) => {
      // find IPv4 non internal (i.e. 127.0.0.1) ip address
      if (iface.family === 'IPv4' && !iface.internal) {
        res.locals = { ipAddress: iface.address };
      }
    });
  });
  if (!res.locals.ipAddress) next(new Error('no IP Address found'));
  else next();
}

function findUserData(req, res, next) {
  // change to res.locals once done developing
  const { ipAddress } = res.locals;
  console.log(ipAddress);
  const sql = `
  SELECT "UserLocation"."City", "UserIndustry"."Industry", "UserCompanyInfo"."Size"
  FROM "UserIpAddress" 
  FULL OUTER JOIN "UserLocation" ON "UserLocation"."UserId" = "UserIpAddress"."Id"
  FULL OUTER JOIN "UserIndustry" ON "UserIndustry"."UserId" = "UserIpAddress"."Id"
  FULL OUTER JOIN "UserCompanyInfo" ON "UserCompanyInfo"."UserId" = "UserIpAddress"."Id"
  where "IpAddress" = '${ipAddress}';`;
  pool.query(sql)
    .then((userData) => {
      if (!userData.rows.length) next(new Error('IP Address is not in database yet'));
      else res.json(userData.rows);
    })
    .catch(err => next(err));
}

module.exports = {
  findIpAddress,
  findUserData,
};
