const fs = require('fs');
const path = require('path');
class red {
    redJson = (req, res) => {
    res.json(JSON.parse(fs.readFileSync('products.json')));
}
sendWelcome = (req, res) => {
    const filePath = path.join(__dirname, '../public/wellcom.html');
    res.sendFile(filePath);
}
}

module.exports = new red();