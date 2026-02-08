import { useLang } from '../contexts/LangContext';
import { translations } from '../i18n/translations';

export function Publications() {
  const { lang } = useLang();
  const footnote = translations[lang].publications.footnote;
  return (
    <section className="project-section py-3">
      <h3 className="text-uppercase resume-section-heading mb-2">Publications</h3>
      <p className="item-meta" style={{ opacity: 0.7 }}>
        {footnote}
      </p>

      <div className="item">
        <div className="item-heading row align-items-center mb-1">
          <h4 className="item-title col-12 col-md-9 col-lg-9 mb-0 mb-md-0">
            Chupa: Carving 3D Clothed Humans from Skinned Shape Priors using 2D Diffusion Probabilistic Models
          </h4>
          <div className="item-meta col-12 col-md-3 col-lg-3 text-muted text-start text-md-end">ICCV 2023(Oral)</div>
        </div>
        <div className="item-content">
          <p style={{ opacity: 0.8 }}>
            Byungjun Kim*, Patrick Kwon*, <strong>Kwangho Lee</strong>, Myunggi Lee, Sookwan Han, Daesik Kim, Hanbyul
            Joo
          </p>
        </div>
      </div>

      <div className="item">
        <div className="item-heading row align-items-center mb-1">
          <h4 className="item-title col-12 col-md-9 col-lg-9 mb-0 mb-md-0">
            LPMM: Intuitive Pose Control for Neural Talking-Head Model via Landmark-Parameter Morphable Model
          </h4>
          <div className="item-meta col-12 col-md-3 col-lg-3 text-muted text-start text-md-end">CVPRW 2023</div>
        </div>
        <div className="item-content">
          <p style={{ opacity: 0.8 }}>
            <strong>Kwangho Lee</strong>*, Patrick Kwon*, Myung Ki Lee, Namhyuk Ahn, Junsoo Lee
          </p>
        </div>
      </div>

      <div className="item">
        <div className="item-heading row align-items-center mb-1">
          <h4 className="item-title col-12 col-md-9 col-lg-9 mb-0 mb-md-0">
            Cross-Domain Style Mixing for Face Cartoonization
          </h4>
          <div className="item-meta col-12 col-md-3 col-lg-3 text-muted text-start text-md-end">CVPRW 2022</div>
        </div>
        <div className="item-content">
          <p style={{ opacity: 0.8 }}>
            Seungkwon Kim, Chaeheon Gwak, Dohyun Kim, <strong>Kwangho Lee</strong>, Jihye Back, Namhyuk Ahn, Daesik Kim
          </p>
        </div>
      </div>
    </section>
  );
}
