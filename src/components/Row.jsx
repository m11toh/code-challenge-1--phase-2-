
const Row = ({details}) =>{

    const rows = details.map((entity,index) =>{
        return(
            <tr key={index+1}>
                <td>{entity.date}</td>
                <td>{entity.description}</td>
                <td>{entity.category}</td>
                <td>{entity.amount}</td>
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