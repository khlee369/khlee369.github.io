import type { Lang } from '../contexts/LangContext';

export const translations: Record<
  Lang,
  {
    intro: {
      beforeNaver: string;
      afterNaver: string;
      beforeUnist: string;
      afterUnist: string;
      beforeMlvr: string;
      afterMlvr: string;
    };
    work: {
      webtoonDesc: string;
      bitsensingDesc: string;
      bitsensingBullets: string[];
    };
    projects: {
      wcaiDesc: string;
      shaperDesc: string;
      photocardDesc: string;
      webtoonmeDesc: string;
      yearinreviewDesc: string;
    };
    publications: {
      footnote: string;
    };
  }
> = {
  en: {
    intro: {
      beforeNaver: "I work as an AI Research Engineer at ",
      afterNaver:
        ", specializing in Generative AI, including computer vision and large language models (LLM). I have participated in numerous AI research projects, successfully addressing real-world problems with practical solutions. My focus lies in devising effective strategies to make these models more accessible and user-friendly. I hold a Bachelor's degree in Computer Science from ",
      beforeUnist: "",
      afterUnist:
        ", where I also pursued a minor in Human-Computer Interaction (HCI). During my time at UNIST, I gained valuable experience working in several AI research labs, including Prof. Sungju Hwang's ",
      beforeMlvr: "",
      afterMlvr:
        ". I aspire to develop AI technologies and services that are loved and widely used by people around the world.",
    },
    work: {
      webtoonDesc:
        "I have conducted research and engineering on generative models, including GAN and diffusion, and applied them to various computer vision domains such as image, video, and 3D. Additionally, I have expanded my expertise to large language models (LLM), utilizing RAG and Agentic LLM to solve diverse problems and contribute to improving work efficiency. I participated in numerous projects using Generative AI, including the creation of tools for creators and artists.",
      bitsensingDesc:
        "Bitensing is a startup focused on radar chipset and sensors for autonomous driving. At Bitsensing, I researched and developed object detection modules for autonomous driving by fusing computer vision and radar sensors.",
      bitsensingBullets: [
        "Developed a robust gesture recognition model for radar sensors operating in noisy environments.",
        "Researched the object detection model for autonomous driving and embedded it into an edge device.",
        "Set up ML-Ops architecture using docker, kubeflow, and katib.",
        "Investigated camera & radar sensor fusion.",
      ],
    },
    projects: {
      wcaiDesc:
        "WEBTOON Comprehension AI (WCAI) is a scalable story understanding agentic system designed to support marketing, recommendation, and localization teams by automating narrative comprehension across WEBTOON series. Built on LangGraph-based agentic workflows, it integrates VLM-powered visual-text analysis to identify characters, speakers, and plot structures. I contributed to the architecture and deployment of these workflows, enabling over 70% automation of manual content tagging and improving team productivity. The system incorporates LangSmith for robust tracing and supports SME collaboration to generate business-specific insights such as high-CTR keywords and genre recommendation.",
      shaperDesc:
        "Shaper is a 3D modeling tool designed as a creation support tool for WEBTOON creators. Shaper allows creators to build 3D character models and seamlessly change their poses without needing to sketch each pose manually. I contributed to the successful NASDAQ IPO through the development of the hand pose retargeting module as part of the body pose retargeting system, enhancing the functionality of Shaper.",
      photocardDesc:
        "We conducted research and development on generating character photocard using the diffusion model. This service needed to be versatile, as users could input various forms of prompts, requiring adaptability to multiple scenarios. Our focus was on researching the model that consistently produces high-quality character images under any circumstances.",
      webtoonmeDesc:
        'WebtoonMe is a project that transforms "myself" into a webtoon character. I was one of the initial members of this project, responsible for researching and developing the WebtoonMe core technology. I architected the overall workflow with my team.',
      yearinreviewDesc:
        "At the LINE Webtoon year-in-review page, we utilized the talking head model to generate animations for webtoon characters. Our focus was on creating animations naturally, so that they are not perceived as AI-generated results. We also ensured the capability to handle hundreds of characters.",
    },
    publications: {
      footnote: "(*indicates equal contribution)",
    },
  },
  ko: {
    intro: {
      beforeNaver: "저는 ",
      afterNaver:
        "에서 AI 연구 엔지니어로 재직하며, 컴퓨터 비전 및 대규모 언어 모델(LLM)을 포함한 생성형 AI를 다루고 있습니다. 다수의 AI 연구 프로젝트에 참여하여 실세계 문제를 실용적인 솔루션으로 해결해 왔으며, 이러한 모델을 더 접근하기 쉽고 사용하기 편하게 만드는 전략을 고민합니다. ",
      beforeUnist: "",
      afterUnist:
        "에서 컴퓨터공학 학사 학위를 취득했으며, 인간-컴퓨터 상호작용(HCI) 부전공을 이수했습니다. 재학 중 황성주 교수님의 ",
      beforeMlvr: "",
      afterMlvr:
        " 등 여러 AI 연구실에서 연구 경험을 쌓았습니다. 전 세계 사람들이 사랑하고 널리 사용하는 AI 기술과 서비스를 만들고자 합니다.",
    },
    work: {
      webtoonDesc:
        "GAN, 디퓨전을 포함한 생성 모델 연구 및 엔지니어링을 수행하고, 이미지·영상·3D 등 다양한 컴퓨터 비전 도메인에 적용해 왔습니다. 최근에는 RAG 및 에이전트 기반 LLM을 활용해 다양한 문제를 해결하고 업무 효율 개선에 기여하고 있으며, 크리에이터·아티스트를 위한 도구 개발 등 생성형 AI를 활용한 다수의 프로젝트에 참여했습니다.",
      bitsensingDesc:
        "Bitsensing은 자율주행용 레이더 칩셋 및 센서에 집중한 스타트업입니다. 컴퓨터 비전과 레이더 센서를 융합한 자율주행용 객체 탐지 모듈 연구 및 개발을 담당했습니다.",
      bitsensingBullets: [
        "노이즈 환경에서 동작하는 레이더 센서용 제스처 인식 모델 개발",
        "자율주행용 객체 탐지 모델 연구 및 엣지 디바이스 임베딩",
        "Docker, Kubeflow, Katib를 활용한 ML-Ops 아키텍처 구축",
        "카메라·레이더 센서 융합 연구",
      ],
    },
    projects: {
      wcaiDesc:
        "WEBTOON Comprehension AI(WCAI)는 웹툰 시리즈 전반의 서사 이해를 자동화하여 마케팅, 추천, 현지화 팀을 지원하는 확장 가능한 스토리 이해 에이전트 시스템입니다. LangGraph 기반 에이전트 워크플로우 위에 VLM 기반 시각-텍스트 분석을 통합해 캐릭터, 화자, 플롯 구조를 파악합니다. 해당 워크플로우의 아키텍처 및 배포에 기여하여 수동 콘텐츠 태깅의 70% 이상 자동화와 팀 생산성 향상을 이뤘으며, LangSmith 기반 트레이싱과 SME 협업을 통해 고CTR 키워드, 장르 추천 등 비즈니스 인사이트 생성을 지원합니다.",
      shaperDesc:
        "Shaper는 웹툰 크리에이터를 위한 제작 지원 3D 모델링 도구입니다. 크리에이터가 3D 캐릭터 모델을 만들고 포즈를 수동으로 스케치하지 않고도 자연스럽게 바꿀 수 있게 합니다. 바디 포즈 리타겟팅 시스템의 핸드 포즈 리타겟팅 모듈 개발에 기여하여 Shaper 기능을 강화했으며, 이는 NASDAQ IPO 성공에 기여했습니다.",
      photocardDesc:
        "디퓨전 모델을 이용한 캐릭터 포토카드 생성 연구 및 개발을 진행했습니다. 사용자가 다양한 형태의 프롬프트를 입력할 수 있어야 했기 때문에 여러 시나리오에 대응할 수 있는 범용성이 필요했고, 어떤 상황에서도 일관되게 고품질 캐릭터 이미지를 생성하는 모델 연구에 집중했습니다.",
      webtoonmeDesc:
        'WebtoonMe는 "나"를 웹툰 캐릭터로 변환하는 프로젝트입니다. 초기 멤버로 참여하여 WebtoonMe 핵심 기술 연구 및 개발을 담당했고, 팀과 함께 전체 워크플로우를 설계했습니다.',
      yearinreviewDesc:
        "LINE Webtoon 연말 결산 페이지에서 토킹 헤드 모델을 활용해 웹툰 캐릭터 애니메이션을 생성했습니다. AI 생성물로 인식되지 않도록 자연스러운 애니메이션 제작에 집중했으며, 수백 개 캐릭터를 처리할 수 있는 역량을 확보했습니다.",
    },
    publications: {
      footnote: "(*동등 기여)",
    },
  },
};
