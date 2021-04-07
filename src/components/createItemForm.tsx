import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react'
import React from 'react';
import { FetchItemsDocument, MeDocument, useCreateItemMutation } from '../generated/graphql';
import {useFormik} from 'formik';

export const CreateItemForm = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [createItem] = useCreateItemMutation();
    const formik = useFormik({
      initialValues: {
        name: '',
        price: 0,
        imageUrl: '',
        description: '',
        quantity: 0
      },
      onSubmit: async ({name, price, imageUrl, description, quantity}, actions) => {
        await createItem({
          variables: {
            name,
            price,
            imageurl: imageUrl,
            description,
            quantity
          },
          refetchQueries: [{query: MeDocument}, {query: FetchItemsDocument}]
        });

        actions.resetForm();
      }
    })

    return (
        <>
          <Button colorScheme='black' bg='#020202' onClick={onOpen}>
            New item
            </Button>
            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>New Item</ModalHeader>
                <ModalCloseButton />
                <form onSubmit={formik.handleSubmit}>
                <ModalBody pb={6}>
                    <Stack spacing={3}>
                        <FormControl id="name">
                        <FormLabel>Name of the Item</FormLabel>
                        <Input
                        focusBorderColor="black" 
                        type="text" 
                        name="name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        />
                        </FormControl>                  
                        <FormControl id="description">
                        <FormLabel>Item description</FormLabel>
                        <Input 
                        focusBorderColor="black" 
                        type="text" 
                        name="description"
                        onChange={formik.handleChange}
                        value={formik.values.description}
                        />
                        </FormControl>
                        <FormControl id="imageUrl">
                        <FormLabel>Image Url</FormLabel>
                        <Input 
                        focusBorderColor="black" 
                        type="text" 
                        name="imageUrl"
                        onChange={formik.handleChange}
                        value={formik.values.imageUrl}
                        />
                        </FormControl>
                        <FormControl id="price">
                        <FormLabel>Item price</FormLabel>
                        <Input
                        focusBorderColor="black"  
                        type="number" 
                        name="price"
                        onChange={formik.handleChange}
                        value={formik.values.price}
                        />
                        </FormControl>
                        <FormControl id="quantity">
                        <FormLabel>Quantity</FormLabel>
                        <Input
                        focusBorderColor="black"  
                        type="number" 
                        name="quantity"
                        onChange={formik.handleChange}
                        value={formik.values.quantity}
                        />
                        </FormControl>
                    </Stack>
                  </ModalBody>
                  <ModalFooter>
                    <Button isLoading={formik.isSubmitting} loadingText='Adding item...' type='submit' colorScheme='black' bg='#020202' mr={3}>
                      Submit
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                  </ModalFooter>
                </form>
              </ModalContent>
            </Modal>  
        </>
    )
}
