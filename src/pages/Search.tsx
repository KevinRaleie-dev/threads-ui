import { Box, Text, Container, Input, Stack, Tag } from '@chakra-ui/react';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import type { RouteComponentProps } from 'react-router-dom';
import { useFormik } from "formik"

const backgroundGradientArray: string[] = [
    "linear(to-l, #7928CA, #FF0080)",
    "linear(to-r, #DEB8F5, #BA42C0)",
    "linear(to-tl, #22052D, #CCB3D1)",
    "linear(to-tr, #F74C06, #F9BC2C)",
    "linear(to-b, #B94C98, #F0073B)",
    "linear(to-br, #EF745C, #34073D)",
    "linear(to-bl, #F8F9C7, #F2C1EA)",
];

const randomColorGradient = backgroundGradientArray[Math.floor(Math.random() * backgroundGradientArray.length)];

export const Search: React.FC<RouteComponentProps> = ({location}) => {
    const [search, setSearch] = React.useState<string>('');
    const [recentSearches, setRecentSearches] = React.useState<string[]>([]);

    const formik = useFormik({
        initialValues: {
            search: search
        },
        onSubmit: (values, actions) => {
            recentSearches.push(values.search);
            
            actions.setSubmitting(false);
            actions.resetForm();
        }
    });

    const displayLastFiveSearches = (array: Array<string>): Array<string> => {
        const copiedArray = [...array];
        const lastFive = copiedArray.slice(Math.max(copiedArray.length - 5, 0));
        return lastFive
    }

    const recents = displayLastFiveSearches(recentSearches);

    return (
        <>
            <Helmet>
                <title>Search hundreds of fashion pieces, designers and creators | Threads</title>
            </Helmet>
            <Box
            bgGradient={randomColorGradient}
            height={350}
            align="center"
            >
                <Text pt="80px" color="white" fontSize="6xl" fontWeight="700">
                    Search Threads
                </Text>
                <Text mt={3} color="white" fontSize="lg" fontWeight="500">
                    More than hundreds of fashion pieces, artwork and their creators
                </Text>
            </Box>
            <Container position="relative" top="-8" zIndex={1}>
                <form onSubmit={formik.handleSubmit}>
                    <Input
                    backgroundColor="white"
                    boxShadow="base"
                    py={7}
                    onChange={formik.handleChange}
                    value={formik.values.search}
                    name="search"
                    id="search"
                    focusBorderColor="none" 
                    type="search"
                    placeholder="Search items, brands, stores, creators..."
                    />  
                </form>
            </Container>
            <Box
            my={5}
            display="grid"
            placeItems="center"
            >
                {recents.length === 0 ? '' : <>
                    <Stack direction={["column", "row"]} spacing={3} align="center">
                        <Text>Recent searches: </Text>
                        {
                        recents.map((title, index) => (
                            <div key={index}>
                                <Tag cursor="pointer" bgColor="#1e1e1e" color="white" fontSize="small">{title}</Tag>
                            </div>
                        ))}
                    </Stack>
                </>}
            </Box>
        </>
    )
}
