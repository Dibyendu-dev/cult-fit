import logger from "../config/logger.config";
import Center from "../db/models/center.model";
import { createCenterDto } from "../dto/center.dto";
import { NotFoundError } from "../utils/errors/app.error";

export async function createCenter(centerData:createCenterDto) {
    const center = await Center.create({
        name:centerData.name,
        location:centerData.location
    })
    logger.info(`center is created: ${center.id}`)
    return center
}

export async function getCenterById(id:number){
    const center = await Center.findByPk(id)

    if(!center){
        logger.error(`center not found ${id}`)
        throw new NotFoundError(`center with is ${id} not found `)
    }
    logger.info(`center found: ${center.id}`)
    return center
}