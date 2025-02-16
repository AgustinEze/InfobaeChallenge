
import { useParams } from "react-router-dom";
import { useFetch } from "../helpers/hooks/useFetch";
import { URL_ROUTES } from "../helpers/urlRoutes";
import { BlogCardContainer } from "../components/molecules/BlogCardContainer";
import { Title } from "../components/atoms/Title";

export const PostsPage = () => {
  const { tag } = useParams(); 
  console.log(tag)
  const { data, loading, error } = useFetch(`${URL_ROUTES.getPostByTag(tag)}`);

  if (loading) return <p className="text-gray-500">Cargando posts...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="p-4">
      <Title title={`Posts con el tag: ${tag}`}/>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
        {data?.data?.length > 0 ? (
          data.data.map((post) => (
            <BlogCardContainer
              key={post.id}
              author={`${post.owner.firstName} ${post.owner.lastName}`}
              imageUrl={post.image}
              tags={post.tags}
              postId={post.id}
            />
          ))
        ) : (
          <p className="text-gray-500">No hay posts para este tag.</p>
        )}
      </div>
    </div>
  );
};
