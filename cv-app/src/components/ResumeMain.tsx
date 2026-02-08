import { WorkExperiences } from './WorkExperiences';
import { PublicProjects } from './PublicProjects';
import { Publications } from './Publications';

export function ResumeMain() {
  return (
    <div className="resume-main col-12 col-lg-8 col-xl-9 pe-0 pe-lg-5">
      <WorkExperiences />
      <PublicProjects />
      <Publications />
    </div>
  );
}
