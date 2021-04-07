import { Box, Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';
import { useFormik } from 'formik';
import React, { useState } from 'react'

interface ChangePasswordFormProps {
    displayText: string;
}

export const ChangePasswordForm: React.FC<ChangePasswordFormProps> = ({displayText}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [email, setEmail] = useState('');

    const formik = useFormik({
        initialValues: {
            email: email,
        },
        onSubmit: () => {

        }
    })

    return (
        <Box>
            <Text _hover={{cursor: "pointer"}} fontSize='sm' opacity={0.7} mt={3} align='center' onClick={onOpen}>
                {displayText}
            </Text>
            <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={true}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader bg="#1e1e1e" color="whitesmoke">Password reset</ModalHeader>
                    <ModalCloseButton color="whitesmoke" />
                    <ModalBody>
                        <Text color="gray.400" fontSize="sm" mb={3}>
                            We'll send a reset link to the email address provided.
                        </Text>
                        <form onSubmit={formik.handleSubmit}>
                            <Input
                            focusBorderColor="black"
                            type="email"
                            id="email"
                            name={email}
                            placeholder="Enter an email"
                            />
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="outline">Send link</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}
