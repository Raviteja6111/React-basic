import React from "react";
import ReactDOM  from "react-dom";

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
 */

const HeaderComponent = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src="https://img.freepik.com/premium-vector/good-food-logo-template_79169-17.jpg?w=996" alt=""></img>
            </div>
            <div className="navitem">
            <ul>
                <li>Home</li>
                <li>AboutUs</li>
                <li>Service</li>
                <li>Top offers</li>
                <li>my Card</li>
            </ul>
            </div>
        </div>
    )
    };

    const RestoComponent = (props) =>{
        console.log(props);
        return(
            <div className="resto">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/8523266de1213e8ea57e5df4eedf747e"></img>
                <h2>{props.resName}</h2>
                <p>{props.resRating}</p>
                <h4>{props.resDeliverytime}</h4>
                <h4>{props.resMake}</h4>
            </div>
        )
    };

const BodyComponent = () =>{
    return (
        <div className="body">
            <div className="resto-container">
            <RestoComponent 
            resName = "Bablu" 
            resRating = "3.6" 
            resDeliverytime="30min" 
            resMake="Biryani, Tandoori" />
            <RestoComponent
               resName = "KFC - food" 
               resRating = "3.9" 
               resDeliverytime="20min" 
               resMake="Fried pices"/>
            <RestoComponent
               resName = "sravanthi-food" 
               resRating = "5" 
               resDeliverytime="25min" 
               resMake="All indian food"/>
            <RestoComponent
               resName = "keerthi" 
               resRating = "2.5" 
               resDeliverytime="30min" 
               resMake="Biryani, Tandoori"/>
            
            </div>
        </div>
    )
    };

    const FooterComponent = () =>{
        return(
            <div className="footer"><h2>FooterComponent</h2></div>
        )
    }

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
