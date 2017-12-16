
const PLUGIN_NAME = 'Sentry';
const PLUGIN_KEYWORD = 'sentry';
const PLUGIN_REGEX = /sentry(.*)/;

const icon = require('../assets/icon.png');
const SentryClient = require('./SentryClient');

const sentry = new SentryClient();

const plugin = ({ term, display, hide, settings, actions }) => {
  const match = term.match(PLUGIN_REGEX);

  if (match) {

    sentry.setAuthToken(settings.authToken);

    let results = [];
    const filter = match[1].trim();

    display({
      id: 'loading',
      title: 'Loading data',
      icon: icon
    });

    sentry.getProjects().then((projects) => {
      hide('loading');

      if (projects.length === 0) {
        display({
          title: 'No Apps found for the configured Heroku Account',
          icon: icon
        });
        return;
      }

      if (filter) {
        // eslint-disable-next-line no-param-reassign
        projects = projects.filter((item) => {
          return item.name.toLowerCase().startsWith(filter.toLowerCase());
        });
      }

      results = projects.map((project) => {
        return {
          id: project.id,
          title: `${project.organization.slug}/${project.name}`,
          subtitle: project.platform,
          icon: icon,
          onSelect: () => {
            actions.open(`https://sentry.io/${project.organization.slug}/${project.slug}`)
          }
        };
      });


      display(results);

    }).catch((err) => {
      hide('loading');
      display({
        title: 'Error',
        subtitle: err.message,
        icon: icon
      });
    });
  }
};

module.exports = {
  fn: plugin,
  name: PLUGIN_NAME,
  keyword: PLUGIN_KEYWORD,
  icon: icon,
  settings: {
    authToken: { type: 'string' }
  }
};
