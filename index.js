const fastify = require('fastify')({ logger: true });

fastify.get('/api', (request, reply) => {
  console.log(request)
  reply.send(request.headers);
});

const start = async () => {
  try {
    await fastify.listen(3000);
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
