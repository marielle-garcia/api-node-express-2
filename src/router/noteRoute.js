import express from 'express'

import listNotes from '../controllers/note/listNotes.js'
import getNote from '../controllers/note/getNote.js'
import createNote from '../controllers/note/createNote.js'
import updateNote from '../controllers/note/updateNote.js'
import deleteNote from '../controllers/note/deleteNote.js'

const router = express.Router()

router.get('/', getNote)
router.get('/list', listNotes)
router.post('/', createNote)
router.put('/', updateNote)
router.delete('/', deleteNote)

export default router