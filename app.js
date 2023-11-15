const express = require('express');
const app = express();
const config = require('config')
const port = config.get('port');
const getDatabase = require('./middleware/getData.js');
const router = require('./router/router.js');
const cors = require('cors');
app.use(cors());

app.use(getDatabase);

app.use('/', router);



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});