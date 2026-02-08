import { LangProvider } from './contexts/LangContext';
import { ResumeHeader, ResumeIntro, ResumeMain, ResumeAside, Footer } from './components';

function App() {
  return (
    <LangProvider>
    <div className="main-wrapper">
      <div className="container px-3 px-lg-5">
        <article className="resume-wrapper mx-auto theme-bg-light p-5 mb-5 my-5 shadow-lg">
          <ResumeHeader />
          <hr />
          <ResumeIntro />
          <hr />
          <div className="resume-body">
            <div className="row">
              <ResumeMain />
              <ResumeAside />
            </div>
          </div>
          <hr />
        </article>
      </div>
      <Footer />
    </div>
    </LangProvider>
  );
}

export default App;
