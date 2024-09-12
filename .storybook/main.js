// import { configure } from '@storybook/html';
// import Twig from 'twig';
// import twigDrupal from 'twig-drupal-filters';
// // Add the filters to Twig instance.
// twigDrupal(Twig);

// configure(require.context('../web/**/components', true, /\.stories\.js$/), module);

// const config = {
//   stories: ["../web/**/*.stories.@(js|json|yaml|yml)"],

//   addons: [
//     "@storybook/addon-links",
//     "@storybook/addon-essentials",
//     "@chromatic-com/storybook",
//   ],

//   framework: {
//     name: "@storybook/html-webpack5",
//     options: {},
//   },
//   webpackFinal: async (config) => {
//     config.module.rules.push({
//       test: /\.twig$/,
//       use: [
//         {
//           loader: 'twig-loader',
//         },
//       ],
//     });
//     return config;
//   },
//   docs: {}
// };
// export default config;



const config = {
  stories: ["../components/**/*.stories.@(js|mdx|yaml|yml)"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
  ],

  framework: '@storybook/html-webpack5',

  // Commented out webpackFinal for debugging purposes
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.twig$/,
      use: [
        {
          loader: 'twig-loader',
        },
      ],
    });
    return config;
  },

  docs: {
    autodocs: true,
  },
};

export default config;

