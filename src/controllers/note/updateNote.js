import note from "../../models/noteModel.js"
import zodErrorParser from "../../helpers/zodErrorParser.js"

const updateNote = async (req, res)=>{
    try{
        const noteValidated = note.validateUpdateNote(req.body)
        if(noteValidated.success === false){
            const zodError = zodErrorParser(noteValidated.error)
            return res.status(400).json({
                error: 'Dados inválidos',
                fields: zodError
            })
        }
        const [result] = await note.update(noteValidated.data)
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