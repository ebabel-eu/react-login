module.export = {
  POST: { // note: defaults are presceded with an asterisk in comments below.
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: { "Content-Type": "application/json" }, // application/x-www-form-urlencoded
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
  },
  HTTP_STATUS: {
    OK: 200,
    CREATED: 201,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    RUNTIME_ERROR: 500,
  },
};
