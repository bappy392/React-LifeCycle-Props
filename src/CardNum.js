
const CardNum=({cardValue,setPickedNum})=>{
    const setPickedData=()=>{
        setPickedNum(cardValue)
    }
    return(
        <div>
            <p onClick={setPickedData}>{cardValue}</p>
        </div>
    )

}

export default CardNum