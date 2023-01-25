import mongoose from "mongoose";

mongoose.connect("mongodb+srv://martere:123@cluster0.v3xplot.mongodb.net/alura-node");
let db = mongoose.connection;

export default db;