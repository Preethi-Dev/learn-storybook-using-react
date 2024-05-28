import WelcomeMessage from "./WelcomeMessage";

export default {
  title: "Localized/WelcomeMessage",
  component: <WelcomeMessage />,
};

export const Template = {
  render: (args) => (
    <h2>
      <WelcomeMessage {...args} />
    </h2>
  ),
};
