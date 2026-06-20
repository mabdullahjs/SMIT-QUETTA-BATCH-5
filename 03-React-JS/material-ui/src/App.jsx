import { Box, TextField, Typography } from '@mui/material'
import React from 'react'
import ChildModal from './component/Modal'

const App = () => {
  return (
    <>
    <Box>
        <Typography sx={{
            textAlign: 'center'
        }} variant='h1'>Hello world</Typography>
    </Box>
    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    <ChildModal/>
    </>
  )
}

export default App


// https://testing-project-322.web.app/