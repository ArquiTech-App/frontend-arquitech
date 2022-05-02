import {URL_BASE} from '../config'
 
function login(dataClients){
    const URL = `${URL_BASE}/clients/login`
    const options= {
        method: 'POST',
        body: JSON.stringify(dataClients),
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors'
    }
    return fetch(URL, options)
}

export {
    login
} 


