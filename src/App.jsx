import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dollar = String.fromCodePoint(0x00024);
  const notify = () =>
    toast.success("Sign up successful!", { theme: "dark", autoClose: 1500 });

  return (
    <div className="flex h-max flex-col items-center justify-center p-8 font-primaryFont">
      <main className="container mx-auto mt-9 flex  flex-col max-w-screen-sm overflow-hidden rounded-lg shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] md:mt-32">
        <section className="grid basis-full justify-center gap-5 bg-white p-7 md:gap-4 md:px-11 md:py-10">
          <h1 className="heading-size font-bold text-cyan">
            Join our community
          </h1>

          <div>
            <h2 className="heading2-size font-bold text-bright-yellow">
              30-day, hassle-free money back guarantee
            </h2>
            <p className="paragraph-size mt-3 font-normal text-grayish-blue">
              Gain access to our full library of tutorials along with expert
              code reviews. Perfect for any developers who are serious about
              honing their skills.
            </p>
          </div>
        </section>

        <div className="flex basis-full flex-col *:basis-full *:py-7 *:px-6 md:flex-row *:md:basis-1/2 *:md:px-10 *:md:py-9">
          <section className="grid gap-3 bg-cyan md:gap-1">
            <h3 className="heading3-size font-bold text-white">
              Monthly Subscription
            </h3>

            <div>
              <p className="smalltext-size flex items-center gap-3 text-light-gray">
                <span className="bigtext-size font-bold text-white">
                  {dollar}29
                </span>{" "}
                per month
              </p>
              <p className="smalltext-size text-white">
                Full access for less than {dollar}1 a day
              </p>
            </div>

            <button
              onClick={notify}
              className="smalltext-size mt-4 md:mt-0 rounded-md bg-bright-yellow py-3 font-bold text-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-bright-yellow/85"
            >
              Sign Up
            </button>
          </section>

          <section className="grid gap-4 bg-cyan/80">
            <h3 className="heading3-size font-bold text-white">Why Us</h3>
            <ul className="list-size font-normal text-white">
              <li>Tutorials by industry experts</li>
              <li>Peer &amp; expert code review</li>
              <li>Coding exercises</li>
              <li>Access to our GitHub repos</li>
              <li>Community forum</li>
              <li>Flashcard decks</li>
              <li>New videos every week</li>
            </ul>
          </section>
        </div>
      </main>

      <ToastContainer />

      <footer className="mt-2 text-center font-bold">
        <p className="attribution">
          Challenge by{" "}
          <a
            className="text-cyan hover:underline"
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            className="text-cyan hover:underline"
            href="https://www.frontendmentor.io/profile/Fejiro001"
            target="_blank"
          >
            Fejiro Abere
          </a>
          .
        </p>
      </footer>
    </div>
  );
}

export default App;
