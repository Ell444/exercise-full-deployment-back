import Musician from "../models/musicians.js";
import express, { Router } from 'express';

//Router setup
const router = express.Router();
router.use(express.json());

//Create a resource
router.post('/', async (req, res) => {
    try {
        const musician = new Musician(req.body);
        await musician.save();
        res.send(musician);
    }catch(err){
        res.status(400).send(err.message);
    };
});

//Read resource list
router.get('/', async(req, res) => {
    try {
        const musicians = await Musician.find();
        res.send(musicians);
    }catch(err){
        res.status(500).send('Server error.');
    };
});

//Read single resource
router.get('/:id', async(req, res) => {
    try {
        const musician = await Musician.findById(req.params.id);
        if(!musician){
            return res.status(404).send(`Musician with ID ${req.params.id} not found.`)
        }
        res.send(musician);
    }catch(err){
        res.status(404).send(err.message);
    };
});

//Update resource 
router.put('/:id', async(req, res) => {
    try {
        const musician = await Musician.findById(req.params.id);
        musician.set(req.body);
        await musician.save();
        res.send(musician);
    }catch(err){
        res.status(404).send(err.message);
    };
});

//Delete resource
router.delete('/:id', async(req, res) => {
    try {
        const musician = await Musician.findByIdAndDelete(req.params.id);
        res.send(`Musician with ID ${req.params.id} deleted successfully`);
    }catch(err){
        res.status(404).send(err.message);
    };
});

export default router;