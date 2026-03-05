import Image from "next/image";

export const metadata = {
  title: "Dijital Etkileşimli Ayna",
  robots: { index: false, follow: false },
};

export default function EtkilesimPage() {
  return (
    <div className="login-page">
      <Image
        src="/FAI1.png"
        alt="FAI Logo"
        width={400}
        height={400}
        priority
        className="page-top-img"
        style={{ height: "auto" }}
      />
    </div>
  );
}
