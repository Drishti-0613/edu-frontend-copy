// simple fetch wrapper. Backend auth handled separately.
const BASE = import.meta.env.VITE_API_BASE || "/api";

export default {
  get: async (path) => {
    const res = await fetch(`${BASE}${path}`, { credentials: "include" });
    if(!res.ok) throw res;
    return res.json();
  },
  post: async (path, body) => {
    const res = await fetch(`${BASE}${path}`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });
    if(!res.ok) throw res;
    return res.json();
  },
  // add put/patch/delete as needed
};
