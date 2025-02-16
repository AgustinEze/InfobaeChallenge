import { useNavigate } from "react-router-dom";
import { URL_ROUTES } from "../helpers/urlRoutes";
import { useFetch } from "../helpers/hooks/useFetch";
import { BlogCardContainer } from "../components/molecules/BlogCardContainer";
import { useAuth } from "../components/context/AuthContext";
import { Button } from "../components/atoms/Button";
import { NavBar } from "../components/molecules/NavBar";
import { BlogCardSkeleton } from "../components/molecules/BlogCardSkeleton";

const DATA = [
  {
    id: "67ad8e7c0d03255c9e8b4065",
    image: "https://randomuser.me/api/portraits/med/women/75.jpg",
    likes: 2000,
    tags: ["qaw"],
    text: "text1",
    publishDate: "2025-02-13T06:17:32.681Z",
    updatedDate: "2025-02-13T06:17:32.681Z",
    owner: {
      id: "67ad8e5e0d03253fe78b405a",
      firstName: "Alex1",
      lastName: "QA1",
    },
  },
  {
    id: "67ad86de0d032541218b3f27",
    image: "https://randomuser.me/api/portraits/med/women/75.jpg",
    likes: 1000,
    tags: ["QA"],
    text: "text",
    publishDate: "2025-02-13T05:45:02.989Z",
    updatedDate: "2025-02-13T05:45:02.989Z",
    owner: {
      id: "67ad84500d032505fc8b3f0e",
      firstName: "Alex",
      lastName: "QA",
    },
  },
  {
    id: "67ad858d0d03255df78b3f19",
    image: "https://randomuser.me/api/portraits/med/women/75.jpg",
    likes: 1000,
    tags: ["QA"],
    text: "text",
    publishDate: "2025-02-13T05:39:25.186Z",
    updatedDate: "2025-02-13T05:39:25.186Z",
    owner: {
      id: "67ad84500d032505fc8b3f0e",
      firstName: "Alex",
      lastName: "QA",
    },
  },
  {
    id: "676df485e7d306a637958d5b",
    image: "",
    likes: 0,
    tags: ["food", "sport"],
    text: "",
    publishDate: "2024-12-27T00:27:50.003Z",
    updatedDate: "2024-12-27T00:27:50.003Z",
    owner: {
      id: "60d0fe4f5311236168a10a07",
      title: "mr",
      firstName: "Sigmund",
      lastName: "Myran",
      picture: "https://randomuser.me/api/portraits/med/men/61.jpg",
    },
  },
  {
    id: "676ded26ea10ec9220f60877",
    image: "",
    likes: 0,
    tags: ["music", "food"],
    text: "",
    publishDate: "2024-12-26T23:56:22.807Z",
    updatedDate: "2024-12-26T23:56:22.807Z",
    owner: {
      id: "60d0fe4f5311236168a10a00",
      title: "miss",
      firstName: "emma",
      lastName: "Sree",
      picture: "https://randomuser.me/api/portraits/med/women/75.jpg",
    },
  },
  {
    id: "676de5f1ea10ec2faff604f2",
    image: "",
    likes: 0,
    tags: [],
    text: "",
    publishDate: "2024-12-26T23:25:37.079Z",
    updatedDate: "2024-12-26T23:25:37.079Z",
    owner: {
      id: "669394476e79d22f89e79ef6",
      firstName: "Jalen_Christiansen",
      lastName: "Merle.Rath",
    },
  },
  {
    id: "676de5e6ea10ec401af604ec",
    image: "",
    likes: 0,
    tags: [],
    text: "",
    publishDate: "2024-12-26T23:25:26.010Z",
    updatedDate: "2024-12-26T23:25:26.010Z",
    owner: {
      id: "669394476e79d22f89e79ef6",
      firstName: "Jalen_Christiansen",
      lastName: "Merle.Rath",
    },
  },
  {
    id: "676de4deea10ecd42cf604dd",
    image: "",
    likes: 0,
    tags: [],
    text: "",
    publishDate: "2024-12-26T23:21:02.272Z",
    updatedDate: "2024-12-26T23:21:02.272Z",
    owner: {
      id: "669394476e79d22f89e79ef6",
      firstName: "Jalen_Christiansen",
      lastName: "Merle.Rath",
    },
  },
  {
    id: "676de4d0ea10ecc4faf604ce",
    image: "",
    likes: 0,
    tags: [],
    text: "",
    publishDate: "2024-12-26T23:20:48.170Z",
    updatedDate: "2024-12-26T23:20:48.170Z",
    owner: {
      id: "669394476e79d22f89e79ef6",
      firstName: "Jalen_Christiansen",
      lastName: "Merle.Rath",
    },
  },
  {
    id: "676de4b2ea10ec12fef604be",
    image: "",
    likes: 0,
    tags: [],
    text: "",
    publishDate: "2024-12-26T23:20:18.397Z",
    updatedDate: "2024-12-26T23:20:18.397Z",
    owner: {
      id: "669394476e79d22f89e79ef6",
      firstName: "Jalen_Christiansen",
      lastName: "Merle.Rath",
    },
  },
  {
    id: "66f5cf0fcd08e674fff21947",
    image:
      "https://images.unsplash.com/photo-1721332154191-ba5f1534266e?q=80&w=4635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likes: 6,
    tags: ["nature", "tech"],
    text: "This is an awesome post!!",
    publishDate: "2024-09-26T21:15:59.416Z",
    updatedDate: "2024-09-26T21:15:59.416Z",
    owner: {
      id: "66f535d779dd2185c7160e14",
      firstName: "Pepito",
      lastName: "Grillo",
      picture: "https://randomuser.me/api/portraits/lego/6.jpg",
    },
  },
  {
    id: "669ea53552893fc213ffa85b",
    image: "",
    likes: 13579,
    tags: ["tags1", "tags2", "tags3"],
    text: "Bolivia",
    publishDate: "2024-07-22T18:30:13.205Z",
    updatedDate: "2024-07-22T18:30:13.205Z",
    owner: {
      id: "669ea40552893f7d8cffa83b",
      firstName: "Blaze16",
      lastName: "Lessie73",
    },
  },
  {
    id: "669ea4ca52893fc2e4ffa850",
    image: "",
    likes: 13579,
    tags: ["tags1", "tags2", "tags3"],
    text: "Paraguay",
    publishDate: "2024-07-22T18:28:26.091Z",
    updatedDate: "2024-07-22T18:28:26.091Z",
    owner: {
      id: "669ea40552893f7d8cffa83b",
      firstName: "Blaze16",
      lastName: "Lessie73",
    },
  },
  {
    id: "66964fe382c568cf047b30bf",
    image: "",
    likes: 97531,
    tags: ["tags1", "tags2", "tags3"],
    text: "Lao People's Democratic Republic",
    publishDate: "2024-07-16T10:48:03.734Z",
    updatedDate: "2024-07-16T10:48:04.827Z",
    owner: {
      id: "66964fe182c56851fa7b30a4",
      firstName: "Alena_Leuschke",
      lastName: "Rafaela4",
    },
  },
  {
    id: "6694b139820e3b6a9b4987e7",
    image: "",
    likes: 97531,
    tags: ["tags1", "tags2", "tags3"],
    text: "Mongolia",
    publishDate: "2024-07-15T05:18:49.279Z",
    updatedDate: "2024-07-15T05:18:50.244Z",
    owner: {
      id: "6694b137820e3b81934987cc",
      firstName: "Samanta_Parisian",
      lastName: "Pearl2",
    },
  },
  {
    id: "6694afda820e3bcfbe4987ae",
    image: "",
    likes: 13579,
    tags: ["tags1", "tags2", "tags3"],
    text: "Mozambique",
    publishDate: "2024-07-15T05:12:58.602Z",
    updatedDate: "2024-07-15T05:12:58.602Z",
    owner: {
      id: "6694a74a820e3b3c5c49868c",
      firstName: "Mina_Grant39",
      lastName: "Mossie_Purdy31",
    },
  },
  {
    id: "6693a4496e79d22c0ae7aaef",
    image: "",
    likes: 97531,
    tags: ["tags1", "tags2", "tags3"],
    text: "Bosnia and Herzegovina",
    publishDate: "2024-07-14T10:11:21.137Z",
    updatedDate: "2024-07-14T10:11:22.160Z",
    owner: {
      id: "6693a4466e79d2ab70e7aad4",
      firstName: "Deron.Sanford",
      lastName: "Jalon.Dickens90",
    },
  },
  {
    id: "6693a1096e79d22c55e7a75a",
    image: "",
    likes: 97531,
    tags: ["tags1", "tags2", "tags3"],
    text: "Holy See (Vatican City State)",
    publishDate: "2024-07-14T09:57:29.138Z",
    updatedDate: "2024-07-14T09:57:29.967Z",
    owner: {
      id: "6693a1076e79d22098e7a73f",
      firstName: "Caitlyn_OKeefe62",
      lastName: "Burnice61",
    },
  },
  {
    id: "669394536e79d25c07e79f00",
    image: "",
    likes: 13579,
    tags: ["tags1", "tags2", "tags3"],
    text: "Belarus",
    publishDate: "2024-07-14T09:03:15.920Z",
    updatedDate: "2024-07-14T09:03:15.920Z",
    owner: {
      id: "669394476e79d22f89e79ef6",
      firstName: "Jalen_Christiansen",
      lastName: "Merle.Rath",
    },
  },
  {
    id: "667d76c4f6348bc24f74a552",
    image: "",
    likes: 97531,
    tags: ["tags1", "tags2", "tags3"],
    text: "Romania",
    publishDate: "2024-06-27T14:27:16.834Z",
    updatedDate: "2024-06-28T05:11:11.465Z",
    owner: {
      id: "60d0fe4f5311236168a10a27",
      title: "mr",
      firstName: "Tomothy",
      lastName: "Hawkins",
      picture: "https://randomuser.me/api/portraits/med/men/48.jpg",
    },
  },
];

export const HomePage = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();
  const { data, loading, error } = useFetch(URL_ROUTES.getAllPost);
  // if(error)return (
  //   <p className="text-red-500">Error: {error}</p>
  // )

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

            <Button text= {"Iniciar sesión"} onClick={() => navigate("/login")} />
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
        {DATA?.map((post) => (
          <BlogCardContainer key={post.id} title={post.title} imageUrl={post.image} tags={post.tags} />
        ))}
      </div>
    </div>
    </div>
  );
};

