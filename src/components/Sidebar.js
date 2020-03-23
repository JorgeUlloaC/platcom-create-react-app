import React, { Component} from 'react';

import { Box, Icon } from "@chakra-ui/core";

import  ramos from '../ramos.json';

  
class Sidebar extends Component{

    render(){

        return(
            <div className="col col-md-2">
                <h4>Semestre{ this.props.semestre }</h4>
                <ul className="list-group">
                    {
                    ramos.filter(({ semestre }) => {
                            
                            return semestre === this.props.semestre;
                        })
                        .map((ramo, key) => {
                            return (
                                <div>
                                    <li
                                     className="list-group-item list-group-item-action active mb-2"
                                     onClick={()=>this.props.onRamo( this.props.semestre, ramo.nombre)}>
                                        <a className="text-white" href="#">{ramo.nombre}</a>
                                    </li>
                                </div>
                            );
                        })
                    }
                </ul>
                
            </div>
        );
    }
}

export default Sidebar;