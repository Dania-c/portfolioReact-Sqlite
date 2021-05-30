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
    const getPhotosList = async (orderBy) => {
        let statement = `SELECT idphoto AS id,title,description,imageURl FROM photos ORDER BY ${orderBy}`

        try {
            const rows = await db.all(statement)
            if (!rows.length) throw new Error(`no rows found`);
            return rows
        } catch (err) {
            throw new Error(`couldn't retrieve photos: ` + err.message)
        }
    }
    const getcategoryPhotosList = async (idcategory) => {
        let statement = `SELECT a.idphoto AS id,a.title,a.description,a.imageURl FROM photos a,CategoryPhotos b where a.idphoto = b.idphoto and b.idcategory = ${idcategory}`

        try {
            const rows = await db.all(statement)
            if (!rows.length) throw new Error(`no rows found`);
            return rows
        } catch (err) {
            throw new Error(`couldn't retrieve photos: ` + err.message)
        }
    }

    const getPhoto = async (id) => {
        let statment = `SELECT idphoto AS id, title,description,imageURl, isLandingPage FROM photos WHERE idphoto = ${id}`
        const photo = await db.get(statment)
        if (!photo) throw new Error(`photo ${id} not found`);

        return photo
    }



    const createPhoto = async (props) => {
        // if (!props || !props.title || !props.description || !props.imageURl) {
        //     throw new Error(`you must provide a description,a title and an image`)
        // } dania to restore later on

        const { title, description, imageURl, isLandingPage } = props
        try {
            console.log("atributes from create title :",props.title);
            console.log("atributes from create desc :",props.description);
         
            const result = await db.run(`INSERT INTO photos (title,description, imageURl, isLandingPage) VALUES (?, ?, ?, ?)`, [title, description, imageURl, isLandingPage]);
            
            const id = result.lastID
            //// add a line in category-photos
            const result2 = await db.run(`INSERT INTO categoryphotos (idcategory,idphoto) VALUES (?, ?)`, [1, id]);
            
            
            console.log("from back on add the ID is ",id)
            return id
        }
        catch (err) {
            throw new Error(`couldn't insert this combination: ` + err.message);
        }
    }

    const deletePhoto = async (id) => {
        try {
            const result1 = await db.run(`DELETE FROM category_photos WHERE idphoto = ?`, id);
            const result2 = await db.run(`DELETE FROM photos WHERE idphoto = ?`, id);

            if (result2.stmt.changes === 0) {
                throw new Error(`photo "${id}" does not exist`)
            }
            return true

        } catch (err) {
            throw new Error(`couldn't delete the photo "${id}": ` + err.message);
        }
    }

    const updatePhoto = async (id, props) => {
        let {title ,description,imageURl,isLandingPage} = props;
        console.log("from back props:",props);
        let attributes = ``;
        let attValues = []
        if (props.title) {
            attributes += ` title = ? ,`;
            attValues.push(title);
        }
        if (props.description) {
            attributes += ` description = ? ,`;
            attValues.push(description);
        }
        if (props.imageURl) {
            attributes += ` imageURl = ? ,`;
            attValues.push(imageURl);
        }
        if (props.isLandingPage) {
            attributes += ` isLandingPage = ? ,`;
            attValues.push(isLandingPage);
        }
        
        attributes = attributes.slice(0, -1);
        try {
            attributes += ` WHERE idPhoto = ?`
            attValues.push(id);
            console.log("atributes from update :",attributes);
            console.log("attvalues from update :",attValues);
            const result = await db.run(` UPDATE photos SET ${attributes} `, attValues);
            if (result.changes === 0) throw new Error("no changes");
            return true;
        } catch (e) {
            throw new Error( e.message);
        }
        
    }

    const fillTemp_CategoriesList = async(id) =>{
         
         try {
            const result1 = await db.run(`delete  from temp_photoCategories`);
            const result2 = await db.run(`insert into temp_photoCategories Select idCategory,description,0 as belongTo from Categories`);
            const result3 = await db.run(`update temp_photoCategories SET belongTo = 1 where idCategory
            in (SELECT  idCategory from CategoryPhotos where CategoryPhotos.idPhoto = ?) `, id);
             const result = await db.all(`select * from temp_photoCategories `)

            if (result3.stmt.changes === 0) {
                throw new Error(`photo "${id}" does not exist`)
            }
            return result

        } catch (err) {
            throw new Error(`something is wrong ` + err.message);
        }
    }
    const getTemp_CategoriesList = async(orderBy) =>{
         
        // try {
           const result = await db.all(`select idCategory,description,belongTo from temp_photoCategories ORDER BY description `)
            return result;
        //    if (result.stmt.changes === 0) {
        //        throw new Error(`photo  does not exist`)
        //    }
        //    return true

    //    } catch (err) {
        //    throw new Error(`something is wrong ` + err.message);
    //    }
   }
    const controller = {
        getPhotosList,  // ES6:like myval : getContactsList; but because they have the same name we write just the name of the function
        getPhoto,
        createPhoto,
        deletePhoto,
        updatePhoto,
        getcategoryPhotosList,
        fillTemp_CategoriesList,
        getTemp_CategoriesList

    }

    return controller;
}


module.exports = { initializeDatabase };

