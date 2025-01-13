import { BiMoney, BiUserCircle, BiLogoGithub } from 'react-icons/bi/index';
import { BsSoundwave, BsStars } from 'react-icons/bs/index';
import { RxMixerHorizontal } from 'react-icons/rx/index';

import { Balancer } from 'react-wrap-balancer';

import { Container } from '@/components/container';
import { count as soundCount } from '@/lib/sounds';

import styles from './features.module.css';

export function Features() {
  const count = soundCount();

  const features = [
    {
      Icon: BiMoney,
      body: '无需花一分钱即可沉浸在声音之中。',
      id: 'free-access',
      label: '免费',
    },
    {
      Icon: BiUserCircle,
      body: '直接参与，无需经过任何注册环节。',
      id: 'no-registration',
      label: '无需注册',
    },
    {
      Icon: BsSoundwave,
      body: `探索 ${count} 个独特的音景，从雨林到城市景观.`,
      id: 'diverse-sounds',
      label: '多元声音',
    },
    {
      Icon: RxMixerHorizontal,
      body: '通过混合和调整声音来创造完美的音景。',
      id: 'customizable-mixes',
      label: '可定制的混音',
    },
    {
      Icon: BiLogoGithub,
      body: '贡献与合作，让最好的变得更好。',
      id: 'open-source',
      label: '开源',
      link: {
        label: '开源代码',
        url: 'https://github.com/remvze/moodist',
      },
    },
    {
      Icon: BsStars,
      body: '不间断的沉浸感，专注于声音，而不是技术。',
      id: 'seamless-experience',
      label: '沉浸体验',
    },
    {
      Icon: BsStars,
      body: '传播平静，轻松分享您定制的声音混合。',
      id: 'share-selections',
      label: '分享',
    },
    {
      Icon: BsStars,
      body: '锁定您最喜爱的混音，立即返回您的声音天堂。',
      id: 'save-presets',
      label: '保存',
      soon: true,
    },
  ];

  return (
    <section className={styles.featuresSection}>
      <Container>
        <div className={styles.iconContainer}>
          <div className={styles.tail} />
          <div className={styles.icon}>
            <BsStars />
          </div>
        </div>

        <h2 className={styles.title}>Features</h2>

        <div className={styles.features}>
          {features.map(feature => (
            <div className={styles.reason} key={feature.id}>
              <div className={styles.icon}>
                <feature.Icon />
              </div>
              <h3 className={styles.label}>{feature.label}</h3>
              <p className={styles.body}>
                <Balancer>{feature.body}</Balancer>
              </p>

              {feature.link && (
                <a className={styles.link} href={feature.link.url}>
                  {feature.link.label}
                </a>
              )}

              {feature.soon && <div className={styles.soon}>即将推出</div>}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
