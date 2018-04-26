'use strict'

const Plotly = require('./lib/plotly');


const plotly = new Plotly({
    username: `embraer.plotly`,
    password: `$Plotly2017@`
}, `https://api.plot.ly/v2/`);

const options = {
    filetype: 'plot'
};

plotly.plots.post.create({"data": [{"ysrc": "sven:88:u8nd62"}]}).then(result => {
    console.log(result);
}).catch(err => {
    console.log(err);
})