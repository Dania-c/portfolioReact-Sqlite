
const db_Create = require('./db_Create');
const db_Category = require('./db_Category');
const db_AdminInfo = require('./db_AdminInfo');
const db_Photo = require('./db_Photo');
const app = require('./app');
const path = require("path");
const multer = require('multer');

db_Create.test();
console.log("first back");
const startCategory = async () => {
    const controller = await db_Category.initializeDatabase();

    // CREATE category
    app.get('/categories/create', async (req, res, next) => {
        const { description, imageURl } = req.query
        const result = await controller.createCategory({ description, imageURl })
        res.json({ success: true, result })
    })

    // READ single category
    app.get('/categories/:id', async (req, res, next) => {
        const { id } = req.params
        const category = await controller.getCategory(id)
        res.json({ success: true, result: category })
    })

    // DELETE category
    app.get('/categories/delete/:id', async (req, res, next) => {
        const { id } = req.params
        const result = await controller.deleteCategory(id)
        res.json({ success: true, result })
    })

    // UPDATE category
    app.get('/categories/update/:id', async (req, res, next) => {
        const { id } = req.params
        const { description, imageURl } = req.query
        const result = await controller.updateCategory(id, { description, imageURl })
        res.json({ success: true, result })
    });

    // LIST category
    app.get('/categories', async (req, res, next) => {
        const { orderBy } = req.query;
        const categories = await controller.getCategoriesList(orderBy);
        res.json({ success: true, result: categories });
    });

    app.use((err, req, res, next) => {
        console.error(err);
        const message = err.message;
        res.status(500).json({ success: false, message });
    })
}

const startPhoto = async () => {


    const multerStorage = multer.diskStorage({
        destination: path.join(__dirname, '../public/images'),
        filename: (req, file, cb) => {
            const { fieldname, originalname } = file;
            const date = Date.now();
            // filename will be: image-1345923023436343-filename.png
            const filename = `${fieldname}-${date}-${originalname}`;
            cb(null, filename);
        }
    })
// }

    const upload = multer({ storage: multerStorage })


    const controller = await db_Photo.initializeDatabase()

    // CREATE Photo
    app.post('/photos/create', async (req, res, next) => {
        const { title, description, imageURl,isLandingPage } = req.query
        const result = await controller.createPhoto({ title, description, imageURl,isLandingPage })

        res.json({ success: true, result })

        // res.json({ success: true })
        // add photo categories
    })

    // READ single Photo
    app.get('/photos/:id', async (req, res, next) => {
        const { id } = req.params
        const photo = await controller.getPhoto(id)
        res.json({ success: true, result: photo })
    })

    //READ list of Photos by category getcategoryPhotosList
    app.get('/photosbycategory/:idcategory', async (req, res, next) => {
        const { idcategory } = req.params
        const photos = await controller.getcategoryPhotosList(idcategory)
        res.json({ success: true, result: photos })
    })

    // DELETE Photo
    app.get('/photos/delete/:id', async (req, res, next) => {
        const { id } = req.params
        const result = await controller.deletePhoto(id)
        res.json({ success: true, result })
    })

    // UPDATE Photo
    app.post('/photos/update/:id', async (req, res, next) => {
        const { id } = req.params
        const { title, description, imageURl } = req.query
        console.log("from back index :",req.query);
        const result = await controller.updatePhoto(id, { title, description, imageURl })
        // issa fi shi min table teni
        res.json({ success: true, result })
    })
    // LIST Photos
    app.get('/photos', async (req, res, next) => {
        const { orderBy } = req.query;
        const photos = await controller.getPhotosList(orderBy);
        res.json({ success: true, result: photos });
    })

// for image uploads
// const upload = async () => {

    // const controller = await SAdb.blogCRUD();

    


 // CREATE with imageURl in db
 app.post('/photos/createimg',upload.single('imageURl'), async (req, res, next) => {
    const { title, description,isLandingPage } = req.query
    const imageURl = req.file && req.file.filename;
    console.log("imageURl :",imageURl)
    const result = await controller.createPhoto({ title, description, imageURl,isLandingPage })
try {
    res.json({ success: true, result })
} catch (e) {
    next(e);
}
})
// update with imageURl in db
app.post('/photos/updateimg/:id', upload.single('imageURl'), async (req, res, next) => {
    try {
        const { id } = req.params;
        const {title, description ,isLandingPage} = req.query;
        const imageURl = req.file && req.file.filename;
        const result = await controller.updatePhoto(id, {title, description, imageURl,isLandingPage });
        res.json({ success: true, result });

        
    } catch (e) {
        next(e);
    }
})
//  app.post('/blog/create/img', upload.single('img'), async (req, res, next) => {
//     const { UserId, blogName, blogtext } = req.query;
//     const blogPics = req.file && req.file.filename;
//     try {
//         const result = await controller.createblogimg({ UserId, blogName, blogtext, blogPics });
//         res.json({ success: true, result });
//     } catch (e) {
//         next(e);
//     }
// }) from fakher


    // List category checked of a photo
    app.get('/photocategs/:id', async (req, res, next) => {
        const { id } = req.params;
        const photoCategs = await controller.fillTemp_CategoriesList(id);
        console.log("11111111111111111111111111111");
        res.json({ success: true, result: photoCategs });
    })
    app.get('/thephotocategs', async (req, res, next) => {
        const { orderBy } = req.query;
        console.log("222222222222222222");
        const categories = await controller.getTemp_CategoriesList(orderBy);
        console.log("3333333333333333333333333333333");
        console.log(categories);
        res.json({ success: true, result: categories });
        
    })


    app.use((err, req, res, next) => {
        console.error(err);
        const message = err.message;
        res.status(500).json({ success: false, message });
    })


}

const startAdminInfo = async () => {
    const controller = await db_AdminInfo.initializeDatabase()



    // READ adminInfo
    app.get('/admininfo/:id', async (req, res, next) => {
        const { id } = req.params
        const admininfo = await controller.getAdminInfo(id)
        res.json({ success: true, result: admininfo })
    })


    // UPDATE adminInfo
    app.get('/admininfo/update/:id', async (req, res, next) => {
        console.log("from back admininfo index.js",id)
        const { id } = req.params
        const { fullname, imageURl, address, phoneNb, username, password, linkdIn, facebook, twitter, Insta, gmail, AboutUs, locationIP } = req.query
        const result = await controller.updateAdminInfo(id, { fullname, imageURl, address, phoneNb, username, password, linkdIn, facebook, twitter, Insta, gmail, AboutUs, locationIP })

        res.json({ success: true, result })
    })


    app.use((err, req, res, next) => {
        console.error(err);
        const message = err.message;
        res.status(500).json({ success: false, message });
    })


}

startCategory();
startPhoto();
startAdminInfo();

app.get('/', (req, res) => res.send("OK for the portfolio"));

app.listen(8000, () => console.log('server listening on port 8000'));

