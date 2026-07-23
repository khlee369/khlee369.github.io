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
      webtoonBullets: string[];
      bitsensingDesc: string;
      bitsensingBullets: string[];
    };
    projects: {
      canvasDesc: string;
      thingsbookDesc: string;
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
      beforeNaver: "I am an AI Research Engineer at ",
      afterNaver:
        ", specializing in Generative AI with a focus on computer vision and large language models (LLMs). I have contributed to numerous AI research projects, delivering practical solutions to real-world problems. My work centers on designing effective strategies to make advanced AI models more accessible and user-friendly. I hold a Bachelor's degree in Computer Science from ",
      beforeUnist: "",
      afterUnist:
        ", where I also completed a minor in Human–Computer Interaction (HCI). During my studies at UNIST, I gained hands-on research experience in multiple AI research labs, including Prof. Sungju Hwang’s ",
      beforeMlvr: "",
      afterMlvr:
        ". I aspire to develop AI technologies and services that are widely adopted and genuinely valued by users around the world.",
    },
    work: {
      webtoonDesc:
        "At Naver Webtoon, I research and engineer generative AI and LLM-based systems, applying them across diverse computer vision domains such as image, video, and 3D. I have contributed to a wide range of projects spanning research and productization, including tools for creators and artists.",
      webtoonBullets: [
        "Developed query understanding (intent classification, entity extraction) to improve search quality.",
        "Introduced vector search and improved the webtoon search engine.",
        "Designed an agent system for content generation and IP utilization specific to the webtoon domain.",
        "Conducted LLM-based RAG and agent projects, contributing to improved internal work efficiency.",
        "Researched and engineered generative AI models, including GANs and diffusion models.",
      ],
      bitsensingDesc:
        "Bitsensing is a startup focused on radar chipsets and sensors for autonomous driving. At Bitsensing, I researched and developed object detection modules for autonomous driving by fusing computer vision with radar sensor data.",
      bitsensingBullets: [
        "Developed a robust gesture recognition model for radar sensors operating in noisy environments.",
        "Researched object detection models for autonomous driving and deployed them on edge devices.",
        "Designed and set up an MLOps architecture using Docker, Kubeflow, and Katib.",
        "Investigated multimodal fusion of camera and radar sensors.",
      ],
    },
    projects: {
      canvasDesc: "WEBTOON Canvas is a global UGC platform that empowers creators worldwide to publish and share their stories. I contributed to the development of the AI Agent-based automatic translation system, enabling creators to seamlessly localize their content across multiple languages and significantly lowering the barrier for global distribution.",
      thingsbookDesc: "Contributed to the development of a global webtoon search engine for NAVER’s UGC platform Thingsbook, targeting the North American market. Built scalable ETL pipelines to support hybrid search, enabling both vector-based retrieval and BM25-style keyword search, and ensuring reliable indexing and retrieval across global services.",
      wcaiDesc:
        "WEBTOON Comprehension AI (WCAI) is a scalable story-understanding agentic system designed to support marketing, recommendation, and localization teams by automating narrative comprehension across WEBTOON series. Built on LangGraph-based agentic workflows, it integrates VLM-powered visual–text analysis to identify characters, speakers, and plot structures. I contributed to the architecture and deployment of these workflows, enabling over 70% automation of manual content tagging and significantly improving team productivity. The system incorporates LangSmith for robust tracing and facilitates SME collaboration to generate business-specific insights such as high-CTR keywords and genre recommendations.",
      shaperDesc:
        "Shaper is a 3D modeling tool designed to support WEBTOON creators in the content creation process. It enables creators to build 3D character models and modify poses seamlessly without manually sketching each pose. I contributed to the development of the hand pose retargeting module within the body pose retargeting system, enhancing Shaper’s core functionality and contributing to the company’s successful NASDAQ IPO.",
      photocardDesc:
        "We conducted research and development on character photocard generation using diffusion models. The service was required to handle a wide variety of user prompts, necessitating robustness across diverse scenarios. Our work focused on developing models that consistently generate high-quality character images under varying conditions.",
      webtoonmeDesc:
        'WebtoonMe is a project that transforms a user into a webtoon-style character. As an early member of the project, I was responsible for researching and developing its core technologies and co-architecting the overall system workflow with the team.',
      yearinreviewDesc:
        "For the LINE WEBTOON year-in-review page, we utilized talking-head models to generate character animations. Our focus was on producing animations that appear natural and indistinguishable from hand-crafted content, while ensuring scalability to support hundreds of characters.",
    },
    publications: {
      footnote: "(* indicates equal contribution)",
    },
  },

  ko: {
    intro: {
      beforeNaver: "저는 ",
      afterNaver:
        "에서 AI Research Engineer로 재직하며, 컴퓨터 비전과 대규모 언어 모델(LLM)을 중심으로 생성형 AI 연구 및 개발을 수행하고 있습니다. 다수의 AI 연구 프로젝트에 참여하며 실세계 문제를 실용적인 솔루션으로 해결해 왔고, 고도화된 AI 모델을 보다 접근하기 쉽고 사용자 친화적으로 만드는 전략에 관심을 두고 있습니다. ",
      beforeUnist: "",
      afterUnist:
        "에서 컴퓨터공학 학사 학위를 취득했으며, 인간–컴퓨터 상호작용(HCI) 부전공을 이수했습니다. 재학 중에는 황성주 교수님의 ",
      beforeMlvr: "",
      afterMlvr:
        "을 포함한 여러 AI 연구실에서 연구 경험을 쌓았습니다. 전 세계 사용자에게 실질적인 가치를 제공하고 널리 활용되는 AI 기술과 서비스를 개발하는 것을 목표로 하고 있습니다.",
    },
    work: {
      webtoonDesc:
        "Naver Webtoon에서 생성형 AI와 LLM 기반 시스템을 연구·엔지니어링하며, 이미지·영상·3D 등 다양한 컴퓨터 비전 도메인에 적용해 왔습니다. 크리에이터와 아티스트를 위한 도구를 포함해 연구부터 상용화까지 폭넓은 프로젝트에 기여했습니다.",
      webtoonBullets: [
        "Query Understanding(의도 분류·개체 추출) 연구 개발을 통한 검색 품질 고도화",
        "Vector Search 도입 및 웹툰 검색 엔진 개선",
        "웹툰 도메인만의 콘텐츠 생성과 IP 활용을 위한 Agent System을 설계",
        "LLM을 기반으로 하는 RAG 및 Agent 기반 프로젝트 수행 및 사내 업무 효율 개선에 기여",
        "GAN과 Diffusion 모델을 포함한 Generative AI 모델 연구 및 엔지니어링 수행",
      ],
      bitsensingDesc:
        "Bitsensing은 자율주행용 레이더 칩셋 및 센서에 집중한 스타트업입니다. 컴퓨터 비전과 레이더 센서 데이터를 융합한 자율주행용 객체 탐지 모듈의 연구 및 개발을 담당했습니다.",
      bitsensingBullets: [
        "노이즈 환경에서도 안정적으로 동작하는 레이더 센서용 제스처 인식 모델 개발",
        "자율주행용 객체 탐지 모델 연구 및 엣지 디바이스 배포",
        "Docker, Kubeflow, Katib를 활용한 MLOps 아키텍처 설계 및 구축",
        "카메라–레이더 센서 멀티모달 융합 연구",
      ],
    },
    projects: {
      canvasDesc: "WEBTOON Canvas는 전 세계 크리에이터가 자유롭게 작품을 게시하고 공유할 수 있는 글로벌 UGC 플랫폼입니다. AI Agent 기반 자동 번역 시스템 개발에 기여하여, 크리에이터가 다국어로 콘텐츠를 손쉽게 현지화할 수 있도록 지원하고 글로벌 유통의 진입 장벽을 크게 낮추었습니다.",
      thingsbookDesc: "북미 시장을 타겟으로 한 네이버 신규 UGC 플랫폼 씽스북의 글로벌 웹툰 검색 엔진 개발에 기여했습니다. 벡터 서치와 BM25 기반 키워드 서치를 함께 지원하는 하이브리드 검색을 위해 ETL 파이프라인을 구축하고, 안정적인 인덱싱과 검색 품질 향상을 지원했습니다.",
      wcaiDesc:
        "WEBTOON Comprehension AI(WCAI)는 웹툰 시리즈 전반의 서사 이해를 자동화하여 마케팅, 추천, 현지화 팀을 지원하는 확장 가능한 스토리 이해 에이전트 시스템입니다. LangGraph 기반 에이전트 워크플로우에 VLM 기반 시각–텍스트 분석을 통합해 캐릭터, 화자, 플롯 구조를 식별합니다. 해당 워크플로우의 아키텍처 설계 및 배포에 기여하여 수동 콘텐츠 태깅의 70% 이상을 자동화하고 팀 생산성을 크게 향상시켰습니다. 또한 LangSmith 기반 트레이싱과 SME 협업을 통해 고CTR 키워드 및 장르 추천과 같은 비즈니스 인사이트 생성을 지원했습니다.",
      shaperDesc:
        "Shaper는 웹툰 크리에이터를 위한 제작 지원 3D 모델링 도구입니다. 크리에이터가 3D 캐릭터 모델을 제작하고, 포즈를 일일이 스케치하지 않아도 자연스럽게 변경할 수 있도록 지원합니다. body pose retargeting system의 hand pose retargeting module 개발에 기여하여 Shaper의 핵심 기능을 강화했으며, 이는 NASDAQ IPO 성공에 기여했습니다.",
      photocardDesc:
        "디퓨전 모델을 활용한 캐릭터 포토카드 생성 연구 및 개발을 수행했습니다. 다양한 형태의 사용자 프롬프트를 처리해야 했기 때문에 폭넓은 시나리오에 대응 가능한 범용성이 요구되었으며, 어떤 조건에서도 일관되게 고품질 캐릭터 이미지를 생성하는 모델 개발에 집중했습니다.",
      webtoonmeDesc:
        'WebtoonMe는 사용자를 웹툰 캐릭터로 변환하는 프로젝트입니다. 초기 멤버로 참여하여 WebtoonMe의 핵심 기술 연구 및 개발을 담당했으며, 팀과 함께 전체 시스템 워크플로우를 설계했습니다.',
      yearinreviewDesc:
        "LINE WEBTOON 연말 결산 페이지에서 토킹 헤드 모델을 활용해 웹툰 캐릭터 애니메이션을 생성했습니다. AI 생성물로 인식되지 않도록 자연스러운 표현에 중점을 두었으며, 수백 개의 캐릭터를 안정적으로 처리할 수 있는 확장성을 확보했습니다.",
    },
    publications: {
      footnote: "(*동등 기여)",
    },
  },
};
