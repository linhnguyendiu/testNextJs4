import { clientPromise } from "@/lib/mongodb";
import Course from "@/models/course";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export const GET = async (req, { params }) => {
  const { slug } = params;

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  
  try {
    console.log(slug);
    await clientPromise();
    const course = await Course.findOne({
      _id: new ObjectId(slug),
    });

    return new NextResponse(JSON.stringify(course, { status: 200 }));

  } catch (error) {
    console.error('Error fetching courses:', error);
    return NextResponse.json(
      { message: "An error occurred while fetching courses" },
      { status: 500 }
    );
  }
};