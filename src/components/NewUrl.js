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


function NewUrl() {
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default NewUrl;
