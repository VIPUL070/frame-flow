import { motion } from "framer-motion";
import Reveal from "../ui/Reveal";
import { PERFORMANCE_FEATURES } from "../../data/home";
import { EASE } from "../../lib/animations";
import type { PerformanceFeatureData } from "../../types";

const FeatureVisual = ({ feature }: { feature: PerformanceFeatureData }) => {
  if (feature.visual === "model") {
    return (
      <div className="flex min-h-30 items-center justify-center">
        <motion.div
          animate={{ rotate: [-5, -2, -5], y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="aspect-video w-40 rounded-2xl border-2 border-blue bg-linear-to-br from-brand/10 via-transparent to-accent/10 shadow-[0_0_38px_rgba(255,59,63,0.12)]"
        />
      </div>
    );
  }

  if (feature.visual === "") {
    return (
     <></>
    );
  }

  return (
    <div className="flex min-h-30 items-center justify-center">
      <div className="relative aspect-video w-full max-w-xs overflow-hidden rounded-xl border border-border bg-surface">
        <motion.div
          animate={{ x: ["36%", "62%", "36%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-y-0 w-px bg-blue shadow-[0_0_18px_rgba(255,59,63,0.65)]"
        />
        <div className="absolute inset-y-0 left-0 w-1/2 bg-linear-to-r from-muted to-transparent blur-sm" />
        <div className="absolute inset-y-0 right-0 flex w-1/2 items-center justify-center">
          <span className="text-xl font-extrabold text-blue">
            4K ULTRA
          </span>
        </div>
      </div>
    </div>
  );
};

const PerformanceSection = () => {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <h2 className="text-xl font-semibold leading-tight text-foreground">
              Built for <span className="text-blue">Performance.</span>
            </h2>
            <p className="mt-3 text-[10px] leading-relaxed text-muted-foreground">
              Every feature is engineered to maximize your click-through rate:
              high-end AI, lightning-fast generation, and zero compromises.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-3 gap-3 pl-10 pr-10">
          {PERFORMANCE_FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            const isWide = feature.size === "wide";

            return (
              <Reveal
                key={feature.id}
                delay={index * 0.05}
                className={isWide ? "col-span-2" : ""}
              >
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3, ease: EASE }}
                  className={`group grid min-h-30 overflow-hidden rounded-2xl border border-border bg-panel p-5 shadow-card transition-colors duration-300 hover:border-blue/45 hover:bg-surface ${
                    isWide ? "grid-cols-[1fr_1fr] gap-6" : ""
                  }`}
                >
                  <div className="flex flex-col justify-center">
                    <span
                      className={`mb-7 flex h-9 w-9 items-center justify-center rounded-md border group-hover:bg-blue group-hover:text-offwhite ${
                        feature.highlighted
                          ? "border-blue bg-blue text-white"
                          : "border-border bg-surface text-foreground"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-sm font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-4 max-w-sm text-[10px] leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>

                  <FeatureVisual feature={feature} />
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;
