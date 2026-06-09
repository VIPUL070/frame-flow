import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "../ui/Reveal";
import { WORKFLOW_STEPS } from "../../data/home";
import { EASE } from "../../lib/animations";

const WorkflowSteps = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="pl-8 py-16">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-xl font-semibold leading-tight text-foreground">
              Four Steps to{" "}
              <span className="text-blue">Perfection.</span>
            </h2>
            <p className="mt-3 text-[10px] leading-relaxed text-muted-foreground">
              A streamlined workflow designed for fast, clean thumbnail
              creation on every screen size.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-4 gap-px px-10">
          {WORKFLOW_STEPS.map((step, idx) => {
            const Icon = step.icon;
            const isActive = hoveredIdx === idx;

            return (
              <Reveal key={step.id} delay={idx * 0.04}>
                <motion.article
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  onFocus={() => setHoveredIdx(idx)}
                  onBlur={() => setHoveredIdx(null)}
                  whileHover={{ y: -6 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.28, ease: EASE }}
                  tabIndex={0}
                  className="group relative flex min-h-50 w-40 cursor-pointer flex-col justify-around overflow-hidden rounded-md border border-border bg-panel p-3 shadow-card outline-none transition-colors duration-300 hover:bg-surface focus-visible:ring-4 focus-visible:ring-blue/15"
                >
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        className="pointer-events-none absolute inset-0 rounded-md border border-blue"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </AnimatePresence>

                  <div className="relative z-10 flex items-center justify-between">
                    <span className="flex h-7 w-7 items-center justify-center rounded-xl border border-border bg-surface transition-colors duration-300 group-hover:border-blue/40">
                      <Icon
                        className={`h-4.5 w-4.5 transition-colors duration-300 ${
                          isActive ? "text-blue" : "text-muted-foreground"
                        }`}
                      />
                    </span>
                    <span
                      className={`font-mono text-[10px] tracking-[0.22em] transition-colors duration-300 ${
                        isActive ? "text-blue" : "text-subtle"
                      }`}
                    >
                      {step.id}
                    </span>
                  </div>

                  <div className="relative z-10 mt-4">
                    <h3 className="text-xs font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[9px] leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSteps;
