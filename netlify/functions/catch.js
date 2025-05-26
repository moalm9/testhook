const fs = require("fs");
const path = require("path");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const data = {
    url: event.headers["x-forwarded-host"] || "unknown",
    headers: event.headers,
    body: event.body,
  };

  const filePath = path.resolve("/tmp/last-request.json");
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Request received!" }),
  };
};
