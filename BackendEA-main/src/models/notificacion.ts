import {  Schema, Types, model, Model } from "mongoose";
import { Notificacion } from "../interfaces/notificacion.interface";

const NotificacionSchema = new Schema<Notificacion>(
    {
        tipo:{
            type: String,
            required:true,
        },
        mensaje:{
            type: String,
            required:true,
        },
        tiempo:{
            type: Number,
            required:true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

//Once the Schema is created, it must be implemented
//1st argument ('users') is the name of the collection
//2nd argument (UserSchema) is what it feds it
const NotificacionModel = model('notificacion', NotificacionSchema);

export default NotificacionModel;