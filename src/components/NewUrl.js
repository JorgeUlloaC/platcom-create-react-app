import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/core";

import { useForm } from "react-hook-form";



function NewUrl({ramo, onAporte}){

    const { isOpen, onOpen, onClose } = useDisclosure(false);
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
      data.ramo = ramo;
      onAporte(data);
    };

    return (
      <>
        <input type="submit" className="btn btn-lg btn-warning d-inline-block mb-3 ml-4" 
          value="Añadir Aporte"
          onClick={onOpen}
        />
        <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent maxW="400px">
            <DrawerHeader maxH="30px" borderBottomWidth="1px">
              Formulario de Aporte
            </DrawerHeader>
            <DrawerBody>
              <form onSubmit={
                handleSubmit(onSubmit)
              }>
                <p>{ramo}</p>
                <input name="titulo" ref={register({ required: true })} />

                {errors.titulo && (
                  <h1>Error</h1>
                )}

                <input name="descripcion" ref={register({ required: true })} />
                {errors.descripcion &&(
                  <h1>Error</h1>
                )}

                <input name="link" ref={register({ required: true })} />
                {errors.link && "Ingrese link!."}

                <input name="autor" ref={register({ required: true })} />
                {errors.autor && "Ingrese autor!."}

                <input type="submit" />
              </form>
              
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    );

}

export default NewUrl;
