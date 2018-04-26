'use strict';


const Folder = require('./folder');
const Plots = require('./plots');

class Plotly {

    constructor({ username, password }, url) {

        this.url = url;
        this.basic_auth = new Buffer(`${username}:${password}`).toString('base64');
        
        this.header = {
            url: url,
            'plotly-client-platform': 'node',
            authorization: this.basic_auth
        };

        this.folder = new Folder(username, this.header);
        this.plots = new Plots(username, this.header);
    }

}

module.exports = Plotly;
