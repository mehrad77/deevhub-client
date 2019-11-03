// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
module.exports = {
  require: [path.join(__dirname, 'src/styleguide/styles.css')],
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styleguide/RouterWrapper'),
  },
  pagePerSection: true,
  skipComponentsWithoutExample: true,
  sections: [
    {
      name: 'Components',
      content: 'src/styleguide/introduction.md',
      components: ['src/components/**/index.{ts,tsx}'],
    },
  ],
};
