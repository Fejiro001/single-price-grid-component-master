import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dollar = String.fromCodePoint(0x00024);
  const notify = () =>
    toast.success("Sign up successful!", { theme: "dark", autoClose: 1500 });

  return (
    <div className="bg-light-gray flex h-full flex-col items-center justify-center font-primaryFont p-4">
      <main className="container mx-auto my-8 flex max-w-5xl flex-col overflow-hidden rounded-xl shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
        <section className="grid basis-full gap-4 bg-white p-8 md:p-12">
          <h1 className="text-cyan heading-size font-bold">
            Join our community
          </h1>

          <h2 className="heading2-size text-bright-yellow font-bold">
            30-day, hassle-free money back guarantee
          </h2>

          <p className="paragraph-size text-grayish-blue font-normal">
            Gain access to our full library of tutorials along with expert code
            reviews. Perfect for any developers who are serious about honing
            their skills.
          </p>
        </section>

        <div className="flex basis-full flex-col *:basis-full *:p-8 md:flex-row *:md:basis-1/2 *:md:p-12">
          <section className="bg-cyan grid items-center gap-4">
            <h3 className="heading-size font-bold text-white">
              Monthly Subscription
            </h3>

            <div>
              <p className="paragraph-size text-light-gray flex items-center gap-4">
                <span className="bigtext-size font-bold text-white">
                  {dollar}29
                </span>{" "}
                per month
              </p>
              <p className="paragraph-size text-white">
                Full access for less than {dollar}1 a day
              </p>
            </div>

            <button
              onClick={notify}
              className="paragraph-size bg-bright-yellow hover:bg-bright-yellow/85 rounded-md py-4 font-bold text-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
            >
              Sign Up
            </button>
          </section>

          <section className="bg-cyan/80 grid gap-4">
            <h3 className="heading-size font-bold text-white">Why Us</h3>
            <ul className="paragraph-size font-normal text-white">
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

      <footer className="text-center font-bold">
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
