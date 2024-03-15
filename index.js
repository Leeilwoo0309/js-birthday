const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/html/index.html');
});

app.listen(3000, () => {
    console.log('3000에서 개쩌는 실행중..')
})