

interface Props {
  list: any[]|undefined;
}


export const BusList: React.FC<Props> = ({list}) => {
    
 
 return (
      <div className="Center">
        <p>Live bus time for <span style={{fontWeight: 'bold'}}>Park Road</span></p>
    {
    list?.map((item) => {
      
    
return (


    <div className="Card" style={{marginBottom: "10px"}}>
      <div className="Card__Header">
        <b>{item.busId}</b>
      </div>
      <div className="Card__Details">
        <div>To {item.destination} </div>
        { item.minutesUntilArrival <= 1 ?
          <div>Due</div> :
        <div>{item.minutesUntilArrival} mins</div>
    }
      </div>
    </div>
  
    )

})}
    </div>
)}