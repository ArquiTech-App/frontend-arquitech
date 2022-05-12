import {URL_BASE} from '../config'
 
function getProject(id){
    const URL = `${URL_BASE}/proyects/${id}`
    const options= {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors'
    }
    return fetch(URL, options)
}
export{
    getProject
}
