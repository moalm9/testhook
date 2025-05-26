const fs = require("fs");
const path = require("path");

exports.handler = async () => {
  const filePath = path.resolve("/tmp/last-request.json");

  try {
    const contents = fs.readFileSync(filePath);
    return {
      statusCode: 200,
      body: contents,
      headers: { "Content-Type": "application/json" },
    };
  } catch {
    return {
      statusCode: 404,
      body: JSON.stringify({ error: "No request received yet" }),
    };
  }
};
