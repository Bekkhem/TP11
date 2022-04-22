var express = require('express');
const joiValidation = require('../middlewares/joiValidation');
const auth = require('../middlewares/auth');
const {} = require('../schemas');
var router = express.Router();
const userService = require('../services/user');

router.get('/id/:id', auth.ensureSignedIn, async function(req, res, next) {
    const { id } = req.params;
    const result = await userService.findById(id);
    res.json(result);
})

// all users
router.get('/all', auth.ensureSignedIn, async(req, res) => {
    // to do
    try {
        const result = await userService.findAll();
        res.json(result);
    } catch (err) {
        return {
            success: false,
            error: err || 'error'
        }

    }
})

router.post('/update-password', auth.ensureSignedIn, auth.currentUser, async(req, res, next) => {
    // to do
    const { _id, newpassword, } = req.body;
    const result = await userService.update({ _id, newpassword });
    res.json(result);

})

router.post('/update', auth.ensureSignedIn, async(req, res, next) => {
    const { _id, username, firstName, lastName, } = req.body;
    const result = await userService.update({ _id, username, firstName, lastName });
    res.json(result);
})

router.post('/delete', auth.ensureSignedIn, async(req, res, next) => {
    const { _id } = req.body;
    console.log(_id);
    const result = await userService.remove(_id);
    res.json(result);
})

module.exports = router