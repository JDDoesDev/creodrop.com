#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const title = process.argv[2];
if (!title) {
  console.error('Usage: pnpm new-post "Post Title"');
  process.exit(1);
}

const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/(^-|-$)/g, '');

const date = new Date().toISOString().split('T')[0];
const filename = `${slug}.md`;
const filepath = path.join('src', 'content', 'blog', filename);

const template = `---
title: "${title}"
description: ""
publishDate: ${date}
tags: []
draft: true
---

Write your content here...
`;

fs.writeFileSync(filepath, template);
console.log(`Created: ${filepath}`);
