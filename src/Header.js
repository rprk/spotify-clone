import React from 'react';
import "./header.css";
import SearchIcon from '@material-ui/icons/Search';
import {Avatar} from '@material-ui/core';
import {useDataLayerValue} from './DataLayer';

function Header() {

    const [{user},dispatch]=useDataLayerValue();
    return (
        <div className='header'>
            <div className='header_left'>
                <SearchIcon/>
                <input placeholder='Search for Artistis,songs, or podcast' type="text" />
            </div>
            <div className='header_right'>
                <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                <h4>{user?.display_name}</h4>

            </div>
        </div>
    )
}

export default Header
