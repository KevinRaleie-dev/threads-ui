import { Box, Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';
import { useFormik } from 'formik';
import React, { useState } from 'react'

interface ChangePasswordFormProps {
    displayText: string;
}

export const ChangePasswordForm: React.FC<ChangePasswordFormProps> = ({displayText}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [email, setEmail] = useState('');
    const [displayButton, setDisplayButton] = useState<string>('');
    const [displaySuccess, setDisplaySuccess] = useState<string>('none');

    const formik = useFormik({
        initialValues: {
            email: email,
        },
        onSubmit: (values, actions) => {
            setTimeout(() => {
                console.log(values);
    
                actions.setSubmitting(false)
                setDisplayButton("none");
                setDisplaySuccess("");
    
                actions.resetForm();
            }, 3000);
        }
    })

    return (
        <Box>
            <Text _hover={{cursor: "pointer"}} fontSize='sm' opacity={0.7} align='center' onClick={onOpen}>
                {displayText}
            </Text>
            <Modal isOpen={isOpen} onClose={() => {
                setDisplayButton('');
                setDisplaySuccess('none');
                onClose();
                }} closeOnOverlayClick={true}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Reset Password</ModalHeader>
                    <ModalCloseButton />
                    <form onSubmit={formik.handleSubmit}>
                        <ModalBody>
                            <Text color="gray.600" fontSize="sm" mb={3}>
                                We'll send a reset link to the email address provided.
                            </Text>
                            <Input
                            focusBorderColor="black"
                            type="email"
                            id="email"
                            name={email}
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            placeholder="Enter your email"
                            />
                        </ModalBody>
                        <ModalFooter>
                        <Button display={displayButton} isLoading={formik.isSubmitting} type="submit" variant="outline">Send link</Button>
                        <Text display={displaySuccess} fontSize="3xl">👍🏽</Text>
                        <Text display={displaySuccess} ml={2} fontSize="sm">Reset link sent!</Text>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </Box>
    )
}
