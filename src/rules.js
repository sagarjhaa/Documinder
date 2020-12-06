const yaml = require('js-yaml')
const fs = require('fs')

function getRulesContent(rulesFilePath = './rules.yaml') {
  let rulesContents = fs.readFileSync(rulesFilePath, 'utf8');
  let rules = yaml.safeLoad(rulesContents);
  return rules.rules;
}

exports.getRulesContent = getRulesContent;