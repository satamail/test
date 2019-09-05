import React from 'react';
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";


export default function PageNavigation({ links }) {
    return (
        <MenuList>
        {
            Object.entries(links).map(([url, text], index) => (
                <Link to={url} style={{ textDecoration: 'none' }} key={index}>
                    <MenuItem>
                        <Typography variant="inherit">{text}</Typography>
                    </MenuItem>
                </Link>
            ))
        }
    </MenuList>
    )
}
