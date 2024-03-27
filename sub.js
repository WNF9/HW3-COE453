const functions = require('@google-cloud/functions-framework');

// Register a function named 'sub' for HTTP trigger
functions.http('sub', (req, res) => {
  // Retrieve numbers 'x' and 'y' from the request query parameters or body
  let x = parseInt(req.query.x) || parseInt(req.body.x);
  let y = parseInt(req.query.y) || parseInt(req.body.y);

  // Check if 'x' and 'y' are both integers
  if (isNaN(x) || isNaN(y)) {
    res.status(400).send('The values of x and y must be integers.');
    return;
  }

  // Further check if the parsed values are indeed integers and not just numeric values
  if (!Number.isInteger(x) || !Number.isInteger(y)) {
    res.status(400).send('The values of x and y must be integers without decimal places.');
    return;
  }

  // Perform addition
  let result = x - y;

  // Respond with a JSON object containing 'x', 'y', and the 'result'
  res.json({ x, y, result });
});