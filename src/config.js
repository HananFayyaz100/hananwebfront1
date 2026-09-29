// Backend API ka base URL.
// Local: .env file mein VITE_API_URL=http://localhost:5000
// Vercel: Project Settings > Environment Variables mein VITE_API_URL set karein
const raw = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const API_URL = raw.replace(/\/+$/, "");
