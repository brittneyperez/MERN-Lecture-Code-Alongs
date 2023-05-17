const TvShow = require('../models/tvshow.model');

module.exports = {
    // CREATE
    createShow: (req, res) => {
        TvShow.create(req.body)
            .then(newShow => res.json({ show: newShow }))
            .catch(err => res.json(err));
    },
    // READ
    findAllShows: (req, res) => {
        TvShow.find() // we are performing a query
            .then(allShows => { // if our query is true, all the shows will be returned through this callback function
                console.log({ shows: allShows })
                res.json({ shows: allShows }) // this will comeback as an array of objects in a key:val pair
            })
            .catch((err) => { // this will catch errors and report what went wrong
                res.json({message: 'Something went wrong:/', error: err})
            });
    },
    findOneShow: (req, res) => {
        console.log(req.params) // 
        TvShow.findOne({ _id: req.params.id })
            .then(oneShow => {
                res.json({show: oneShow})
            })
            .catch((err) => {
                res.json({message: 'Something went wrong:/', error: err})
            })
    },
    // UPDATE
    updateOneShow: (req, res) => {
        TvShow.findOneAndUpdate({ _id: req.params.id }, req.body,
            { new: true, runValidators: true }
        )
            .then(updatedShow => {
                console.log({ show: updatedShow })
                res.json({ show: updatedShow })
            })
            .catch((err) => {
                res.json({message: 'Something went wrong:/', error: err})
            })
    },
    // DELETE
    deleteShow: (req, res) => {
        TvShow.deleteOne({ _id: req.params.id })
            .then(deleteResult => {
                res.json({ result: deleteResult })
            })
            .catch((err) => {
                res.json({message: 'Something went wrong:/', error: err})
            })
    }
}