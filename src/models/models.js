// const mongoose = require('mongoose');

import mongoose from 'mongoose';

// const model = mongoose.model;
const Schema = mongoose.Schema;

export const User = mongoose.model("User", new Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    nom: String,
    prenom: String,
    email: String,
    password: String,
    dateNaissance: { type: Date, default: Date.now },
    civilite: String,
    apropos: String,
    role: Number,
    imgUrl: String,
}));

export const Recette = mongoose.model("Recette", new Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    nom: String,
    discription: String,
    tempsPreparation: String,
    tempsCuisin: String,
    tempsRepos: String,
    cout: Number,
    difficulte: Number,
    nbPersonne: Number,
    astuce: String,
    imgUrl: String,
    videoUrl: String,
    date: { type: Date, default: Date.now },
    idUser: { type: Schema.Types.ObjectId, ref: 'User' },
    idCategorie: { type: Schema.Types.ObjectId, ref: 'Categorie' },
    ingredients: [{ nom: String, quantite: Number, mesure: String }],
    etapPreparations: [{ description: String }],
}));

export const Comment = mongoose.model("Comment", new Schema({
    //_id
    idUser: { type: Schema.Types.ObjectId, ref: 'User' },
    idRecette: { type: Schema.Types.ObjectId, ref: 'Recette' },
    description: String,
    date: { type: Date, default: Date.now },
}));

export const Categorie = mongoose.model("Categorie", new Schema({
    //_id
    nom: String
}));

export const NoteUser = mongoose.model("NoteUser", new Schema({
    _id: {
        idUserDoLike: { type: Schema.Types.ObjectId, ref: 'User' },
        idUser: { type: Schema.Types.ObjectId, ref: 'User' },
    },
    note: Number
}));

export const NoteComment = mongoose.model("NoteComment", new Schema({
    _id: {
        idUser: { type: Schema.Types.ObjectId, ref: 'User' },
        idComment: { type: Schema.Types.ObjectId, ref: 'Comment' },
    },
    note: Number
}));

export const NoteRecette = mongoose.model("NoteRecette", new Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    _id: {
        idUser: { type: Schema.Types.ObjectId, ref: 'User' },
        idRecette: { type: Schema.Types.ObjectId, ref: 'Recette' },
    },
    note: Number
}));

export const Carnet = mongoose.model("Carnet", new Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    _id: {
        idUser: { type: Schema.Types.ObjectId, ref: 'User' },
        idRecette: { type: Schema.Types.ObjectId, ref: 'Recette' },
    },
    date: { type: Date, default: Date.now }
}));

export const Bins = mongoose.model("Bins", new Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    appid: String,
    bid: String,
    inid: String,
    message: String,
}));
