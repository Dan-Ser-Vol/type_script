import {userServices} from "./services/user.services";

userServices.getUsers().then(data=> console.log(data))