import './ManagerRequest.css'

function ManagerRequest(){

    function mrBtnHandler(){
        alert("Manager Request Sent!");
    }

return(
    <div className="mrContainer" >
        <button  type='button' onClick={mrBtnHandler} className="mrBtn" >Manager Request</button>
 </div>
)

}

export default ManagerRequest;