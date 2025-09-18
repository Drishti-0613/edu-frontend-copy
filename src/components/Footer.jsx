import React from "react";

export default function Footer(){
  return (
    <footer className="w-full mt-10 border-t border-neutral-100 bg-white">
      <div className="container-max py-6 flex flex-col md:flex-row items-center justify-between text-sm text-neutral-500">
        <div>© {new Date().getFullYear()} YourSaaS · All rights reserved</div>
        <div className="flex gap-4 mt-3 md:mt-0">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </div>
      </div>
    </footer>
  );
}
