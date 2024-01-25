
const express = require('express');
const admin = require('firebase-admin');
const fileUpload = require('express-fileupload');

const path = require('path');
const fs = require('fs');
const serviceAccount = require('../../firebase.json');
const cors = require('cors');

const {Router} = require('express');

const { db} = require('../firebase')



const app = express();

const router = Router();


// Inicializa la aplicación de administración de Firebase

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        storageBucket: 'gs://planeta-beta-f8361.appspot.com', // Reemplaza con la URL del bucket de almacenamiento de Firebase
    });
    
}



const bucket = admin.storage().bucket('gs://planeta-beta-f8361.appspot.com');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: '*' }));
app.use(fileUpload());



/* uplodad img testig*/

router.post('/upload', async (req, res) => {

    console.log('body', req.body);
    console.log('imagenes', req.files);
    // if (!req.files || Object.keys(req.files).length === 0) {
    //     return res.status(400).send('No se ha enviado ninguna imagen.');
    // }

    // const image = req.files.image;
    // const uploadPath = path.join(__dirname, 'uploads', image.name);

    // // Mueve el archivo al directorio de subidas
    // image.mv(uploadPath, async (err) => {
    //     if (err) {
    //         return res.status(500).send(err);
    //     }

    //     // Sube la imagen al almacenamiento de Firebase
    //     const remotePath = `images/${image.name}`;
    //     const dataImage = await bucket.upload(uploadPath, { destination: remotePath });
    //     console.log('dataImage', dataImage);

    //     // Elimina el archivo local después de subirlo a Firebase
    //     fs.unlinkSync(uploadPath);

    //     const imageUrl = await bucket.file(remotePath).getSignedUrl({
    //         action: 'read',
    //         expires: '01-01-2100' // Define una fecha de vencimiento futura (puedes ajustarla según tus necesidades)
    //     });

    //     console.log('URL de la imagen:', imageUrl[0]);


    //     res.send('Imagen subida y almacenada en Firebase exitosamente');
    // });
});

/*data material didactico*/ 



/*testing*/ 
/* CRUD DATA AND FILES*/

router.get( '/crudtest',async (req ,res) => {
   
    //    res.send('HOLAM ') 
        res.render('crudtest')
    
     });
    

// router.post("/new-contactTestFiles", upload.fields([{ name: 'pdf', maxCount: 1 }, { name: 'word', maxCount: 1 }]), async (req, res) => {
//     const { firstname, lastname, email, phone } = req.body;
//     const files = req.files; // Obtener los archivos del formulario

//     // Subir archivos a Firebase Storage
//     const fileRefs = {};

//     for (const key of Object.keys(files)) {
//         const file = files[key][0];
//         const filename = uuidv4(); // Generar un nombre de archivo único

//         let folder;
//         if (key === 'pdf') {
//             folder = 'crudtest-pdf';
//         } else if (key === 'word') {
//             folder = 'crudtest-word';
//         } else {
//             // Manejar casos no esperados
//             res.status(400).send(`Campo de archivo no reconocido: ${key}`);
//             return;
//         }

//         const fileRef = admin.storage().bucket().file(`${folder}/${filename}`);

//         const stream = fileRef.createWriteStream({
//             metadata: {
//                 contentType: file.mimetype
//             }
//         });

//         stream.on('error', (error) => {
//             console.error(error);
//             res.status(500).send('Error al cargar el archivo.');
//         });

//         stream.on('finish', () => {
//             fileRefs[key] = `https://storage.googleapis.com/${admin.storage().bucket().name}/${fileRef.name}`;

//             if (fileRefs['pdf'] && fileRefs['word']) {
//                 // Insertar ambas rutas en Firestore
//                 db.collection('crudtestfile').add({
//                     firstname,
//                     lastname,
//                     email,
//                     phone,
//                     pdf: fileRefs['pdf'],
//                     word: fileRefs['word']
//                 })
//                 .then(() => {
//                     res.redirect("/crudtest");
//                 })
//                 .catch((error) => {
//                     console.error(error);
//                     res.status(500).send('Error al agregar datos del formulario.');
//                 });
//             }
//         });

//         stream.end(file.buffer);
//     }
// });


