import note from '../../models/noteModel.js'
import zodErrorParser from '../../helpers/zodErrorParser.js'

const deleteNote = async (req, res)=>{
    try{
        const noteData = req.body
        
        const [result] = await note.remove(noteData.id)
        if(result.affectedRows === 1) {
            res.status(200).json({success: `Note id: ${noteData.id} Nota deletada com sucesso!`})
        }else{
            res.status(404).json({error: `Note id: ${noteData.id} Nota não encontrada.`})
        }
    } catch(err) {
        console.log(err)
        res.status(500).json({error: 'Server Error'})
    }
}

export default deleteNote