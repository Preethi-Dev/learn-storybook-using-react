import i18n from "../src/i18next";
import { Suspense, useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import { themes, ensure } from "@storybook/theming";
import { DocsContainer } from "@storybook/blocks";

i18n.on("languageChanged", (locale) => {
  let direction = i18n.dir(locale);
  document.dir = direction;
});

const withI18next = (Story, context) => {
  const { locale } = context.globals;
  console.log(context.globals);

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <Suspense fallback={<div>Loading translation...</div>}>
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    </Suspense>
  );
};

const globalTypes = {
  locale: {
    description: "internationalization local",
    toolbar: {
      title: "local",
      icon: "globe",
      items: [
        { value: "en", title: "English", right: "🇺🇸" },
        { value: "ar", title: "عرب", right: "🇸🇦" },
        { value: "tn", title: "தமிழ்", right: "🇮🇳" },
      ],
      dynamicTitle: true,
    },
  },
  viewPort: {
    toolbar: {
      title: "viewport",
      icon: "category",
      items: ["Mobile Br", "Desktop"],
      dynamicTitle: true,
    },
  },
};

/** @type { import('@storybook/react').Preview } */
const preview = {
  decorators: [withI18next],
  globalTypes,
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
