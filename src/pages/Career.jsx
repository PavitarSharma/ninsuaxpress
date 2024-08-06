import { Clock, CloudUpload, MapPin } from "lucide-react";
import { openings } from "../constants";
import { Input } from "../components";
import { useEffect } from "react";

const Career = () => {

  useEffect(() => {
    document.title = "Career | Vinsum Axpress";
  }, [])
  
  return (
    <>
      <section className="py-16 px-4">
        <div className="container">
          <a
            href="#discover"
            className="border border-primary text-primary rounded-full py-2.5 px-3 text-sm font-medium"
          >
            We&#39;re hiring
          </a>
          <h1 className="text-5xl font-semibold my-6">
            Be part of our mission
          </h1>
          <p className="max-w-2xl font-poppins">
            We&#39;re looking for passionate people to join us on our mission.
            We value flat hierarchies, clear communication, and full ownership
            and responsibility.
          </p>
        </div>
      </section>

      <section id="discover" className="py-16 px-4 bg-primary/5 rounded">
        <div className="container grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {openings.map((opening, index) => {
            return (
              <div
                key={index}
                className="bg-white rounded p-4 shadow-sm hover:-translate-y-2 transition duration-500"
              >
                <h1 className="text-xl font-semibold">{opening.position}</h1>
                <div className="my-4 space-y-4">
                  <div className="flex items-center gap-2">
                    <MapPin size={20} className="text-gray-600" />
                    <span className="text-sm">{opening.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={20} className="text-gray-600" />
                    <span className="text-sm">{opening.role}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Opening: </span>
                    <span className="text-sm">{opening.vacancy}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Experience: </span>
                    <span className="text-sm">{opening.experience}</span>
                  </div>
                </div>

                {/* <div className="mt-6 flex justify-end">
                  <a
                    href="#application"
                    className="rounded-full bg-primary text-white py-2.5 px-4 font-medium"
                  >
                    Apply
                  </a>
                </div> */}
              </div>
            );
          })}
        </div>
      </section>

      <section id="application" className="py-16 px-4">
        <h1 className="text-center font-bold text-4xl mb-10">
          Apply for the role
        </h1>
        <div className="container">
          <form className="space-y-6 max-w-4xl w-full mx-auto">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
              <Input label="Full Name" id="fullName" />
              <Input label="Email" id="email" type="email" />
              <Input label="Phone" id="phone" />
              <Input label="Experience" id="experience" />
              <Input label="Current CTC" id="currentCtc" />
              <Input label="Expected CTC" id="expectedCtc" />
            </div>
            <label
              htmlFor="file"
              className="flex flex-col items-center justify-center w-full border-2 border-dashed border-gray-300 rounded-lg h-56 !mt-10"
            >
              <CloudUpload size={42} className="text-gray-600" />
              <p className="mb-2 text-sm text-gray-500">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500">
                PDF, DOCX, etc (MAX. 800x400px)
              </p>
              <input type="file" id="file" hidden />
            </label>
            <button
              type="submit"
              className="bg-primary text-white rounded-full px-6 py-3 font-medium"
            >
              Submit Application
            </button>

            <div className="bg-gray-200 rounded-lg py-4 px-2 !mt-10">
              <p className="text-center">
                Interested canditates shall send in their detailed resume to:{" "}
                <span className="text-primary font-medium">
                  info@vinsumaxpress.com
                </span>
              </p>
            </div>
          </form>
        </div>
      </section>

      <section className="py-16 px-4">
      <h1 className="text-center font-bold text-4xl mb-10">Grow With Us</h1>
        <div className="container grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 ">
          <div className="p-8 bg-white border border-gray-300 rounded-tr-[62px] rounded-bl-[62px] relative bg-gradient-to-b from-slate-50 to-primary/10">
            <h4 className="text-2xl font-bold mb-4">Why We?</h4>
            <p>
              Our sense of commitment & our dedicated & professionally managed
              team has enabled us to fix highest standards and cater to
              customer&#39;s total satisfaction. We believe that with our
              ability to anticipate and fulfill the aspirations of our customers
              and respond competitively will make us to become the best in
              trade.
            </p>
          </div>
          <div className="p-8 bg-white border border-gray-300 rounded-tr-[62px] rounded-bl-[62px] relative bg-gradient-to-b from-slate-50 to-primary/10">
            <h4 className="text-2xl font-bold mb-4">Work Culture</h4>
            <p>
              Our Work culture is the key driving force that help us align our
              organisation towards customer sensitivity and deliver beyond
              customer&#39;s expectations. The attitude, behavior, action and
              delivery promise of every Vinsum Axpress family member takes us to
              the next level of work culture towards excellence. These corporate
              values will propel the organisation to achieve new heights in
              business in the long run.
            </p>
          </div>
          <div className="p-8 bg-white border border-gray-300 rounded-tr-[62px] rounded-bl-[62px] relative bg-gradient-to-b from-slate-50 to-primary/10">
            <h4 className="text-2xl font-bold mb-4">
              Training And Development
            </h4>
            <p>
              Training and development is a subsystem of any organization. It
              ensures that randomness is reduced and learning or behavioral
              change takes place in structured format. We help employees in
              achieving their personal goals, which in turn, enhances the
              individual contribution to an organization through this.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Career;
