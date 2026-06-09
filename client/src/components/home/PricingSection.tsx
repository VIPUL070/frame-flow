import { useState } from "react";
import { Check, Star, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "../ui/Reveal";
import Button from "../ui/Button";
import { PRICING_PLANS } from "../../data/home";
import { EASE } from "../../lib/animations";

type BillingCycle = "monthly" | "yearly";

const PricingSection = () => {
  const [billing, setBilling] = useState<BillingCycle>("monthly");

  return (
    <section className="px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-xl font-semibold leading-tight text-foreground">
              Clear, <span className="text-blue">Transparent</span> Pricing.
            </h2>
            <p className="mt-3 text-[10px] leading-relaxed text-muted-foreground">
              Start free, upgrade when you need more, and keep your workflow
              moving without surprises.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mx-auto mt-4 flex w-fit rounded-pill border border-border bg-panel p-1 shadow-tab">
            {(["monthly", "yearly"] as BillingCycle[]).map((cycle) => {
              const isActive = billing === cycle;

              return (
                <button
                  key={cycle}
                  type="button"
                  onClick={() => setBilling(cycle)}
                  className={`relative flex min-w-10 items-center justify-center rounded-pill px-1 py-1 text-[8px] transition-colors ${
                    isActive ? "text-white" : "text-muted-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="billing-active-pill"
                      className="absolute inset-0 rounded-pill bg-blue"
                      transition={{ duration: 0.28, ease: EASE }}
                    />
                  )}
                  <span className="relative z-10 capitalize">{cycle}</span>
                  {cycle === "yearly" && (
                    <span className="relative z-10 ml-2 rounded-pill bg-black px-1 py-0.5 text-[7px] text-offwhite">
                      -20%
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-3 gap-1.5 pl-10 pr-10">
          {PRICING_PLANS.map((plan, index) => {
            const price =
              billing === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;

            return (
              <Reveal key={plan.id} delay={index * 0.06}>
                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: EASE }}
                  className={`relative flex min-h-76 max-w-55 flex-col rounded-xl border bg-panel p-4 shadow-card transition-colors duration-300 ${
                    plan.featured
                      ? "border-blue shadow-[0_0_0_1px_rgba(255,59,63,0.22),0_22px_60px_-34px_rgba(255,59,63,0.9)]"
                      : "border-border hover:border-blue/35"
                  }`}
                >
                  {plan.featured && (
                    <div className="absolute left-1/2 top-0 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 rounded-pill bg-blue px-3 py-1 text-[10px] font-semibold text-white shadow-tab">
                      <Star className="h-3 w-3 fill-current" />
                      Most Popular
                    </div>
                  )}

                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      {plan.name}
                    </h3>
                    <p className="text-[9px] text-muted-foreground">
                      {plan.description}
                    </p>

                    <div className="mt-5 flex items-end gap-1">
                      <span className="text-4xl font-semibold tracking-tight text-foreground">
                        ${price}
                      </span>
                      <span className="pb-2 text-[9px] font-medium text-muted-foreground">
                        {plan.priceSuffix}
                      </span>
                    </div>
                  </div>

                  <Button
                    fullWidth
                    size="md"
                    variant={plan.featured ? "primary" : "secondary"}
                    leftIcon={plan.featured ? <Zap className="h-3 w-3" /> : undefined}
                    className="mt-6"
                  >
                    {plan.cta}
                  </Button>

                  <ul className="mt-6 flex flex-col gap-1.5 text-[9px] text-muted-foreground">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-3 w-3 shrink-0 text-foreground" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
