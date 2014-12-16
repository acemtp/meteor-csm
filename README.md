# meteor-csm

`csm` stands for *Client Server Module*. Organize files in a modular way.

If you like to have all files related to a feature inside the same directory, you can use this package.

- `*.c.js` and `*.client.js` will be sent *only* to the client
- `*.s.js` and `*.server.js` will be sent *only* to the server
- `*.coffee` files are also supported

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
