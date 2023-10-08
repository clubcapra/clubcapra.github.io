const requestUrl =
  'https://api.github.com/repos/{ORGANISATION}/{REPO}/languages';
const organisation = 'clubcapra';

const codeLanguages: never[] = [];
let totalBytes = 0;

/**
 * Fetch the Github API for the languages of a specific repo
 * @param repo A repo from the spcified organisation
 * @returns A dictionnary of languages with their bites
 */
async function getLanguagesFromRepo(repo: string) {
  const languagesResponse = await (
    await fetch(
      requestUrl.replace('{ORGANISATION}', organisation).replace('{REPO}', repo)
    )
  ).json();
  return languagesResponse;
}

function addLanguages(languages: { [x: string]: any }) {
  for (const language in languages) {
    if (languages[language] != undefined) {
      if (codeLanguages[language] == undefined) {
        codeLanguages[language] = languages[language];
      } else {
        codeLanguages[language] += languages[language];
      }
      totalBytes += languages[language];
    }
  }
}

function setPurcentageAndToArray() {
  const languagesArray = [];
  let index = 0;
  for (const codeLanguage in codeLanguages) {
    if (codeLanguage != undefined) {
      languagesArray[index++] = {
        name: codeLanguage,
        percent: Math.round((codeLanguages[codeLanguage] / totalBytes) * 100),
      };
    }
  }
  return languagesArray;
}

addLanguages(await getLanguagesFromRepo('clubcapra.github.io'));
addLanguages(await getLanguagesFromRepo('capra_web_ui'));
addLanguages(await getLanguagesFromRepo('markhor'));
addLanguages(await getLanguagesFromRepo('ovis'));

let languagesArray = setPurcentageAndToArray();

languagesArray.sort((a, b) => {
  return a.percent - b.percent;
});
languagesArray.reverse();
languagesArray = languagesArray.filter((language) => {
    return language.percent != 0;
})

export default languagesArray;
