import note from "../../models/noteModel.js"
import zodErrorParser from "../../helpers/zodErrorParser.js"

const updateNote = async (req, res)=>{
    try{
        const noteData = req.body
        
        const [result] = await note.update(noteData)
        if(result.affectedRows === 1) {
            res.status(200).json({
                success: `Note id: ${req.body.id} Nota editada com sucesso!`,
                Note: {...req.body}
            })
        }else{
            res.status(404).json({error: `Note id: ${req.body.id} Nota não encontrada.`})
        }
    } catch(err) {
        console.log(err)
        res.status(500).json({error: 'Server Error'})
    }
}

export default updateNote