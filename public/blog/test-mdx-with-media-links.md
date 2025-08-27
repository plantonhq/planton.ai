---
title: "Test MDX with Media Links"
date: "2024-01-15"
author:
  - name: "Test Author"
    title: "Developer"
    profilePicture: "https://api.dicebear.com/7.x/avataaars/svg?seed=TestAuthor"
    bio: "A developer testing MDX functionality"
    twitter: "https://twitter.com/testauthor"
    github: "https://github.com/testauthor"
    linkedin: "https://linkedin.com/in/testauthor"
    website: "https://testauthor.dev"
tags: ["test", "mdx", "media", "markdown"]
---

# Test MDX Rendering

This is a test page to show how image and video links are automatically rendered.

## Image Examples

Here are some image links that will render as actual images:

![Dashboard Screenshot](/images/features/kubernetes-dashboard/dashboard.svg)

![Resource Explorer](/images/solutions/by-size/startups/resource-explorer.svg)

## Third-Party Image

Here's an external image from a third-party service:

![Random Image from Picsum](https://picsum.photos/800/400?random=1)

## Video Examples

Here are some video links that will render as actual video players:

![Intro Video](/videos/intro.mp4)

## Mixed Content

You can also include regular text and other markdown elements:

- **Bold text** and *italic text*
- [Regular links](https://example.com) work normally
- `Inline code` is preserved

## Code Blocks

```javascript
// Code blocks work normally
const imageUrl = '/images/example.jpg';
console.log('This is preserved as code');
```

## Lists and Formatting

### Unordered List
- First item
- Second item
- Third item

### Ordered List
1. Step one
2. Step two
3. Step three

## Blockquotes

> This is a blockquote example that shows how different markdown elements are rendered.

## How It Works

- **Images** (`.jpg`, `.png`, `.svg`, etc.) render as actual images
- **Videos** (`.mp4`, `.webm`, etc.) render as actual video players with controls
- **External images** from third-party services work seamlessly
- **Other files** render as regular links
- All media is properly embedded and playable

## That's it!

This demonstrates how the MDX renderer intelligently handles different file types:
- Images display normally (including external ones)
- Videos show as actual video players with controls
- Users can play videos directly in the browser
- Everything works seamlessly without HTML tags 