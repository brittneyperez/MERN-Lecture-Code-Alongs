const AlbumController = require('../controllers/album.controller')

module.exports = app => {
    app.get('/api/allAlbums', AlbumController.findAllAlbums);
    app.post('/api/newAlbum', AlbumController.createAlbum);
    app.get('/api/oneAlbum/:id', AlbumController.findOneAlbum);
    app.patch('/api/updateAlbum/:id', AlbumController.updateAlbum);
    app.delete('/api/deleteAlbum/:id', AlbumController.deleteAlbum);
}