const express = require('express');
const router = express.Router();



router.get('/healthz', (req, res) => res.send('OK'));   // liveness
router.get('/readyz', (req, res) => res.send('READY')); //Readiness

module.exports = router;
