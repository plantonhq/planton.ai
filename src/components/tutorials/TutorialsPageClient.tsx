'use client';

import React, { useState, useEffect, useMemo } from 'react';
import TutorialListRow from './TutorialListRow';
import TutorialsSidebar from './TutorialsSidebar';
import { IconButton, Typography, Stack, Drawer, Menu, MenuItem, Button } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon, Sort as SortIcon, KeyboardArrowDown as KeyboardArrowDownIcon } from '@mui/icons-material';
import { SearchBar } from '@/app/(root)/docs/components/SearchBar';
import { Tutorial } from '@/lib/tutorials';

interface TutorialsPageClientProps {
  tutorials: Tutorial[];
  categories: string[];
}

export default function TutorialsPageClient({ tutorials, categories }: TutorialsPageClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTag, setSelectedTag] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedTutorials, setDisplayedTutorials] = useState<Tutorial[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sortAnchorEl, setSortAnchorEl] = useState<null | HTMLElement>(null);
  const [sortBy, setSortBy] = useState<'date-desc' | 'date-asc' | 'title-asc' | 'title-desc'>('date-desc');

  const ITEMS_PER_PAGE = 20;

  const filteredTutorials = useMemo(() => {
    let filtered = [...tutorials]; // Create a shallow copy to ensure useMemo detects changes after sort

    if (selectedCategory && selectedCategory !== 'all') {
      filtered = filtered.filter(tutorial => tutorial.category === selectedCategory);
    }

    if (selectedTag) {
      filtered = filtered.filter(tutorial => tutorial.tags.includes(selectedTag));
    }

    // Sort tutorials
    switch (sortBy) {
      case 'date-desc': // Newest first
        filtered.sort((a, b) => new Date(b.date || '1970-01-01').getTime() - new Date(a.date || '1970-01-01').getTime());
        break;
      case 'date-asc': // Oldest first
        filtered.sort((a, b) => new Date(a.date || '1970-01-01').getTime() - new Date(b.date || '1970-01-01').getTime());
        break;
      case 'title-asc': // A-Z
        filtered.sort((a, b) => (a.title || '').localeCompare(b.title || ''));
        break;
      case 'title-desc': // Z-A
        filtered.sort((a, b) => (b.title || '').localeCompare(a.title || ''));
        break;
    }

    return filtered;
  }, [tutorials, selectedCategory, selectedTag, sortBy]);

  useEffect(() => {
    setCurrentPage(1);
    const initialTutorials = filteredTutorials.slice(0, ITEMS_PER_PAGE);
    setDisplayedTutorials(initialTutorials);
    setHasMore(filteredTutorials.length > ITEMS_PER_PAGE);
  }, [filteredTutorials]);

  const loadMore = () => {
    const nextPage = currentPage + 1;
    const startIndex = currentPage * ITEMS_PER_PAGE;
    const endIndex = nextPage * ITEMS_PER_PAGE;
    const newTutorials = filteredTutorials.slice(startIndex, endIndex);
    
    setDisplayedTutorials(prev => [...prev, ...newTutorials]);
    setCurrentPage(nextPage);
    setHasMore(endIndex < filteredTutorials.length);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSelectedTag('');
  };

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
    setSelectedCategory('all');
  };

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSortClick = (event: React.MouseEvent<HTMLElement>) => {
    setSortAnchorEl(event.currentTarget);
  };

  const handleSortClose = () => {
    setSortAnchorEl(null);
  };

  const handleSortChange = (newSortBy: 'date-desc' | 'date-asc' | 'title-asc' | 'title-desc') => {
    setSortBy(newSortBy);
    setSortAnchorEl(null);
    setCurrentPage(1); // Reset to first page when sorting changes
  };

  return (
    <div className="min-h-screen font-work-sans antialiased">


      <div className="flex">
        {/* Left Sidebar - Sticky */}
        <div className="hidden md:block sticky top-16 h-screen w-80 flex-shrink-0">
          <div className="h-full bg-black/95 border-r border-gray-800 overflow-y-auto">
            <TutorialsSidebar
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
              onTagClick={handleTagClick}
            />
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
              Tutorials
            </Typography>
            <IconButton onClick={handleSidebarToggle} className="text-white">
              <CloseIcon />
            </IconButton>
          </Stack>
          <TutorialsSidebar
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            onTagClick={handleTagClick}
            onNavigate={() => setSidebarOpen(false)}
          />
        </Drawer>

        {/* Main Content Area */}
        <div className="flex-1 min-h-screen">
          <div className="px-12 py-8 max-w-4xl mx-auto">
            {/* Header with Title and Sorting */}
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold text-white">Guides & tutorials</h1>
              <div className="flex items-center gap-2">
                <Button
                  variant="outlined"
                  onClick={handleSortClick}
                  endIcon={<KeyboardArrowDownIcon />}
                  startIcon={<SortIcon />}
                  className={`text-white border-gray-600 hover:border-gray-400 transition-all duration-200`}
                  size="small"
                >
                  Sort by {sortBy === 'date-desc' ? 'Newest' : sortBy === 'date-asc' ? 'Oldest' : sortBy === 'title-asc' ? 'A-Z' : 'Z-A'}
                </Button>
                <Menu
                  anchorEl={sortAnchorEl}
                  open={Boolean(sortAnchorEl)}
                  onClose={handleSortClose}
                  className="mt-2"
                  PaperProps={{
                    className: 'bg-gray-800 border border-gray-700',
                  }}
                >
                  <MenuItem 
                    onClick={() => handleSortChange('date-desc')}
                    className={`text-white hover:bg-gray-700 ${sortBy === 'date-desc' ? 'bg-blue-600' : ''}`}
                  >
                    Newest first
                  </MenuItem>
                  <MenuItem 
                    onClick={() => handleSortChange('date-asc')}
                    className={`text-white hover:bg-gray-700 ${sortBy === 'date-asc' ? 'bg-blue-600' : ''}`}
                  >
                    Oldest first
                  </MenuItem>
                  <MenuItem 
                    onClick={() => handleSortChange('title-asc')}
                    className={`text-white hover:bg-gray-700 ${sortBy === 'title-asc' ? 'bg-blue-600' : ''}`}
                  >
                    A-Z
                  </MenuItem>
                  <MenuItem 
                    onClick={() => handleSortChange('title-desc')}
                    className={`text-white hover:bg-gray-700 ${sortBy === 'title-desc' ? 'bg-blue-600' : ''}`}
                  >
                    Z-A
                  </MenuItem>
                </Menu>
              </div>
            </div>
            
            {/* Tutorials List */}
            <div className="space-y-0">
              {displayedTutorials.map((tutorial) => (
                <TutorialListRow key={tutorial.slug} tutorial={tutorial} />
              ))}
            </div>

            {/* Load More Button */}
            {hasMore && (
              <div className="mt-8 text-center">
                <button
                  onClick={loadMore}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  Load More Tutorials
                </button>
              </div>
            )}

            {/* No Results */}
            {filteredTutorials.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold text-gray-300 mb-2">
                  No tutorials found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your filters or browse all tutorials.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
