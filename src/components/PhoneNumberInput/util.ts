import * as de from "react-phone-number-input/locale/de.json";
// import * as de from "./countries.json";

export const getCountry = (key: keyof typeof de) => de[key];
