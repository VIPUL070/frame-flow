import { useState } from "react";
import { Plus } from "lucide-react";
import FaqItem from "./FaqItem";
import Reveal from "../ui/Reveal";
import { FAQS } from "@/data/home";
import Button from "../ui/Button";

const INITIAL_VISIBLE = 6;

const FaqSection = () => {
  const [openId, setOpenId] = useState<string>(FAQS[0].id);
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? FAQS : FAQS.slice(0, INITIAL_VISIBLE);

  return (
    <section className="px-4 py-2">
      <div className="mx-auto max-w-sm rounded-2xl border border-border bg-panel p-5 ">
        <Reveal>
          <div className="mb-6 flex flex-col items-center text-center">
            <span className="mb-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-surface text-foreground">
              <Plus className="h-3.5 w-3.5" />
            </span>
            <h2 className="text-lg font-semibold tracking-tight text-foreground">
              Frequently asked{" "}
              <span className="text-lg font-semibold tracking-tight text-blue">questions</span>
            </h2>
            <p className="mt-1 text-[9px] text-muted-foreground">
              Everything you need to know about the product and billing.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="rounded-md bg-surface px-4">
            {visible.map((faq) => (
              <FaqItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() =>
                  setOpenId((prev) => (prev === faq.id ? "" : faq.id))
                }
              />
            ))}
          </div>
        </Reveal>

        {FAQS.length > INITIAL_VISIBLE && (
          <div className="mt-2.5 flex justify-center">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setShowAll((p) => !p)}
            >
              {showAll ? "Show less" : "Show more"}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FaqSection;