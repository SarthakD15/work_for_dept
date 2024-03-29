const express =require('express');
const bodyParser=require('body-parser');
const formRouter=express.Router();
const Projects=require('../models/project_details');
const path=require('path');
const fs=require('fs');
const home_path=path.join(__dirname,'views/HomePage')
const app=express();
formRouter.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'./public/')))
app.set("view engine","hbs")
app.set("views",home_path);
const  multer=require('multer');
const storage=multer.diskStorage({
    destination:async(req,file,cb)=>{
        if(!fs.existsSync(`./local_storage/${req.body.Academic_Year}/${req.body.Semester}/${req.body.Year}`)){
            const createDir = await mkdir(projectFolder, { recursive: true });
            console.log(`created ${createDir}`);
        }
        else
        {
            cb(null,`./local_storage/${req.body.Academic_Year}/${req.body.Semester}/${req.body.Year}`);
        }
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
});

const imageFileFilter=(req,file,cb)=>{
    if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)){
        return cb(new Error('You can upload only image files!'), false);
    }
    cb(null,true);
}

const upload = multer({ storage: storage,
    limits:{
        fileSize:1024*1024*5
    },
    fileFilter: imageFileFilter}).single('myfile1');

formRouter.route('/')
.get((req,res,next)=>{
    res.render("form");
})
.post(upload,async(req,res)=>{
    let a=false;
    console.log("dsjknakngka");
    try{
        a=true;
        await Projects.create(
           req.body
        )   
        // console.log(req.body);
        if(a==true)
        {
        console.log("Projects Created !!");
        res.statusCode=200;
        // res.setHeader('Content-Type','application/json')
        res.redirect("index");
        }
    }
    catch (e){
        res.status(400).send(e)
        console.log(e);
     }
});

module.exports=formRouter;
// {   
//     title:req.body.title,
//     obj:req.body.obj,
//     myfile:req.body.myfile,
//     myfile1:req.myfile1.filename,
//     yname:req.body.yname,
//     email:req.body.email,
//     socialink:req.body.socialink,
//     socialink1:req.body.socialink1,
//     gname:req.body.gname,
//     technologies:req.body.technologies,
//     apk_views:req.body.apk_views,
//     vid1:req.body.vid1,
//     repolink:req.body.repolink,
//     weblink:req.body.weblink,
//     apkf:req.body.apkfs,
//     }





const express =require('express');
const bodyParser=require('body-parser');
const formRouter=express.Router();
const Projects=require('../models/project_details');
const path=require('path');
const home_path=path.join(__dirname,'views/HomePage')
const app=express();
formRouter.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'./public/')))
app.set("view engine","hbs")
app.set("views",home_path);
const  multer=require('multer');
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./public/fromReg/')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
});

const imageFileFilter=(req,file,cb)=>{
    if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)){
        return cb(new Error('You can upload only image files!'), false);
    }
    cb(null,true);
}

const upload = multer({ storage: storage,
    limits:{
        fileSize:1024*1024*5
    },
    fileFilter: imageFileFilter}).single('myfile1');

formRouter.route('/')
.get((req,res,next)=>{
    res.render("form");
})
.post(upload,async(req,res)=>{
    try{
        // console.log(req.myfile1.filename);
        await Projects.create(
           req.body
        )   
        console.log("hello.................");
        console.log("Projects Created !!");
        res.statusCode=200;
        // res.setHeader('Content-Type','application/json')
        res.render("info");
    }
    catch (e){
        res.status(400).send(e)
        console.log(e);
     }
});

module.exports=formRouter;
// {   
//     title:req.body.title,
//     obj:req.body.obj,
//     myfile:req.body.myfile,
//     myfile1:req.myfile1.filename,
//     yname:req.body.yname,
//     email:req.body.email,
//     socialink:req.body.socialink,
//     socialink1:req.body.socialink1,
//     gname:req.body.gname,
//     technologies:req.body.technologies,
//     apk_views:req.body.apk_views,
//     vid1:req.body.vid1,
//     repolink:req.body.repolink,
//     weblink:req.body.weblink,
//     apkf:req.body.apkfs,
//     }