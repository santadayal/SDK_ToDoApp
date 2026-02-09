
let Item=({Name,Date,deleteItem})=>{
  return(


    <div className="container ">
        <div className="row row2">
          <div className="col-6">{Name }</div>
          <div className="col-4">{Date}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger btn2" onClick={()=>deleteItem(Name)}>
              Delete
            </button>
          </div>
        </div>
      </div>

  )
}
export default Item;