router.get( '/material-dicactico',async (req ,res) => {
    const querySnapshot = await db.collection('MaterialDidactico').get()
       
    
   const materialdidact =  querySnapshot.docs.map(
        doc => ({
            id: doc.id,
            /*firstname:doc.data().firstname,
            lastname: doc.data().lastname,
            email:doc.data().email,
            phone:doc.data().phone,*/
            ...doc.data()

        })

    )
    // console.log(materialdidact);
    // res.send(materialdidact) 
    res.render('materialdidactico', {materialdidact})

 });



 router.get( '/material-dicactico-in',async (req ,res) => {
    const querySnapshot = await db.collection('MaterialDidactico').get()
       
    
   const materialdidact =  querySnapshot.docs.map(
        doc => ({
            id: doc.id,
            /*firstname:doc.data().firstname,
            lastname: doc.data().lastname,
            email:doc.data().email,
            phone:doc.data().phone,*/
            ...doc.data()

        })

    )
    // console.log(materialdidact);
    // res.send(materialdidact) 
    res.render('materialdidacticoIn', {materialdidact})

 });

 router.get( '/material-dicactico-sec',async (req ,res) => {
    const querySnapshot = await db.collection('MaterialDidactico').get()
       
    
   const materialdidact =  querySnapshot.docs.map(
        doc => ({
            id: doc.id,
            /*firstname:doc.data().firstname,
            lastname: doc.data().lastname,
            email:doc.data().email,
            phone:doc.data().phone,*/
            ...doc.data()

        })

    )
    // console.log(materialdidact);
    // res.send(materialdidact) 
    res.render('materialdidacticoSec', {materialdidact})

 });

/**/ 


router.get( '/interactivos',async (req ,res) => {
   /* cambiar por documento de datos de interactivos*/
   const querySnapshot = await db.collection('MaterialDidactico').get()
       
    
   const materialdidact =  querySnapshot.docs.map(
        doc => ({
            id: doc.id,
            /*firstname:doc.data().firstname,
            lastname: doc.data().lastname,
            email:doc.data().email,
            phone:doc.data().phone,*/
            ...doc.data()

        })

    )
    // console.log(materialdidact);
    // res.send(materialdidact) 
    res.render('interactivos', {materialdidact})

 });

 router.get( '/interactivosIn',async (req ,res) => {
    /* cambiar por documento de datos de interactivos*/
    const querySnapshot = await db.collection('MaterialDidactico').get()
        
     
    const materialdidact =  querySnapshot.docs.map(
         doc => ({
             id: doc.id,
             /*firstname:doc.data().firstname,
             lastname: doc.data().lastname,
             email:doc.data().email,
             phone:doc.data().phone,*/
             ...doc.data()
 
         })
 
     )
     // console.log(materialdidact);
     // res.send(materialdidact) 
     res.render('interactivosIn', {materialdidact})
 
  });


 router.get( '/hojas-colorear',async (req ,res) => {
    /* cambiar por documento de datos de interactivos*/
    const querySnapshot = await db.collection('MaterialDidactico').get()
        
     
    const materialdidact =  querySnapshot.docs.map(
         doc => ({
             id: doc.id,
             /*firstname:doc.data().firstname,
             lastname: doc.data().lastname,
             email:doc.data().email,
             phone:doc.data().phone,*/
             ...doc.data()
 
         })
 
     )
     // console.log(materialdidact);
     // res.send(materialdidact) 
     res.render('hojascolorear', {materialdidact})
 
  });

  router.get( '/hojas-colorearIn',async (req ,res) => {
    /* cambiar por documento de datos de interactivos*/
    const querySnapshot = await db.collection('MaterialDidactico').get()
        
     
    const materialdidact =  querySnapshot.docs.map(
         doc => ({
             id: doc.id,
             /*firstname:doc.data().firstname,
             lastname: doc.data().lastname,
             email:doc.data().email,
             phone:doc.data().phone,*/
             ...doc.data()
 
         })
 
     )
     // console.log(materialdidact);
     // res.send(materialdidact) 
     res.render('hojascolorearIn', {materialdidact})
 
  });


  router.get( '/hojas-trabajo',async (req ,res) => {
    /* cambiar por documento de datos de interactivos*/
    const querySnapshot = await db.collection('MaterialDidactico').get()
        
     
    const materialdidact =  querySnapshot.docs.map(
         doc => ({
             id: doc.id,
             /*firstname:doc.data().firstname,
             lastname: doc.data().lastname,
             email:doc.data().email,
             phone:doc.data().phone,*/
             ...doc.data()
 
         })
 
     )
     // console.log(materialdidact);
     // res.send(materialdidact) 
     res.render('hojastrabajo', {materialdidact})
 
  });


  router.get( '/hojas-trabajoIn',async (req ,res) => {
    /* cambiar por documento de datos de interactivos*/
    const querySnapshot = await db.collection('MaterialDidactico').get()
        
     
    const materialdidact =  querySnapshot.docs.map(
         doc => ({
             id: doc.id,
             /*firstname:doc.data().firstname,
             lastname: doc.data().lastname,
             email:doc.data().email,
             phone:doc.data().phone,*/
             ...doc.data()
 
         })
 
     )
     // console.log(materialdidact);
     // res.send(materialdidact) 
     res.render('hojastrabajoIn', {materialdidact})
 
  });

  
