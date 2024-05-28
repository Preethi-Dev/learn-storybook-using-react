import Name from "./Name";

export default {
  component: Name,
  render: (args, { loaded: { userInfo } }) => <Name {...args} {...userInfo} />,
};

//single component story
export const NameDynamic = {
  name: "Name",
  loaders: [
    async () => ({
      userInfo: await (
        await fetch("https://jsonplaceholder.typicode.com/users/1")
      ).json(),
    }),
  ],
};
