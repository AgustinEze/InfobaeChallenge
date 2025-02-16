import { useNavigate } from "react-router-dom";
import { URL_ROUTES } from "../helpers/urlRoutes";
import { useFetch } from "../helpers/hooks/useFetch";
import { BlogCardContainer } from "../components/molecules/BlogCardContainer";
import { useAuth } from "../components/context/AuthContext";
import { Button } from "../components/atoms/Button";
import { NavBar } from "../components/molecules/NavBar";
import { BlogCardSkeleton } from "../components/molecules/BlogCardSkeleton";


export const HomePage = () => {

  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();
  const { data, loading, error } = useFetch(URL_ROUTES.getAllPost);

  if(error)return (
    <p className="text-red-500">Error: {error}</p>
  )

  return (
    <div className="flex flex-col min-h-screen w-screen">
      <NavBar>
        {isAuthenticated ? (
          <div className="flex justify-between w-full items-center px-4">
            <span>Hola, {user?.name}</span>

            <Button text={"Cerrar sesión"} onClick={logout} />
          </div>
        ) : (
          <div className="flex w-full justify-end px-4">
            <Button
              text={"Iniciar sesión"}
              onClick={() => navigate("/login")}
            />
          </div>
        )}
      </NavBar>

      {/* Contenido */}
      <div className="p-4 flex-grow w-full">
        {loading && (
          <div className="p-4 flex-grow w-full grid gap-4 grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
            {[...Array(5)].map((_, index) => (
              <BlogCardSkeleton key={index} />
            ))}
          </div>
        )}

        <div className="grid gap-4 grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
          {data?.data?.map((post) => (
            <BlogCardContainer
              key={post.id}
              author={`${post.owner.firstName} ${post.owner.lastName}`}
              imageUrl={post.image}
              tags={post.tags}
              postId={post.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
