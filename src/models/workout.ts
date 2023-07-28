import { ObjectId } from 'mongodb';

export class Workout {
  constructor(
    public name: string,
    public duration: number,
    public id?: ObjectId,
  ) {}
}
