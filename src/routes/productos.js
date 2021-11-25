const { Router } = require('express');
const router = Router();

const productos = require('../productos.json');
console.log(productos);


router.get('/productos', (req, res) => {
    res.json(productos);

}
);


module.exports = router;



