export function ResumeAside() {
  return (
    <aside className="resume-aside col-12 col-lg-4 col-xl-3 px-lg-4 pb-lg-4">
      <section className="education-section py-3">
        <h3 className="text-uppercase resume-section-heading mb-4">Education</h3>
        <ul className="list-unstyled resume-education-list">
          <li className="mb-3">
            <div className="resume-degree font-weight-bold">B.S in Computer Science</div>
            <div className="resume-degree-org text-muted">UNIST</div>
            <div className="resume-degree-time text-muted">2014 - 2019</div>
          </li>
        </ul>
      </section>

      <section className="skills-section py-3">
        <h3 className="text-uppercase resume-section-heading mb-4">Skills</h3>
        <div className="item">
          <h4 className="item-title">Knowledge</h4>
          <ul className="list-unstyled resume-skills-list">
            <li className="mb-2">Generative AI, Computer Vision, LLM, Machine Learning, Search &amp; Information Retrieval</li>
          </ul>
        </div>
        <div className="item">
          <h4 className="item-title">Programming</h4>
          <ul
            className="list-unstyled resume-skills-list"
            style={{ listStyleType: 'disc', paddingLeft: '20px' }}
          >
            <li className="mb-2">
              Exceptional proficiency in implementations using <b>Python</b>
            </li>
            <li className="mb-2">Advanced proficiency in <b>PyTorch</b></li>
            <li className="mb-2">Advanced proficiency in <b>LangChain</b> and <b>LangGraph</b></li>
            <li className="mb-2">Proficiency in <b>Go</b></li>
          </ul>
        </div>
        <div className="item">
          <h4 className="item-title">Frontend</h4>
          <ul
            className="list-unstyled resume-skills-list"
            style={{ listStyleType: 'disc', paddingLeft: '20px' }}
          >
            <li className="mb-2">Experienced in <b>React</b>, <b>Vue 3</b>, and <b>TypeScript</b></li>
          </ul>
        </div>
        <div className="item">
          <h4 className="item-title">Backend</h4>
          <ul
            className="list-unstyled resume-skills-list"
            style={{ listStyleType: 'disc', paddingLeft: '20px' }}
          >
            <li className="mb-2">Skilled in building <b>REST API</b> servers using <b>FastAPI</b></li>
            <li className="mb-2">Experienced in <b>OpenSearch</b>, <b>Milvus</b>, <b>MySQL</b>, <b>Qdrant</b>, and <b>Redis</b>.</li>
          </ul>
        </div>
      </section>

      <section className="skills-section py-3">
        <h3 className="text-uppercase resume-section-heading mb-4">Languages</h3>
        <ul className="list-unstyled resume-lang-list">
          <li className="mb-2">
            Korean <span className="text-muted">(Native)</span>
          </li>
          <li>
            English <span className="text-muted">(Advanced)</span>
          </li>
        </ul>
      </section>

      <section className="skills-section py-3">
        <h3 className="text-uppercase resume-section-heading mb-4">Interests</h3>
        <ul className="list-unstyled resume-interests-list mb-0">
          <li className="mb-2">Climbing (both bouldering & lead)</li>
          <li className="mb-2">Game (both on/off-line)</li>
          <li className="mb-2">Comics</li>
          <li className="mb-2">Mathematics</li>
        </ul>
      </section>
    </aside>
  );
}
