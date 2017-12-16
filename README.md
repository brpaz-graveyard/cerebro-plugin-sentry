# cerebro-plugin-sentry

[![Build Status](https://travis-ci.org/brpaz/cerebro-plugin-sentry.svg?branch=master)](https://travis-ci.org/brpaz/cerebro-plugin-sentry)

> Cerebro plugin for easy access to [Sentry](https://www.getsentry.com) projects.

![](demo.gif)

## Usage

To be able to use this plugin, we will need to have a [Sentry](https://www.getsentry.com) account and an "Auth token". You can generate one [here](https://sentry.io/api/new-token/).

After just configure the plugin with the generated token.

## Development

**Clone repo**

```
git clone https://github.com/brpaz/cerebro-plugin-sentry
```

**Install dependencies**

```
yarn install
```

**Launch the plugin**

```npm start```

- A symlink will be created between the plugin folder and the Cerebro plugins folder.
- You will need to reload your Cerebro settings (Right click on Cerebro tray icon -> Development -> Reload).
- You can use Cerebro Dev Tools to debug your plugin.

## Publish your plugin

- [Follow this instructions](https://github.com/KELiON/cerebro/blob/master/docs/plugins/share.md)

## Related

* [Cerebro](http://github.com/KELiON/cerebro) – Plugin extracted from core Cerebro app.
* [cerebro-plugin](http://github.com/KELiON/cerebro-plugin) – Boilerplate to create Cerebro plugins.
* [Cerebro Plugin docs](https://github.com/KELiON/cerebro/tree/master/docs) - Official Cerebro Plugins documentation.
