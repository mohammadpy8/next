import Link from "next/link";

export default function Home() {
  return (
    <div>
      home
      <ul>
        <li>
          <Link href="/courses">go to course page</Link>
        </li>
      </ul>
    </div>
  );
}
