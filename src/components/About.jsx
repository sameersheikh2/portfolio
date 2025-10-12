import React from "react";
import { BlurFade } from "../../components/ui/blur-fade";
import { Highlighter } from "../../components/ui/highlighter";

const About = () => {
  return (
    <section id="about">
      <BlurFade delay={0.04 * 3} inView>
        <h2 className="text-2xl font-semibold">About Me</h2>
      </BlurFade>
      <BlurFade delay={0.04 * 4} inView>
        <p className="mt-2 text-md text-muted-foreground leading-relaxed">
          In 2019, I completed my <strong>BCA</strong>. After that, I stepped
          away from tech to care for my family during my father's health
          challenges — a responsibility I took on wholeheartedly. In early 2025,
          following his encouragement, I reentered software development with
          renewed clarity. I joined Masai School to deeply learn the{" "}
          <strong>MERN stack</strong> and build meaningful projects. Since then,
          I've refined my problem-solving mindset and committed to growing every
          day.
        </p>
        <p className="mt-3 text-base text-muted leading-relaxed">
          I'm not where I want to be yet —
          <Highlighter
            action="highlight"
            color="green"
            animationDuration="1000"
          >
            but I believe in
            <em> consistent effort, growth </em> and the power of small wins.
          </Highlighter>{" "}
          Every day, I build a little more, learn a little more, and edge closer
          to becoming the engineer I aspire to be.
        </p>
      </BlurFade>
    </section>
  );
};

export default About;
