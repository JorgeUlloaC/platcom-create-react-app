import React, { Component } from 'react'
import NewUrl from './NewUrl'

class Aportes extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.ramo}</h1>
                {
                    (this.props.ramo === undefined)?<h1>Seleccione un ramo</h1>:
                    <NewUrl ramo={this.props.ramo}/>
                }
                
            </div>
            
        )
    }
}

export default Aportes;