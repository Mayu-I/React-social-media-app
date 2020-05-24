const functions = require('firebase-functions');
const express = require('express');
const app = express(); 

const FBAuth =  require('./util/fbAuth');

const { getAllScreams, 
    postOneScream, 
    getScream,
    commentOnScream } = require('./handlers/screams');
const { signUp, 
        login, 
        uploadImage, 
        addUserDetails,
        getAuthenticatedUser
    } = require('./handlers/users');

// Scream routes
app.get('/screams', getAllScreams);
// Post one scream
app.post('/scream', FBAuth, postOneScream);
app.get('/scream/:screamId', getScream);

// TODO delete a scream
// TODO like a scream
// TODO unlike a scream
// TODO comment on scream
app.post('/scream/:screamId/comment', FBAuth, commentOnScream)

// users routes
app.post('/signup', signUp);
app.post('/login', login);
app.post('/user/image', FBAuth, uploadImage);
app.post('/user', FBAuth, addUserDetails);
app.get('/user', FBAuth, getAuthenticatedUser);

exports.api = functions.https.onRequest(app);