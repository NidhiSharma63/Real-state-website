import React from 'react';
import house from '../images/house.avif';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SingleBedIcon from '@mui/icons-material/SingleBed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

import { 
  Box,
  Typography,
  ThemeProvider 
} from '@mui/material';

import {
  HouseTextTypo,
} from '../MaterialUI/typography';

const IconsArray = [SingleBedIcon,BathtubIcon,CompareArrowsIcon]

const House = () => {
  return (
    <Box
    width='320px'
    borderRadius='.4rem'
    overflow='hidden'
    box-shadow='0px 0px 10px 0px rgb(216, 216, 216)'>
      {/* // */}
        <Box 
        component='img'
        src={house}
        width='100%'
        objectFit='contain'
        />
      {/* // */}
      <Box
      padding='2rem 1rem'
      display='flex'
      flexDirection='column'
      gap='1.8rem'>
        <Box
        display='flex'
        justifyContent='space-between'
        borderBottom='1px solid var(--text-color)'
        paddingBottom='1rem'>
          <Box
          display='flex'
          flexDirection='column'
          gap='.6rem'>
            <ThemeProvider theme={HouseTextTypo}>
              <Typography color='var(--primary-color)'>$2095
                <Box 
                component='span'
                fontSize='1rem'
                color='var(--text-color)'>
                  /month
                </Box>
              </Typography>
              <Typography  
                fontSize='2.3rem'>
                palm harbor
              </Typography>
              <Typography fontSize='1.3rem' color='var(--text-color)'>Lorem ipsum dolor sit</Typography>
            </ThemeProvider>
          </Box>
          <Box>
            <FavoriteBorderIcon sx={{
              fontSize:'3.8rem',
              borderRadius:'50%',
              padding:'.7rem',
              border:'1px solid var(--text-color)',
              cursor:'pointer'
            }}/>
          </Box>
        </Box>
        <Box
        display='flex'
        justifyContent='space-between'>
          {
            IconsArray.map((Icon,i)=>(
              <Box
              display='flex'
              gap='.6rem'
              key={i}
              color='var(--text-color)'>
                <ThemeProvider theme={HouseTextTypo}>
                <Icon sx={{fontSize:'2rem'}}/> 
                  <Typography fontSize='1.2rem' color='var(--text-color)'>2beds</Typography>
                </ThemeProvider>
              </Box>
            ))
          }
        </Box>
      </Box>
    </Box>
  )
}

export default House;