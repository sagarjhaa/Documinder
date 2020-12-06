// index.js file to do the actual work

// get the PR files
// compare the files
// slack message to intimate if we need an update
// mail if we need to alert

const core = require('@actions/core');
const github = require('@actions/github');
const { GITHUB_TOKEN, GITHUB_REPOSITORY, GITHUB_ACTOR } = process.env;

// action file information: https://docs.github.com/en/free-pro-team@latest/actions/creating-actions/metadata-syntax-for-github-actions
async function main() {
  try {
    const github_token = GITHUB_TOKEN;
    const repo = GITHUB_REPOSITORY.split("/")[1];
    const owner = GITHUB_ACTOR;
    const octokit = github.getOctokit(github_token);
    const context = github.context;
    const pull_number = context.payload.pull_request.number;

    console.log(`Analyse PR ${pull_number} for repo ${repo}`)

    const pull_request_files = await octokit.pulls.listFiles({
      owner: owner,
      repo: repo,
      pull_number: pull_number,
    });

    console.log("data", pull_request_files.data);

    for (item in pull_request_files.data) {
      console.log("item", item);
      console.log("filename", item.filename);
    }

  } catch (error) {
    console.log(`error occured ${error}`);
  }
}

main();