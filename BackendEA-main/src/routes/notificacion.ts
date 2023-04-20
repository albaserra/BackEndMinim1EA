/** Esta ruta nos va a devolver un array de objetos, que va a venir de una base de datos (carpeta config)*/

import { Request, Response, Router } from "express";
import { getNotif,getNotifs,getNotifPaginado,updateNotif,postNotif,deleteNotif, disableNotif } from "../controllers/notificacion";
import { getUsersPaginado } from "../services/user";

const router = Router(); //es el manejador de las rutas, las interpreta, con esto podremos crear los GET, POST ....

/**
 * http://localhost:3002/items [GET]
 */
router.get("/all", getNotifs);
router.get("/allPaginado/:pagina1", getNotifPaginado);
router.get("/:idUser", getNotif);
router.post("/",postNotif);
router.put("/:idUser",updateNotif);
router.put("/disable/:idUser",disableNotif);
router.delete("/:idUser",deleteNotif);


export {router};