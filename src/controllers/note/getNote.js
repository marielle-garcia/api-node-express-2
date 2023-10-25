import note from '../../models/noteModel.js'
import zodErrorParser from '../../helpers/zodErrorParser.js'

const getNote = async (req, res)=>{   
    try {
        const noteData = req.body
        console.log(noteData.id)
    
        const [rows, fields] = await note.get(noteData.id)

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