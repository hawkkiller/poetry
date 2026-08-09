function assetRequest(url, request) {
  return new Request(url, {
    method: request.method,
    headers: request.headers,
  });
}

export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    if (response.status !== 404 || !["GET", "HEAD"].includes(request.method)) {
      return response;
    }

    const url = new URL(request.url);
    const pageUrl = new URL(`${url.pathname.replace(/\/$/, "")}/index.html`, url);
    const page = await env.ASSETS.fetch(assetRequest(pageUrl, request));
    if (page.status !== 404) return page;

    return env.ASSETS.fetch(assetRequest(new URL("/404.html", url), request));
  },
};
