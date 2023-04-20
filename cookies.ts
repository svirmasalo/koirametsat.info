export default {
  necessary: [
    {
      description: {
        en: "Käytetään sivuston toiminnallisuuteen, kuten evästeiden hallintaan.",
      },
      id: "functional",
      name: {
        en: "Funktioevästeet",
      },
    },
  ],
  optional: [
    {
      description: {
        en: "Käytetään Googlen evästeisiin, kuten sivustoanalytiikkaan ja mainontaan",
      },
      id: "GA",
      name: {
        en: "Google Analytics",
      },
      targetCookieIds: ["_ga","_ga_*", "_gat", "_gid", "_ga_SGGLG5CHY1"],
    },
    {
      description: {
        en: "Käytetään Googlen hakukone- ja display mainosten kodhistamiseen sivuston vierailijoille",
      },
      id: "AW",
      name: {
        en: "Google Adwrords",
      },
      targetCookieIds: ["_gcl", "_gcl_au"],
    },
    {
      description: {
        en: "Käytetään Metan (Facebookin ja Instagram) mainonnan kohdistamiseen.",
      },
      id: "META",
      name: {
        en: "Meta",
      },
      targetCookieIds: ["_fbp"],
    },
    {
      description: {
        en: "Käytetään koirametsien kommentointiin / arvosteluun.",
      },
      id: "COM",
      name: {
        en: "Kommentointi / arvostelu",
      },
      targetCookieIds: ["_kmcom", "_kmcom_consent"],
    },
  ],
};
