import { baseUrl } from '../utils/baseUrl';

export function WorkExperiences() {
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
          <p>
            I have conducted research and engineering on generative models, including GAN and diffusion, and applied
            them to various computer vision domains such as image, video, and 3D. Additionally, I have expanded my
            expertise to large language models (LLM), utilizing RAG and Agentic LLM to solve diverse problems and
            contribute to improving work efficiency. I participated in numerous projects using Generative AI, including
            the creation of tools for creators and artists.
          </p>
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
          <p>
            Bitensing is a startup focused on radar chipset and sensors for autonomous driving. At Bitsensing, I
            researched and developed object detection modules for autonomous driving by fusing computer vision and radar
            sensors.
          </p>
          <ul className="resume-list">
            <li>Developed a robust gesture recognition model for radar sensors operating in noisy environments.</li>
            <li>Researched the object detection model for autonomous driving and embedded it into an edge device.</li>
            <li>Set up ML-Ops architecture using docker, kubeflow, and katib.</li>
            <li>Investigated camera & radar sensor fusion.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
