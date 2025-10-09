import Link from "next/link";
export const metadata = { title: "CV" };

export default function CvPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">CV</h1>
      <p className="text-muted-foreground">View or download my latest CV.</p>

      <div className="rounded-2xl border p-4">
        <iframe
          src="/cv.pdf#zoom=page-width"
          className="h-[70vh] w-full rounded-lg"
        />
      </div>

      <Link className="underline" href="/cvupdated.pdf" download>
        Download PDF
      </Link>
    </div>
  );
}
