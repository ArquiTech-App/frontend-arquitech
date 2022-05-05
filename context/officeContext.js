import {createContext, useState} from 'react';



const OfficeContext = createContext();


function OfficeProvider({children}) { 
    const [officeData, setOfficeData] = useState({})
    const [isLoginOffice, setIsLoginOffice] = useState(false);
    const [tokenOffice, setTokenOffice] = useState('');

    

    const data = {
        isLoginOffice,
        setIsLoginOffice,
        tokenOffice,
        setTokenOffice,
        officeData, 
        setOfficeData
    }
    

    return <OfficeContext.Provider value={data}>{children}</OfficeContext.Provider>
 }

 export {OfficeProvider};
 export default OfficeContext;