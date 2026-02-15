"use client";

import dynamic from "next/dynamic";
import { cardNavData } from "@/lib/data";

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
      <CardNav
        logo={cardNavData.logo}
        logoAlt={cardNavData.logoAlt}
        items={cardNavData.items}
        baseColor="#ffffff"
        menuColor="#1a1a2e"
        buttonBgColor="#1a1a2e"
        buttonTextColor="#ffffff"
      />
      <OpenToWorkModal />
    </>
  );
}
