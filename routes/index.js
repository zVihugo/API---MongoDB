var express = require('express');
var router = express.Router();
const Livro = require('../model/modelo')
const {validaRotas, validaId} = require('../middleware/middleware')

router.get('/', async (req, res, next) =>{
  const listar = await Livro.listar();
  console.log(listar)
  res.json({
    livro: listar
  })
});

router.post('/', validaRotas,async (req, res) =>{
  const {nome, descricao, dificuldade} = req.body;

  await Livro.save(nome, descricao, dificuldade).then((livro)=>{
    res.json({
      livro: livro
    })
  })
})

router.put('/:id', validaId,async  (req, res)=>{
  const id = req.params

  const {nome, descrição, dificuldade} = req.body

  await Livro.update(id, {nome, descrição, dificuldade}).then((livro)=>{
    res.json({
      livro: livro
    })
  })
})

router.delete('/:id', validaId, async  (req, res)=>{
  const id = req.params
  await Livro.delete(id).then((livro)=>{
    res.json({
      livro: livro
    })
  })
})
module.exports = router;
