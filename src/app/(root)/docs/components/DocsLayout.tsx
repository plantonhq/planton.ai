'use client';

import React, { useState } from 'react';
import RightSidebar from '@/app/(root)/docs/components/RightSidebar';
import { Author } from '@/lib/mdx';
import { IconButton, Typography } from '@mui/material';
import { Stack } from '@mui/material';
import { DocsSidebar } from '@/app/(root)/docs/components/DocsSidebar';
import { SearchBar } from '@/app/(root)/docs/components/SearchBar';
import { Drawer } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';

interface DocsLayoutProps {
  children: React.ReactNode;
  author?: Author[];
  content?: string;
}

export const DocsLayout: React.FC<DocsLayoutProps> = ({ children, author = [] , content}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen font-work-sans antialiased">
      {/* Header */}
      <div className="sticky top-0 z-10 border-b border-gray-800">
        <Stack direction="row" className="items-center justify-between px-4 py-3">
          <Stack direction="row" className="items-center gap-4">
            <IconButton onClick={handleSidebarToggle} className="text-white md:hidden" size="small">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className="text-white font-semibold">
              Planton Documentation
            </Typography>
          </Stack>
          <SearchBar />
        </Stack>
      </div>

      <div className="flex">
        {/* Left Sidebar - Sticky, independently scrollable */}
        <div className="hidden md:block sticky top-16 h-[calc(100vh-4rem)] w-80 flex-shrink-0">
          <div className="h-full overflow-y-auto bg-black/95 border-r border-gray-800">
            <DocsSidebar />
          </div>
        </div>

        {/* Mobile Sidebar */}
        <Drawer
          anchor="left"
          open={sidebarOpen}
          onClose={handleSidebarToggle}
          className="md:hidden"
          PaperProps={{
            className: 'w-80 bg-black/95',
          }}
        >
          <Stack
            direction="row"
            className="items-center justify-between p-4 border-b border-gray-800"
          >
            <Typography variant="h6" className="text-white font-semibold">
              Documentation
            </Typography>
            <IconButton onClick={handleSidebarToggle} className="text-white">
              <CloseIcon />
            </IconButton>
          </Stack>
          <DocsSidebar onNavigate={() => setSidebarOpen(false)} />
        </Drawer>

        {/* Main Content Area - Auto-expands when no right sidebar, shrinks when sidebar present */}
        <div className="flex-1 min-h-screen">
          <div className={`px-12 py-8 ${author.length > 0 ? 'max-w-4xl mx-auto' : 'w-full'}`}>
            {children}
          </div>
        </div>

        {/* Right Sidebar - Always render for table of contents */}
        <div className="hidden xl:block sticky top-16 h-[calc(100vh-4rem)] w-80 flex-shrink-0">
          <div className="h-full overflow-y-auto bg-black/95 border-l border-gray-800">
            <RightSidebar author={author} content={content} />
          </div>
        </div>
      </div>
    </div>
  );
};
