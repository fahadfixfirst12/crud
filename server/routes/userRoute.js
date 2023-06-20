import express from "express";
import { allUserHandler, createUserhandler, userFindByIdHandler, updateUserByIdHandler, deleteUserByIdHandler } from "../controller/userController";
const app = express();
const router = express.Router();

router.route('/')
    .get(allUserHandler)
    .post(createUserhandler)
router.route('/:id')
    .post(userFindByIdHandler)
    .patch(updateUserByIdHandler)
    .delete(deleteUserByIdHandler)
export { router }