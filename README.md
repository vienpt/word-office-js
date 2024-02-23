# Office Add-in React Vite Template

This is a template for developing an [Office.JS](https://learn.microsoft.com/en-us/office/dev/add-ins/) add-in with **Vite** and **React 18**. The main advantage of using this template is a much faster development cycle. The development server starts in just 2-3 seconds and hot-reloaded changes are near instant.

## Key differences

This template was generated using the [generator-office](https://www.npmjs.com/package/generator-office) generator which is based on the [Office-Addin-Taskpane-React](https://github.com/OfficeDev/Office-Addin-TaskPane-React) project.

These are the key differences between this template and the default generated template:

- Use Vite instead of Webpack.
- Use React 18.
- Remove polyfills and support for IE 11.
- Enabled typescript strict mode

## Usage

To start the development server, run:

```
npm run dev
```

To load the add-in in your Word, use any of the `start` scripts. e.g:

```
npm run start
```

To create a production build, run:

```
npm run build
```

## Documents

- Fluent UI components: https://react.fluentui.dev/?path=/docs/concepts-introduction--page
- Word API: https://learn.microsoft.com/en-us/javascript/api/word/word.commentcollection?view=word-js-preview
- Some third-party libraries like `office-js-helper` or `office-js-addin-ui` offer helper functions for accessing comments in Word documents.

### Reacts

- React ts cheatsheet: https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components
- React18: https://react.dev/

## Legacy Browsers

This template does not include support for IE11. If you need support, add [@vitejs/plugin-legacy](https://github.com/vitejs/vite/tree/main/packages/plugin-legacy).
