import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

export default function Landing(){
  return (
    <>
      <div className="min-h-[60vh] grid place-items-center">
        <div className="container-max grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-extrabold text-neutral-900 leading-tight">Teach. Learn. Scale.</h1>
            <p className="mt-4 text-lg text-neutral-600 max-w-xl">
              Modern, modular education SaaS for instructors and institutions. Build engaging courses, run live classes and assessments — all in one place.
            </p>
            <div className="mt-6 flex gap-3">
              <Link to="/signup"><Button>Get started</Button></Link>
              <Link to="/login"><Button variant="ghost">Sign in</Button></Link>
            </div>
          </div>

          <div className="rounded-xl p-6 bg-white shadow-subtle">
            <div className="text-sm text-neutral-500">Sample preview</div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-neutral-100">
                <div className="text-xs text-neutral-500">Students</div>
                <div className="text-xl font-semibold">2,350</div>
              </div>
              <div className="p-4 rounded-lg border border-neutral-100">
                <div className="text-xs text-neutral-500">Courses</div>
                <div className="text-xl font-semibold">82</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
