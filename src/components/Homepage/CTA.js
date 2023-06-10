import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-indigo-50 text-center rounded-b-[40px]">
      <h1 className="w-8/12 mx-auto font-bold">Vuoi far parte della <span>realizzazione</span> di questo progetto?</h1>
      <div className="py-6" />
      <Link href="/mailing-list" target="_blank" className="button">
        Prova la demo gratuita
      </Link>
    </section>
  );
}
