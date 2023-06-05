const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('../client/'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('../server/routes/htmlRoutes.js')(app);

app.listen(PORT, () => console.log(`Zach's Text Editor listening on port: ${PORT}`));