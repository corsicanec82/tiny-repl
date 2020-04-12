// @ts-check

import fastify from 'fastify';

export default () => {
  const app = fastify();

  app.get('/', (req, reply) => {
    reply.send('Simple application!');
  });

  return app;
};
