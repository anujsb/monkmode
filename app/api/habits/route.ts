// app/api/habits/route.ts
import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Habit from "@/models/Habit";
import { authMiddleware } from "@clerk/nextjs";

export const config = {
  api: {
    bodyParser: true,
  },
};

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === "GET") {
    const habits = await Habit.find({ userId: req.auth.userId });
    return NextResponse.json(habits);
  }

  if (req.method === "POST") {
    const { title, description } = req.body;
    const newHabit = new Habit({ userId: req.auth.userId, title, description });
    await newHabit.save();
    return NextResponse.json(newHabit);
  }

  return NextResponse.status(405).json({ message: "Method Not Allowed" });
}
