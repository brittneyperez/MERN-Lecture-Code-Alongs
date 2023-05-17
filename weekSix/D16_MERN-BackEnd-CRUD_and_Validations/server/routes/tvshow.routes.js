const TvShowController = require('../controllers/tvshow.controller');

// since there is only one parameter, app doesn't need to be in ()
module.exports = app => {
    // READ
    app.get('/api/allShows', TvShowController.findAllShows);
    app.get('/api/oneShow/:id', TvShowController.findOneShow);
    // CREATE
    app.post('/api/allShows', TvShowController.createShow);
    // UPDATE
    app.patch('/api/updateShow/:id', TvShowController.updateOneShow);
    // DELETE
    app.delete('/api/deleteShow/:id', TvShowController.deleteShow);
}