import { useLang } from '../contexts/LangContext';

export function ResumeHeader() {
  const { lang, setLang } = useLang();
  return (
    <div className="resume-header">
      <div className="row align-items-center">
        <div className="resume-title col-12 col-md-6 col-lg-8 col-xl-9">
          <div className="resume-lang-toggle mb-2 d-flex gap-1 justify-content-start">
            <button
              type="button"
              className={`resume-lang-btn ${lang === 'en' ? 'resume-lang-btn-active' : ''}`}
              onClick={() => setLang('en')}
              aria-label="English"
              title="English"
            >
              <img
                className="resume-lang-flag-img"
                src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1fa-1f1f8.svg"
                alt=""
                width={20}
                height={20}
                aria-hidden
              />
              <span className="resume-lang-label">ENG</span>
            </button>
            <button
              type="button"
              className={`resume-lang-btn ${lang === 'ko' ? 'resume-lang-btn-active' : ''}`}
              onClick={() => setLang('ko')}
              aria-label="한국어"
              title="한국어"
            >
              <img
                className="resume-lang-flag-img"
                src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1f0-1f1f7.svg"
                alt=""
                width={20}
                height={20}
                aria-hidden
              />
              <span className="resume-lang-label">KOR</span>
            </button>
          </div>
          <h2 className="resume-name mb-0 text-uppercase">Kwangho Lee</h2>
          <div className="resume-tagline mb-3 mb-md-0">AI Research Engineer</div>
        </div>
        <div className="resume-contact col-12 col-md-6 col-lg-4 col-xl-3">
          <ul className="list-unstyled mb-0">
            <li className="mb-2">
              <i className="fas fa-phone-square fa-fw fa-lg me-2"></i>
              <a className="resume-link" href="tel:#">(+82)10-7154-8293</a>
            </li>
            <li className="mb-2">
              <i className="fas fa-envelope-square fa-fw fa-lg me-2"></i>
              <a className="resume-link" href="mailto:#">lex.less38@gmail.com</a>
            </li>
            <li className="mb-2">
              <i className="fab fa-linkedin fa-fw fa-lg me-2"></i>
              <a
                className="resume-link"
                href="https://www.linkedin.com/in/%EA%B4%91%ED%98%B8-%EC%9D%B4-150482189/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li className="mb-0">
              <i className="fas fa-map-marker-alt fa-fw fa-lg me-2"></i>
              Seoul, S.Korea
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
