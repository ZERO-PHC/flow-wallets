import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  Heading,
  Flex,
  Divider,
} from "@chakra-ui/react";

export default function FeatureModal({ isOpen, onClose, feature }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} variant="featureModal">
      <ModalOverlay />
      <ModalContent p={{sm: 3, md: 8, lg:12}} w={{sm: "95%", md: "70%", lg: "70%"}} maxW="100%" top={14}>
        <ModalHeader>
          <Flex flexDir="column" w="fit-content">
            <Heading fontSize={{sm: "1.3rem", md:"1.5rem",lg: "1.75rem"}}>{feature.name}</Heading>
            <Divider variant="bottomDetail" w="80%" h="3px"/>
          </Flex>
        </ModalHeader>
        <ModalCloseButton bg="black" borderRadius="50%" />
        <ModalBody px={{sm: 3, md: 10, lg: 12}} py={8}>
          {feature.text.map((text, i) => (
            <Text key={i} p={2} fontSize={{sm: ".9rem",md: "1rem", lg: "1.2rem"}}>
              {text.paragraph}
            </Text>
          ))}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
