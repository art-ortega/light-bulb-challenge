import React,{Component} from 'react'
import Light from './light'

class Add extends Component {
    constructor(props){
        super(props)
        this.state = {
            buttonVal: []
        }
    }

    addLight = () =>{
        let {buttonVal} = this.state
        if(buttonVal.length === 9){
            this.setState({buttonVal:buttonVal})
        } else {
            buttonVal.push(<Light/>)
            this.setState({buttonVal:buttonVal})
        }
    }
    remLight = () =>{
        let {buttonVal} = this.state
        buttonVal.pop()
        this.setState({buttonVal:buttonVal})
    }

    render(){
        return(
            <div className = "app-container">
                <div className = "button">
                <button onClick={this.addLight}>Add Light</button>
                <button onClick={this.remLight}>Remove Light</button>
                </div>
                <p className = "button">{this.state.buttonVal}</p>
            </div>
        )
    }
}
export default Add
