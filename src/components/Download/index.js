import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'اندروید',
    Svg: require('@site/static/img/android.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
    link: 'https://github.com/2dust/v2rayNG/releases/download/1.8.5/v2rayNG_1.8.5.apk'
  },
  {
    title: 'iOS',
    Svg: require('@site/static/img/IOS.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
    link: 'https://apps.apple.com/us/app/napsternetv/id1629465476'
  },
  {
    title: 'ویندوز',
    Svg: require('@site/static/img/Windows.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
    link: 'https://github.com/2dust/v2rayN/releases/download/6.23/v2rayN-With-Core.zip'
  },
  {
    title: 'لینوکس',
    Svg: require('@site/static/img/linux.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
    link: 'https://github.com/Matsuridayo/nekoray/releases'
  },
  {
    title: 'macOS',
    Svg: require('@site/static/img/mac-logo.svg').default,
    description: (
      <>
        Extend or customize  your website layout  by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
    link: 'https://apps.apple.com/us/app/v2box-v2ray-client/id6446814690'
  },
];

function Feature({Svg, title, link, description}) {
  return (
    <div className={clsx('col col--4')}>
      <a href={link}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      </a>
      <div className="text--center padding-horiz--md">
      <a href={link}>
        <h3>{title}</h3>
      </a>
        {/* <p>{description}</p> */}
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
