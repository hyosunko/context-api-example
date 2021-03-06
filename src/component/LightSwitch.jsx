import React, { Component } from 'react';

import LightCircuit from '../context/context'

class LightSwitch extends Component {
    constructor(props){
        super(props)
        this.state = {up: false}
      }
    render() {
      return <LightCircuit.Consumer>
                {
                    ({flipSwitch}) => {
                        const handleClick = () => {
                            this.setState({up: !this.state.up})
                            flipSwitch()
                        }
                        return <button 
                            onClick={handleClick} 
                            className={'light-switch' + 
                                        (this.state.up ? ' up' : ' down') +
                                        ' ' + this.props.className }><div>Off</div></button>
                    }
                }      
            </LightCircuit.Consumer>
    }
}

export default LightSwitch