import { response, Router } from "express";
import { createUserController } from "./useCases/CreateUser";
import { getUserController } from "./useCases/GetUser";

const router = Router();

router.get('/healthCheck', (request, response) => {
    return response.json({message:"Is Working"}).send(200);
});

router.get('/users', (request, response) => {
    return getUserController.handle(request, response);
});

router.post('/users', (request, response) => {
    console.log(request.body);
    return createUserController.handle(request, response);
});


export { router };