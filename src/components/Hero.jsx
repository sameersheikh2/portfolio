import { BlurFade } from "../../components/ui/blur-fade";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";

const Hero = () => {
  return (
    <section id="header">
      <div className="mx-auto w-full  space-y-8">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 space-y-2">
            <BlurFade delay={0.04} inView>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl lg:text-6xl">
                Hi, I’m Sameer Sheikh 👋
              </h1>
            </BlurFade>
            <BlurFade delay={0.04 * 2} inView>
              <p className="max-w-[600px] md:text-xl text-muted">
                Aspiring Full‑Stack Developer with a passion for building and
                learning in public. Deep in the MERN stack @ Masai School,
                sharing my journey one project at a time.
              </p>
            </BlurFade>
          </div>
          <BlurFade delay={0.04 * 2} inView>
            <div className="relative group">
              <div className="relative">
                <Avatar className="size-32 sm:size-36 md:size-40 border-4 border-white/20 shadow-2xl ring-4 ring-white/10 hover:ring-white/20 transition-all duration-300 hover:scale-105">
                  <AvatarImage
                    alt="Sameer Sheikh"
                    src="/me.jpg"
                    className="object-cover"
                  />
                  <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                    SS
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};

export default Hero;
