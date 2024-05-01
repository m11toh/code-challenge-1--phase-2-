import { useState } from "react"

function Input({details , setTransactions ,array}){

console.log(details)
        function TakeChange(event){
            const type = event.target.value
            console.log(details)
            if(type.length > 0){
                const filtered = details.filter((detail)=>{
                    console.log(detail.category)
                    return detail.category.includes(type)
                })
                console.log(filtered)
               
                    setTransactions([...filtered])
                
            }else(
                setTransactions(...[array])
            )
        }
        return(
            <div className="m-4 p-5">
                <input onChange={TakeChange} className="form-control form-control-sm" type="text" placeholder="Type" />
            </div>
        )

}

export default Input;