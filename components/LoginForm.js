"use client";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // TODO: API bağlantısı buraya eklenecek
      console.log("Giriş deneniyor:", { email });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="w-full max-w-[400px] flex flex-col gap-6" onSubmit={handleSubmit} noValidate>

      {error && (
        <p className="text-[13.5px] font-light text-[#ff6b6b] text-center bg-[rgba(255,107,107,0.08)] border border-[rgba(255,107,107,0.25)] rounded-lg py-3 px-4">
          {error}
        </p>
      )}

      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#999]"
        >
          E-posta
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ornek@email.com"
          required
          autoComplete="email"
          className="login-field-input"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="password"
          className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#999]"
        >
          Şifre
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          required
          autoComplete="current-password"
          className="login-field-input"
        />
      </div>

      <button type="submit" className="login-btn" disabled={loading}>
        {loading ? "GİRİŞ YAPILIYOR..." : "GİRİŞ YAP"}
      </button>

    </form>
  );
}
