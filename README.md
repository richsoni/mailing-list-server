# Usage

```
$ node index.js  //DEBUG=true can be passed
listening on port 3030
```

```
$ nc localhost 3030
subscribe:yo@gmail.com
subscribe:dawg@gmail.com
unsubscribe:yo@gmail.com
```

# Data

`/.data/users/{email}` => files
`./data/subscribers/{email}` => symlink to users
