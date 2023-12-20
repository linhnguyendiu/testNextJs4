import { clientPromise } from "@/lib/mongodb";
import Course from "@/models/course";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    try {
      await clientPromise();
      const courses = await Course.find({}).limit(10);
      return NextResponse.json({ courses }, { status: 200 });
    } catch (error) {
      console.error('Error fetching courses:', error);
      return NextResponse.json(
        { message: "An error occurred while fetching courses" },
        { status: 500 }
      );
    }
  };