/*ADD HOJAS DE TRABAJO*/ 
router.post("/new-hojas-trabajo", async (req, res) => {

    const { summernote, privacidad, premiumCheck, tags } = req.body;
    
    // url por default
    const Urlarchivoimg = "https://firebasestorage.googleapis.com/v0/b/planetapreescolar-39350.appspot.com/o/materialdidactico%2Fj6rfHkuCxfPx0R7PLorc%2F1614209351061%2Fportada-perfil?alt=media&token=58409111-aeed-4215-b54a-c576882480ea";
    /*add record*/
    
    await db.collection('hojastrabajo').add({
        summernote,
        privacidad,
        premiumCheck,
        tags,
        Urlarchivoimg
    })
    
    //console.log(firstname,lastname,email,phone);
    
    console.log(summernote,privacidad,premiumCheck,tags,Urlarchivoimg)

    res.redirect("/publicaciones");
});


  
 



  router.get( '/planeaciones',async (req ,res) => {
    /* cambiar por documento de datos de interactivos*/
    const querySnapshot = await db.collection('MaterialDidactico').get()
        
     
    const materialdidact =  querySnapshot.docs.map(
         doc => ({
             id: doc.id,
             /*firstname:doc.data().firstname,
             lastname: doc.data().lastname,
             email:doc.data().email,
             phone:doc.data().phone,*/
             ...doc.data()
 
         })
 
     )
     // console.log(materialdidact);
     // res.send(materialdidact) 
     res.render('planeaciones', {materialdidact})
 
  });
  router.get( '/planeacionesIn',async (req ,res) => {
    /* cambiar por documento de datos de interactivos*/
    const querySnapshot = await db.collection('MaterialDidactico').get()
        
     
    const materialdidact =  querySnapshot.docs.map(
         doc => ({
             id: doc.id,
             /*firstname:doc.data().firstname,
             lastname: doc.data().lastname,
             email:doc.data().email,
             phone:doc.data().phone,*/
             ...doc.data()
 
         })
 
     )
     // console.log(materialdidact);
     // res.send(materialdidact) 
     res.render('planeacionesIn', {materialdidact})
 
  });
 
  
  router.get( '/planeacionesSec',async (req ,res) => {
    /* cambiar por documento de datos de interactivos*/
    const querySnapshot = await db.collection('MaterialDidactico').get()
        
     
    const materialdidact =  querySnapshot.docs.map(
         doc => ({
             id: doc.id,
             /*firstname:doc.data().firstname,
             lastname: doc.data().lastname,
             email:doc.data().email,
             phone:doc.data().phone,*/
             ...doc.data()
 
         })
 
     )
     // console.log(materialdidact);
     // res.send(materialdidact) 
     res.render('planeacionesSec', {materialdidact})
 
  });
 

  router.get( '/blog',async (req ,res) => {
    /* cambiar por documento de datos de interactivos*/
    const querySnapshot = await db.collection('MaterialDidactico').get()
        
     
    const materialdidact =  querySnapshot.docs.map(
         doc => ({
             id: doc.id,
             /*firstname:doc.data().firstname,
             lastname: doc.data().lastname,
             email:doc.data().email,
             phone:doc.data().phone,*/
             ...doc.data()
 
         })
 
     )
     // console.log(materialdidact);
     // res.send(materialdidact) 
     res.render('blog', {materialdidact})
 
  });


  router.get( '/recomendaciones',async (req ,res) => {
    /* cambiar por documento de datos de interactivos*/
    const querySnapshot = await db.collection('MaterialDidactico').get()
        
     
    const materialdidact =  querySnapshot.docs.map(
         doc => ({
             id: doc.id,
             /*firstname:doc.data().firstname,
             lastname: doc.data().lastname,
             email:doc.data().email,
             phone:doc.data().phone,*/
             ...doc.data()
 
         })
 
     )
     // console.log(materialdidact);
     // res.send(materialdidact) 
     res.render('recomendaciones', {materialdidact})
 
  });


  router.get( '/foro',async (req ,res) => {
    /* cambiar por documento de datos de interactivos*/
    const querySnapshot = await db.collection('MaterialDidactico').get()
        
     
    const materialdidact =  querySnapshot.docs.map(
         doc => ({
             id: doc.id,
             /*firstname:doc.data().firstname,
             lastname: doc.data().lastname,
             email:doc.data().email,
             phone:doc.data().phone,*/
             ...doc.data()
 
         })
 
     )
     // console.log(materialdidact);
     // res.send(materialdidact) 
     res.render('foro', {materialdidact})
 
  });

  router.get( '/alianzas',async (req ,res) => {
    /* cambiar por documento de datos de interactivos*/
    const querySnapshot = await db.collection('MaterialDidactico').get()
        
     
    const materialdidact =  querySnapshot.docs.map(
         doc => ({
             id: doc.id,
             /*firstname:doc.data().firstname,
             lastname: doc.data().lastname,
             email:doc.data().email,
             phone:doc.data().phone,*/
             ...doc.data()
 
         })
 
     )
     // console.log(materialdidact);
     // res.send(materialdidact) 
     res.render('alianzas', {materialdidact})
 
  });


  router.get( '/publicaciones',async (req ,res) => {
    /* cambiar por documento de datos de interactivos*/
    const querySnapshot = await db.collection('MaterialDidactico').get()
        
     
    const materialdidact =  querySnapshot.docs.map(
         doc => ({
             id: doc.id,
             /*firstname:doc.data().firstname,
             lastname: doc.data().lastname,
             email:doc.data().email,
             phone:doc.data().phone,*/
             ...doc.data()
 
         })
 
     )
     // console.log(materialdidact);
     // res.send(materialdidact) 
     res.render('publicaciones', {materialdidact})
 
  });




