import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export default function CounterIncreament() {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <section className="text-xl p-8 md:p-10 lg:p-15 lg:px-15  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
          <span className="border border-dashed p-5 text-center">
            {counterOn && (
              <CountUp start={0} end={400} duration={2} delay={0} />
            )}{" "}
            +clients
          </span>
          <span className="border border-dashed p-5 text-center">
            {counterOn && (
              <CountUp start={0} end={500} duration={2} delay={0} />
            )}
            +projects
          </span>
          <span className="border border-dashed p-5 text-center">
            {counterOn && (
              <CountUp start={0} end={200} duration={2} delay={0} />
            )}
            +awards
          </span>
          <span className="border border-dashed p-5 text-center">
            {counterOn && (
              <CountUp start={0} end={600} duration={2} delay={0} />
            )}
            +goals
          </span>
        </section>
      </ScrollTrigger>
    </>
  );
}
