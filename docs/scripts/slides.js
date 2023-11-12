import { SfeirThemeInitializer } from '../web_modules/sfeir-school-theme/sfeir-school-theme.mjs';

// One method per module
function schoolSlides() {
  return ['school/XX-all.md'];
}

function introSlides() {
  return ['intro/00-TITLE.md', 'intro/01-SPEAKER-TINE-KONDO.md'];
}

function formation() {
  return [
    //
    ...introSlides(), //
    ...schoolSlides(), //
  ].map(slidePath => {
    return { path: slidePath };
  });
}

SfeirThemeInitializer.init(formation);
