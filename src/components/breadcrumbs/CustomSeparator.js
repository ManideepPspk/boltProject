import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


export default function CustomSeparator(props) {
  function handleClick() {
    console.info('You clicked a breadcrumb.');
  }
  let breadcrumbsValue = [
    <Link style={{ textDecoration: 'none' }} key="1" color="inherit" href="/" onClick={handleClick}>
      Vehicles
    </Link>,
  ];
  if(props.vehicleName){
    breadcrumbsValue = [...breadcrumbsValue , <Typography key="3" color="text.primary">
    {props.vehicleName}
  </Typography>]
  }

  return (
    <Stack spacing={10}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbsValue}
      </Breadcrumbs>
    </Stack>
  );
}
