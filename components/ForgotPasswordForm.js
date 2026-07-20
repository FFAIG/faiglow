"use client";
import { useState } from "react";
import Link from "next/link";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // TODO: API bağlantısı buraya eklenecek
      // const res = await fetch("/api/auth/forgot-password", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ email }),
      // });
      // if (!res.ok) throw new Error("Bu e-posta adresi bulunamadı.");
      setSent(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <div className="login-form">
        <p className="forgot-success">
          Şifre sıfırlama bağlantısı <strong>{email}</strong> adresine gönderildi. Lütfen gelen kutunuzu kontrol edin.
        </p>
        <Link href="/login" className="login-btn" style={{ textAlign: "center", textDecoration: "none" }}>
          Giriş Sayfasına Dön
        </Link>
      </div>
    );
  }

  return (
    <form className="login-form" onSubmit={handleSubmit} noValidate>

      <p className="login-title">Şifremi Unuttum</p>
      <p className="forgot-desc">
        E-posta adresinizi girin, şifre sıfırlama bağlantısını gönderelim.
      </p>

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

      <button type="submit" className="login-btn" disabled={loading}>
        {loading ? "GÖNDERİLİYOR..." : "BAĞLANTI GÖNDER"}
      </button>

      <Link href="/login" className="forgot-back-link">
        ← Giriş Yap
      </Link>

    </form>
  );
}
