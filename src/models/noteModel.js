import {conn} from '../database/db.js'

const conexao = await conn.connect();

const get = async (id) => {   
      return await conexao.query(`SELECT * FROM notes WHERE id = '${id}';`)
}

const list = async () => {
    return await conn.query('SELECT * FROM notes;')
}

const create = async (note) => {
    const {titulo, nota, cor} = note
    return await conn.query(`INSERT INTO notes (titulo, nota, cor) VALUES ('${titulo}', '${nota}', '${cor}');`)
}

const update = async (note) => {
    const {id, titulo, nota, cor} = note
    return await conn.query(`UPDATE notes SET titulo = '${titulo}', nota = '${nota}', cor = '${cor}' WHERE id = '${id}';`)
}

const remove = async (id) => {
    return await conn.query(`DELETE FROM notes WHERE id = '${id}';`)
}

export default {get, list, create, update, remove}