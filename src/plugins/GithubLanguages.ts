import { organisation } from './GithubStats';
export default class GithubLanguages {
  static languageRequestUrl =
    'https://api.github.com/repos/{ORGANISATION}/{REPO}/languages';

  static languageRequests: Promise<Response>[] = [];

  /**
   * Make a request to get the languages from the repo.
   * @param repo - A Github repo name. Exemple 'https://github.com/clubcapra/ovis', 'ovis' is the repo.
   */
  public static addLanguagesFromRepo(repo: string) {
    this.languageRequests[this.languageRequests.length] = fetch(
      this.languageRequestUrl
        .replace('{ORGANISATION}', organisation)
        .replace('{REPO}', repo)
    );
  }

  public static async getLanguagesDictionnary() {
    const languagesDictionnaryPromises: Promise<any[]>[] = [];
    let allReqestAreFulfilled = true;
    const totalLanguagesDictionnary: { [x: string]: number } = {};

    // Check status and convert response to object
    const languageResponses = await Promise.all(this.languageRequests);
    languageResponses.forEach(languageResponse => {
      if (languageResponse.ok) {
        languagesDictionnaryPromises[languagesDictionnaryPromises.length] =
          languageResponse.json();
      } else {
        allReqestAreFulfilled = false;
        console.error(
          `code ${languageResponse.status} on the request to ${languageResponse.url}.`
        );
      }
    });
    // If all response are ok, retrun the treated response, else return a previous result.
    if (allReqestAreFulfilled) {
      const languagesDictionnarys = await Promise.all(
        languagesDictionnaryPromises
      );

      // Sum all languages bytes into the totalLanguagesDictionnary
      for (const languagesDictionnary of languagesDictionnarys) {
        if (languagesDictionnary != undefined) {
          for (const language in languagesDictionnary) {
            if (languagesDictionnary[language] != undefined) {
              if (totalLanguagesDictionnary[language] == undefined) {
                totalLanguagesDictionnary[language] =
                  languagesDictionnary[language];
              } else {
                totalLanguagesDictionnary[language] +=
                  languagesDictionnary[language];
              }
            }
          }
        }
      }

      return totalLanguagesDictionnary;
    } else {
      console.error('using 2023-10-08 language stats');
      return {
        C: 136637,
        'C++': 3739231,
        CMake: 43155,
        CSS: 394,
        HTML: 2173,
        JavaScript: 2504,
        PowerShell: 657,
        SCSS: 555,
        Shell: 363,
        TypeScript: 221062,
        Vue: 55377,
      };
    }
  }

  public static async getLanguagesArray() {
    const languageArray = [];
    let totalBytes = 0;
    let index = 0;
    const languagesDictionnary = await this.getLanguagesDictionnary();

    // sum total bytes
    for (const language in languagesDictionnary) {
      if (language != undefined) {
        totalBytes += languagesDictionnary[language];
      }
    }

    for (const language in languagesDictionnary) {
      if (language != undefined) {
        languageArray[index++] = {
          name: language,
          bytes: languagesDictionnary[language],
          percent: Math.round(
            (languagesDictionnary[language] / totalBytes) * 100
          ),
        };
      }
    }

    return languageArray;
  }
}
