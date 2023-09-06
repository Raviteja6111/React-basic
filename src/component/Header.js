import{SITE_URL} from"../utilis/constant"

const HeaderComponent = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src="SITE_URL" alt=""></img>
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

    export default HeaderComponent