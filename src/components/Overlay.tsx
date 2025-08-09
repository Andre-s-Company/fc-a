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
      <div className="px-6 py-8">{children}</div>
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
    setOpacitySection6(scroll.curve(0.795, 0.06));
    setOpacitySection7(scroll.curve(0.97, 0.06));
  });

  return (
    <Scroll html>
      <div className="w-screen h-fit flex flex-col items-center">
        {/* ---------------------- Section 1 ---------------------- */}
        <Section className={""} opacity={opacitySection1}>
          <p className="text-2xl text-yellow-950 -mt-32 mx-16 mr-2 bg-yellow-50/50 p-4 rounded-lg">
            Holi amor, ojalá cuando estés leyendo esto pueda estar a tu lado, y
            si no lo estoy, quiero que mientras lees esto sientas la calidez de
            mí abrazándote, y ojalá te guste este detalle jsjsjs. Oye, te quiero
            c:
          </p>
        </Section>
        {/* ---------------------- Section 2 ---------------------- */}
        <Section className={""} opacity={opacitySection2}>
          <p className="text-2xl text-sky-950 -mt-6 bg-sky-50/50 p-4 rounded-lg">
            Sé que el azul es tu color favorito, y cómo no serlo si luces
            hermosa con él. Cada que veo este color no puedo evitar pensar en ti
            y que quisiera que estuvieras a mi lado para poder apreciarlo
            juntos.
          </p>
        </Section>
        {/* ---------------------- Section 3 ---------------------- */}
        <Section className={""} opacity={opacitySection3}>
          <p className="text-2xl text-purple-950 ml-16 -mt-6 -mr-6 bg-purple-50/50 p-4 rounded-lg">
            Ya que mencioné el azul, uno de tus colores favoritos, porque no
            mencionar el morado. Escuché que las flores moradas significan
            sentimientos sinceros. Si tuviera que escoger un color para darle
            tono a mi amor por ti, sería el morado.
          </p>
        </Section>
        {/* ---------------------- Section 4 ---------------------- */}
        <Section className={"justify-start"} opacity={opacitySection4}>
          <p className="text-2xl text-neutral-950 ml-6 -mt-6 -mr-6 bg-neutral-50/50 p-4 rounded-lg">
            Cuando estoy escribiendo esto, lo hago con una emoción en mi corazón
            que lo desborda, ya que aún no nos hemos visto en persona. Cuando
            pienso en ello, mi corazón se altera, me llena de felicidad e
            ilusión. Cuando te haya visto, te habré dado una fracción de los
            abrazos que no nos hemos dado, todos estos llenos de amor.
          </p>
        </Section>
        {/* ---------------------- Section 5 ---------------------- */}
        <Section className={"justify-start"} opacity={opacitySection5}>
          <p className="text-2xl text-red-950 mt-12 bg-red-50/50 p-4 rounded-lg">
            Ahora que recuerdo, la última vez que escuché el relato del listón
            rojo fue gracias a ti: un listón rojo que une a dos almas. Aunque el
            tiempo y la distancia nos separan, el rojo listón nos recuerda que
            el amor verdadero siempre encuentra el camino para volver a unirnos.
            Quiero que sepas que...
          </p>
        </Section>
        {/* ---------------------- Section 6 ---------------------- */}
        <Section className={"justify-start"} opacity={opacitySection6}>
          <h2 className="w-full text-center text-5xl mt-24 text-rose-950 bg-rose-50/50 p-4 rounded-lg">
            Te amo {""}
          </h2>
        </Section>
        {/* ---------------------- Section 7 ---------------------- */}
        <Section className={"justify-end"} opacity={opacitySection7}>
          <h2 className="w-full text-center text-5xl mb-24 text-blue-950 bg-blue-50/50 p-4 rounded-lg">
            Feliz cumpleaños c:
          </h2>
        </Section>
      </div>
    </Scroll>
  );
};
