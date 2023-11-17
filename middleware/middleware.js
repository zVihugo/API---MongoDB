const modelo = require('../model/modelo')

function validaRotas(req, res, next) {
    const {nome, descricao, dificuldade} = req.body;
    if (!nome || !descricao || !dificuldade) {
        res.status(400).json({
            error: 'Dados inválidos'
        })
        return
    }
    next()
}

async function validaId(req, res, next) {
    const id = req.params.id
    const livro = await modelo.getByID(id)
    if (!livro) {
        res.status(404).json({
            error: 'Livro não encontrado'
        })
        return
    }
    next()
}

module.exports = {
    validaRotas: validaRotas,
    validaId: validaId
}