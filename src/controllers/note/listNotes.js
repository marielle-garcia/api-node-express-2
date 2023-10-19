import note from '../../models/noteModel.js'

const listNotes = async (req, res)=>{   
    try {
        const [rows, fields] = await note.list()
        if (rows.length === 0) {
            res.status(404).json({message: 'Notas não encontradas.'})
        } else {
            res.json(rows)
        }
    } catch (err) {
        console.error(err)
        res.status(500).json({message: 'Server error'})
    }
}

export default listNotes