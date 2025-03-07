import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const title = formData.get("title") as string;
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const content = formData.get("content") as string;
    const imagePath = formData.get("imagePath") as string;

    if (!title) {
      return NextResponse.json({ error: "Title is required" }, { status: 400 });
    }

    const posts = await prisma.post.create({
      data: {
        title: title,
        name: name,
        email: email,
        content: content,
        imagePath: imagePath,
      },
    });

    return NextResponse.json(posts, {
      status: 200,
    });
  } catch (error) {
    console.error("Error creating category:", error);
    return NextResponse.json(
      { error: "Failed to create category" },
      { status: 500 }
    );
  }
}
