import Row from "./Row"


const Table = ({details}) => {
      
 

    return(
        <>
       
           
    
            <table className="table  table-success table-hover table-bordered ">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <Row details={details}/>
                </tbody>
            </table>
        </>
    )
}

export default Table