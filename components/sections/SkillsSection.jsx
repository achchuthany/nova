'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';

export default function SkillsSection() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch('/data/skills.json')
      .then(res => res.json())
      .then(data => setSkills(data.skills || []))
      .catch(err => console.error('Error loading skills:', err));
  }, []);

  return (
    <Section id="skills" className="bg-foreground/5">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold mb-4">Skills & Expertise</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A comprehensive toolkit spanning full-stack development, database architecture, and
            educational leadership
          </p>
        </div>

        <div className="space-y-12">
          {skills.map((category, categoryIndex) => (
            <div key={category.category}>
              <h3 className="text-2xl font-heading font-bold mb-6">{category.category}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-foreground/60">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-foreground/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
