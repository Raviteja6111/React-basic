import React from "react";
import ReactDOM  from "react-dom";
import HeaderComponent from "./component/Header";
import FooterComponent from "./component/Footer";
import BodyComponent from "./component/Body";

/**
 * HeaderComponent
 *  -LOGO
 *  -Menu Item
 * 
 * BodyComponent
 *  -SerchBar
 *  RestoComponent
 *   -Image
 *   -RestoName
 *   -Rating
 *   -deliveryTime
 * 
 * FooterComponent
 * copyrights
 * links
 * properties for components
 * will create src folder and move the App.js in to it
 * wii create component and will put all component in folder
 * will create separate component file and link 
 * 
 */

    const AppLayout = () =>{
        return (
            <div className="container-fluid">
                <HeaderComponent></HeaderComponent>
                <BodyComponent></BodyComponent>
                <FooterComponent></FooterComponent>
            </div>

        )
    }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout></AppLayout>);
