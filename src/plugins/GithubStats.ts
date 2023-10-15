export const organisation = 'clubcapra';
import GithubLanguages from './GithubLanguages';
import type { Language } from './GithubLanguages';

interface GithubStats {
  codeLanguages: Language[];
}

// Languages
GithubLanguages.addLanguagesFromRepo('clubcapra.github.io');
GithubLanguages.addLanguagesFromRepo('capra_web_ui');
GithubLanguages.addLanguagesFromRepo('markhor');
GithubLanguages.addLanguagesFromRepo('ovis');
GithubLanguages.addLanguagesFromRepo('test'); // this repo doesn't exist, it was added to test a case of internet outage or a repo deletion

let languagesArray: Language[] = await GithubLanguages.getLanguagesArray();

// Sort by percent desc
languagesArray.sort((a, b) => {
  return a.percent - b.percent;
});
languagesArray.reverse();
// Remove not significant languages
languagesArray = languagesArray.filter(language => {
  return language.percent != 0;
});

// Export
const githubStats: GithubStats = {
  codeLanguages: languagesArray,
};
export default githubStats;
