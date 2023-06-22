/**
 * fetchModel - Fetch a model from the web server.
 *
 * @param {string} url      The URL to issue the GET request.
 *
 * @returns a Promise that should be filled with the response of the GET request
 * parsed as a JSON object and returned in the property named "data" of an
 * object. If the request has an error, the Promise should be rejected with an
 * object that contains the properties:
 * {number} status          The HTTP response status
 * {string} statusText      The statusText from the xhr request
 */
function fetchModel(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          resolve({ data: response });
        } else {
          const error = new Error(xhr.statusText);
          error.status = xhr.status;
          reject(error);
        }
      }
    };
    xhr.send();
  });
}

export default fetchModel;