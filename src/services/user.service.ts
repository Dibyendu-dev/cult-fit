import { createUserDto } from "../dto/user.dto";
import { createUser, getUserById } from "../repositories/user.repository";


export async function createUserService(userData:createUserDto){
    const user = await createUser(userData)
    return user
}

export async function getUserByIdService(id:number){
    const user  = await getUserById(id)
    return user
}