import ForgotPasswordForm from "@/components/ForgotPasswordForm";

export const metadata = {
  title: "Şifremi Unuttum",
  robots: { index: false, follow: false },
};

export default function SifremiUnuttumPage() {
  return (
    <div className="login-page">
      <ForgotPasswordForm />
    </div>
  );
}
