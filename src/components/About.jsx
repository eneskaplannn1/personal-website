function About() {
  return (
    <section id="about" className="h-[75vh] py-24">
      <div className="flex flex-col mx-auto text-2xl max-w-xxl gap-y-12">
        <h1 className="text-6xl text-center text-black opacity-70">About Me</h1>
        <p>
          My name is Enes , and I am currently studying Computer Engineering at
          <span className="font-bold text-primary opacity-80">
            {" "}
            Yeditepe University
          </span>
          . I have a keen interest in both frontend and backend development.
        </p>
        <p>
          I enjoy keeping myself updated, learning new technologies, and
          embracing new challenges. In addition to my academic pursuits, I am a
          Fullstack Developer who loves to learn and contribute to teamwork.
        </p>
        <p>
          I am eager to gain knowledge and skills while paying attention to
          details.
        </p>
      </div>
    </section>
  );
}

export default About;
