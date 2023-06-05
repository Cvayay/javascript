// {
//     data:{
//         number1:5,
//         number2:7,
//         operation:"add",
//         result:12
//     },
// }




const express = require('express');
const app = express();
const port = 8000;

app.use(express.json());

app.post('/calci/:operation', (req, res) => {
  const { number1, number2 } = req.body;
  const operation = req.params.operation;
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
      if (number2 !== 0) {
        result = number1 / number2;
      } else {
        return res.json({ error: 'Cannot divide by zero' });
      }
      break;
    case 'mod':
      result = number1 % number2;
      break;
    default:
      return res.json({ error: 'Invalid operation' });
  }

  const response = {
    number1,
    number2,
    operation,
    result
  };

  res.json(response);
});

app.listen(port, () => {
  console.log(`Calculator API running on port ${port}`);
});