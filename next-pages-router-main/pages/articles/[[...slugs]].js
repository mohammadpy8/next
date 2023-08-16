import { useRouter } from "next/router";

function Article() {
  const router = useRouter();
    
    if (router.query.slugs.length > 1) {
        return <h3>this article is return by {router.query.slugs[0]} at {router.query.slugs[2]} </h3>
    }

  return (
    <div>
      <h1>article </h1>
    </div>
  );
}

export default Article;
