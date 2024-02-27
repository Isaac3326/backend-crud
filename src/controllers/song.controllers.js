const catchError = require('../utils/catchError');
const Song = require('../models/Song');

const getAll = catchError(async(req, res) => {
    const songs = await Song.findAll();
    return res.json(songs)
});

const create = catchError(async(req, res) => {
    const { name, artist, genre, releaseYear } = req.body;
    const song = await Song.create({
        name: name,
        artist: artist,
        genre:  genre,
        releaseYear: releaseYear
    });
    return res.status(201).json(song)
});

const remove = catchError(async(req, res) =>{
    const { id } = req.params;
    await Song.destroy({ where: { id : id }});
    return res.sendStatus(204);
});

const update = catchError(async(req, res) =>{
    const {  id } = req.params;
    const { name, artist, genre, releaseYear } = req.body;
    const song = await Song.update( 
        { name, artist, genre, releaseYear },
        { where: { id : id }, returning: true }
    );
    return res.json(song);
});

module.exports = {
    getAll,
    create,
    remove,
    update
}