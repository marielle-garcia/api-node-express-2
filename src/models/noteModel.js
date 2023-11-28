import db from '../database/db.js'


const get = async (id) => {
    return await db.query(`SELECT * FROM notes WHERE id = '${id}';`)
}

const list = async () => {
    return await db.query('SELECT * FROM notes;')
}

const create = async (note) => {
    const {title, notes, variant} = note
    return await db.query(`INSERT INTO notes (title, notes, variant) VALUES ('${title}', '${notes}', '${variant}');`)
}

const update = async (note) => {
    const {id, title, notes, variant} = note
    return await db.query(`UPDATE notes SET title = '${title}', notes = '${notes}', variant = '${variant}' WHERE id = '${id}';`)
}

const remove = async (id) => {
    return await db.query(`DELETE FROM notes WHERE id = '${id}';`)
}

export default {get, list, create, update, remove}