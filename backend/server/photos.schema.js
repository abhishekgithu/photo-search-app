import mongoose from 'mongoose';
const { Schema } = mongoose;

const photoSchema = new Schema({
id:number,
url:string
});

module.exports(photoSchema)