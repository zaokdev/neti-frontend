import Button from "./Button";

const SubmitAPost = () => {
  return (
    <form className="rounded-xl bg-zinc-800 p-4 flex flex-col">
      <textarea
        className="w-full px-4 py-2 mt-2 bg-zinc-700 rounded-lg outline-none"
        placeholder="Start a post here..."
      />
      <div className="flex justify-end mt-2">
        <Button type="submit">Post</Button>
      </div>
    </form>
  );
};

export default SubmitAPost;
