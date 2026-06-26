  import CardImg from "../src/assets/illustration-hero.svg";
  import MusicImg from "../src/assets/icon-music.svg"

  function Card() {
    return (
     <div className="min-h-screen flex items-center justify-center px-4">
  <div className="w-full max-w-sm overflow-hidden rounded-3xl bg-white shadow-2xl">
    <img src={CardImg} alt="Hero" className="w-full object-cover" />

    <div className="p-10">
      <h2 className="text-center text-2xl font-black text-blue-950">
        Order Summary
      </h2>

      <p className="mt-5 text-center text-gray-500">
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </p>

      <div className="mt-8 flex items-center justify-between rounded-xl bg-blue-50 p-5">
        <div className="flex items-center gap-4">
          <img src={MusicImg} alt="Music Icon" className="h-12 w-12" />

          <div>
            <p className="font-bold text-blue-950">Annual Plan</p>
            <p className="text-gray-500">$59.99/year</p>
          </div>
        </div>

        <a
          href="#"
          className="text-sm font-bold text-blue-700 underline hover:text-blue-900"
        >
          Change
        </a>
      </div>

      <button className="mt-8 w-full rounded-xl bg-blue-700 py-4 font-bold text-white shadow-lg/20 transition hover:bg-blue-800">
        Proceed to Payment
      </button>

      <div className="mt-7 text-center">
        <a href="#" className="font-bold text-gray-500 hover:text-blue-950">
          Cancel Order
        </a>
      </div>
    </div>
  </div>
</div>
    );
  }

  export default Card;
