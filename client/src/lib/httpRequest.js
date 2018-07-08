export default {
  get: function(url, callback) {
    window
      .fetch(url)
      .then(response => response.json())
      .then(json => callback(json ? json.results : []));
  },

  post: function(url, data, callback) {
    window
      .fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(callback());
  }
};
