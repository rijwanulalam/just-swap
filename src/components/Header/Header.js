import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <div className="flex content-center justify-between p-4">
            <div>
            <IconButton>
                <PersonIcon fontSize="large" />
            </IconButton>
            </div>
            <div>
            <IconButton>
            <img src={logo} alt="" width="50" height="50" />
            </IconButton>
            </div>
            <div>
            <IconButton>
                <ForumIcon fontSize="large" />
            </IconButton>
            </div>
            
        </div>
    );
};

export default Header;