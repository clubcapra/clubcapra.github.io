#!/bin/bash
if [ $# -eq 0 ]; then
    echo "Usage: ./githubStats.sh <repo1> [<repo2> ... <repoN>]"
    exit 1
fi

result=$(curl -s "https://api.github.com/repos/clubcapra/$1/languages")
shift
for repo in $@; do
    r=$(curl -s "https://api.github.com/repos/clubcapra/$repo/languages")
    result="$result, $r"
done
echo "[$result]" | jq
