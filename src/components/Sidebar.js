import React, { Component} from 'react';

import { Box, Stack, Text, Heading,List, ListItem, ListIcon } from "@chakra-ui/core";

import  ramos from '../ramos.json';

  
class Sidebar extends Component{

    render(){

        return(
            <div >
                {ramos.filter(({ semestre }) => {
                        
                        return semestre === this.props.semestre;
                    })
                    .map((ramo, key) => {
                        return (
                            <div className="col col-lg-5 position-relative">
                                <Box
                                    textAlign="center"
                                    width="200px"
                                    bg="tomato"
                                    color="white"
                                    key={key}
                                    onClick={()=>this.props.onRamo( this.props.semestre, ramo.nombre)}
                                    >
                                    {ramo.nombre}
                                </Box>
                            </div>
                        );
                     })
                }
            </div>
        );
    }
}

export default Sidebar;