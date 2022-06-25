const router = require('express').Router();
const { getallturs, postturs, delturs } = require('./../controls/tur.controllers');


router.route('/tur').get(getallturs).post(postturs);
router.route('/tur/:id').delete(delturs)

module.exports = router;