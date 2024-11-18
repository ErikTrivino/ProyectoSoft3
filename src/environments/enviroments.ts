import { EnvironmentName } from "../app/shared/enums/config";
import { Enviroments } from "./enviroments.model";

export const enviroments: Enviroments = {
    environmentName: EnvironmentName.DLLO,
    urlHost:"https://localhost:9091/api/v1/",
    urlApi:"https://localhost:9091/api/v1",
}