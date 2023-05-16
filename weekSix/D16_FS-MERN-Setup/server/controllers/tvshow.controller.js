const TvShow = require('../models/tvshow.model');

module.exports = {
    // CREATE
    createShow: (req, res) => {
        TvShow.create(req.body)
            .then(newShow => res.json({ show: newShow }))
            .catch(err => response.json(err));
    },
    // READ
    findAllShows: (req, res) => {
        TvShow.find() // we are performing a query
            .then((allShows) => { // if our query is true, all the shows will be returned through this callback function
                console.log(res.data)
                res.json({ shows: allShows }) // this will comeback as an array of objects in a key:val pair
            })
            .catch((err) => { // this will catch errors and report what went wrong
                res.json({message: 'Something went wrong:/', error: err})
            });
    }
    // UPDATE
    // DELETE
}


// module.exports.findOneSingleUser = (req, res) => {
//     User.findOne({ _id: req.params.id })
//             .then(oneSingleUser => {
//                     res.json({ user: oneSingleUser })
//             })
//             .catch((err) => {
//                     res.json({ message: 'Something went wrong', error: err })
//             });
// }

// module.exports.createNewUser = (req, res) => {
//     User.create(req.body)
//             .then(newlyCreatedUser => {
//                     res.json({ user: newlyCreatedUser })
//             })
//             .catch((err) => {
//                     res.json({ message: 'Something went wrong', error: err })
//             });
// }

// module.exports.updateExistingUser = (req, res) => {
//     User.findOneAndUpdate(
//             { _id: req.params.id },
//             req.body,
//             { new: true, runValidators: true }
//     )
//     .then(updatedUser => {
//             res.json({ user: updatedUser })
//     })
//     .catch((err) => {
//             res.json({ message: 'Something went wrong', error: err })
//     });
// }

// module.exports.deleteAnExistingUser = (req, res) => {
//     User.deleteOne({ _id: req.params.id })
//             .then(result => {
//                     res.json({ result: result })
//             })
//             .catch((err) => {
//                     res.json({ message: 'Something went wrong', error: err })
//             });
// }