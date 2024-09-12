// import './button.css'
// import twigButton from "./button.twig";
// export default {
//   title: 'SDCTest/Button',
//   args: {
//     link: 'https://example.org',
//     text: 'Click me!',
//     buttonclass: 'button-primary',
//   },
//   argTypes: {
//     link: {
//       name: 'Link',
//       type: 'string',
//       description: 'The URL the button will link to',
//       control: 'text',
//       table: {
//         category: 'Props',
//         type: { summary: 'string' },
//       },
//     },
//     text: {
//       name: 'Text',
//       type: 'string',
//       description: 'The text displayed inside the button',
//       control: 'text',
//       table: {
//         category: 'Props',
//         type: { summary: 'string' },
//       },
//     },
//     buttonclass: {
//       name: 'Class',
//       type: 'string',
//       description: 'CSS class for styling the button',
//       options: ['button-primary', 'button-secondary'],
//       control: { type: 'select' },
//       table: {
//         category: 'Props',
//         type: { summary: 'string' },
//       },
//     },
//   },
// };

// const Template = ({ link, text, buttonclass }) =>
//   twigButton({
//     link,
//     text,
//     buttonclass,
//   });

// // Stories
// export const Primary = Template.bind({});
// Primary.args = {
//   buttonclass: 'button-primary',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   buttonclass: 'button-secondary',
// };

// export const Large = Template.bind({});
// Large.args = {
//   buttonclass: 'button-primary',
//   text: 'Large Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   buttonclass: 'button-primary',
//   text: 'Small Button',
// };



import './button.css';
import twigButton from './button.twig';

export default {
  title: 'SDCTest/Button',
  args: {
    link: 'https://example.org',
    text: 'Click me!',
    buttonclass: 'button-primary',
  },
  argTypes: {
    link: {
      name: 'Link',
      type: 'string',
      description: 'The URL the button will link to',
      control: 'text',
      table: {
        category: 'Props',
        type: { summary: 'string' },
      },
    },
    text: {
      name: 'Text',
      type: 'string',
      description: 'The text displayed inside the button',
      control: 'text',
      table: {
        category: 'Props',
        type: { summary: 'string' },
      },
    },
    buttonclass: {
      name: 'Class',
      type: 'string',
      description: 'CSS class for styling the button',
      options: ['button-primary', 'button-secondary'],
      control: { type: 'select' },
      table: {
        category: 'Props',
        type: { summary: 'string' },
      },
    },
  },
};

const Template = (args) => twigButton(args);

// Stories
export const Primary = Template.bind({});
Primary.args = {
  buttonclass: 'button-primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  buttonclass: 'button-secondary',
};

export const Large = Template.bind({});
Large.args = {
  buttonclass: 'button-primary',
  text: 'Large Button',
};

export const Small = Template.bind({});
Small.args = {
  buttonclass: 'button-primary',
  text: 'Small Button',
};
