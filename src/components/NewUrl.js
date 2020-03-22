import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  Icon,
  useDisclosure,
  Alert,
  AlertIcon,
  AlertTitle
} from "@chakra-ui/core";

import { useForm } from "react-hook-form";

function NewUrlForm({ramo}) {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    console.log(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>{ramo}</p>
      <input name="titulo" ref={register({ required: true })} />

      {errors.titulo && (
        <>
          <Alert status="error">
            <AlertIcon />
            <AlertTitle mr={2}>Ingrese título!</AlertTitle>
          </Alert>
        </>
      )}

      <input name="descripcion" ref={register({ required: true })} />
      {errors.descripcion &&(
        <>
          <Alert status="error">
            <AlertIcon />
            <AlertTitle mr={2}>Ingrese descripcion!</AlertTitle>
          </Alert>
        </>
      )}

      <input name="link" ref={register({ required: true })} />
      {errors.link && "Ingrese link!."}

      <input name="autor" ref={register({ required: true })} />
      {errors.autor && "Ingrese autor!."}

      <input type="submit" />
    </form>
  );
}


function NewUrl({ramo}) {
  const { isOpen, onOpen, onClose } = useDisclosure(false);

  return (
    <>
      <input type="submit" className="btn btn-lg btn-warning" value="abrir"
        onClick={onOpen}
      />
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent maxW="400px">
          <DrawerHeader maxH="30px" borderBottomWidth="1px">
            Formulario de Aporte
          </DrawerHeader>
          <DrawerBody>
            <NewUrlForm ram={ramo}/>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default NewUrl;
