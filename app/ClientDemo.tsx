"use client";

import { useSearchParams } from "next/navigation";
import { getSiteConfig } from "@/lib/get-site-config";
import { ReactNode, useMemo } from "react";

export function ClientDemo({ children }: { children: (config: any) => ReactNode }) {
  const searchParams = useSearchParams();
  const demo = searchParams.get("demo");

  const siteConfig = useMemo(() => {
    return getSiteConfig({ demo: demo || undefined });
  }, [demo]);

  return <>{children(siteConfig)}</>;
}
