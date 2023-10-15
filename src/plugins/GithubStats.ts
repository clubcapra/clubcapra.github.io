export const organisation = 'clubcapra';
import GithubLanguages from "./GithubLanguages";

GithubLanguages.addLanguagesFromRepo('clubcapra.github.io');
GithubLanguages.addLanguagesFromRepo('capra_web_ui');
GithubLanguages.addLanguagesFromRepo('markhor');
GithubLanguages.addLanguagesFromRepo('ovis');
GithubLanguages.addLanguagesFromRepo('test');


let languagesArray = await GithubLanguages.getLanguagesArray();

// Sort by percent desc
languagesArray.sort((a, b) => {
  return a.percent - b.percent;
});
languagesArray.reverse();
// Remove not significant languages
languagesArray = languagesArray.filter(language => {
  return language.percent != 0;
});

export default {
  codeLanguages: languagesArray,
};