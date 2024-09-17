import React from 'react'
import './DisplayNews.css';

// function DisplayNew({data}) {
    // console.log(data)
    // const readMore = (url)=>{
    //     console.log('hii')
    //     // window.open(url)
  //     const harsh = ()=>{
  //       console.log('harsh')
  //     }
  //   // }
  // return (
  //   <div className='DisplayNews'>
  //     {data.map((item,index)=>{
  //       return(
  //           <div className='data'>
  //                <img src={item.urlToImage} alt="Image" />
  //                <div className='content'>
  //                   <a href="">{item.title}</a>
  //                   <p>{item.description}</p>
  //                   <button onClick={harsh()}></button>
  //                </div>
  //           </div>
  //       )
  //     })}
  //   </div>
  // )
// }
const DisplayNew = ({ data }) => {
 
// }
return (
<div className='DisplayNews'>
  {data.map((item,index)=>{
     if(!item.urlToImage){
      return null
    }
    else{
      return(
        <div className='data'>
         
             <img src={item.urlToImage} alt="Image" />
             <div className='content'>
                <a href=""onClick={()=>window.open(item.url)}>{item.title}</a>
                <p>{item.description}</p>
                <button className='btnreadmore' onClick={()=>window.open(item.url)}>Read More</button>
             </div>
        </div>
    )
    }
    
  })}
</div>
)
}
export default DisplayNew
