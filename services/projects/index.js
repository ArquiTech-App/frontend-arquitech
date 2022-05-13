import {URL_BASE} from '../config'
 
function getProject(id){
    console.log(id);
    const URL = `${URL_BASE}/proyects/${id}`
    const options= {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return fetch(URL, options)
}
export{
    getProject
}
