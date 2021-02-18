import React from 'react'
import { Navbar, NavbarBrand, Nav } from 'reactstrap';
import { Link } from "react-router-dom";


const Header = () => {

    var userid = sessionStorage.getItem("userid");
    var flag=true;
    var usercheck=()=>{
        
        if(userid==1){
            flag=true;
          return flag;
        }else
        {
        return flag=false;
        }
    }

    var user=usercheck();
    console.log("hello")
console.log(user)
    
 let handleClick=()=>{
    sessionStorage.removeItem("userid");
}

    return (
        <div className="App container py-3">
            <Navbar color="dark" expand="md">
                <NavbarBrand href="/" >mstockapp</NavbarBrand>

                <Nav >
                    <div className="container">

                       {  <Link className="class1" tag="a" to="/company" >Companies</Link> }

                        {   <Link className="class1" tag="a" to="/watchlist" >WatchList</Link>}

                       {  <Link className="class1" tag="a" to="/ComparePerformance" >ComparePerformance</Link>}

                         {  <Link className=" class1" tag="a" to="/login" onClick={handleClick} >Logout</Link>}

                        {  <Link className=" class1" tag="a" to="/login"  >Login</Link>}
                
                    </div>
                </Nav>

            </Navbar>
        </div>
    )

    // } else {
    //     return (
    //         <div>
    //             <div className="App container py-3">
    //                 <Navbar color="dark" expand="md">
    //                     <Nav>
    //                         <div className="container">
    //                             <NavbarBrand href="/">mstockapp</NavbarBrand>
    //                             <div className="nav justify-content-end">
    //                             <Link className="class" tag="a" to="/login" >Login</Link>

    //                             <Link className="class1" tag="a" to="/company">Companies</Link>

    //                             </div>

    //                         </div>
    //                     </Nav>
    //                 </Navbar>
    //             </div>
    //         </div>
    //     )
    // }
}
export default Header;
