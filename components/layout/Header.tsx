import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  const handleHomeClick = () => {
    router.push("/");
  };

  const handleBackClick = () => {
    router.back();
  };

  return (
    <header className="flex items-start justify-between">
      <div className="flex flex-col space-y-[6px]">
        <div
          className="w-[49px] h-[33px] flex items-center justify-center rounded-r-full bg-gray-300"
          onClick={handleHomeClick}
        >
          <img
            src={`/icons/home.svg`}
            alt="Home"
            className="w-[21px] h-[21px] cursor-pointer"
          />
        </div>

        <div
          className="w-[49px] h-[33px] flex items-center justify-center rounded-r-full bg-gray-300"
          onClick={handleHomeClick}
        >
          <img
            src={`/icons/back.svg`}
            alt="Back"
            className="w-[22px] h-[23px] cursor-pointer"
            onClick={handleBackClick}
          />
        </div>
      </div>

      <div className="h-[33px] w-[182px] bg-gray-300 flex items-center justify-center rounded-b-xl">
        <p className="text-white rounded-b-xl text-xl font-semibold">INSIEME</p>
      </div>

      <div className="h-[56px] w-[182px] bg-gray-300 flex items-center justify-center rounded-bl-xl">
        <p className="text-white rounded-b-xl text-xl font-semibold">
          FULL MOVIE
        </p>
      </div>
    </header>
  );
}
