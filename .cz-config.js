'use strict';

module.exports = {
  allowBreakingChanges: [],
  allowCustomScopes: true,
  // TODO: Update this config with your own needs
  scopes: [
    'config',
    'design',
    'data',
    'testing',
    'other',
    '*'
  ],
  types: [
    {value: 'feat',        name: 'feat:       🌟   A new feature.'},
    {value: 'fix',         name: 'fix:        🐞   A bug fix.'},
    {value: 'refactor',    name: 'refactor:   💪   A code change that neither fixes a bug nor adds a feature like cleanup.'},
    {value: 'docs',        name: 'docs:       📚   Documentation only changes.'},
    {value: 'test',        name: 'test:       ✅   Adding missing tests'},
    {value: 'ci',          name: 'ci:         🚦   Adding missing tests'},
    {value: 'build',       name: 'build:      🔩   Changes to the build process or auxiliary tools\n                  and libraries such as documentation generation.'},
    {value: 'revert',      name: 'revert:     ⏪   Revert to a commit.'},
    {value: 'style',       name: 'style:      🎨   A modification of style.'},
    {value: 'perf',        name: 'perf:       🏎   Improve performances'}
  ]
};
