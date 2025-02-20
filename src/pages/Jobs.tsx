import Button from "./components/Button";
import Input from "./components/Input";

const Jobs = () => {
  return (
    <section className="md:col-span-10 flex flex-col md:px-10 py-4 px-8 gap-8 max-h-fit">
      <form className="flex-1 flex max-h-fit items-stretch justify-center">
        <Input id="" name="" type="" className="h-full" />
        <Button type="submit">Search</Button>
      </form>
    </section>
  );
};

export default Jobs;
