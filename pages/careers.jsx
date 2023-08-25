import Layout from "@/src/layout/Layout";

const jobs = [
  {
    id: 1,
    title: "React Native Developer",
    experience: "4 - 8 Years Experience",
    skills: ["React Native", "TypeScript"],
    img: "assets/img/job-post.png   ",
  },
  {
    id: 2,
    title: "Embedded Java Developer",
    experience: "2+ Years Experience",
    skills: ["Python", "Automation Testing"],
    img: "assets/img/job-post.png",
  },
  {
    id: 3,
    title: "Sr. Full Stack Developer",
    experience: "6 - 10 Years Experience",
    skills: ["React JS", "Node JS", "TypeScript"],
    img: "assets/img/job-post.png",
  },
];

const badges = ["badge-primary", "badge-success", "badge-info", "badge-danger"];

const Careers = ({ hideLayout = false }) => {
  return (
    <Layout noHeaderBg pageName={"careers"} layout={hideLayout}>
      <section className="careers">
        <div className="container">
          <div className="row flex align-items-center mt-5">
            <div className="col-xs-12 col-md-5">
              <h3 className="careers-banner">Design, Code and Build with Us</h3>
              <p className="txt-green">Find your next Job at Idealite</p>
            </div>
            <div className="col-xs-12 col-md-7 text-right">
              <img src="assets/img/careers.png" className="img-fluid" alt="careers" />
            </div>
          </div>

          <div className="row mt-5 mb-5">
            <h4>Requirements</h4>
            <div className="d-flex flex-wrap gap-30 pt-10">
              {jobs.map((job) => (
                <div className="card job-card" key={job.id}>
                  <img className="card-img-top img-fluid" src={job.img} alt={job.title} />
                  <div className="card-body">
                    <h5 className="card-title">{job.title}</h5>
                    <p className="card-text txt-green">{job.experience}</p>
                    <p className="job-badge">
                      {job.skills.map((skill, i) => (
                        <>
                          <span className={`badge ${badges[i]}`}>{skill}</span> &nbsp;
                        </>
                      ))}
                    </p>
                    <a href="/#" className="btn btn-primary job-btn">
                      Apply
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Careers;
