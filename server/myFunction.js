// netlify-functions/myFunction.js
exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello from the server!" }),
  };
};