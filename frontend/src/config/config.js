import axios from 'axios'

const baseUrl = 'http://localhost:9000/api/v1'

export const fetch = async (path, method, options) =>  {

    if (method === 'get'){
        const response = await axios[method](
            `${baseUrl}${path}`
            )
            console.log('get')
            return response
    }
    const response = await axios[method](
        `${baseUrl}/${path}`, options
        )
        return response
    }

    
    