import SubmitAPost from "./components/SubmitAPost";
import { PostType } from "../types";
import Post from "./components/Post";

const MainHomePage = () => {
  const posts: PostType[] = [
    {
      id: 1,
      user: {
        id: 101,
        name: "pips Dev",
        username: "pipodev",
        avatar:
          "https://e7.pngegg.com/pngimages/519/752/png-clipart-plants-vs-zombies-2-it-s-about-time-plants-vs-zombies-garden-warfare-2-the-sims-3-supernatural-pea-plant-stem-video-game-thumbnail.png",
      },
      content: "¿Cuál es su editor de código favorito? Yo uso VS Code.",
      image:
        "https://i.ytimg.com/vi/H7LwUj2zlhA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCVOiAcbXBVMEbg95JLyLirmkBgOA",
      likes: 120,
      comments: [
        {
          id: 201,
          user: "diex_flowbite",
          avatar:
            "https://external-preview.redd.it/9NQygRkE2FSy-NrjkYO1VPkrBmhK93KGnz8Y3T84HIc.jpg?width=640&crop=smart&auto=webp&s=43d993b867da6c2d146f4472dd24ef10ae2fe461",
          content: "monster hunter pipo",
          createdAt: "",
        },
        {
          id: 202,
          user: "uwubackend",
          content: "eso q we",
          createdAt: "",
          avatar:
            "https://www.thedragonstreasure.com/cdn/shop/products/uwu.png?v=1736781952",
        },
      ],
      createdAt: "2025-02-18T10:00:00Z",
    },
    {
      id: 2,
      user: {
        id: 102,
        name: "Mariana JS",
        username: "polloinjs",
        avatar: "hellyea.webp",
      },
      content: "Mi lenguaje favorito de programación es HTML.",
      image: undefined,
      likes: 200,
      comments: [
        {
          id: 203,
          user: "full_programación",
          content: "Está mejor CSS.",
          createdAt: "",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv05ueLpBFVM3JAmr9D1GDihurYIaUvq2GDA&s",
        },
        {
          id: 204,
          user: "elena_ui",
          content: "SQL es el GOAT.",
          createdAt: "",
          avatar:
            "https://s4.anilist.co/file/anilistcdn/character/large/b135673-tDh8YDjOzQXj.jpg",
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
          content:
            "Buenísimo, Docker es clave para evitar el clásico 'En mi máquina sí funciona'. 😆",
          createdAt: "",
          avatar:
            "https://previews.123rf.com/images/hobbitfoot/hobbitfoot1911/hobbitfoot191102984/133943914-emoji-de-cara-de-nerd-emoticon-inteligente-con-gafas-friki-o-estudiante-ilustraci%C3%B3n-vectorial.jpg",
        },
      ],
      createdAt: "2025-02-16T18:45:00Z",
    },
  ];

  return (
    <>
      <div className="md:col-span-7 flex flex-col md:px-10 pt-4 pb-12 px-8 gap-8">
        <SubmitAPost />
        {posts.map((post: PostType) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
      <aside className="hidden md:block col-span-3 mt-4"></aside>
    </>
  );
};

export default MainHomePage;
