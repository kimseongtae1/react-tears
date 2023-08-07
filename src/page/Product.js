
import Item from './Item';
function Product({data}) {
  
  return (
    <>
        <h2>상영 정보</h2>
        
        <div className="lala">

            {
              // data.map(function(){
              //   return 0;
              // })

              data.map((item,k)=>(
                <Item key={item.id} item={item}/>
              ))
            }

          
         
        </div>
       
               
               
        
        
    </>
    
   
  )
}

export default Product