// External Dependencies
import express, { Request, Response } from 'express';

import { collections } from '../services/database.service';
import { Workout } from '../models/workout';
import { WithId } from 'mongodb';

// Global Config
export const workoutRouter = express.Router();
workoutRouter.use(express.json());

// GET
workoutRouter.get('/', async (req: Request, res: Response) => {
  try {
    const workouts = (await collections.workout!.find().toArray()) as unknown as WithId<Workout[]>;
    res.status(200).json({ workouts });
  } catch (err: any) {
    res.status(500).json({ error_message: err.message });
  }
});

// POST

// PUT

// DELETE
