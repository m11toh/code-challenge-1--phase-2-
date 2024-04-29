import { useState } from "react"

function Input({details}){
const [data,setData] =  useState () 
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
                if(filtered.lenght > 0){
                    setData([...filtered])
                }else{
                    setData(data)
                }
            }
        }
        return(
            <div className="m-4 p-5">
                <input onChange={TakeChange} className="form-control form-control-sm" type="text" placeholder="Type" />
            </div>
        )

}

export default Input;