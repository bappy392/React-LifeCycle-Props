

const OddOrEvent=({count,pickedNum})=>{
     return (
         <div>
             <h2>Odd OR Event JS</h2>
             <p>{count%2==0?'Even':'Odd'}</p>
             <h2>Card Numbers</h2>
             <p>{pickedNum%2==0?'Even':'Odd'}</p>
         </div>
     )
}


export default OddOrEvent