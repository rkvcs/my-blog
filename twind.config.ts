import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    colors: {
      violet: {
        500: '#6366f1',
        800: '#3730a3'
      },
      gray: {
        500: '#6b7280'
      },
      white: '#FFFFFF'
    }
  }
} as Options;
