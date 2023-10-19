import note from '../../models/noteModel.js'
import zodErrorParser from '../../helpers/zodErrorParser.js'

const createNote = async (req, res) => {
    try{
        const noteValidated = note.validateCreateNote(req.body)
        if(noteValidated.success === false){
            const zodError = zodErrorParser(noteValidated.error)
            return res.status(400).json({
                error: 'Dados inválidos',
                fields: zodError
            })
        }
        const [result] = await note.create(noteValidated.data)
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