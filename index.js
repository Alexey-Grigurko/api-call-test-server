const fastify = require('fastify')({ logger: true });
const fs = require('fs')

fastify.get('/api/gitcall', async (request, reply) => {
  console.log(request);
  const data = await readFile()
  reply.send({
    body: data
  });
});

fastify.get('/api', (request, reply) => {
  console.log(request);

  reply.send({
    method: request.method,
    url: request.url,
    headers: request.headers,
  });
});

fastify.post('/api', function (request, reply) {
  reply.send({
    method: request.method,
    url: request.url,
    headers: request.headers,
    params: request.params,
    body: request.body,
  });
});

fastify.put('/api', function (request, reply) {
  reply.send({
    method: request.method,
    headers: request.headers,
    params: request.params,
    body: request.body,
  });
});

fastify.delete('/api', function (request, reply) {
  reply.send({
    method: request.method,
    headers: request.headers,
    params: request.params,
    body: request.body,
  });
});

fastify.patch('/api', function (request, reply) {
  reply.send({
    method: request.method,
    headers: request.headers,
    params: request.params,
    body: request.body,
  });
});

const readFile = async () => {
  return new Promise(resolve => {
    fs.readFile('test.txt', (err, data) => {
        if (err) {
          resolve('cannot read file')
        }
        resolve(data.toString())
    })
  })
}

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