const router = require('express').Router();
const { postobekts, getallobekts, delobekts, getoneobekts } = require('./../controls/obekt.controller')
router.route('/obekt').post(postobekts).get(getallobekts)
router.route('/obekt/:id').delete(delobekts).get(getoneobekts)

module.exports = router;