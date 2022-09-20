import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      //title={`${siteConfig.title}`}
      description="Custom Assetto Corsa server with focus on freeroam">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src="/img/logo.svg" height="100"></img>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg margin-right--md" to="docs/intro">
            Get Started
          </Link>
          <Link className="button button--secondary button--lg margin-right--md" href="https://github.com/compujuckel/AssettoServer/releases/latest">
            Download
          </Link> 
        </div>
      </div>
    </header>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
