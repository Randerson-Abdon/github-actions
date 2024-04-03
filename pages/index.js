import Link from "next/link";

export default function HomeScreen() {
  return (
    <div>
      <h1>Pagina Inicial</h1>
      <Link href="/sobre">Sobre</Link>
    </div>
  );
}
