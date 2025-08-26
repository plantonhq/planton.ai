---
title: "Code Examples and Syntax Highlighting"
date: 2025-01-15
author:
  - name: Developer Team
    title: Full Stack Developers
    bio: "Building robust and scalable applications with modern technologies. We love clean code and great user experiences."
    profilePicture: https://robohash.org/DeveloperTeam?set=set4
    github: https://github.com/planton-ai
    website: https://planton.ai
  - name: Alex Rodriguez
    title: Senior Frontend Engineer
    bio: "Specializing in React, TypeScript, and modern web development. Always exploring new ways to improve user experience."
    profilePicture: https://api.dicebear.com/7.x/avataaars/svg?seed=AlexRodriguez
    twitter: https://twitter.com/alexrodriguez_dev
    github: https://github.com/alexrodriguez
featuredImage: >-
  https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80
tags:
  - Code
  - Examples
  - Tutorial
excerpt: "Demonstrating beautiful code syntax highlighting in our blog posts with various programming languages."
---

# Code Examples and Syntax Highlighting

This post demonstrates how code blocks look with our enhanced syntax highlighting.

## JavaScript Example

Here's a JavaScript function with proper syntax highlighting:

```javascript
function createBlogPost(title, content) {
  const post = {
    id: generateId(),
    title: title,
    content: content,
    createdAt: new Date(),
    author: 'developer-team'
  };
  
  // Save to database
  return database.posts.create(post);
}

// Usage example
const newPost = createBlogPost('My New Post', 'This is the content...');
console.log('Created post:', newPost.id);
```

## Python Example

Here's a Python class with syntax highlighting:

```python
class BlogPost:
    def __init__(self, title, content, author):
        self.title = title
        self.content = content
        self.author = author
        self.created_at = datetime.now()
    
    def publish(self):
        """Publish the blog post"""
        if not self.title or not self.content:
            raise ValueError("Title and content are required")
        
        return {
            'id': self.generate_id(),
            'status': 'published',
            'url': f'/blog/{self.slug}'
        }

# Create and publish a post
post = BlogPost("Code Examples", "This is content...", "developer-team")
result = post.publish()
```

## TypeScript/React Example

Here's a React component in TypeScript:

```typescript
interface BlogPostProps {
  title: string;
  content: string;
  author: string[];
  tags: string[];
  publishedAt: Date;
}

const BlogPost: React.FC<BlogPostProps> = ({ 
  title, 
  content, 
  author, 
  tags, 
  publishedAt 
}) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  
  const handleLike = useCallback(() => {
    setIsLiked(prev => !prev);
    // API call to save like status
    likePost(title).catch(console.error);
  }, [title]);

  return (
    <article className="blog-post">
      <header>
        <h1>{title}</h1>
        <div className="meta">
          <span>By {author.join(', ')}</span>
          <time>{publishedAt.toLocaleDateString()}</time>
        </div>
        <div className="tags">
          {tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </header>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <button onClick={handleLike}>
        {isLiked ? '❤️' : '🤍'} Like
      </button>
    </article>
  );
};
```

## CSS Example

Here's some CSS styling:

```css
.blog-post {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.blog-post header {
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
}

.blog-post h1 {
  color: #1a1a1a;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 1rem 0;
}

.meta {
  display: flex;
  gap: 1rem;
  color: #666;
  font-size: 0.9rem;
}

.tags {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}

.tag {
  background: #e3f2fd;
  color: #1976d2;
  padding: 0.25rem 0.75rem;
  border-radius: 16px;
  font-size: 0.8rem;
}
```

## Bash/Shell Example

Command line examples:

```bash
#!/bin/bash

# Install dependencies
npm install react-markdown gray-matter

# Build the project
npm run build

# Start the development server
npm run dev

# Create a new blog post
touch public/blog/my-new-post.md

# Check git status
git status
git add .
git commit -m "Add new blog post with code examples"
git push origin main
```

## Inline Code

You can also use `inline code` like this, or reference functions like `createBlogPost()` and variables like `isPublished`.

The inline code has a different styling from code blocks to distinguish between the two use cases.

## Summary

This demonstrates how various programming languages look with our syntax highlighting:

- **JavaScript**: Functions, objects, and modern ES6+ syntax
- **Python**: Classes, methods, and proper indentation
- **TypeScript/React**: Interfaces, components, and hooks
- **CSS**: Selectors, properties, and responsive design
- **Bash**: Shell commands and scripts
- **Inline code**: For referencing code elements in text

The syntax highlighting makes code much more readable and professional-looking! 