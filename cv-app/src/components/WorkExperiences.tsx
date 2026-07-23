import { baseUrl } from '../utils/baseUrl';
import { useLang } from '../contexts/LangContext';
import { translations } from '../i18n/translations';

export function WorkExperiences() {
  const { lang } = useLang();
  const t = translations[lang].work;
  return (
    <section className="work-section py-3">
      <h3 className="text-uppercase resume-section-heading mb-4">Work Experiences</h3>
      <div className="item mb-3">
        <div className="item-heading row align-items-center mb-2">
          <h4
            className="item-title col-12 col-md-9 col-lg-9 mb-2 mb-md-0"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <img
              src={`${baseUrl}assets/images/WEBTOON_GW_AppIcon.png`}
              alt="Webtoon Logo"
              style={{ height: '32px', marginRight: '10px' }}
            />
            Naver Webtoon AI
          </h4>
          <div className="item-meta col-12 col-md-3 col-lg-3 text-muted text-start text-md-end">
            Jun. 2021 - Present
          </div>
        </div>
        <div className="item-content">
          <p style={{ marginBottom: '5px' }}>AI Research Engineer</p>
          <p>{t.webtoonDesc}</p>
          <ul className="resume-list">
            {t.webtoonBullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="item mb-3">
        <div className="item-heading row align-items-center mb-2">
          <h4
            className="item-title col-12 col-md-9 col-lg-9 mb-2 mb-md-0"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <img
              src={`${baseUrl}assets/images/bitsensing_logo.jpg`}
              alt="Bitsensing Logo"
              style={{ height: '32px', marginRight: '10px' }}
            />
            Bitsensing Inc.
          </h4>
          <div className="item-meta col-12 col-md-3 col-lg-3 text-muted text-start text-md-end">
            Oct. 2020 - Mar. 2021
          </div>
        </div>
        <div className="item-content">
          <p style={{ marginBottom: '5px' }}>AI Research Engineer</p>
          <p>{t.bitsensingDesc}</p>
          <ul className="resume-list">
            {t.bitsensingBullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
