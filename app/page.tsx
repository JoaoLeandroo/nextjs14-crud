import Link from "next/link";

Link

export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Link href={"/employee"} className="btn btn-success">
        Acesse o Dashboard
      </Link>
    </div>
  );
}
