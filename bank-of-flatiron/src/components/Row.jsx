import Button from "./Button"
const Row = ({details}) =>{

    const rows = details.map((entity,index) =>{
        return(
            <tr key={index+1}>
                <td>{entity.date}</td>
                <td>{entity.category}</td>
                <td>{entity.description}</td>
                <td>{entity.amount}</td>
                <td>
                 <Button>
                    <span>Delete</span>
                </Button>
                </td>
            </tr>

        )
    })
    
    return (
        <>
         {rows}   
        </>
    )

}

export default Row