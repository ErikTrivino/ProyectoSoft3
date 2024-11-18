import { EnvironmentName } from "../app/shared/enums/config";

export interface Enviroments {
    environmentName: EnvironmentName;
    urlHost: string;
    urlApi:string;
}