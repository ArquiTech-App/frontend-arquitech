import React, {useState, useContext, useEffect} from 'react';
import LayoutOffice from '../../components/LayoutOffice'
import Image from 'next/image'
import avatarDefault from '../../public/abstract-user-flat-4.svg'
import plus from '../../public/ftadd.svg'
import OfficeContext from '../../context/officeContext'
import styled from 'styled-components'
import ModalAddPhoto from '../../components/ModalAddPhoto'
import Card from '../../components/CardClientsOffice';




function HomeCenter() {
  
  
  const [modalShow, setModalShow] = useState(false);
  const [photoUser, setPhotoUser] = useState('');
  
 const {tokenOffice,setTokenOffice,isLoginOffice,setIsLoginOffice, officeData, setOfficeData} = useContext(OfficeContext);
  
  useEffect(() =>{
   setTokenOffice(
      window.localStorage.getItem('token')
   )
   let token = window.localStorage.getItem('token')
   
   
   async function getId(){
     

    try {
      
      let res = await fetch(`http://ec2-54-227-138-69.compute-1.amazonaws.com/offices/getID/${token}`)
      let json = await res.json();
      let idUser = json.data.id;
      getUser(idUser, token)

      
    } catch (error) {
      console.log(error);
    }
    }
    async function getUser(id, token){
      try {
        let options = {
          headers: { 'Authorization': token}
        }
        let res = await fetch(`http://ec2-54-227-138-69.compute-1.amazonaws.com/offices/${id}`, options);
        let json = await res.json()
        let user = json.data.offices;
        console.log(user);
        setOfficeData(user)
        createFolder(user);
      } catch (error) {
        console.log(error);
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
        let res = await fetch(`http://ec2-54-227-138-69.compute-1.amazonaws.com/createFolder`,options);
        let json = await res.json();
        console.log(json);
        if (!res.ok) throw {error: error} 

      } catch (error) {
        console.log(error);
      }
    }
    getId()
 },[])

 let avatar = ''
 if (!officeData.avatar) {
   avatar = avatarDefault
   avatar = avatar.src
 } else {
   avatar = officeData.avatar
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
              <h1>Bienvenido  <span className='nombre-office'>{officeData.name}</span></h1>
          </div>
          <ModalAddPhoto
            show={modalShow}
            onHide={() => {
              setModalShow(false);
            }}
            officeData={officeData}
            tokenOffice={tokenOffice}
            photoUser={photoUser}
            />
          <h3 className='subtitle-home'>Clientes...</h3>
          <Card
          officeData={officeData}
          toClick={toClick}
          setPhotoUser={setPhotoUser}
          />

        </LayoutOffice>
      
  )
}

export default HomeCenter