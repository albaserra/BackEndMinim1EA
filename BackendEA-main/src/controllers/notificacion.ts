import { Request,Response } from "express";
import { insertNotificacion, getNotificaciones, getNotificacionesPaginado, getNotificacion, updateNotificacion, deleteNotificacion, disableNotificacion} from "../services/ntificacion";
import { handleHttp } from "../utils/error.handle";

const getNotif=async({params}:Request,res:Response)=>{
    try{
        const {idNotificacion}=params;
        const response=await getNotificacion(idNotificacion);
        const data=response ? response:"NOT_FOUND";
        res.send(data);
    } catch(e){
        handleHttp(res,"ERROR_GET_USER");
    }
};

const getNotifs=async(req:Request,res:Response)=>{
    try{
        const response=await getNotificaciones();
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_GET_USERS");
    }
};

const getNotifPaginado=async({params}:Request,res:Response)=>{
    try{
        const {pagina1}=params;
        let pagina = +pagina1
        const response=await getNotificacionesPaginado(pagina);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_GET_USERS");
    }
};

const updateNotif=async ({params,body}:Request,res:Response)=>{
    try{
        const {idNotificacion}=params;
        const response=await updateNotificacion(idNotificacion,body);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_UPDATE_USER");
    }
};

const postNotif=async ({body}:Request,res:Response)=>{
    try{
        const responsePerson=await insertNotificacion(body);
        res.send(responsePerson);
    }catch(e){
        handleHttp(res,"ERROR_POST_USER");
    }
};

const deleteNotif=async ({params}:Request,res:Response)=>{
    try{
        const {idNotificacion}=params;
        const response=await deleteNotificacion(idNotificacion);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_DELETE_USER");
    }
};

const disableNotif=async ({params}:Request,res:Response)=>{
    try{
        const {idNotificacion}=params;
        const response=await disableNotificacion(idNotificacion);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_DISABLE_USER");
    }
};

export{getNotif,getNotifs,getNotifPaginado,updateNotif,postNotif,deleteNotif, disableNotif};