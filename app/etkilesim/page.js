import Image from "next/image";

export const metadata = {
  title: "Dijital Etkileşimli Ayna",
  robots: { index: false, follow: false },
};

export default function EtkilesimPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white px-6 sm:px-10 pb-10 pt-[calc(var(--header-h)+80px)]">
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
