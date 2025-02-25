import React from 'react'

export const RecipeIndex = ({alphaIndex}) => {
    const alpha=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var num=0;
    return (
    <>
        {
            alpha.map(item=>{
                return(
                    <div className='numBox' key={num++} onClick={()=>alphaIndex(item)}>
                    <button><div>{item}</div></button>
                    </div>
                )
            })
        }
    </>
  )
}
