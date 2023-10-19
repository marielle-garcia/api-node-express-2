import db from '../database/db.js'


const get = async (id) => {
    return await db.query('SELECT * FROM notes WHERE id = ?;', [id])
}

const list = async () => {
    return await db.query('SELECT * FROM notes;')
}

const create = async (note) => {
    const {titulo, nota, cor} = note
    return await db.query('INSERT INTO notes (titulo, nota, cor) VALUES (?, ?, ?);', [titulo, nota, cor])
}

//   `id` int(11) NOT NULL,
//   `titulo` varchar(50) NOT NULL,
//   `nota` varchar(1000) NOT NULL,
//   `cor` varchar(20) NOT NULL

const update = async (note) => {
    const {id, titulo, nota, cor} = note
    return await db.query('UPDATE notes SET titulo = ?, nota = ?, cor = ? WHERE id = ?;', [titulo, nota, cor, id])
}

const remove = async (id) => {
    return await db.query('DELETE FROM notes WHERE id = ?;', [id])
}

export default {get, list, create, update, remove}