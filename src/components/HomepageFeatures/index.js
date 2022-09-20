import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'AI Traffic',
    description: (
      <>
        Bring freeroam maps to life with highly configurable AI Traffic.
      </>
    ),
  },
  {
    title: 'Dynamic Weather',
    description: (
      <>
        Together with <Link to="https://acstuff.ru/patch/">Custom Shaders Patch</Link> AssettoServer delivers dynamic weather, including smooth weather transitions and rain.
      </>
    ),
  },
  {
    title: 'Open Source',
    description: (
      <>
        AssettoServer is released under the GNU Affero General Public License and is easily extensible with plugins.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
       
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
