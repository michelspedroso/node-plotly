'use strict';

const request = require('request-promise-native');
const querystring = require('querystring');


class Plots {

    constructor(username, header) {

        this.username = username;
        this.header = header;   
        this.init();
    }

    init() {

        this.get = {};
        this.get.list = this.all.bind(this);
        this.get.feed = this.feed.bind(this);
        this.get.detail = this.detail.bind(this);

    }

    formatQueryString(options) {

        return `&${querystring.stringify(options)}`;
    }

    all(options) {

        const self = this;
        const query = options ? self.formatQueryString(options) : '';
        const header = self.header;

        return new Promise(function (resolve, reject) {

            header.url += `plots/?user=${self.username}${query}`;
            header.method = 'GET';

            return request(header).then((data) => {

                if (data) {
                    data = JSON.parse(data);
                }

                return resolve(data);

            }).catch((err) => {

                return reject(err);

            });
        });
    }

    feed() {

        const self = this;
        const header = self.header;

        return new Promise(function (resolve, reject) {

            header.url += `plots/feed?user=${self.username}`;
            header.method = 'GET';

            return request(header).then((data) => {

                if (data) {
                    data = JSON.parse(data);
                }

                return resolve(data);

            }).catch((err) => {

                return reject(err);

            });
        });
    }

    detail(fid) {

        const self = this;
        const header = self.header;

        return new Promise(function (resolve, reject) {

            header.url += `plots/${fid}`;
            header.method = 'GET';

            return request(header).then((data) => {

                if (data) {
                    data = JSON.parse(data);
                }

                return resolve(data);

            }).catch((err) => {

                return reject(err);

            });
        });
    }
}

module.exports = Plots;