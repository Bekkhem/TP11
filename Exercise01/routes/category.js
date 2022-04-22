var express = require('express');
const joiValidation = require('../middlewares/joiValidation');
const auth = require('../middlewares/auth');
const {} = require('../schemas');
var router = express.Router();
const categoryService = require('../services/category');
const { create } = require('../models/categories');

router.get('/id/:id', auth.ensureSignedIn, async function(req, res, next) {
    const { id } = req.params;
    const result = await categoryService.findById(id);
    res.json(result);
})

router.post('/create', auth.ensureSignedIn, async(req, res, next) => {
    const { name, desc, imageUrl } = req.body;
    const result = await categoryService.create({ name, desc, imageUrl });
    res.json(result);
})

router.get('/all', auth.ensureSignedIn, async(req, res, next) => {
    try {
        const result = await categoryService.findAll();
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
    const result = await categoryService.update({ _id, name, desc, imageUrl });
    res.json(result);
})

router.post('/delete', auth.ensureSignedIn, async(req, res, next) => {
    // to do
    const { _id } = req.body;
    console.log(_id);
    const result = await categoryService.remove(_id);
    res.json(result);
})

module.exports = router