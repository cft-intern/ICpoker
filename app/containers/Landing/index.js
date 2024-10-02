import React, { Fragment } from 'react';
import i18next from 'i18next';
import { Helmet } from 'react-helmet';
// import { Anshu } from '@/components';

function Landing() {
  return (
    <Fragment>
      <Helmet>
        <html lang={i18next.language} dir={i18next.dir(i18next.language)} />
      </Helmet>
      {/* <Anshu /> */}
      {/* <Welcome /> */}
    </Fragment>
  );
}

export default Landing;
