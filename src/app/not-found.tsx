import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

// Lives at the app root (outside the `(main)` group) so it catches every
// unmatched URL — it brings its own nav and footer.
export default function NotFound() {
  return (
    <>
      <Nav />
      <main id="main" className="relative min-h-screen overflow-hidden">
        <div className="bg-grid absolute inset-0" aria-hidden />
        <div className="relative mx-auto flex max-w-6xl flex-col items-start px-5 py-32 md:px-8 md:py-44">
          <p className="microlabel">Error 404</p>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight md:text-7xl">
            Signal lost.
          </h1>
          <p className="mt-6 max-w-md leading-relaxed text-muted">
            This page doesn’t exist — or a control loop somewhere drifted off
            its setpoint. Either way, the safe state is home.
          </p>
          <Link
            href="/"
            className="group mt-10 flex h-11 items-center gap-2 rounded-md bg-fg px-5 text-sm font-medium text-bg transition-opacity hover:opacity-85"
          >
            <ArrowLeft
              size={15}
              aria-hidden
              className="transition-transform group-hover:-translate-x-0.5"
            />
            Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
