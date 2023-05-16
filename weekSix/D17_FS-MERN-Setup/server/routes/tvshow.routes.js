const TvShowController = require('../controllers/tvshow.controller');

// since there is only one parameter, app doesn't need to be in ()
module.exports = app => {
    // CREATE: app.post('/api/users', TvShowController.createNewUser);
    // READ
    app.get('/api/allShows', TvShowController.findAllShows);
    // app.get('/api/users/:id', TvShowController.findOneSingleUser);
    
    // UPDATE: app.patch('/api/users/:id', TvShowController.updateExistingUser);
    // DELETE: app.delete('/api/users/:id', TvShowController.deleteAnExistingUser);
}