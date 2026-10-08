(function () {
  const powerUp = window.TrelloPowerUp;
  if (!powerUp) return;
  const icon = `${location.origin}${location.pathname.replace(/[^/]*$/, '')}assets/calendarflow-icon.svg`;
  powerUp.initialize({
    'board-buttons': function (t) {
      return [{
        text: 'Printable Calendar',
        icon: { dark: icon, light: icon },
        callback: function (ctx) {
          return ctx.modal({ title: 'CalendarFlow — Printable Calendar', url: './planner.html', height: 750, fullscreen: true });
        }
      }];
    },
    'on-enable': function (t) {
      return t.modal({ title: 'CalendarFlow', url: './onboarding.html', height: 500 });
    },
    'show-settings': function (t) {
      return t.popup({ title: 'CalendarFlow Settings', url: './settings.html', height: 245 });
    }
  });
}());
