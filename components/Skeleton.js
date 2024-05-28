import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

export default function SkeletonLoader() {
  return (
    <Box className="p-6 lg:p-20 max-w-4xl m-auto w-full">
      <Stack spacing={1}>
        {/* Header Section */}
        <Skeleton variant="circular" width={75} height={75} />
        <Skeleton variant="text" width="35%" height={50} />
        <Skeleton variant="text" width="90%" height={100} />
        <Skeleton variant="rectangular" width={145} height={45} />

        {/* Worked In Section */}
        <Skeleton variant="text" width="30%" height={30} />
        <Skeleton variant="rectangular" width="100%" height={100} />

        {/* Projects Section */}
        <Skeleton variant="text" width="30%" height={30} />
        <Skeleton variant="rectangular" width="100%" height={80} />
        <Skeleton variant="rectangular" width="100%" height={80} />
        <Skeleton variant="rectangular" width="100%" height={80} />

        {/* Certificates Section */}
        <Skeleton variant="text" width="30%" height={30} />
        <Skeleton variant="rectangular" width="100%" height={80} />

        {/* Stack Section */}
        <Skeleton variant="text" width="30%" height={30} />
        <Stack direction="row" spacing={1} flexWrap="wrap">
          {Array.from(new Array(8)).map((_, index) => (
            <Skeleton key={index} variant="rectangular" width={60} height={30} />
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}
