import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure, Text } from '@chakra-ui/react'
import React from 'react';

interface Props {
    error: string;
}

export const ErrorModal: React.FC<Props> = ({error}) => {
    const { onClose } = useDisclosure();
    return (
        <>
            <Modal isOpen={true} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>😓 There was problem connecting you.</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text fontSize='sm' mb={3}>{error}</Text>
                    <Text mb={3}>If you received this error, please try refreshing the page. And if the problem persists
                        contact us <span><a href='#'>here</a></span>
                    </Text>

                </ModalBody>
                </ModalContent>
            </Modal>  
        </>
    )
}
