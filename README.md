# IMG CODE TEST
Simple Movie Search App using the Movie Database API.

The state Management of the App is done using *redux*, asynchronous actions are handled by middleware *redux-thunk*.


The UI theme is based on Atom's hipster theme.Reused from one of the first apps I made (thought it was stylish at the time).


Auto complete Search Bar is done using react toolbox.


I have tried to optimize performance trying to avoid duplicate api calls and useless re-rendering/data parsing  ( thats why each discoverContainer does a request for a specific genre and once it has the data for that specific genre will render the MovieDisplay component)

#### Note to the reviewer 

_sorry for the overkill, I know this isnt exactly what was being asked for, but I thought I might add some features. Have worked on it really fast and maybe ended up a bit messy_


 



To runn the App

```
npm install // yarn
npm start
```

Then open [`localhost:8080`](http://localhost:8080) in a browser.



## Available routes/views
1


## License

MIT

Copyright (c) 2017 Miguel Gimenez.
