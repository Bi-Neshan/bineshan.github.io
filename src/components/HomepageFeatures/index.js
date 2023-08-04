import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'پایداری و سرعت بالا',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        سرویس بی‌نشان تلاش می‌کند بالاترین پایداری و سرعت در ارتباط را فراهم کند.
      </>
    ),
  },
  {
    title: 'حریم خصوصی',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        تلاش می‌کنیم حریم خصوصی تمام کاربران در سرویس بی‌نشان حفظ شود.
      </>
    ),
  },
  {
    title: 'پشتیبانی تا آخرین روز',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        سرویس بی‌نشان با تیم پشتیبانی قوی مشکلات فنی را در کوتاه‌ترین زمان رفع می‌کند.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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
