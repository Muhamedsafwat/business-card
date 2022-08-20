//importing profile picture
import pic from "../assets/pic.png"
//importing icons
import {MdEmail} from "react-icons/md"
//styles
import "../styles/header.css"


const Header = () => {
    return ( 
        <div className="header">
            <div className="image">
                <img src={pic} alt="my picture" />
            </div>
            <h1>Muhamed Safwat</h1>
            <p>Frontend developer</p>
            <button> <MdEmail className="icon"/> Email </button>
        </div>
     );
}
 
export default Header;