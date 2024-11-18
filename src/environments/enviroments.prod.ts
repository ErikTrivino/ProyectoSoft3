import { EnvironmentName } from "../app/shared/enums/config";
import { Enviroments } from "./enviroments.model";

export const enviroments: Enviroments = {
    environmentName: EnvironmentName.PROD,
    urlHost:"https://app-backend-telesai.onrender.com/api/v1",
    urlApi:"https://app-backend-telesai.onrender.com/api/v1",
}