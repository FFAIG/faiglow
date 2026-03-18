"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || "Hatalı e-posta veya şifre."); return; }
      if (data.role === "super_admin") {
        router.push("/tac.pan7l.01x");
      } else {
        router.push("/admin");
      }
    } catch (err) {
      setError("Hata: " + (err?.message || String(err)));
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="login-form" onSubmit={handleSubmit} noValidate>
      {error && <p className="login-error">{error}</p>}
      <div className="login-field">
        <label htmlFor="email">E-posta</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ornek@email.com"
          required
          autoComplete="email"
        />
      </div>
      <div className="login-field">
        <div className="login-field-header">
          <label htmlFor="password">Şifre</label>
          <a href="/sifremi-unuttum" className="forgot-link">Şifremi Unuttum</a>
        </div>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          required
          autoComplete="current-password"
        />
      </div>
      <button type="submit" className="login-btn" disabled={loading}>
        {loading ? "GİRİŞ YAPILIYOR..." : "GİRİŞ YAP"}
      </button>
    </form>
  );
}
