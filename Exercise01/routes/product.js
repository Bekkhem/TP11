var express = require('express');
const joiValidation = require('../middlewares/joiValidation');
const auth = require('../middlewares/auth');
const {} = require('../schemas');
var router = express.Router();
const productService = require('../services/product');
const { create } = require('../models/categories');

router.get('/id/:id', auth.ensureSignedIn, async function(req, res, next) {
    const { id } = req.params;
    const result = await productService.findById(id);
    res.json(result);
})

router.post('/create', auth.ensureSignedIn, async(req, res, next) => {
    const { title, category, item, user, imageUrl, desc } = req.body;
    const result = await productService.create({
        title,
        category,
        item,
        user,
        imageUrl,
        desc
    });
    res.json(result);
})

// all users
router.get('/all', auth.ensureSignedIn, async(req, res, next) => {
    // to do
    try {
        const result = await productService.findAll();
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
    const { _id, title, category, item, user, imageUrl, desc } = req.body;
    const result = await productService.update({ _id, title, category, item, user, imageUrl, desc });
    res.json(result);
})

router.post('/delete', auth.ensureSignedIn, async(req, res, next) => {
    // to do
    const { _id } = req.body;
    console.log(_id);
    const result = await productService.remove(_id);
    res.json(result);
})

module.exports = router