const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movie');

const app = express();
const path = require('path');
const multer = require('multer');
const bcrypt = require('bcrypt');

// import body parser module
const bodyParser = require("body-parser");
const signup = require('./models/signup');
const movie = require('./models/movie');

const serie = require('./models/serie');
const episode = require('./models/episode');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/images', express.static(path.join('src/assets/images')))

const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg',
    'video/mp4': 'mp4',
    
}

const storage = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = null;
        }
        cb(null, 'src/assets/images')
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
            extension;
        cb(null, imgName);
    }
});


// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});



// business logic SIGNUP (add user)
app.post('/users/signup', (req, res) => {
    bcrypt.hash(req.body.password, 10).then((cryptedPwd) => {
        console.log('here signup', req.body);
        const userObj = new signup({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: cryptedPwd,
        });
        userObj.save((err, result) => {
            console.log('resultat after save', result);
            if (err) {
                res.status(200).json({
                    message: 'Email exist'
                });
            } else {
                res.status(200).json({
                    message: 'success'
                })

            }
        });
    });
});

// business logic LOGIN
app.post('/users/login', (req, res) => {
    console.log('here into login', req.body);
    signup.findOne({ email: req.body.email }).then(
        (emailResult) => {
            console.log('result after find email', emailResult);
            if (!emailResult) {
                res.status(200).json({
                    message: '0',

                })
            }
            return bcrypt.compare(req.body.password, emailResult.password)
        }
    ).then(
        (passwordResult) => {
            if (!passwordResult) {
                res.status(200).json({
                    message: '1'
                })
            }
            signup.findOne({ email: req.body.email }).then(
                (findedUser) => {
                   
                    console.log("findedUser",findedUser);
                    res.status(200).json({
                        user: findedUser,
                        message: '2',

                    });
                }
            )
        }
    )

})

// business logic ADD MOVIE

app.post("/movie/", multer({ storage: storage }).fields([{
    name: "img",maxCount: 10
  }, {
    name: "vid",maxCount: 10
  }]),(req, res) => {
    console.log("add all movies", req.body);
    let url = req.protocol + "://" + req.get("host");
    const movieObject = new movie({
        nameFilm: req.body.nameFilm,
        dateAired: req.body.dateAired,
        genre: req.body.genre,
        score: req.body.score,
        duration: req.body.duration,
        quality : req.body.quality,
        description : req.body.description,
        img: req.files.img[0].filename,
        vid: req.files.vid[0].filename,
        
    });
   
    movieObject.save().then(
        (result) => {
            if (result) {
                res.status(200).json({
                    message: 'movies added with success'
                })
            }
        }
    );
     
});


// business logic GET ALL MOVIES
app.get('/movie', (req, res) => {
    movie.find((err, doc) => {
        if (err) {
            console.log('erreur', err);
        } else {
            res.status(200).json({
                findedMovie: doc,
            });
        }
    });
});


// business logic GET MOVIES BI ID
app.get('/movie/:id', (req, res) => {
    movie.findOne({ _id: req.params.id }).then(

        (result) => {
            res.status(200).json({
                film: result

            })

        }

    )

})

// business logic ADD SERIE
app.post("/serie/", multer({ storage: storage }).fields([{
    name: "img",maxCount: 10
  }]),(req, res) => {
    console.log("add all serie", req.body);
    let url = req.protocol + "://" + req.get("host");
    const serieObject = new serie({
        nameFilm: req.body.nameFilm,
        dateAired: req.body.dateAired,
        genre: req.body.genre,
        description : req.body.description,
        img: req.files.img[0].filename,       
    });
   
    serieObject.save().then(
        (result) => {
            if (result) {
                res.status(200).json({
                    message: 'series added with success'
                })
            }
        }
    );
     
});

// business logic GET ALL SERIE
app.get('/serie', (req, res) => {
    serie.find((err, doc) => {
        if (err) {
            console.log('erreur', err);
        } else {
            res.status(200).json({
                findedSerie: doc,
            });
        }
    });
});

// business logic GET SERIE BI ID
app.get('/serie/:id', (req, res) => {
    serie.findOne({ _id: req.params.id }).then(

        (result) => {
            res.status(200).json({
                serie: result

            })

        }

    )

})

// business logic ADD EPISODE
app.post("/episode/", multer({ storage: storage }).fields([{
    name: "video",maxCount: 10
  }]),(req, res) => {
    console.log("add all episode", req.body);
    let url = req.protocol + "://" + req.get("host");
    const episodeObject = new episode({
        nameEpisode: req.body.nameEpisode,
        dateAired: req.body.dateAired,
        quality: req.body.quality,
        score : req.body.score,
        idSerie : req.body.idSerie,
        video: req.files.video[0].filename,  
             
    });
   
    episodeObject.save().then(
        (result) => {
            if (result) {
                res.status(200).json({
                    message: 'episodes added with success'
                })
            }
        }
    );
     
});

// business logic GET ALL   EPISODE
app.get('/episode', (req, res) => {
    episode.find((err, doc) => {
        if (err) {
            console.log('erreur', err);
        } else {
            res.status(200).json({
                episode: doc,
            });
        }
    });
});

// business logic GET EPISODE BI ID
app.get('/episode/:id', (req, res) => {
    episode.findOne({ _id: req.params.id }).then(

        (result) => {
            res.status(200).json({
                ep: result

            })

        }

    )

})





module.exports = app;
