import { baseUrl } from '../utils/baseUrl';

export function PublicProjects() {
  return (
    <section className="project-section py-3">
      <h3 className="text-uppercase resume-section-heading mb-4">Public Projects</h3>

      <div className="item">
        <div className="item-heading row align-items-center mb-2">
          <h4 className="item-title col-12 col-md-9 col-lg-9 mb-2 mb-md-0">Webtoon Comprehension AI(WCAI)</h4>
          <div className="item-meta col-12 col-md-3 col-lg-3 text-muted text-start text-md-end">Naver Webtoon AI</div>
        </div>
        <div className="item-content">
          <p style={{ marginBottom: '2px' }}>
            WEBTOON Comprehension AI (WCAI) is a scalable story understanding agentic system designed to support
            marketing, recommendation, and localization teams by automating narrative comprehension across WEBTOON
            series. Built on LangGraph-based agentic workflows, it integrates VLM-powered visual-text analysis to
            identify characters, speakers, and plot structures. I contributed to the architecture and deployment of
            these workflows, enabling over 70% automation of manual content tagging and improving team productivity.
            The system incorporates LangSmith for robust tracing and supports SME collaboration to generate
            business-specific insights such as high-CTR keywords and genre recommendation.
          </p>
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
          <p style={{ marginBottom: '2px' }}>
            Shaper is a 3D modeling tool designed as a creation support tool for WEBTOON creators. Shaper allows
            creators to build 3D character models and seamlessly change their poses without needing to sketch each pose
            manually. I contributed to the successful NASDAQ IPO through the development of the hand pose retargeting
            module as part of the body pose retargeting system, enhancing the functionality of Shaper.
          </p>
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
          <p style={{ marginBottom: '2px' }}>
            We conducted research and development on generating character photocard using the diffusion model. This
            service needed to be versatile, as users could input various forms of prompts, requiring adaptability to
            multiple scenarios. Our focus was on researching the model that consistently produces high-quality character
            images under any circumstances.
          </p>
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
          <p style={{ marginBottom: '2px' }}>
            WebtoonMe is a project that transforms &quot;myself&quot; into a webtoon character. I was one of the initial
            members of this project, responsible for researching and developing the WebtoonMe core technology. I
            architected the overall workflow with my team.
          </p>
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
          <p style={{ marginBottom: '2px' }}>
            At the LINE Webtoon year-in-review page, we utilized the talking head model to generate animations for
            webtoon characters. Our focus was on creating animations naturally, so that they are not perceived as
            AI-generated results. We also ensured the capability to handle hundreds of characters.
          </p>
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
