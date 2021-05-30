const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");
const SQL = require("sql-template-strings");

const test = async () => {
    const db = await sqlite.open({
        filename: 'db.sqlite',
        driver: sqlite3.Database
    });
 
    await db.run(`CREATE TABLE IF NOT EXISTS Categories (idCategory INTEGER PRIMARY KEY AUTOINCREMENT, description TEXT NOT NULL UNIQUE, imageURl text NOT NULL );`);
    await db.run(`CREATE TABLE IF NOT EXISTS Photos (idPhoto INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT NOT NULL,description TEXT NOT NULL, imageURl text NOT NULL UNIQUE, isLandingPage INTEGER);`);
    await db.run(`CREATE TABLE IF NOT EXISTS adminInfo (idAdmin INTEGER PRIMARY KEY AUTOINCREMENT, fullname TEXT NOT NULL, imageURl TEXT , address TEXT, phoneNb TEXT,username TEXT,password TEXT,linkdIn TEXT,facebook TEXT,twitter TEXT,Insta TEXT,gmail TEXT,AboutUs Text,locationIP Text);`);
    await db.run(`CREATE TABLE IF NOT EXISTS CategoryPhotos (idCategory INTEGER , idPhoto INTEGER);`);

    const rowsadmin = await db.all(`SELECT * FROM adminInfo`);
    if (rowsadmin.length < 1) {
        await db.run(`INSERT INTO adminInfo (fullname,AboutUs) VALUES (?,?)`, ["Marwa Hodeib","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit ex purus, eu dapibus leo lacinia in. In quis maximus risus. Fusce eget est tincidunt, tincidunt ligula in, luctus lorem. Nullam elementum congue justo et cursus. Aliquam eget eros leo. Proin ullamcorper, nisi non lacinia mattis, elit ante viverra urna, nec venenatis ligula elit mollis velit. Duis tempus ligula quis nisi consectetur posuere ac eget nunc. In non tortor pulvinar, malesuada mauris eu, hendrerit enim. Proin ac tortor faucibus, tempus felis et, dignissim lacus. Maecenas tempus nisi sit amet elit pellentesque ultrices."]);
    }

    const rowscategories = await db.all(`SELECT * FROM Categories`);
    if (rowscategories.length < 1) {
        await db.run(`INSERT INTO Categories (description,imageURl) VALUES (?,?)`, ["All Photos", `images/photos/pic2.jpg`]);
    }
    const rowsPhotos = await db.all(`SELECT * FROM Photos`);
    if (rowsPhotos.length < 1) {
        await db.run(`INSERT INTO Photos (title,description,imageURl) VALUES (?,?,?)`, ["photo1 title", "photo1 description",`images/photos/pic2.jpg`]);
        await db.run(`INSERT INTO CategoryPhotos (idPhoto,idCategory) VALUES (1,1)`)
    }
    // await db.run(`DROP TABLE adminInfo`);
}
 
module.exports = { test };
