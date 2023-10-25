import note from '../../models/noteModel.js'
import zodErrorParser from '../../helpers/zodErrorParser.js'

const createNote = async (req, res) => {
    try{
        const noteData = req.body
        
        const [result] = await note.create(noteData)
        console.log(result)
        if(result.affectedRows === 1) {

            const newNote = req.body
            delete newNote.pass
            res.status(201).json({
                success: 'Nota criada com sucesso!',
                Note:{
                    id: result.insertId,
                    ...newNote
                }
            })
        }
    } catch(err) {
        console.log(err)
        res.status(500).json({error: 'Server Error'})
    }
}

export default createNote