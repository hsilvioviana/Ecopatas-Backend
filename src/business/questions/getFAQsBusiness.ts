import { selectFAQs } from "../../data/questions/selectFAQs"
import { faq } from "../../model/questions/globalModels"


export const getFAQsBusiness = async () : Promise<faq[]> => {

    try {

        const faqs: faq[] = await selectFAQs()

        return faqs
    }
    catch (error) {

        throw new Error(error.message)
    }
}
