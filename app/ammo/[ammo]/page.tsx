import { getAmmo } from "@/datas/ammo"
import ScatterUi from "@/ui/ammo/scatterUi"
const page = async ({ params }: { params: { ammo: number } }) => {
	console.log(params)
	// fetch Data
	const searchedAmmoList = await getAmmo(params.ammo)
	
	return (
		<div className="w-full mt-4">
			<p>{params.ammo}</p>
				<ScatterUi data={searchedAmmoList}/>
		</div>
	)
}

export default page