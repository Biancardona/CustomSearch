import axios from "axios";
import GoogleAPI from "../config/google";

export const search = ({
  query,
  orTerms = [],
  excludeTerms = [],
  exactTerms = [],
}) => {
  return axios.get(
    `https://www.googleapis.com/customsearch/v1?key=${GoogleAPI.key}&cx=${GoogleAPI.cx}&q=${query}&orTerms="${orTerms}"&excludeTerms="${excludeTerms}"&exactTerms="${exactTerms}"`
  );
};
