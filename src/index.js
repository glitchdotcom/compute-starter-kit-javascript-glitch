addEventListener("fetch", event => {

  const req = event.request;

  const backendResponse = fetch(req, {
    backend: "origin_0"
  });

  event.respondWith(backendResponse);
});
