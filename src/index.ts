import express from 'express';

import { connectToDatabase } from './services/database.service';
import { workoutRouter } from './routes/workout.router';

const app = express();

connectToDatabase()
  .then(() => {
    app.use('/workout', workoutRouter);

    app.listen(3000, () => {
      console.log('Application is listening on port 3000');
    });
  })
  .catch((err: Error) => {
    console.log('An error occurred', err.message);
  });
