HOW TO RUN:

npm install

TEST RUN DEVICE OPTIONS:

HEADED RUN:

HEADED+DESKTOP+CHROME: npm run test:dev:desktop:chrome tests/myTests.spec.ts -- --headed
HEADED+DESKTOP+FIREFOX: npm run test:dev:desktop:firefox tests/myTests.spec.ts -- --headed
HEADED+DESKTOP+SAFARI: npm run test:dev:desktop:safari tests/myTests.spec.ts -- --headed
HEADED+MOBILE+CHROME npm run test:dev:mobile:chrome tests/myTests.spec.ts -- --headed
HEADED+MOBILE+FIREFOX npm run test:dev:mobile:firefox tests/myTests.spec.ts -- --headed
HEADED+MOBILE+SAFARI npm run test:dev:mobile:safari tests/myTests.spec.ts -- --headed

HEADLESS RUN:

HEADLESS+DESKTOP+CHROME: npm run test:dev:desktop:chrome tests/myTests.spec.ts
HEADLESS+DESKTOP+FIREFOX: npm run test:dev:desktop:firefox tests/myTests.spec.ts
HEADLESS+DESKTOP+SAFARI: npm run test:dev:desktop:firefox tests/myTests.spec.ts
HEADLESS+MOBILE+CHROME npm run test:dev:mobile:chrome tests/myTests.spec.ts
HEADLESS+MOBILE+FIREFOX npm run test:dev:mobile:firefox tests/myTests.spec.ts
HEADLESS+MOBILE+SAFARI npm run test:dev:mobile:firefox tests/myTests.spec.ts
