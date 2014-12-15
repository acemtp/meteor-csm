# meteor-csm

Organize files in module structure.

If you like to have all files related to a feature inside the same directory, you can use this package.

- `.c.js` will be sent *only* to the client
- `.s.js` will be sent *only* to the server

## Example

    myproject/
    myproject/comments/
    myproject/comments/comments.a.js
    myproject/comments/comments.c.js
    myproject/comments/comments.c.html
    myproject/comments/comments.c.css
    myproject/comments/comments.s.js
    myproject/posts/
    myproject/posts/posts.a.js
    myproject/posts/posts.c.js
    myproject/posts/posts.c.html
    myproject/posts/posts.c.css
    myproject/posts/posts.s.js
