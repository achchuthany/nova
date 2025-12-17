"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";

/**
 * Simple skills section with categorized badges
 * Shows only the requested categories/items in a clean grid layout
 */
export default function SkillsSection() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    let mounted = true;
    fetch("/data/skills.json")
      .then((res) => res.json())
      .then((data) => {
        if (mounted) setSkills(data?.skills ?? []);
      })
      .catch((err) => console.error("Error loading skills:", err));
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Section id="skills" className="bg-foreground/5">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight">
            Skills
          </h2>
          <p className="mt-3 text-foreground/70 max-w-xl mx-auto">
            A concise snapshot of core capabilities.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {skills.map((group, idx) => (
            <motion.section
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              viewport={{ once: true, margin: "-60px" }}
              aria-labelledby={`skills-${idx}`}
              className="rounded-2xl border border-foreground/10 bg-background/70 backdrop-blur-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3
                id={`skills-${idx}`}
                className="text-lg md:text-xl font-heading font-semibold mb-5"
              >
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <Badge
                    key={item.name}
                    className="whitespace-nowrap bg-foreground/5 text-foreground/90 border border-foreground/10 hover:bg-foreground/10 transition-colors"
                    aria-label={item.name}
                  >
                    {item.name}
                  </Badge>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </Container>
    </Section>
  );
}
