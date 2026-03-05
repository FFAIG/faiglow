import LoginForm from "@/components/LoginForm";

export const metadata = {
  title: "Giriş",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white px-6 sm:px-10 pb-10 pt-[calc(var(--header-h)+20px)] sm:pt-[calc(var(--header-h)+40px)] lg:pt-[calc(var(--header-h)+80px)]">
      <LoginForm />
    </div>
  );
}
