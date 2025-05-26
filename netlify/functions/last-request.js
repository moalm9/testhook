const fs = require("fs");
const path = require("path");

exports.handler = async () => {
  const data = global.lastRequest ? global.lastRequest() : null;

  if (!data) {
    return {
      statusCode: 404,
      body: JSON.stringify({ error: "No request received yet" }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  };
};

