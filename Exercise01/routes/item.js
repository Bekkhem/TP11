var express = require('express');
const joiValidation = require('../middlewares/joiValidation');
const auth = require('../middlewares/auth');
const {} = require('../schemas');
var router = express.Router();
const itemService = require('../services/item');

router.get('/id/:id', auth.ensureSignedIn, async function(req, res, next) {
    const { id } = req.params;
    const result = await itemService.findById(id);
    res.json(result);
})

router.post('/create', auth.ensureSignedIn, async(req, res, next) => {
    // to do
    const { name, desc, category } = req.body;
    const result = await itemService.create({ name, desc, category });
    res.json(result);

})

// all users
router.get('/all', async(req, res) => {
    // to do
    try {
        const result = await itemService.findAll();
        res.json(result);
    } catch (err) {
        return {
            success: false,
            error: err || 'error'
        }

    }
})

router.post('/update', auth.ensureSignedIn, async(req, res, next) => {
    // to do
    const { _id, name, desc, imageUrl } = req.body;
    const result = await itemService.update({ _id, name, desc, imageUrl });
    res.json(result);
})

router.post('/delete', auth.ensureSignedIn, async(req, res, next) => {
    // to do
    const { _id } = req.body;
    const result = await itemService.remove(_id);
    res.json(result);
})

module.exports = router