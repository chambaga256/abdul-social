import react from "react"
import{Person} from"@material-ui/icons";
import './home.css';
import Topbar from "../../topbars/Topbar";
import Slidebar from "../../feed/slidebar/Sidebar";
import Rightbar from "../../feed/rightbar/Rightbar";
import Feed from "../../feed/Feed";
 
function Home() {
    return (
        <>
     <Topbar />
     <div className="homeContainer">
     <Slidebar />
     <Feed />
     <Rightbar />
     </div>
    

        </>
    )
} 

export default Home
