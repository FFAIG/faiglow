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
      // Örnek:
      // const res = await fetch("/api/auth/login", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ email, password }),
      // });
      // if (!res.ok) throw new Error("Hatalı e-posta veya şifre.");
      // const data = await res.json();
      // router.push("/dashboard");

      console.log("Giriş deneniyor:", { email });
    } catch (err) {
      setError(err.message);
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
        <label htmlFor="password">Şifre</label>
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
