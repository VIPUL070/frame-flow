import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import DottedPattern from "../ui/DottedPattern";
import { fadeInUp, staggerContainer, EASE } from "../../lib/animations";
import Button from "../ui/Button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden px-4 pt-12 pb-8 sm:px-6 sm:pt-16">
      <DottedPattern
        className="pointer-events-none absolute left-0 top-10 h-40 w-40 opacity-40 mask-[radial-gradient(circle,black,transparent_72%)] sm:h-56 sm:w-56"
        color="var(--color-accent)"
      />
      <DottedPattern
        className="pointer-events-none absolute right-0 top-16 h-40 w-40 opacity-40 mask-[radial-gradient(circle,black,transparent_72%)] sm:h-56 sm:w-56"
        color="#f97316"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative mx-auto flex max-w-2xl flex-col items-center text-center"
      >
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.5, ease: EASE }}
          className="mb-5 inline-flex items-center gap-2 rounded-pill border border-border bg-surface px-2.5 py-1 shadow-tab"
        >
          <span className="text-[10px] font-medium text-muted-foreground">
            AI Thumbnail Generator
          </span>
          <span className="h-3 w-px bg-border" />
          <a
            href="/generate"
            className="inline-flex items-center gap-0.5 text-[10px] text-foreground"
          >
            Start <ArrowRight className="h-2.5 w-2.5" />
          </a>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-2xl font-semibold leading-tight tracking-tight text-foreground sm:text-3xl md:text-4xl"
        >
          Create Thumbnails That{" "}
          <br />
          <span className="text-blue">Stop the Scroll.</span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          transition={{ duration: 0.6, ease: EASE }}
          className="mt-4 max-w-xs text-[11px] leading-relaxed tracking-tight text-muted-foreground sm:text-[10px] overflow-hidden"
        >
          Stop wasting hours on design. Get high-converting thumbnails in seconds with our advanced AI.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.6, ease: EASE }}
          className="mt-6 flex flex-wrap items-center justify-center gap-2"
        >
          <Button
            variant="secondary"
            size="sm"
          >
            Generate now
          </Button>
          <Button variant="primary" size="sm">
            View creations
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
