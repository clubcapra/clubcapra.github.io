type Language = {
  name: string;
  percent: number;
};

export class GithubStats {
  /**
   * Fetch the stats from the json file
   */
  public async fetchStats(): Promise<Record<string, number>[]> {
    const data = await import('@clubcapra/assets/GithubStats.json', {
      assert: { type: 'json' },
    });
    return data.default as unknown as Record<string, number>[];
  }

  /**
   * Merge all the stats into one
   */
  public mergeStats(
    githubstats: Record<string, number>[]
  ): Record<string, number> {
    const languages: Record<string, number> = {};

    // Sum all languages bytes into the totalLanguagesDictionnary
    for (const stats of Object.entries(githubstats)) {
      for (const [key, value] of Object.entries(
        stats[1] as unknown as Record<string, number>
      )) {
        if (!languages[key]) {
          languages[key] = value;
        } else {
          languages[key] += value;
        }
      }
    }

    return languages;
  }

  /**
   * Parse the stats into a more readable format
   */
  public parseStats(stats: Record<string, number>): Language[] {
    const total = Object.values(stats).reduce((a, b) => a + b, 0);
    const languages: Language[] = [];

    for (const [key, value] of Object.entries(stats)) {
      languages.push({
        name: key,
        percent: Math.round((value / total) * 100),
      });
    }

    return languages;
  }
}
