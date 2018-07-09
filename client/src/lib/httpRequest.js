export default {
  post: function(url, data, callback) {
    window
      .fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(data)
      })
      .then(response => response)
      .then(callback());
  },
  get: function(url, callback) {
    window
      .fetch(url)
      .then(response => response.json())
      .then(json => callback(json ? json.results : []));
  },
  put: function(url, data, callback) {
    window
      .fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(data)
      })
      .then(response => response)
      .then(callback());
  },
  delete: function(url, data, callback) {
    window
      .fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(data)
      })
      .then(response => response)
      .then(callback());
  }
};
