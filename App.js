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
 */

const HeaderComponent = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src="https://www.google.com/search?q=food+logo&oq=food+lo&gs_lcrp=EgZjaHJvbWUqCggBEAAYsQMYgAQyBggAEEUYOTIKCAEQABixAxiABDIHCAIQABiABDIKCAMQABixAxiABDIHCAQQABiABDIVCAUQLhgKGIMBGMcBGLEDGNEDGIoFMgcIBhAAGIAEMgcIBxAAGIAEMgcICBAAGIAEMgcICRAAGIAE0gEIODU4MWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#vhid=q2Xp52tK05j7UM&vssid=l" alt=""></img>
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

    const RestoComponent = () =>{
        return(
            <div className="resto">
                <img src="https://www.google.com/search?q=tiffin+images&tbm=isch&ved=2ahUKEwjf_ciupOWAAxV3k2MGHVYDAzgQ2-cCegQIABAA&oq=tiffin+&gs_lcp=CgNpbWcQARgEMgoIABCKBRCxAxBDMgcIABCKBRBDMgcIABCKBRBDMgcIABCKBRBDMgcIABCKBRBDMgcIABCKBRBDMgcIABCKBRBDMgUIABCABDIFCAAQgAQyBwgAEIoFEEM6BAgjECc6CAgAEIAEELEDULAPWLAPYOgaaABwAHgAgAG-AYgB7AKSAQMwLjKYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=4-feZJ-AC_emjuMP1oaMwAM&bih=825&biw=598#imgrc=xDkVGOli5jnfeM"/>
                <h2>bablu tifins</h2>
                <p>Biryani, veg</p>
                <h4>4.5</h4>
                <h4>In 40 mins</h4>
            </div>
        )
    };

const BodyComponent = () =>{
    return (
        <div className="body">
            <div className="resto-container">
            <RestoComponent />
            <RestoComponent/>
            <RestoComponent/>
            <RestoComponent/>
            
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
