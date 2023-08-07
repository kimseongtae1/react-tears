import React from 'react'
import {useParams} from 'react-router-dom'

function ParamItem({data}) {
  const {code} = useParams();

  let detail = data.filter(obj => obj.id === code);

  // data.filter(function(obj, key){
  //   return obj.id === code
  // })

  console.log(detail);

  return (
    
    <div className='na'>
    <img src={detail[0].thumb} alt=""/>   
    <p>상영시간 : {detail[0].price}</p>
    <p>제목 : {detail[0].name}</p>
    <p>출연진 : {detail[0].hu}</p>
    <p className='ohoho'>줄거리 : {detail[0].detail}</p></div>
    
    
  )

}

export default ParamItem