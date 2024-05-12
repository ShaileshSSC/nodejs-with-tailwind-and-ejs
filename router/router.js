const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
    res.send(path.join(__dirname, 'index.html'));
});

module.exports = router;