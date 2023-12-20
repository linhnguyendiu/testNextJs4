import mongoose, { Schema, models } from "mongoose";

const CourseSchema = new Schema(
  {
    title: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string',
      required: true
    },
    author: {
      type: 'string',
    },
    img: {
      type: 'string',
      required: true
    },
    catSug: {
      type: 'string',
    }
  },
  // tags: { type: [String] },
  { timestamps: true }

);

const Course = models.Course || mongoose.model("Course", CourseSchema);

export default Course;