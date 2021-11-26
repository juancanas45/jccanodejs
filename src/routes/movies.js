const { Router } = require('express');
const router = Router();

const movies = require('../movies.json');
//console.log(movies);


router.get('/movies', (req, res) => {
    res.json(movies); } );

router.post('/movies', (req, res) => {
    res.send("este es el metodo formulario agregar post"); } );

router.put('/movies', (req, res) => {
    res.send("este es el metodo  modificar put"); } );

router.delete('/movies', (req, res) => {
    res.send("este es el metodo  delete"); } );


module.exports = router;



