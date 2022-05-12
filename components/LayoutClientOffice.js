import React, {useState, useEffect} from 'react'


export default function LayoutClientOffice({children}) {

    const data = children.props.data;

    console.log(data);

    

  return (
    <>
    {(!data)
    ?null
    :
      <>
      <div className="container-home">
        <img className="avatar-office" src={data.avatar} width={150} height={150}/>
      </div>
      <div>
        <h3>{data.name} {data.lastName}</h3>
      </div>
      </>
    }
      {children}
    </>
  )
}
