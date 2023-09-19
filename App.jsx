import React, {Component} from "react";
import Cardlist from "./Cardlist";
import { robots } from "./robot";
import SearchBox from './SearchBox.jsx'
function App extends Component{
    constructor (){
        super()
        this.state={
            robots:robots,
            searchfield:''
        }
    }
    onSearchChange(event){
        console.log(event) 
    }
    render(){ 
        return(
            <div className="tc">
                    <h1>RobotFriend</h1>
                    <SearchBox searchange={this.onSearchChange} />
                <Cardlist robots={this.state.robots}/>
            </div>
    )} 
  
}
export default App;