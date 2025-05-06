import logger from "../config/logger.config";
import User from "../db/models/user.model";
import { createUserDto } from "../dto/user.dto";
import { NotFoundError } from "../utils/errors/app.error";

export async function createUser(userData:createUserDto) {
    const user = await User.create({
        name:userData.name,
        email:userData.email
    })
    logger.info(`user created: ${user.id}`)
    return user
}

export async function getUserById(id:number){
    const user = await User.findByPk(id)

    if(!user){
        logger.error(`user not found ${id}`)
        throw new NotFoundError(`user with is ${id} not found `)
    }
    logger.info(`user found: ${user.id}`)
    return user
}