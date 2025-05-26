let lastRequest = null;

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    lastRequest = {
      url: JSON.parse(event.body).url,
      headers: event.headers,
      body: JSON.parse(event.body),
    };

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Request received!" }),
    };
  } catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalid request format" }),
    };
  }
};

// Expose the state globally (so `last-request.js` can access it)
global.lastRequest = () => lastRequest;
