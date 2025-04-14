
const config = {
  API_URL: "https://192.168.137.1:8000",

  defaults: {
    enabled: true,
    debugMode: false
  },

  platforms: {
    CHATGPT: "chatgpt.com",
    GEMINI: "gemini.google.com",
    GROK: "grok.com"
  }
};

Object.freeze(config);