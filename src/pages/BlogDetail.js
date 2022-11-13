import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetail =()=>{
  const params = useParams();
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(function(){
    async function getArticle(){
      const request = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${params.id}`);
      const response = await request.json();

      setArticle(response);
      setLoading(false);
    } 
    getArticle();
  },[params])

  return(
    <section>
      {loading && <i>Loading Article...</i>}
      <h1>{article.title}</h1>
      <img src={article.imageUrl} alt={article.title} />
    </section>
  )
}
export default BlogDetail;