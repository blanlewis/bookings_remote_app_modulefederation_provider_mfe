import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: 'bookings_remote_app_modulefederation_provider_mfe',

  exposes: {
    './BookingsRemoteProviderComponent':
      './src/components/ProviderComponent.tsx',

    './BookingSummaryRemoteComponent':
      './src/components/BookingSummary/index.ts',
  },

  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },

  dts: false,
});
