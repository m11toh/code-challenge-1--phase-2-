import { useState } from "react"


const Form = ({details, setTransactions}) => {

    const [formdata,setFormData] = useState(
        {
            date:"",
            description:"",
            category:"",
            amount:""
       }
    )

    function handleSubmit(event){
        event.preventDefault()
        setTransactions([...details, formdata])
    }

    function handleChange(event){
        setFormData(
            {
                ...formdata,
                [event.target.name] : event.target.value
            }
        )

        console.log(formdata)
    }
    return(
        
    <>
        <form onSubmit={handleSubmit}>
            <div className="row border p-5 m-4">
                <div className="col-3 mx-auto">
                    <input className="form-control form-control-sm" onChange={handleChange} name="date" value={formdata.date} type="date" placeholder="Insert date"/>
                </div>
                <div className="col-3 mx-auto">
                    <input className="form-control form-control-sm" onChange={handleChange} name="description" value={formdata.description}type="text" placeholder="Give Descrition"/>
                </div>
                <div className="col-3 mx-auto">
                    <input className="form-control form-control-sm" onChange={handleChange} name="category" type="text" value={formdata.category} placeholder="Enter Category"/>
                </div>
                <div className="col-3 mx-auto">
                    <input className="form-control form-control-sm" onChange={handleChange} name="amount" type="number" value={formdata.amount}placeholder="Enter Amount"/>
                </div>
               <div className="col-4 mx-auto p-4">
                    <button type="submit" className="mx-auto btn btn-info ">Add Transaction</button>
               </div>
                
                
            </div>
            
        </form>
    </>
    )
}

export default Form