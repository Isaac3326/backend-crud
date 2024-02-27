const { getAll, create, remove, update } = require('../controllers/song.controllers');
const express = require('express');

const songRouter = express.Router();

songRouter.route("/")
		.get(getAll)
        .post(create)

songRouter.route('/:id')
    .delete(remove)
    .put(update)

module.exports = songRouter;