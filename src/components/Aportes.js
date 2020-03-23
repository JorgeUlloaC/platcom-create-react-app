import React, { Component } from 'react'
import NewUrl from './NewUrl'
import {
   Box, Heading, Text, Stack
  } from "@chakra-ui/core";

function Feature({ title, desc, ...rest}) {
    return (
      <Box p={5} shadow="md" borderWidth="1px" {...rest}>
        <Heading fontSize="xl">{title}</Heading>
        <Text mt={4}>{desc}</Text>
      </Box>
    );
  }
  
  function StackEx({titulo, descripcion}) {
    return (
      <Stack spacing={8} bg="green">
        <Feature
          title={titulo}
          desc={descripcion}
        />
      </Stack>
    );
  }
  

class Aportes extends Component{
    state = {
        data:[
            {id:1, titulo:"PrimerAporte", descripcion:"Descripcion de mi aporte",
             url:"www.uach.cl", nickname:"Tallo"} 
        ]
    }

    handleAporte = (data) => {
      const update = this.state.data.push(data);
      this.setState({update})
    }
    render(){
        return(
            <div className="col col-lg-8">
                <h1>{this.props.ramo}</h1>
                {
                    (this.props.ramo === undefined)?<h1>Seleccione un ramo</h1>:
                    <NewUrl ramo={this.props.ramo} onAporte={this.handleAporte}/>
                }
                
                {this.state.data.map(
                    (aporte)=>{
                        return(
                            <StackEx 
                                titulo={aporte.titulo}
                                descripcion={aporte.descripcion}
                                key={aporte.id}
                            />
                        )
                        
                    }
                )}

                
            </div>
            
        )
    }
}

export default Aportes;