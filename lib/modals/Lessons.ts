import mongoose from "mongoose";

const { Schema } = mongoose;

// Task Schema
const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  // Other task details
});

const Task = mongoose.models.Task || mongoose.model("Task", taskSchema);

// Subtask Schema
const subtaskSchema = new Schema({
  task: { type: Schema.Types.ObjectId, ref: "Task", required: true },
  title: {
    type: String,
    required: true,
  },
  completedBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

const Subtask =
  mongoose.models.Subtask || mongoose.model("Subtask", subtaskSchema);

// Completed Subtask Schema
const completedSubtaskSchema = new Schema({
  subtask: { type: Schema.Types.ObjectId, ref: "Subtask", required: true },
  completedBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
  completedAt: { type: Date, default: Date.now },
});

const CompletedSubtask =
  mongoose.models.CompletedSubtask ||
  mongoose.model("CompletedSubtask", completedSubtaskSchema);

export { Task, Subtask, CompletedSubtask };
