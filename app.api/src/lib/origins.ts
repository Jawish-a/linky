export const trustedOrigins =
  process.env.NODE_ENV === 'production'
    ? [
        'https://onelynk.sa',
        'https://www.onelynk.sa',
        'https://admin.onelynk.sa',
        'https://glow.as',
        'https://www.glow.as',
        'https://admin.glow.as',
      ]
    : [
        'http://localhost:3000',
        'http://localhost:3001',
        'http://localhost:3002',
        'http://localhost:3004',
      ];
