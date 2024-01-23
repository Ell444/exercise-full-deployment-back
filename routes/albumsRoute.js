import Album from "../models/albums.js";
import express, { Router } from 'express';

//Router setup
const router = express.Router();
router.use(express.json());

//Create a resource
router.post('/', async (req, res) => {
     if(!req.body){
        return res.send('Insert a valid album.')
    }; 
    try {
        const album = new Album(req.body);
        await album.save();
        res.send(album);
    }catch(err){
        res.status(400).send(err.message);
    };
});

//Read resource list
router.get('/', async(req, res) => {
    try {
        const albums = await Album.find();
        res.send(albums);
    }catch(err){
        res.status(500).send('Server error.');
    };
});

//Read single resource
router.get('/:id', async(req, res) => {
    try {
        const album = await Album.findById(req.params.id);
        if(!album){
            return res.status(404).send(`Album with ID ${req.params.id} not found.`)
        }
        res.send(album);
    }catch(err){
        res.status(404).send(err.message);
    };
});

//Update resource 
router.put('/:id', async(req, res) => {
    try {
        const album = await Album.findById(req.params.id);
        album.set(req.body);
        await album.save();
        res.send(album);
    }catch(err){
        res.status(404).send(err.message);
    };
});

//Delete resource
router.delete('/:id', async(req, res) => {
    try {
        const album = await Album.findByIdAndDelete(req.params.id);
        res.send(`Album with ID ${req.params.id} deleted successfully`);
    }catch(err){
        res.status(404).send(err.message);
    };
});

export default router;