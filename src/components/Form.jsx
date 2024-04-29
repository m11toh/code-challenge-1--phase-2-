const Form = () => {
    return(
        
    <>
        <form>
            <div className="row border p-5 m-4">
                <div className="col-3 mx-auto">
                    <input className="form-control form-control-sm" name="date" type="date" placeholder="Insert date"/>
                </div>
                <div className="col-3 mx-auto">
                    <input className="form-control form-control-sm" name="category" type="text" placeholder="Enter Category"/>
                </div>
                <div className="col-3 mx-auto">
                    <input className="form-control form-control-sm" name="Description" type="text" placeholder="Give Descrition"/>
                </div>
                <div className="col-3 mx-auto">
                    <input className="form-control form-control-sm" name="amount" type="number" placeholder="Enter Amount"/>
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