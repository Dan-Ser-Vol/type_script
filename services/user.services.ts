import axios, {AxiosResponse} from "axios"
import {IUser} from "../interfaces/user.interface";

type IRes<T> = Promise<AxiosResponse<T>>

export const userServices = {
    getUsers: ():IRes<IUser[]> => axios.get("https://jsonplaceholder.typicode.com/users"),
    getById: (id:number):IRes<IUser> => axios.get("https://jsonplaceholder.typicode.com/users/" + id),
}