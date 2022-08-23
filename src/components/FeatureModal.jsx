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
      <ModalContent p={12} w="70%" maxW="100%" top={14}>
        <ModalHeader>
          <Flex flexDir="column" w="fit-content">
            <Heading fontSize="1.75rem">{feature.name}</Heading>
            <Divider variant="bottomDetail" w="80%" h="3px"/>
          </Flex>
        </ModalHeader>
        <ModalCloseButton bg="black" borderRadius="50%" />
        <ModalBody px={12} py={8}>
          {feature.text.map((text, i) => (
            <Text key={i} p={2} fontSize="1.2rem">
              {text.paragraph}
            </Text>
          ))}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
