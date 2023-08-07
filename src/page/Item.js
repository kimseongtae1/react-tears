import React from 'react'
import {Link} from 'react-router-dom'
function Item({item}) {
    

    let preview = ()=>{
        console.log('fsdfsfs');
    }
  return (
    <div onClick={preview}>
        <img src={item.thumb} alt=""/>   
        <p>제목 : {item.name}</p>
        <p>상영시간 : {item.price}</p>
        <p>출연진 : {item.hu}</p>
        <Link to={`/paramItem/${item.id}`}>자세히보기</Link>
    </div>
  )
}

export default Item