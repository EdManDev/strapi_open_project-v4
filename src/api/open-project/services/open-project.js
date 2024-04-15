'use strict';

/**
 * open-project service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::open-project.open-project');
