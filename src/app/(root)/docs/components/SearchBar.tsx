'use client';

import { FC, useState } from 'react';
import { Box, TextField, InputAdornment } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

export const SearchBar: FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    // TODO: Implement search functionality
  };

  return (
    <Box className="w-64">
      <TextField
        placeholder="Search documentation..."
        value={searchQuery}
        onChange={handleSearch}
        size="small"
        className="w-full"
        slotProps={{input:{startAdornment: (
          <InputAdornment position="start">
            <SearchIcon className="text-gray-400" />
          </InputAdornment>
        ),
        className: 'text-white',}}}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'transparent',
            },
            '&:hover fieldset': {
              borderColor: 'transparent',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#3b82f6',
            },
          },
          '& .MuiInputBase-input': {
            color: 'white',
            '&::placeholder': {
              color: '#9ca3af',
              opacity: 1,
            },
          },
        }}
      />
    </Box>
  );
};
