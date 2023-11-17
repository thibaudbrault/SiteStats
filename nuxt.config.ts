export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    shim: false,
  },
  modules: ["@nuxtjs/tailwindcss"],
  hooks: {
    "components:dirs": (dirs) => {
      dirs.unshift({
        path: "~/components/ui",
        extensions: [".vue"],
        prefix: "Ui",
        pathPrefix: false,
      });
    },
  },
});
