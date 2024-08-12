import mongoose, { Schema, Document, Model } from "mongoose";

export interface IHabit extends Document {
  userId: string;
  title: string;
  description: string;
  completed: boolean;
}

const HabitSchema: Schema = new Schema({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String },
  completed: { type: Boolean, default: false },
});

const Habit: Model<IHabit> = mongoose.models.Habit || mongoose.model("Habit", HabitSchema);

export default Habit;
