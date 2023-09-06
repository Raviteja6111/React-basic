import {PRODUCT_IMG_BASEURL } from "../utilis/constant"

const RestoComponent = (props) =>{
    // console.log(props);
    const {restoData} = props
    console.log(restoData);
    return(
        <div className="resto">
            <img src={
            "" + restoData.cloudinaryImageId
        }/>
            
            <h2>{restoData.name}</h2>
            <h4>{restoData.avgRating}</h4>
            <h4>{restoData.locality}</h4>
            <h4>{restoData.costForTwo}</h4>
            <h4>{restoData.cuisines.join(" , ")}</h4>
            
        </div>
    )
};
export default RestoComponent;