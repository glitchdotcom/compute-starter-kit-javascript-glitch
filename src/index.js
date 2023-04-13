addEventListener("fetch", event => {

  const req = event.request;

  const backendResponse = fetch(req, {
    backend: "backend_1"
  });

  event.respondWith(backendResponse);
});
