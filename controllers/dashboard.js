'use strict';

const logger = require('../utils/logger');
const playlists = require('../models/playlist-store.js');

const dashboard = {
  index(request, response) {
    logger.info('dashboard rendering');
    const viewData = {
      title: 'Playlist Dashboard',
      playlists: playlists,
    };
    logger.info('about to render', playlists);
    response.render('dashboard', viewData);
  },
};

module.exports = dashboard;
