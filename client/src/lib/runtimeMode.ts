import type { ConfiguredTruthMode } from '@shared/contracts/core';

/**
 * Source honesty is the production default. An absent, misspelled or unsupported
 * VITE_HOSTGRAPH_MODE must never silently enable a synthetic restaurant fleet.
 * Fixture data is available only through explicit DEMO configuration.
 */
export function resolveConfiguredMode(rawMode?: string): ConfiguredTruthMode {
  return rawMode === 'DEMO' ? 'DEMO' : 'LIVE';
}

export const configuredHostGraphMode = resolveConfiguredMode(import.meta.env.VITE_HOSTGRAPH_MODE);
