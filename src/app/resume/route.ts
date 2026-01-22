import { readFileSync } from "fs";
import { join } from "path";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const resumePath = join(process.cwd(), "public", "RESUME.pdf");
    const fileContent = readFileSync(resumePath);

    return new NextResponse(fileContent, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "inline; filename=RESUME.pdf",
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Resume not found" },
      { status: 404 }
    );
  }
}
