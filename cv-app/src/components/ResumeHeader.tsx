export function ResumeHeader() {
  return (
    <div className="resume-header">
      <div className="row align-items-center">
        <div className="resume-title col-12 col-md-6 col-lg-8 col-xl-9">
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
            <li className="mb-0">
              <i className="fas fa-map-marker-alt fa-fw fa-lg me-2"></i>
              Pangyo, S.Korea
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
