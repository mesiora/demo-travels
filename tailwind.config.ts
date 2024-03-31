import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
    },
    extend: {
      aspectRatio: {
        "4/3": "4 / 3",
      },
    },
  },
};
