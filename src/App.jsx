const dollar = String.fromCodePoint(0x00024);
function App() {
  return (
    <>
      <main>
        <section>
          <h1>Join our community</h1>

          <h2>30-day, hassle-free money back guarantee</h2>

          <p>
            Gain access to our full library of tutorials along with expert code
            reviews. Perfect for any developers who are serious about honing
            their skills.
          </p>
        </section>

        <section>
          <h3>Monthly Subscription</h3>

          <p>{dollar}29 per month</p>

          <p>Full access for less than &dollar;1 a day</p>

          <button>Sign Up</button>
        </section>

        <section>
          <h3>Why Us</h3>

          <ul>
            <li>Tutorials by industry experts</li>
            <li>Peer &amp; expert code review</li>
            <li>Coding exercises</li>
            <li>Access to our GitHub repos</li>
            <li>Community forum</li>
            <li>Flashcard decks</li>
            <li>New videos every week</li>
          </ul>
        </section>
      </main>

      <footer>
        <p className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </p>
      </footer>
    </>
  );
}

export default App;
