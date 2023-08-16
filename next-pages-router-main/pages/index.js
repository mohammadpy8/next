import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {

  const router = useRouter();

  const clickHandler = () => {

    router.push("/student");

  }

  return (
    <div>
      home
      <ul>
        <li>
          <Link href="/courses">go to course page</Link>
          <br />
          <Link href="/users">users</Link>
        </li>
      </ul>

      <button onClick={clickHandler}>Login</button>

    </div>
  );
}
