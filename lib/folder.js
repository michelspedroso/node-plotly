'use strict';

const request = require('request-promise-native');
const querystring = require('querystring');


class Folder {

    constructor(username, header) {

        this.username = username;
        this.header = header;   
        this.init();
    }

    init() {

        this.get = {};
        this.get.all = this.all.bind(this);
        this.get.home = this.home.bind(this);
        this.get.detail = this.detail.bind(this);
        this.get.starred = this.starred.bind(this);
        this.get.shared = this.shared.bind(this);
        this.get.trashed = this.trashed.bind(this);

        this.post = {};
        this.post.create = this.create.bind(this);
        this.post.delete = this.delete.bind(this);
        this.post.restore = this.restore.bind(this);

        this.delete = {};
        this.delete.permanentDelete = this.permanentDelete.bind(this);

    }

    formatQueryString(options) {

        return `&${querystring.stringify(options)}`;
    }

    all(options) {

        const self = this;
        const query = options ? self.formatQueryString(options) : '';
        const header = self.header;

        return new Promise(function (resolve, reject) {

            header.url += `folders/all?user=${self.username}${query}`;
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

    home(options) {

        const self = this;
        const query = options ? self.formatQueryString(options) : '';
        const header = self.header;

        return new Promise(function (resolve, reject) {

            header.url += `folders/home?user=${self.username}${query}`;
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

    detail(folder, options) {

        const self = this;
        const query = options ? self.formatQueryString(options) : '';
        const header = self.header;

        return new Promise(function (resolve, reject) {

            header.url += `folders/${folder}?user=${self.username}${query}`;
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

    starred(options) {

        const self = this;
        const query = options ? self.formatQueryString(options) : '';
        const header = self.header;

        return new Promise(function (resolve, reject) {

            header.url += `folders/starred${query}`;
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

    shared(options) {

        const self = this;
        const query = options ? self.formatQueryString(options) : '';
        const header = self.header;

        return new Promise(function (resolve, reject) {

            header.url += `folders/starred/${query}`;
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

    trashed(options) {

        const self = this;
        const query = options ? self.formatQueryString(options) : '';
        const header = self.header;

        return new Promise(function (resolve, reject) {

            header.url += `folders/trashed${query}`;
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

    create(body) {

        const self = this;
        const header = self.header;

        return new Promise(function (resolve, reject) {

            header.url += 'folders';
            header.method = 'POST';
            header.body = body;
            header.json = true;

            return request(header).then((data) => {

                return resolve(data);

            }).catch((err) => {

                return reject(err);

            });
        });
    }

    delete(folder) {

        const self = this;
        const header = self.header;

        return new Promise(function (resolve, reject) {

            header.url += `folders/${folder}/trash`;
            header.method = 'POST';

            return request(header).then((data) => {

                return resolve(data);

            }).catch((err) => {

                return reject(err);

            });
        });
    }

    restore(folder) {

        const self = this;
        const header = self.header;

        return new Promise(function (resolve, reject) {

            header.url += `folders/${folder}/restore`;
            header.method = 'POST';

            return request(header).then((data) => {

                return resolve(data);

            }).catch((err) => {

                return reject(err);

            });
        });
    }

    permanentDelete(folder) {

        const self = this;
        const header = self.header;

        return new Promise(function (resolve, reject) {

            header.url += `folders/${folder}/permanent_delete`;
            header.method = 'DELETE';

            return request(header).then((data) => {

                return resolve(data);

            }).catch((err) => {

                return reject(err);

            });
        });
    }


}

module.exports = Folder;