import { siteConfig as defaultConfig } from "@/site.config";
import { demoConfigs } from "@/demo-configs";

/**
 * Get site configuration based on demo parameter
 *
 * Usage: const config = getSiteConfig(searchParams);
 */
export function getSiteConfig(searchParams?: { demo?: string }) {
  const demoKey = searchParams?.demo;

  if (demoKey && demoConfigs[demoKey]) {
    // Merge demo config with default config
    const demoData = demoConfigs[demoKey];
    return {
      ...defaultConfig,
      business: demoData.business,
      serviceAreas: demoData.serviceAreas,
      seo: { ...defaultConfig.seo, ...demoData.seo },
      about: { ...defaultConfig.about, ...demoData.about },
      services: defaultConfig.services,
      social: defaultConfig.social,
      cta: defaultConfig.cta,
      googleMapsEmbed: defaultConfig.googleMapsEmbed,
    };
  }

  // Return default config if no demo specified
  return defaultConfig;
}
