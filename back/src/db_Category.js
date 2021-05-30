const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");
const SQL = require("sql-template-strings");


const initializeDatabase = async () => {

    const db = await sqlite.open({
        filename: 'db.sqlite',
        driver: sqlite3.Database
    });

    // db.all  to return the sql
    //db.run for insert - update - delete
    const getCategoriesList = async (orderBy) => {
        let statement = `SELECT idcategory AS id, description, imageURl FROM categories ORDER BY description `//${orderBy}`

        try {
            const rows = await db.all(statement)
            if (!rows.length) throw new Error(`no rows found`);
            return rows
        } catch (err) {
            throw new Error(`couldn't retrieve categories: ` + err.message)
        }
    }

    const getCategory = async (id) => {
        let statment = `SELECT idcategory AS id, description, imageURl FROM categories WHERE idcategory = ${id}`
        const category = await db.get(statment)
        if (!category) throw new Error(`category ${id} not found`);

        return category
    }



    const createCategory = async (props) => {
        if (!props || !props.description || !props.imageURl) {
            throw new Error(`you must provide a description and an image`)
        }

        const { description, imageURl } = props
        try {
            const result = await db.run(`INSERT INTO categories (description, imageURl) VALUES (?, ?)`, [description, imageURl]);
            const id = result.lastID
            return id
        }
        catch (err) {
            throw new Error(`couldn't insert this combination: ` + err.message);
        }
    }

    const deleteCategory = async (id) => {
        try {
            const result1 = await db.run(`DELETE FROM categoryphotos WHERE idcategory = ?`, id);
            const result2 = await db.run(`DELETE FROM categories WHERE idcategory = ?`, id);

            if (result2.stmt.changes === 0) {
                throw new Error(`category "${id}" does not exist`)
            }
            return true

        } catch (err) {
            throw new Error(`couldn't delete the category "${id}": ` + err.message);
        }
    }

    const updateCategory = async (id, props) => {
        if (!props && !(props.description && props.imageURl)) {
            throw new Error(`you must provide a description or an imageURl`);
        }

        const { description, imageURl } = props;
        let stmt, params = [];

        if (description && imageURl) {
            stmt = `UPDATE categories SET description=?, imageURl=? WHERE idcategory = ?`;
            params = [description, imageURl, id];

        }
        else if (description && !imageURl) {
            stmt = `UPDATE categories SET description=? WHERE idcategory = ?`;
            params = [description, id];
        }
        else if (imageURl && !description) {
            stmt = `UPDATE categories SET imageURl=? WHERE idcategory = ?`;
            params = [imageURl, id];
        }

        try {
            const result = await db.run(stmt, params);
            if (result.stmt.changes === 0) {
                throw new Error(`no changes were made`);
            }
            return true;


        } catch (err) {
            throw new Error(`couldn't update the category ${id}: ` + err.message);

        }
    }

    const controller = {
        getCategoriesList,  // ES6:like myval : getContactsList; but because they have the same name we write just the name of the function
        getCategory,
        createCategory,
        deleteCategory,
        updateCategory

    }

    return controller;
}


module.exports = { initializeDatabase };

