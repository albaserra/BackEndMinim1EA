//In charge to connect with the dB
import { Notificacion } from "../interfaces/notificacion.interface";
import NotificacionModel from "../models/notificacion";
import { Types } from "mongoose";

const insertNotificacion = async(item: Notificacion) => {
    const responseInsert = await NotificacionModel.create(item);
    return responseInsert;
};

const getNotificaciones = async() => {
    const responseItem = await NotificacionModel.find({});
    return responseItem;
};


const getNotificacionesPaginado = async(pagina: number) => {
    const page = pagina; // Número de página actual
    const limit = 10; // Número de documentos a devolver por página
    const skip = (page - 1) * limit; // Número de documentos para saltar
    const responseItem = await NotificacionModel.find({}).skip(skip).limit(limit)
    return responseItem;
};



const getNotificacion = async(id: string) => {
    const responseItem = await NotificacionModel.findOne({_id: id});
    return responseItem;
};

const updateNotificacion = async(id: string, data: Notificacion) => {
    const responseItem = await NotificacionModel.findOneAndUpdate({_id: id}, data,{new: true});
    return responseItem;
};

const deleteNotificacion = async(id: string) => {
    const responseItem = await NotificacionModel.findOneAndRemove({_id: id});
    return responseItem;
}

const disableNotificacion = async(id: string) => {
    const responseItem = await NotificacionModel.findOneAndUpdate({_id: id},{ $set: { activo: false } });
    return responseItem;
}




export {insertNotificacion, getNotificaciones, getNotificacionesPaginado, getNotificacion, updateNotificacion, deleteNotificacion, disableNotificacion};