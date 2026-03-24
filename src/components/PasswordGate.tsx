"use client";
import { useState, useEffect } from "react";

const PASS = "Tekpoint2025!";
const KEY = "tekpoint_auth";

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const [authed, setAuthed] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined" && sessionStorage.getItem(KEY) === "1") {
      setAuthed(true);
    }
  }, []);

  if (!mounted) return null;
  if (authed) return <>{children}</>;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === PASS) {
      sessionStorage.setItem(KEY, "1");
      setAuthed(true);
    } else {
      setError(true);
      setInput("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1628] to-[#1a2d4a] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md text-center">
        <img src="/images/tekpoint-logo.svg" alt="Tekpoint" className="h-10 mx-auto mb-6" />
        <h1 className="text-xl font-bold text-gray-900 mb-2">Protected Preview</h1>
        <p className="text-sm text-gray-500 mb-6">Enter the password to access this site.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={input}
            onChange={(e) => { setInput(e.target.value); setError(false); }}
            placeholder="Password"
            autoFocus
            className={`w-full h-12 px-4 rounded-lg border ${error ? "border-red-400 bg-red-50" : "border-gray-300"} focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-center text-lg`}
          />
          {error && <p className="text-sm text-red-500">Incorrect password. Please try again.</p>}
          <button
            type="submit"
            className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
}
