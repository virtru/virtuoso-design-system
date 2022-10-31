import React from 'react';
import Button from '@mui/material/Button';
import PanToolOutlinedIcon from '@mui/icons-material/PanToolOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';

function AccessButton({ type }) {

    const buttonSX = {
        "&.MuiButton-outlinedPrimary:active": {
            backgroundColor: '#001E4A'
          },
      };

    if (type === 'revoke') {
        return (
            <Button
                variant='outlined'
                color='error'
                startIcon={<PanToolOutlinedIcon />}
            >
                revoke access
            </Button>
        );
    } else if (type === 'restore') {
        return (
            <Button 
                variant='outlined' 
                startIcon={<GroupOutlinedIcon />}
                sx={buttonSX}
            >
                restore access
            </Button>
        );
    } else if (type === 'grant') {
        return (
            <Button 
                variant='outlined' 
                startIcon={<GroupOutlinedIcon />}
                sx={buttonSX}
            >
                grant access
            </Button>
        );
    }
}

export default AccessButton;
