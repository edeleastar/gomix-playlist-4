'use strict';

const logger = require('../utils/logger');
const sonatas = require('../models/playlist-store.js');

const dashboard = {
  index(request, response) {
    logger.info('dashboard rendering');
    const viewData = {
      title: 'Playlist Dashboard',
      playlist: sonatas,
    };
    logger.info('about to render', sonatas);
    response.render('dashboard', viewData);
  },
};

module.exports = dashboard;