/*CONSULT*/ 

router.get( '/crud',async (req ,res) => {
    const querySnapshot = await db.collection('contacts').get()
    
    //console.log(querySnapshot.docs[0].data());
    
   const contacts =  querySnapshot.docs.map(
        doc => ({
            id: doc.id,
            /*firstname:doc.data().firstname,
            lastname: doc.data().lastname,
            email:doc.data().email,
            phone:doc.data().phone,*/
            ...doc.data()

        })

    )
    console.log(contacts);
//    res.send('HOLAM ') 
    res.render('index', {contacts})

 });


/*ADD ROW*/ 
router.post("/new-contact", async (req, res) => {
const { firstname, lastname, email, phone } = req.body;

/*add record*/

await db.collection('contacts').add({
    firstname,
    lastname,
    email,
    phone
})

//console.log(firstname,lastname,email,phone);

res.redirect("/crud");
});

/*EDIT*/

router.get('/edit-contact/:id',async (req,res)=>{
  const doc =  await db.collection('contacts').doc(req.params.id).get()
   
  /*console.log(req.params.id)

  console.log({
    id: doc.id,
    ...doc.data(),
  });   */
 
  res.render('index',{contact:{id: doc.id, ...doc.data()}} )
  
  //res.send('edit contact')
})
/*Edit id*/

router.post('/update-contact/:id', async (req,res) => {
    const {id} = req.params    
    await db.collection('contacts').doc(id).update(req.body)
    
    /*console.log(req.params.id) 
    console.log(req.body)*/

   // res.send('Contacto Actualizado')
    res.redirect("/crud");

})

/*delete*/
router.get('/delete-contact/:id', async (req,res) => {
    await db.collection('contacts').doc(req.params.id).delete()
    //res.send('contact delete')
    res.redirect("/crud");
})






 module.exports = router;