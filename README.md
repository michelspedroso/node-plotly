# node-plotly
Plot.ly sdk for nodejs.

## Requirements
  * [Node.js v6+](https://nodejs.org/)

### How it works
```
const Plotly = require('./lib/plotly');


const plotly = new Plotly({
    username: `username`,
    password: `password`
}, `https://api.plot.ly/v2/`);


const options = {
    //filetype: 'plot' / 'grid' / 'fold';
    //world_readable: true / false;
    //order_by: 'creation_time' / 'date_modified' / 'filename' / 'filetype' / 'views';
};

plotly.get.folders.home(options).then(function (result) {
    console.log(result)
});
```

## Which methods are available?

### Get all graphs
plotly.get.folders.all(options);

This returns all the active files that the requester owns. If user query is present, only public files are returned.

### Get all graphs from home folder
plotly.get.folders.home(options);

Get all files in the home folder for a given user which are also viewable by the current user.

