import express from 'express';
import { routes } from './Interface/Http/routes';

const app = express();
const port = 3000;

app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});