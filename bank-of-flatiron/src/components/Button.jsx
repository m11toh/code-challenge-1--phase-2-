const Button = ({children}) =>{

    function click(value){
        console.log(value)
    }

   
    return(
       <button onClick={() => click('handleclick')} className="btn btn-danger">{children}</button>

    )
   
}


export default Button