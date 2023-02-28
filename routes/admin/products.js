const express = require('express');
const productsRepo = require('../../repositories/products');
const newProductTemplate = require('../../views/admin/products/newProduct');
const { requireTitle, requirePrice } = require('./validators');
const { validatorResult } = require('express-validator');

const router = express.Router();

router.get('/admin/products', (req, res) => {});

router.get('/admin/products/new', (req, res) => {
    res.send(newProductTemplate({}));
});

router.post('/admin/products/new', [requireTitle, requirePrice], (req, res) => {
    const errors = validationResult(req);
    res.send('Submitted');
});

module.exports = router;