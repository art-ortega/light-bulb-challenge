import React, {Component} from 'react'
import lbon from './lbon.png'
import lboff from './lboff.png'
import lson from './lson.png'
import lsoff from './lsoff.png'


class Light extends Component {
    constructor(props) {
        super(props)
            this.state = {
                light:true,
                lightPic:lbon,
                lightSwitch:lson
            }
    }

    lightStatus = () => {
        let {light} = this.state
        if(light){
            this.setState({light:false})
            this.setState({lightPic:lboff})
            this.setState({lightSwitch:lsoff})
        }else if(!light){
            this.setState({light:true})
            this.setState({lightPic:lbon})
            this.setState({lightSwitch:lson})
        }
    }




    render(){
        return(
            <div className = "container">
                <div >
                    <img src={this.state.lightPic}/>
                </div>
                <img className = "light-switch"src={this.state.lightSwitch} onClick={this.lightStatus}/>
            </div>
        )
    }
}

export default Light
