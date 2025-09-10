'use client';
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { motion } from 'framer-motion';

type SectionProps = {
  id: string;
  className?: string;
  children: ReactNode;
};

export function Section({ id, className, children }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={cn("py-6 border-b last-of-type:border-b-0", className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="px-0">{children}</div>
    </motion.section>
  );
}
