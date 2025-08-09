import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import { cn } from "../shared/utils";

// ---------------------- Section Component ----------------------
interface SectionProps {
  children: React.ReactNode;
  opacity?: number;
  className?: string;
}

const Section = ({ children, opacity = 1, className }: SectionProps) => {
  return (
    <section
      className={cn(
        "h-screen w-screen max-w-6xl flex flex-col justify-center p-10",
        className
      )}
      style={{ opacity: opacity }}
    >
      <div className="px-6 py-8">
        {children}
      </div>
    </section>
  );
};

// ---------------------- Overlay ----------------------
export const Overlay = () => {
  const scroll = useScroll();

  const [opacitySection1, setOpacitySection1] = useState(1);
  const [opacitySection2, setOpacitySection2] = useState(1);
  const [opacitySection3, setOpacitySection3] = useState(1);
  const [opacitySection4, setOpacitySection4] = useState(1);
  const [opacitySection5, setOpacitySection5] = useState(1);
  const [opacitySection6, setOpacitySection6] = useState(1);
  const [opacitySection7, setOpacitySection7] = useState(1);

  useFrame(() => {
    setOpacitySection1(1 - scroll.range(0, 0.0714));
    setOpacitySection2(scroll.curve(0.1328, 0.06));
    setOpacitySection3(scroll.curve(0.3128, 0.06));
    setOpacitySection4(scroll.curve(0.4628, 0.06));
    setOpacitySection5(scroll.curve(0.6228, 0.06));
    setOpacitySection6(scroll.curve(0.7950, 0.06));
    setOpacitySection7(scroll.curve(0.9700, 0.06));
  });

  return (
    <Scroll html>
      <div className="w-screen h-fit flex flex-col items-center">
        {/* ---------------------- Section 1 ---------------------- */}
        <Section className={""} opacity={opacitySection1}>
          <h2>Lorem ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            suscipit sed adipisci, nobis porro est velit maxime nihil
            reiciendis? Sapiente asperiores laboriosam officiis sit facilis
            tempora quisquam, ipsa neque iste!
          </p>
        </Section>
        {/* ---------------------- Section 2 ---------------------- */}
        <Section className={""} opacity={opacitySection2}>
          <h2>Lorem ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            suscipit sed adipisci, nobis porro est velit maxime nihil
            reiciendis? Sapiente asperiores laboriosam officiis sit facilis
            tempora quisquam, ipsa neque iste!
          </p>
        </Section>
        {/* ---------------------- Section 3 ---------------------- */}
        <Section className={""} opacity={opacitySection3}>
          <h2>Lorem ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            suscipit sed adipisci, nobis porro est velit maxime nihil
            reiciendis? Sapiente asperiores laboriosam officiis sit facilis
            tempora quisquam, ipsa neque iste!
          </p>
        </Section>
        {/* ---------------------- Section 4 ---------------------- */}
        <Section className={""} opacity={opacitySection4}>
          <h2>Lorem ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            suscipit sed adipisci, nobis porro est velit maxime nihil
            reiciendis? Sapiente asperiores laboriosam officiis sit facilis
            tempora quisquam, ipsa neque iste!
          </p>
        </Section>
        {/* ---------------------- Section 5 ---------------------- */}
        <Section className={""} opacity={opacitySection5}>
          <h2>Lorem ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            suscipit sed adipisci, nobis porro est velit maxime nihil
            reiciendis? Sapiente asperiores laboriosam officiis sit facilis
            tempora quisquam, ipsa neque iste!
          </p>
        </Section>
        {/* ---------------------- Section 6 ---------------------- */}
        <Section className={""} opacity={opacitySection6}>
          <h2>Lorem ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            suscipit sed adipisci, nobis porro est velit maxime nihil
            reiciendis? Sapiente asperiores laboriosam officiis sit facilis
            tempora quisquam, ipsa neque iste!
          </p>
        </Section>
        {/* ---------------------- Section 7 ---------------------- */}
        <Section className={""} opacity={opacitySection7}>
          <h2>Lorem ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            suscipit sed adipisci, nobis porro est velit maxime nihil
            reiciendis? Sapiente asperiores laboriosam officiis sit facilis
            tempora quisquam, ipsa neque iste!
          </p>
        </Section>
      </div>
    </Scroll>
  );
};
