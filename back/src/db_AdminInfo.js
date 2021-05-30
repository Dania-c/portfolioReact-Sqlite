const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");
const SQL = require("sql-template-strings");


const initializeDatabase = async () => { 

    const db = await sqlite.open({
        filename: 'db.sqlite',
        driver: sqlite3.Database
    });


    const getAdminInfo = async (id) => {
        let statement = `SELECT * FROM adminInfo Where idAdmin = ${id}` 

        try {
            const rows = await db.all(statement)
            if (!rows.length) throw new Error(`no rows found`);
            return rows
        } catch (err) {
            throw new Error(`couldn't retrieve adminInfo: ` + err.message)
        }
    }



    const updateAdminInfo = async (id,props) => {
let {fullname, imageURl , address, phoneNb ,username,password,linkdIn,facebook,twitter ,Insta,gmail,AboutUs,locationIP}=props;
        let attributes = ``;
        let attValues = []

        if (props.fullname) {
            attributes += ` fullname = ? ,`;
            attValues.push(fullname);
        }
        if (props.imageURl) {
            attributes += ` imageURl = ? ,`;
            attValues.push(imageURl);
        }
        if (props.address) {
            attributes += ` address = ? ,`;
            attValues.push(address);
        }
        if (props.phoneNb) {
            attributes += ` phoneNb = ? ,`;
            attValues.push(phoneNb);
        }
        if (props.username) {
            attributes += ` username = ? ,`;
            attValues.push(username);
        }
        if (props.password) {
            attributes += ` password = ? ,`;
            attValues.push(password);
        }
        if (props.linkdIn) {
            attributes += ` linkdIn = ? ,`;
            attValues.push(linkdIn);
        }
        if (props.facebook) {
            attributes += ` facebook = ? ,`;
            attValues.push(facebook);
        }
        if (props.twitter) {
            attributes += ` twitter = ? ,`;
            attValues.push(twitter);
        }
        if (props.Insta) {
            attributes += ` Insta = ? ,`;
            attValues.push(Insta);
        }
        if (props.gmail) {
            attributes += ` gmail = ? ,`;
            attValues.push(gmail);
        }
        if (props.AboutUs) {
            attributes += ` AboutUs = ? ,`;
            attValues.push(AboutUs);
        }
        if (props.locationIP) {
            attributes += ` locationIP = ? ,`;
            attValues.push(locationIP);
        }

        attributes = attributes.slice(0, -1);
        try {
            attributes += ` WHERE idAdmin = ?`
            attValues.push(id);
            const result = await db.run(` UPDATE adminInfo SET ${attributes} `, attValues);
            if (result.changes === 0) throw new Error("no changes");
            return true;
        } catch (e) {
            throw new Error( e.message);
        }
    }

    const controller = {
        getAdminInfo,
        updateAdminInfo

    }

    return controller;
}


module.exports = { initializeDatabase };

