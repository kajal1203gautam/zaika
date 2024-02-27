'use client'
import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { useState, useEffect } from 'react';
import { loadData } from '../services/api';
import Link from 'next/link';

export default function Sidebar({ product, setProduct }) {
    const [open, setOpen] = React.useState(true);
    const [category, setCategory] = useState([]);

    const handleData = async () => {
        try {
            const result = await loadData('https://webprotec.org/ecommerce/api/v1/category');
            const { categories } = result
            // console.log(categories, 'result');
            setCategory(categories);

        } catch (error) {
            console.error(error, 'error');
        }
    }
    const handleCategory = async (id) => {
        try {
            const result = await loadData(`https://webprotec.org/ecommerce/api/v1/products/category/${id}`);
            const { products } = result
            console.log(products, 'handleCategory');
            setProduct(products)
        } catch (error) {
            console.error(error, 'error');
        }
    }

    useEffect(() => {
        handleData();
        handleCategory();
    }, [])

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Category
                </ListSubheader>
            }
        >

            {
                category && category.length > 0 && category.map((category) => {
                    // console.log(category, 'category');
                    return (

                        <ListItemButton onClick={() => {handleCategory(category.id)}}  key={category.id}>
                            <ListItemIcon>
                                <img src={category.image_url} height={30} />
                            </ListItemIcon>
                            <ListItemText>
                                {category.title}
                            </ListItemText>
                        </ListItemButton>


                    )
                })
            }


            {/* <ListItemButton>
                <ListItemIcon>
                    <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
            </ListItemButton>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Category" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                {
                    category && category.length > 0 && category.map((category) => {
                        console.log(category, 'category');
                        return (

                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <img src={category.image_url} height={30} />
                                    </ListItemIcon>
                                    <ListItemText>
                                        {category.title}
                                    </ListItemText>
                                </ListItemButton>
                            </List>


                        )
                    })
                }



            </Collapse> */}
        </List>
    );
}