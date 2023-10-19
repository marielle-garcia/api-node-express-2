import note from '../../models/noteModel.js'
import zodErrorParser from '../../helpers/zodErrorParser.js'

const deleteNote = async (req, res)=>{
    try{
        const noteValidated = note.validadeIdNote(req.body)
        if(noteValidated.success === false){
            const zodError = zodErrorParser(noteValidated.error)
            return res.status(400).json({
                error: 'Dados inválidos',
                fields: zodError
            })
        }
        const [result] = await note.remove(noteValidated.data.id)
        if(result.affectedRows === 1) {
            res.status(200).json({success: `Note id: ${noteValidated.data.id} Nota deletada com sucesso!`})
        }else{
            res.status(404).json({error: `Note id: ${noteValidated.data.id} Nota não encontrada.`})
        }
    } catch(err) {
        console.log(err)
        res.status(500).json({error: 'Server Error'})
    }
}

export default deleteNote