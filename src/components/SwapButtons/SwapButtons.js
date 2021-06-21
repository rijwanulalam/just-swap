import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import './SwapButtons.css';

const SwapButtons = () => {
    return (
        <div className="swap-buttons">
            <IconButton>
                <ReplayIcon className="swap-buttons-replay" fontSize="large" />
            </IconButton>
            <IconButton>
                <CloseIcon className="swap-buttons-close" fontSize="large" />
            </IconButton>
            <IconButton>
                <StarRateIcon className="swap-buttons-star" fontSize="large" />
            </IconButton>
            <IconButton>
                <FavoriteIcon className="swap-buttons-fav" fontSize="large" />
            </IconButton>
            <IconButton>
                <FlashOnIcon className="swap-buttons-flash" fontSize="large" />
            </IconButton>
        </div>
    );
};

export default SwapButtons;