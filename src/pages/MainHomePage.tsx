import SubmitAPost from "./components/SubmitAPost";
import { PostType } from "../types";
import Post from "./components/Post";

const MainHomePage = () => {
  const posts: PostType[] = [
    {
      id: 1,
      user: {
        id: 101,
        name: "Carlos Dev",
        username: "carlitos_dev",
        avatar:
          "https://e7.pngegg.com/pngimages/519/752/png-clipart-plants-vs-zombies-2-it-s-about-time-plants-vs-zombies-garden-warfare-2-the-sims-3-supernatural-pea-plant-stem-video-game-thumbnail.png",
      },
      content: "¿Cuál es su editor de código favorito? Yo uso VS Code. 🔥",
      image:
        "https://i.ytimg.com/vi/H7LwUj2zlhA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCVOiAcbXBVMEbg95JLyLirmkBgOA",
      likes: 120,
      comments: [
        {
          id: 201,
          user: "marianajs",
          avatar: "https://i.pinimg.com/736x/4b/71/e6/4b71e6fbdf57aff6b1b56f7acb0ed2ed.jpg",
          content: "Yo también, pero últimamente estoy probando WebStorm. 😃",
          createdAt: "",
        },
        {
          id: 202,
          user: "pedrobackend",
          content: "Nano es el verdadero GOAT. 😂",
          createdAt: "",
          avatar: "https://www.thedragonstreasure.com/cdn/shop/products/uwu.png?v=1736781952"
        },
      ],
      createdAt: "2025-02-18T10:00:00Z",
    },
    {
      id: 2,
      user: {
        id: 102,
        name: "Mariana JS",
        username: "marianajs",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      },
      content:
        "Hoy aprendí algo nuevo sobre promesas en JavaScript. ¡Es increíble cómo funciona async/await! 🚀",
      image: undefined,
      likes: 200,
      comments: [
        {
          id: 203,
          user: "carlitos_dev",
          content: "Sí, pero a veces es un dolor manejar errores con try/catch. 😅",
          createdAt: "",
          avatar: ""
        },
        {
          id: 204,
          user: "elena_ui",
          content: "Te recomiendo usar async/await con .catch() en lugar de try/catch. 😉",
          createdAt: "",
          avatar: "https://s4.anilist.co/file/anilistcdn/character/large/b135673-tDh8YDjOzQXj.jpg"
        },
      ],
      createdAt: "2025-02-17T12:30:00Z",
    },
    {
      id: 3,
      user: {
        id: 103,
        name: "Pedro Backend",
        username: "pedrobackend",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      },
      content:
        "Aquí les dejo una guía rápida sobre Docker para devs backend 🐳",
      image:
        "https://imgv2-2-f.scribdassets.com/img/document/634239437/original/4e0389798c/1?v=1",
      likes: 95,
      comments: [
        {
          id: 205,
          user: "juan_devops",
          content: "Buenísimo, Docker es clave para evitar el clásico 'En mi máquina sí funciona'. 😆",
          createdAt: "",
          avatar: "https://previews.123rf.com/images/hobbitfoot/hobbitfoot1911/hobbitfoot191102984/133943914-emoji-de-cara-de-nerd-emoticon-inteligente-con-gafas-friki-o-estudiante-ilustraci%C3%B3n-vectorial.jpg"
        },
      ],
      createdAt: "2025-02-16T18:45:00Z",
    },
  ];

  return (
    <>
      <div className="md:col-span-7 flex flex-col md:px-10 py-4 px-8 gap-8">
        <SubmitAPost />
        {posts.map((post: PostType) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
      <aside className="hidden md:block col-span-3 mt-4">
        <div className="bg-zinc-800 rounded-xl">
          {/* Sería bueno un endpoint que recopile los posts con más likes en las últimas 24 horas */}
          <h2 className="font-bold text-lg p-3">Trendiest posts</h2>
        </div>
      </aside>
    </>
  );
};

export default MainHomePage;
