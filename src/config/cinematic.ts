/**
 * Cinematic stills — config-layer image registry for the homepage.
 *
 * Sources are official Keen Games trailers on the Enshrouded YouTube channel
 * (video IDs + timestamps are recorded in src/assets/cinematic/CREDITS.md).
 * Stills are graded and cropped locally; game imagery remains © Keen Games
 * and is used here in an unofficial fan-guide context, credited on the page.
 *
 * Locale JSON references these by short key (`home.start.cards[].image`), so
 * copy stays in en.json while the processed assets stay typed and tree-shaken
 * through Astro's image pipeline.
 */
import type { ImageMetadata } from 'astro';
import heroRidge from '~/assets/cinematic/hero-ridge.jpg';
import cardCinders from '~/assets/cinematic/card-cinders.jpg';
import cardBuilds from '~/assets/cinematic/card-builds.jpg';
import cardBeginner from '~/assets/cinematic/card-beginner.jpg';
import cardSparkworks from '~/assets/cinematic/card-sparkworks.jpg';
import closingRider from '~/assets/cinematic/closing-rider.jpg';
import ogHome from '~/assets/cinematic/og-home.jpg';

export const cinematicArt = {
  hero: heroRidge,
  cinders: cardCinders,
  builds: cardBuilds,
  beginner: cardBeginner,
  sparkworks: cardSparkworks,
  closing: closingRider,
  og: ogHome,
} satisfies Record<string, ImageMetadata>;

export type CinematicArtKey = keyof typeof cinematicArt;

/** Resolve a JSON image key; unknown keys fall back to a designed gradient. */
export function getCinematicArt(key: string | undefined): ImageMetadata | undefined {
  if (!key || !(key in cinematicArt)) return undefined;
  return cinematicArt[key as CinematicArtKey];
}
