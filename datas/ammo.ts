import { ammo } from "@/definitions/ammo";
import prisma from "@/lib/prisma";


export const getAmmo = async(searchAmmo: number) => {
	let data: ammo[] = [{type:76225, name:"TT AKBS", damage:58, penetration:12},{type:76225, name:"TT P gl", damage:58, penetration:14},{type:76225, name:"TT LRN", damage:64, penetration:8}]
	// const data = await prisma.ammo.findMany({
	// 	where: {
	// 		type: Number(searchAmmo)
	// 	}
	// })
	return data;
}