
import Image from "next/image";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="mx-auto max-w-7xl px-4 py-4 ">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        
        {/* Logo & Title */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.webp"
            width={30}
            height={30}
            alt="Bangla News 24 logo"
          />

          <div>
            <h2 className="text-2xl font-bold text-red-700">
              Bangla News 24
            </h2>

            <p className="text-sm">{date}</p>
          </div>
        </div>

        {/* Auth Buttons */}
        <div className="flex  items-center gap-3 right-4 top-4 asbolute text-sm">
          <button className="btn">
            সাইন ইন
          </button>

          <button className="btn bg-red-700 text-white hover:bg-red-800">
            সাইন আপ
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;
