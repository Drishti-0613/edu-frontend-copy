import React from "react";
import Statscard from "../../../components/Statscard";

export default function DashboardHome(){
  const stats = [
    { title: "Enrolled students", value: "2,350", delta: "+8.2%" },
    { title: "Active courses", value: "82", delta: "+1" },
    { title: "Assignments due", value: "7", delta: "-1" },
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-sm text-neutral-500">Summary of recent platform activity</p>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        {stats.map((s, idx) => <Statscard key={idx} {...s} />)}
      </div>

      <div className="mt-6">
        <div className="p-4 bg-white rounded-xl shadow-subtle">
          <h3 className="text-lg font-medium">Recent activity</h3>
          <p className="text-sm text-neutral-500 mt-2">No recent events — this is a demo block you can replace with cards or tables.</p>
        </div>
      </div>
    </div>
  );
}
