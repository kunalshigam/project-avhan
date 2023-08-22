import { Box, Grid } from '@mui/material'
import React from 'react'
import '../App.css'

function SideMenuBar() {
    return (
        <div >
            <Box
                position="fixed"
                top={0}
                left={0}
                height="100vh"
                width={200}
                className="bgColor"
            >
                <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" height="50" width="50"  >
                    <Box height="50" width="50" marginY={1}>
                    <img src="/images/Group 11.png" alt="chat" style={{ width: '60px', height: '60px' }} />
                    </Box>
                    <Box height="50" width="50" marginY={1}>
                    <img src="/images/Group 12.png" alt="chat" style={{ width: '60px', height: '60px' }} />
                    </Box>
                    <Box height="50" width="50" marginY={1}>
                    <img src="/images/Group 10.png" alt="chat" style={{ width: '60px', height: '60px' }} />
                    </Box>
                    <Box height="50" width="50" marginY={1}>
                    <img src="/images/Group 9.png" alt="chat" style={{ width: '60px', height: '60px' }} />
                    </Box>
                    <Box height="50" width="50" marginY={1}>
                    <img src="/images/Group 8.png" alt="chat" style={{ width: '60px', height: '60px' }} />
                    </Box>
                    <Box height="50" width="50" marginY={1}>
                    <img src="/images/Group 7.png" alt="chat" style={{ width: '60px', height: '60px' }} />
                    </Box>
                    <Box height="50" width="50" marginY={1}>
                    <img src="/images/Group 6.png" alt="chat" style={{ width: '60px', height: '60px' }} />
                    </Box>
                    <Box height="50" width="50" marginY={1}>
                    <img src="/images/Group 5.png" alt="chat" style={{ width: '60px', height: '60px' }} />
                    </Box>
                    <Box height="50" width="50" marginY={1}>
                    <img src="/images/Group 4.png" alt="chat" style={{ width: '60px', height: '60px' }} />
                    </Box>
                    <Box height="50" width="50" marginY={1}>
                    <img src="/images/Group 3.png" alt="chat" style={{ width: '60px', height: '60px' }} />
                    </Box>
                    <Box height="50" width="50" marginY={1}>
                    <img src="/images/Group 2.png" alt="chat" style={{ width: '60px', height: '60px' }} />
                    </Box>
                   
                </Box>
            </Box>
        </div>
    )
}

export default SideMenuBar