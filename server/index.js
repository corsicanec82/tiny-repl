// @ts-check

import path from 'path';
import fastify from 'fastify';
import fastifyStatic from 'fastify-static';
import pointOfView from 'point-of-view';
import Pug from 'pug';

export default () => {
  const app = fastify();

  app.register(pointOfView, {
    engine: {
      pug: Pug,
    },
    includeViewExtension: true,
    templates: path.join(__dirname, '..', 'server', 'views'),
    defaultContext: {
      assetPath: (filename) => `/assets/${filename}`,
    },
  });

  app.register(fastifyStatic, {
    root: path.join(__dirname, '..', 'dist', 'public'),
    prefix: '/assets/',
  });

  app.get('/', (req, reply) => {
    reply.view('index');
  });

  return app;
};
