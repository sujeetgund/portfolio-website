"use client";

import dynamic from "next/dynamic";

const CardNav = dynamic(() => import("@/components/CardNav"), { ssr: false });
const OpenToWorkModal = dynamic(
  () =>
    import("@/components/open-to-work-modal").then(
      (mod) => mod.OpenToWorkModal,
    ),
  { ssr: false },
);

export function HomeClientShell() {
  return (
    <>
      <CardNav />
      <OpenToWorkModal />
    </>
  );
}
