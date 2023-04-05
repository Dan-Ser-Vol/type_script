import {userServices} from "./services/user.services";

userServices.getUsers().then(data=> console.log(data))
userServices.getById(3).then(data=> console.log(data))