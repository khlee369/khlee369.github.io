import { baseUrl } from '../utils/baseUrl';

export function ResumeIntro() {
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
            I work as an AI Research Engineer at{' '}
            <a href="https://webtoonscorp.com/">NAVER WEBTOON</a>, specializing in Generative AI, including computer
            vision and large language models (LLM). I have participated in numerous AI research projects, successfully
            addressing real-world problems with practical solutions. My focus lies in devising effective strategies to
            make these models more accessible and user-friendly. I hold a Bachelor&apos;s degree in Computer Science from{' '}
            <a href="https://www.unist.ac.kr/">UNIST</a>, where I also pursued a minor in Human-Computer Interaction
            (HCI). During my time at UNIST, I gained valuable experience working in several AI research labs, including
            Prof. Sungju Hwang&apos;s{' '}
            <a href="https://www.mlai-kaist.com/people">Machine Learning and Vision Research (MLVR) Lab</a>. I aspire to
            develop AI technologies and services that are loved and widely used by people around the world.
          </p>
        </div>
      </div>
    </div>
  );
}
