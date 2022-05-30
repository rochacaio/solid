import { Router,Response,Request } from "express";
import {CreateUserController} from "./useCases/CreateUser/CreateUserController";
import {createUserController} from "./useCases/CreateUser";

const router = Router();

router.post('/users',(req:Request,res:Response)=>{
    return createUserController.handle(req,res);
})

export {router}