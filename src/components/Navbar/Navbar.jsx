

import { navOptions } from '../../constants';
import './Navbar.css';

function NavOption(props){
    return <p>{props.navItem}</p>;
}
function Navbar(){
    var name ='<PR/>';
    return(
        <div className="navbar_container">
            <div className="navbar_left">
                {name}
            </div>
            <div className="navbar_right">
                {navOptions.map(function(item,index){
                    return <NavOption key ={item} navItem={item}/>
                })}
                
            </div>
        
        </div>
    )
}
export default Navbar;