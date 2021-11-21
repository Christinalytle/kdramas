const KDRAMA_ENDPOINT = 'https://crudcrud.com/api/b36015e9e39a4022a51079fd70c8b418/kdramas'; 

class KdramaService {
    getAll = async() => {
        try {
            const response = await fetch(KDRAMA_ENDPOINT); 
            const data = await response.json(); 
            return data; 
        } catch(exception) {
            console.error(`Problem fetching Kdramas: ${exception}`); 
        }
    }

    update = async(kdrama) => {
        try {
            let update = {
                title: kdrama.title, 
                streaming: kdrama.streaming, 
                synopsis: kdrama.synopsis,
                review: kdrama.review
            }
            const response = await fetch(`${KDRAMA_ENDPOINT}/${kdrama._id}`, {
                method: 'PUT', 
                headers: {
                    'Content-Type': 'application/json'
                }, 
                body: JSON.stringify(update)
            }); 
            return response; 
        } catch (exception) {
            console.error(`Problem updating Kdrama: ${exception}`); 
        }
    }

    create = async(kdrama) => {
        try {
            const response = await fetch(`${KDRAMA_ENDPOINT}`,  {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                }, 
                body: JSON.stringify(kdrama)
            }); 
            return response; 
        } catch(exception) {
            console.error(`Problem creating kdrama: ${exception}`)
        }
    }

    delete = async(id) => {
        try {
            const response = await fetch(`${KDRAMA_ENDPOINT}/${id}`, {
                method: 'DELETE', 
                headers: {
                    'Content-Type': 'application/json'
                }
            }); 
            return response; 
        } catch(exception) {
            console.error(`Prolbem deleting kdrama: ${exception}`); 
        }
    }
}

export const kDramaService = new KdramaService(); 