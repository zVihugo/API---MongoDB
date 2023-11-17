const mongoose = require('../helpers/banco');

const livroSchema = new mongoose.Schema({
    nome: String,
    descricao: String, 
    dificuldade: String
})

const livro = mongoose.model("Teste", livroSchema);

const listar = async () => {
    const livros = await livro.find({});
    return livros
}

const save = async (nome, descricao, dificuldade) => {
    const newLivro = await livro.create({
        nome: nome,
        descricao: descricao,
        dificuldade: dificuldade})
    return newLivro;
}

const update = async (id, obj) => {
    let livro = await livrosModel.findById(id)
    if (!livros) {
        return false
    }
    
    Object.keys(obj).forEach(key => livro[key] = obj[key])
    await livro.save()
    return livro
}

const purge = async (id) => {
    const livro = await livroSchema.deleteOne(id)
    return livro
}

const getByID = async (id) => {
    const livro = await livroSchema.findById(id)
    return livro
}


module.exports = {
    listar,
    save,
    update,
    purge,
    getByID
}