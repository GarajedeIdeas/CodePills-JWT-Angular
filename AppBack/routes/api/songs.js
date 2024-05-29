const router = require('express').Router();

const Song = require('../../models/song.model');

router.get('/', async (req, res) => {
    try {
        const songs = await Song.find();
        res.json(songs);
    } catch (error) {
        res.json({ error: error.message });
    }
});

router.get('/:songId', async (req, res) => {
    const { songId } = req.params;

    const song = await Song.findById(songId);
    res.json(song);

});

router.post('/', async (req, res) => {
    try {
        const song = await Song.create(req.body);
        res.json(song);
    } catch (error) {
        res.json({ error: error.message });
    }
});

router.put('/:songId', async (req, res) => {
    const { songId } = req.params;

    try {
        const song = await Song.findByIdAndUpdate(songId, req.body, { new: true });
        res.json(song);
    } catch (error) {
        res.json({ error: error.message });
    }
});

router.delete('/:songId', async (req, res) => {
    const { songId } = req.params;

    try {
        const song = await Song.findByIdAndDelete(songId);
        res.json(song);
    } catch (error) {
        res.json({ error: error.message });
    }
});

module.exports = router;