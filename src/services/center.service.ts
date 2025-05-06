import { createCenterDto } from "../dto/center.dto";
import { createCenter, getCenterById } from "../repositories/center.repository";

export async function createCenterService(centerData: createCenterDto) {
  const center = await createCenter(centerData);
  return center;
}

export async function getCenterByIdService(id: number) {
  const center = await getCenterById(id);
  return center;
}
