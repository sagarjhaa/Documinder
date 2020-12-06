// index.js file to do the actual work

// get the PR files
// compare the files
// slack message to intimate if we need an update
// mail if we need to alert

const core = require('@actions/core')

// action file information: https://docs.github.com/en/free-pro-team@latest/actions/creating-actions/metadata-syntax-for-github-actions
function main() {
  try {
    const pr = core.getInput("pr", { required: true })
    const rules = core.getInput("rules", { required: true })

    console.log(`received pr - ${pr} and rules - ${rules}`)

  } catch (error) {
    console.log(`error occured ${error}`);
  }
}

main();