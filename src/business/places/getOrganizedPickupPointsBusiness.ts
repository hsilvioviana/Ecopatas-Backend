import { selectPickupPoints } from "../../data/places/selectPickupsPoints"


export const getOrganizedPickupPointsBusiness = async () : Promise<any> => {

    try {

        const pickupPoints = await selectPickupPoints()

        const regionsNames: string[] = []

        const neighborhoodsNames: string[] = []

        const result: any = {}

        for (let point of pickupPoints) {

            if (!regionsNames.includes(point.region)) {

                regionsNames.push(point.region)

                result[point.region] = []
            }
        }

        for (let region of Object.keys(result)) {

            const neighborhoods: any = {}

            for (let point of pickupPoints) {

                if (point.region === region) {

                    if (!neighborhoodsNames.includes(point.neighborhood)) {

                        neighborhoodsNames.push(point.neighborhood)

                        neighborhoods[point.neighborhood] = [point]
                    }
                    else {

                        neighborhoods[point.neighborhood].push(point)
                    }
                }
            }
            
            result[region] = neighborhoods
        }

        return result
    }
    catch(error) {

        throw new Error(error.message)
    }
}
