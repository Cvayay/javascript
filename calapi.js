const express = require('express');
const app = express();
const port = 2000;

app.use(express.json());

app.post('/calci', (req, res) => {
  const { number1, number2, operation } = req.body;


  if (!number1 || !number2 || !operation) {
    return res.status(400).json({ error: 'Missing input values' });
  }


  const supportedOperations = ['add', 'sub', 'mul', 'div', 'mod'];
  if (!supportedOperations.includes(operation)) {
    return res.status(400).json({ error: 'Invalid operation' });
  }

  let result;


  switch (operation) {
    case 'add':
      result = number1 + number2;
      break;
    case 'sub':
      result = number1 - number2;
      break;
    case 'mul':
      result = number1 * number2;
      break;
    case 'div':
      result = number1 / number2;
      break;
    case 'mod':
      result = number1 % number2;
      break;
  }

  res.status(200).json({
    data: {
      number1,
      number2,
      operation,
      result,
    },
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});