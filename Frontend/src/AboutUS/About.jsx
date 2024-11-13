import "./About.css"

const About = () => {
  return (
    <>
      <h1 className="text-4xl">About Us</h1>

      <hr />

      <article>
        <div className="pic-container">
          <img
            height="300px"
            src="https://hamrocsit.com/wp-content/themes/tucsitnotes/assets/images/shapes/about.php?color=00af92"
            alt="loading"
          />
        </div>

        <div className="about-container">
          <h2>What is Noteflix and what it does?</h2>
          <div className="about">
            Noteflix is a Web based e-learning platform where you can find all study related materials which includes productive Notes, class Assignments, University Update Channels, study blogs, Articles, question banks, solutions, important questions and the carrier section. We built this platform to provide the best possible resource for students so that they can excel in their academic journey.
          </div>
          <div>
            <h3>Notes</h3>
            <div>
              We provide chapterwise notes of included subjects consisting handwritten and pdf formats. We tried our best to fulfill your quest regarding best notes for enhancing your learning experience!!!
            </div>
          </div>

          <div>
            <h3>Solutions</h3>
            <div>We tried to solve the maximum number of questions, despite most of them will be the important one.</div>
          </div>
        </div>
      </article>

      <hr />

      <section>
        <h3>WHY TO CHOOSE US?</h3>
        <div>In this platform you also have a chance to get career opportunity with us!!!</div>
      </section>

      <footer>
        <h2 className="color-1">Meet Our <h2 className="color-2">Team</h2></h2>
        <div className="our-team">Our developers!!!</div>

        <div className="imgs">
          <div className="img1">
            <img className="img" src="assets/img1.jfif" alt="loading" />
            <ul>
              <li>Aashish Khadka</li>
              <li>aashishkhadka720@gmail.com</li>
              <a href="https://github.com/Aashish605"><img src="assets/github.svg" alt="loading" /></a>
            </ul>
          </div>
          <div className="img2">
            <img className="img" src="assets/img2.jfif" alt="loading" />
            <ul>
              <li>Arjun Adhikari</li>
              <li>pubgaxis4@gmail.com</li>
              <a href="https://github.com/Arjun-Adhikari"><img src="assets/github.svg" alt="loading" /></a>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default About;