import Link from "next/link";
const HomePage = () => {
  return (
    <div className="">
      <h1 className="text-red-400">Welcome to motor space kenya</h1>
      <Link href="/vehicles">Vehicles</Link>
    </div>
  );
};

export default HomePage;
