import note from '../../models/noteModel.js'
import zodErrorParser from '../../helpers/zodErrorParser.js'

const getNote = async (req, res)=>{   
    try {
        const noteValidated = note.validadeIdNote(req.body)
        if(noteValidated.success === false){
            const zodError = zodErrorParser(noteValidated.error)
            return res.status(400).json({
                error: 'Dados inválidos',
                fields: zodError
            })
        }
        const [rows, fields] = await note.get(noteValidated.data.id)
        if (rows.length === 0) {
            res.status(404).json({message: 'Nota não encontrada.'})
        } else {
            delete rows[0].pass
            res.json(rows[0])
        }
    } catch (err) {
        console.error(err)
        res.status(500).json({message: 'Server error'})
    }
}

export default getNote