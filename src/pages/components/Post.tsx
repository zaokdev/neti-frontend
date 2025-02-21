import React, { useState } from "react";
import { PostType } from "../../types";
import { MessageCircle, Share2, ThumbsUp } from "lucide-react";
import Modal from "./Modal";
import { useNavigate } from "react-router";

interface PostProps {
  post: PostType;
}

const Post: React.FC<PostProps> = ({ post }) => {
  
  const [yourLike, setYourLike] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const changeLike = () => {
    setYourLike(!yourLike);
  };

  const goToProfile = () => {
    navigate(`/profile`);
  };

  return (
    <>
      <section className="rounded-xl bg-zinc-800 p-4 flex flex-col">
        <div className="flex gap-3 items-center">
          <img
            className="rounded-full h-8 cursor-pointer"
            src={post.user.avatar}
            alt={post.user.id.toString()}
            onClick={goToProfile}
          />
          <h3 className="font-bold cursor-pointer" onClick={goToProfile}>
            {post.user.username}
          </h3>
        </div>
        <p className="mt-2">{post.content}</p>
        <img src={post.image} alt={post.image} />
        <div className="flex justify-center md:justify-end md:gap-4 gap-16 mt-4">
          <p
            onClick={changeLike}
            className="flex flex-col items-center cursor-pointer"
          >
            {/* Me va a dar algo con typescript */}
            <ThumbsUp className={yourLike && "text-blue-600"} />{" "}
            {yourLike ? post.likes + 1 : post.likes}
          </p>
          <p
            className="flex flex-col items-center cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            <MessageCircle /> {post.comments.length}
          </p>
          <p className="flex flex-col items-center cursor-pointer">
            <Share2 /> Share
          </p>
        </div>
      </section>

      {/* MODAL PARA LOS COMENTARIOS */}
      <Modal show={showModal} onClose={() => setShowModal(!showModal)}>
        {post.comments.map((comment: any) => (
          <div>{comment.avatar}</div>
        ))}
      </Modal>
    </>
  );
};

export default Post;
