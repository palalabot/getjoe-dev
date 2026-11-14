import resume from "../_data/resume.json";

export const dynamic = "force-static";

export function GET() {
  return Response.json(resume, {
    headers: { "Content-Disposition": 'inline; filename="resume.json"' },
  });
}
