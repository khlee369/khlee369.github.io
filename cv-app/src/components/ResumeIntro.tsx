import { baseUrl } from '../utils/baseUrl';
import { useLang } from '../contexts/LangContext';
import { translations } from '../i18n/translations';

export function ResumeIntro() {
  const { lang } = useLang();
  const t = translations[lang].intro;
  return (
    <div className="resume-intro py-3">
      <div className="row align-items-center">
        <div className="col-12 col-md-3 col-xl-2 text-center">
          <img
            className="resume-profile-image mb-3 mb-md-0 me-md-5 ms-md-0 rounded mx-auto"
            src={`${baseUrl}assets/images/kwangho_sml.jpg`}
            alt="Kwangho Lee"
          />
        </div>
        <div className="col text-start">
          <p style={{ marginBottom: '5px', fontSize: 'medium' }}>
            {t.beforeNaver}
            <a href="https://webtoonscorp.com/">NAVER WEBTOON</a>
            {t.afterNaver}
            <a href="https://www.unist.ac.kr/">UNIST</a>
            {t.afterUnist}
            <a href="https://www.mlai-kaist.com/people">Machine Learning and Vision Research (MLVR) Lab</a>
            {t.afterMlvr}
          </p>
        </div>
      </div>
    </div>
  );
}
