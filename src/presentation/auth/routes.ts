import { Router } from "express";
import { AuthController } from "./controller";
import { AuthDatasourceImpl, AuthRepositoryImpl } from "../../infrastructure";

export class AuthRoutes {
  static get routes(): Router {
    const datasource = new AuthDatasourceImpl();
    const authRepository = new AuthRepositoryImpl(datasource);
    const controller = new AuthController(authRepository);
    const router = Router();
    router.post("/login", controller.loginUser);
    router.post("/register", controller.registerUser);
    return router;
  }
}
