import React, {useState, useContext, useEffect} from 'react';
import LayoutOffice from '../../components/LayoutOffice'
import Image from 'next/image'
import avatarDefault from '../../public/abstract-user-flat-4.svg'
import plus from '../../public/ftadd.svg'
import styled from 'styled-components'
import ModalAddPhoto from '../../components/ModalAddPhoto'
import Card from '../../components/CardClientsOffice';




function HomeCenter() {
  
  
  const [modalShow, setModalShow] = useState(false);
  const [photoUser, setPhotoUser] = useState('');
  const [data, setData] = useState({})
  const [token, setToken] = useState()
  
 
 let avatar = ''
  useEffect(() =>{
   
   let token = localStorage.getItem('token')
   setToken(token)
   
   async function getId(){
     

    try {
      
      let res = await fetch(`https://eb-arquitech.lunacrisdev.xyz/offices/getID/${token}`)
      let json = await res.json();
      let idUser = json.data.id;
      
      getUser(idUser, token)

      
    } catch (error) {
      
    }
    }
    async function getUser(id, token){
      
      try {
        let options = {
          headers: {'Authorization': token}
        }
        let res = await fetch(`https://eb-arquitech.lunacrisdev.xyz/offices/${id}`, options);
        let json = await res.json()
        let user = json.data.offices;
        setData({...user})
        
        localStorage.setItem('data', JSON.stringify(user))
        createFolder(user);
      } catch (error) {
        
      }
    }
    async function createFolder(user){
      
      try {
        let options = {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({"name": user.bucket})
        }
        let res = await fetch(`https://eb-arquitech.lunacrisdev.xyz/createFolder`,options);
        let json = await res.json();
        console.log(json);
        if (!res.ok) throw {error: json.error} 

      } catch (error) {
        console.log(error.error);
      }
    }
    getId()
  },[])
  
  
  if (!data.avatar) {
    avatar = avatarDefault
    avatar = avatar.src
  } else {
    avatar = data.avatar
  }
 
 function toClick(e) {
  setModalShow(true)
 }


 const ImageContainer = styled.div`
 position:relative;
 top: -50px;
 left:110px
 `


  return (
      
        <LayoutOffice>

          <div className="container-home">
            
            <img className="avatar-office" src={avatar} width={150} height={150}/>
           
           
            <ImageContainer>

            <Image
            className='btn-plus'
            src={plus}
            alt='plus'
            width={40}
            height={40}
            onClick={toClick}
            />
            </ImageContainer>

          </div>
          <div className="back-home">
              <h1>Bienvenido  <span className='nombre-office'>{data.name}</span></h1>
          </div>
          
          <ModalAddPhoto
            show={modalShow}
            onHide={() => {
              setModalShow(false);
            }}
            data={data}
            token={token}
            photoUser={photoUser}
            />
          <h3 className='subtitle-home'>Clientes...</h3>
          <Card
          data={data}
          toClick={toClick}
          setPhotoUser={setPhotoUser}
          />

        </LayoutOffice>
      
  )
}

export default HomeCenter