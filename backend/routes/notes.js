const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator'); //to validate input into notes from user
const Note = require('../models/Notes');
var fetchuser = require('../middleware/fetchuser') //use to fetch userid from auth token which is passed into header

// here we will use router.get and it will be pointing to api after '/api/auth'

//ROUTE-1 get all the notes using : GET "/api/auth/getuser" login required
router.get('/fetchallnotes', fetchuser, async (req, res) => {

        try {
                const notes = await Note.find({ user: req.user.id });
                res.json(notes);

        } catch (error) {
                console.log(error.message);
                res.status(500).send("Some error occured")
        }
})




//ROUTE-2 ADD notes using : GET "/api/notes/addnote" login required
router.post('/addnote', fetchuser, [
        body('title', 'Enter a valid name').isLength({ min: 3 }),
        body('description', 'Description must be atleast 5 chars').isLength({ min: 5 })
], async (req, res) => {

        try {
        
                const errors = validationResult(req);//if any error in validation don't move ahead
                if (!errors.isEmpty()) {
                        return res.status(400).json({ errors: errors.array() })
                }

                const { title, description, tag } = req.body;
                //making a new note
                const note = new Note({
                        title : title,
                        description : description,
                        tag :tag,
                        user: req.user.id
                })
                const savedNote = await note.save();
                res.json(savedNote)

        } catch (error) {
                console.log(error.message);
                res.status(500).send("Some error occured")
        }
})


//ROUTE-3 Update note using : PUT "/api/auth/updatenote" login required
router.put('/updatenote/:id', fetchuser, async (req, res) => {
        const {title,description,tag} =req.body

        //Create a newNote object
        const newNote ={};
        //jo jo chize user update krna chahta h vo vo chize newNote me daal do
        if(title){ newNote.title=title;}
        if(description){ newNote.description=description;}
        if(title){ newNote.tag=tag}

        //Before updating check the user(kya ye vo hi h jiski ye  notes h)        
        let note = await Note.findById(req.params.id);
        if(!note){return res.status(404).send("Not Found")}
        
        if(note.user.toString()!==req.user.id ){
                //will give id of note
                return res.status(401).send("Not Allowed")
        }


        //find the note to be updated and update it
        note= await Note.findByIdAndUpdate(req.params.id,{$set:newNote}, {new:true});  //new:true se agar koi naya content aayega to vo create ho jayega
        res.json({note});
})

//ROUTE-4 Delete existing note using : DELETE "/api/auth/deletenote:id" login require
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
        // const {title,description,tag} =req.body

        //check if tht note is present
        let note = await Note.findById(req.params.id);
        if(!note){ return res.status(404).send("Not Found") }

        //verify if it the note belongs to the person who is trying to delete it
        //Before updating check the user(kya ye vo hi h jiski ye  notes h)        
        
        if(note.user.toString() !== req.user.id ){
                //will give id of note
                return res.status(401).send("Not Allowed")
        }

        //find the note to be deleted and delete it
        note= await Note.findByIdAndDelete(req.params.id);  //new:true se agar koi naya content aayega to vo create ho jayega;
        res.json({"Success" : "Note has been delete"});
})

module.exports = router;