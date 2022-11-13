import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blog = ()=>{
  const [Article,setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(function(){
    async function getArticle(){
      const request = await fetch('https://api.spaceflightnewsapi.net/v3/articles');
      const response = await request.json();

      setArticle(response);
      setLoading(false);
    }
    getArticle();
  },[]);

  return (
    <section>
      <h1>Blog Pribadi</h1>
      <h2>Berikut ini adalah tulisan internet</h2>
      {loading ? (
        <i>Loading Article...</i>
        ):(
          <div>
          {Article.map(function(articlel){
            return(
              <article key={articlel.id}>
                <h3><Link to={`/Blog/${articlel.id}`}>{articlel.title}</Link></h3>
                <time>{new Date(articlel.publishedAt).toLocaleDateString()}</time>
              </article>
            )
          })}
        </div>
        )
      }
    </section>
  )
};

export default Blog;