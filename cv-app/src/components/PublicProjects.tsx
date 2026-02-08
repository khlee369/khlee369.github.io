import { baseUrl } from '../utils/baseUrl';
import { useLang } from '../contexts/LangContext';
import { translations } from '../i18n/translations';

export function PublicProjects() {
  const { lang } = useLang();
  const t = translations[lang].projects;
  return (
    <section className="project-section py-3">
      <h3 className="text-uppercase resume-section-heading mb-4">Public Projects</h3>

      <div className="item">
        <div className="item-heading row align-items-center mb-2">
          <h4 className="item-title col-12 col-md-9 col-lg-9 mb-2 mb-md-0">Webtoon Comprehension AI(WCAI)</h4>
          <div className="item-meta col-12 col-md-3 col-lg-3 text-muted text-start text-md-end">Naver Webtoon AI</div>
        </div>
        <div className="item-content">
          <p style={{ marginBottom: '2px' }}>{t.wcaiDesc}</p>
          <p>
            <a href="https://blog.langchain.dev/customers-webtoon/" target="_blank" rel="noreferrer">
              [Langchain Blog]
            </a>
          </p>
          <div className="row mt-3">
            <div className="col-12 col-md-12 mb-3 mx-auto">
              <div className="wcai-imgbox">
                <img src={`${baseUrl}assets/images/wcai.png`} alt="WCAI" className="img-fluid" />
              </div>
              <p className="text-center mt-2">Webtoon Comprehension AI</p>
            </div>
          </div>
        </div>
      </div>

      <div className="item">
        <div className="item-heading row align-items-center mb-2">
          <h4 className="item-title col-12 col-md-9 col-lg-9 mb-2 mb-md-0">Shaper</h4>
          <div className="item-meta col-12 col-md-3 col-lg-3 text-muted text-start text-md-end">Naver Webtoon AI</div>
        </div>
        <div className="item-content">
          <p style={{ marginBottom: '2px' }}>{t.shaperDesc}</p>
          <p>
            <a
              href="https://www.sec.gov/Archives/edgar/data/1997859/000119312524151708/d396527ds1.htm"
              target="_blank"
              rel="noreferrer"
            >
              [S-1 Report]
            </a>
          </p>
        </div>
      </div>

      <div className="item">
        <div className="item-heading row align-items-center mb-2">
          <h4 className="item-title col-12 col-md-9 col-lg-9 mb-2 mb-md-0">Character Photocard</h4>
          <div className="item-meta col-12 col-md-3 col-lg-3 text-muted text-start text-md-end">Naver Webtoon AI</div>
        </div>
        <div className="item-content">
          <p style={{ marginBottom: '2px' }}>{t.photocardDesc}</p>
          <p>
            <a
              href="https://ai.comic.naver.com/lab/character-photocard/installGuide"
              target="_blank"
              rel="noreferrer"
            >
              [Get Photocard]
            </a>
          </p>
          <div className="row mt-3">
            <div className="col-6 col-md-3 mb-3">
              <div className="photocard-imgbox">
                <img src={`${baseUrl}assets/optimize.jfif`} alt="Photocard" className="img-fluid" />
              </div>
              <p className="text-center mt-2">Photocard</p>
            </div>
            <div className="col-6 col-md-3 mb-3">
              <div className="photocard-imgbox">
                <img src={`${baseUrl}assets/photocard1.jfif`} alt="백도화" className="img-fluid" />
              </div>
              <p className="text-center mt-2">백도화</p>
            </div>
            <div className="col-6 col-md-3 mb-3">
              <div className="photocard-imgbox">
                <img src={`${baseUrl}assets/photocard2.jfif`} alt="이수호" className="img-fluid" />
              </div>
              <p className="text-center mt-2">이수호</p>
            </div>
            <div className="col-6 col-md-3 mb-3">
              <div className="photocard-imgbox">
                <img src={`${baseUrl}assets/photocard3.jfif`} alt="임주경" className="img-fluid" />
              </div>
              <p className="text-center mt-2">임주경</p>
            </div>
          </div>
        </div>
      </div>

      <div className="item">
        <div className="item-heading row align-items-center mb-2">
          <h4 className="item-title col-12 col-md-9 col-lg-9 mb-2 mb-md-0">WebtoonMe</h4>
          <div className="item-meta col-12 col-md-3 col-lg-3 text-muted text-start text-md-end">Naver Webtoon AI</div>
        </div>
        <div className="item-content">
          <p style={{ marginBottom: '2px' }}>{t.webtoonmeDesc}</p>
          <p>
            <a href="https://webtoon.github.io/WebtoonMe/v1/kr" target="_blank" rel="noreferrer">
              [Project Page]
            </a>
          </p>
          <div className="row mt-3">
            <div className="col-12 col-md-6 mb-3">
              <div className="webtoonme-mediabox">
                <video controls style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
                  <source src={`${baseUrl}assets/webtoonme1.mp4`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="text-center mt-2">WebtoonMe 1</p>
            </div>
            <div className="col-12 col-md-6 mb-3">
              <div className="webtoonme-mediabox">
                <video controls style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
                  <source src={`${baseUrl}assets/webtoonme2.mp4`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="text-center mt-2">WebtoonMe 2</p>
            </div>
          </div>
        </div>
      </div>

      <div className="item">
        <div className="item-heading row align-items-center mb-2">
          <h4 className="item-title col-12 col-md-9 col-lg-9 mb-2 mb-md-0">LINE Webtoon Year-in-review</h4>
          <div className="item-meta col-12 col-md-3 col-lg-3 text-muted text-start text-md-end">Naver Webtoon AI</div>
        </div>
        <div className="item-content">
          <p style={{ marginBottom: '2px' }}>{t.yearinreviewDesc}</p>
          <p>
            <a href="https://www.webtoons.com/en/yearend/share/WEBTOON/2135" target="_blank" rel="noreferrer">
              [Year-in-review]
            </a>
          </p>
          <div className="row mt-3">
            <div className="col-6 col-md-4 mb-3">
              <div className="webtoonme-mediabox">
                <img
                  src={`${baseUrl}assets/page-1.gif`}
                  alt="share page"
                  className="img-fluid"
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
              <p className="text-center mt-2">share page</p>
            </div>
            <div className="col-6 col-md-4 mb-3">
              <div className="webtoonme-mediabox">
                <img
                  src={`${baseUrl}assets/page-2.gif`}
                  alt="yearend page"
                  className="img-fluid"
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
              <p className="text-center mt-2">yearend page</p>
            </div>
            <div className="col-12 col-md-4 mb-3">
              <div className="webtoonme-mediabox">
                <img
                  src={`${baseUrl}assets/page-3.gif`}
                  alt="instagram #2021BarengWEBTOON"
                  className="img-fluid"
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
              <p className="text-center mt-2">instagram #2021BarengWEBTOON</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
