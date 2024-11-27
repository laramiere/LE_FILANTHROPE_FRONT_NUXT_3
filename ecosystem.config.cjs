module.exports = {
  apps: [
    {
      name: 'lefilanthrope-front',
      port: '3000',
      exec_mode: 'cluster',
      instances: 'max',
      script: '.output/server/index.mjs',
      env: {
        NODE_ENV: 'production',
        STRAPI_URL: 'https://api.lefilanthrope.fr',
        NUXT_PUBLIC_API_BASE_URL: 'https://api.lefilanthrope.fr',
        NUXT_PUBLIC_STADIAMAPS_API_KEY: '37f5e78a-cd8d-4a6c-bc8c-8ae249e2eaf1',
        NUXT_SITE_URL: 'https://preprod.lefilanthrope.fr',
        NUXT_SITE_NAME: 'Le filanthrope',
        NUXT_SITE_ENV: 'production',
      },
    },
  ],
}
