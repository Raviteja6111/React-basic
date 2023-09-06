import RestoComponent from "./Resto";
import restorentData from "../utilis/mockData";
import { useState } from "react";
   
const BodyComponent = () =>{

        let[restorentData, filterRestorent] = useState([
            {
                id: "109168",
                name: "Teja Tiffins",
                cloudinaryImageId: "8523266de1213e8ea57e5df4eedf747e",
                locality: "Opposite Lucky Hotel",
                areaName: "Santosh Nagar",
                costForTwo: "₹250 for two",
                cuisines: [
                    "Lebanese",
                    "Arabian"
                ],
                avgRating: 4.3,
             
            },
            {
            
                id: "209168",
                name: "Keerthi tiffins",
                cloudinaryImageId: "nqgrpd6e8vliz57mxlvu",
                locality: "kphb",
                areaName: "Santosh Nagar",
                costForTwo: "₹250 for two",
                cuisines: [
                    "Lebanese",
                    "Arabian"
                ],
                avgRating: 4.3,
             
            },
            {
            
                id: "309168",
                name: " sravanthi Tiffins",
                cloudinaryImageId: "8523266de1213e8ea57e5df4eedf747e",
                locality: "DLF",
                areaName: "Santosh Nagar",
                costForTwo: "₹350 for two",
                cuisines: [
                    "South Indian",
                    "North Indian"
                ],
                avgRating: 2.3,
             
            },
            {
            
                id: "509168",
                name: "Bablu tiffins",
                cloudinaryImageId: "8523266de1213e8ea57e5df4eedf747e",
                locality: "pragathinagar",
                areaName: "Santosh Nagar",
                costForTwo: "₹250 for two",
                cuisines: [
                    "Lebanese",
                    "Arabian"
                ],
                avgRating: 3.3,
             
            },
        ]);
       
    return (
        <div className="body">
            <div className="top-rated">
                <button className="top-resto" onClick={ ()=> { let filterResto = restorentData.filter((resto) => resto.avgRating >4);
                // console.log(demorestoData); 
                filterRestorent(filterResto)
                // restorentData = filterResto;
                }}
                >Top Rated Resto
                </button>
                
               
            </div>
            <div className="resto-container">
                {
                    restorentData.map((restrorent) => (<RestoComponent restoData = {restrorent}/>))
                }
            </div>
        </div>
    )
    };
  export default BodyComponent;