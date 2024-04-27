import Row from "./Row"

const Table = () => {

    const transaction = [
        {
            date:'13/Apr/2020',
            category:'Income',
            description:'withdraw income',
            amount: "$600"
        },{
            date:'14/May/2020',
            category:'Food',
            description:'lunch and dinner',
            amount: "$400"
        },{
            date:'19/Feb/2020',
            category:'Fashion',
            description:'Suits and trousers',
            amount: "$300"
        }
    ]
 function handleChange(){
    console.log("Handle change");
    
    
 }

    return(
        <>
            <div className="m-4 p-5">
                <input onChange={handleChange} className="form-control form-control-sm" type="text" placeholder="Type" />
            </div>
    
            <table className="table  table-success table-hover table-bordered ">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <Row details={transaction}/>
                </tbody>
            </table>
        </>
    )
}

export default Table