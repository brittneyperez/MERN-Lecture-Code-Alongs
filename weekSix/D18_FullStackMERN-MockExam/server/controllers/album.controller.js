const Album = require('../models/album.model');

module.exports = {
    // READ
    findAllAlbums: (req, res) => {
        Album.find()
            .then((allAlbums) => {
                // console.log({ albums: allAlbums })
                res.status(200).json({ albums: allAlbums })
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },
    // CREATE
    createAlbum: (req, res) => {
        Album.create(req.body)
            .then((newAlbum) => {
                res.status(200).json(newAlbum)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },
    // READ ONE
    findOneAlbum: (req, res) => {
        Album.findOne({_id: req.params.id})
            .then((oneAlbum) => {
                console.log({oneAlbum})
                res.status(200).json(oneAlbum)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },
    // UPDATE
    updateAlbum: (req, res) => {
        Album.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
            .then((updatedAlbum) => {
                res.status(200).json(updatedAlbum)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },
    // DELETE
    deleteAlbum: (req, res) => {
        Album.deleteOne({_id: req.params.id})
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(400).json(err)
        });
    }
}