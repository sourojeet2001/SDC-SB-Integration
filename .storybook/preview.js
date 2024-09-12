import Twig from 'twig';
import twigDrupal from 'twig-drupal-filters';

// Configure Twig with Drupal filters
function setupTwig(twig) {
  twig.cache(false); // Set to true for production to improve performance
  twigDrupal(twig);
  return twig;
}

// Set up Twig instance with Drupal filters
setupTwig(Twig);

// Export Storybook preview configuration
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      // Enable automatic documentation generation
      autodocs: true,
    },
  },

  decorators: [
    // Global decorator to wrap components
    (Story) => `<div class="storybook-wrapper">${Story()}</div>`,
  ],
};

export default preview;
