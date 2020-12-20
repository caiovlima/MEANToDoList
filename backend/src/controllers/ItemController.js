const mongoose = require('mongoose');
const Item = mongoose.model('Item')

module.exports = {
    async index(req, res){
        const itens = await Item.find();
        return res.json(itens);
    },

    async store(req, res){
        const item = await Item.create(req.body);
        return res.json(item);
    },

    async show(req, res){
        const item = await Item.findById(req.params.id);
        return res.json(item);
    },

    async update(req, res){
        const item = await Item.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(item)
    },

    async destroy(req, res){
        await Item.findByIdAndRemove(req.params.id);
        return res.send();
    }
}