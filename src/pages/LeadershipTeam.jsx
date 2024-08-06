import { Link } from "react-router-dom";
import { leadershipTeams } from "../constants";
import { MoveRight } from "lucide-react";

const LeadershipTeam = () => {
  return (
    <div className="">
      <div className="p-4 py-14">
        <div className="flex flex-col items-center justify-center">
          <p className="bg-primary/10 p-2 rounded text-sm text-primary font-medium">
            We&#39;re Hiring
          </p>
          <h3 className="sm:text-3xl text-2xl my-3 font-bold">
            Let&#39;s Meet Our Team
          </h3>
          <p className="text-center font-poppins text-gray-800 max-w-4xl w-full">
            Since inception, Vinsum Axpres has benefitted from a superior
            leadership team - from our strong, active and independent board
            members to our experienced and globally-distributed senior
            management team.
          </p>
          <div className="mt-8 space-x-6">
            <Link
              to="/about"
              className="border border-gray-300 py-3 px-4 rounded-full font-poppins"
            >
              About Us
            </Link>
            <button className="ml-4 py-3 px-4 rounded-full bg-primary text-white text-sm font-poppins">
              Job Openings
            </button>
          </div>
        </div>
      </div>

      <div className="py-8 grid xl:grid-cols-4 md:grid-cols-3  min-[476px]:grid-cols-2 gap-6 container">
        {leadershipTeams.map((member, index) => {
          return (
            <div
              key={index}
              className="p-4 rounded flex flex-col items-center space-y-4"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-20 h-20 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold font-poppins text-lg text-center">
                  {member.name}
                </h4>
                <p className="text-sm text-primary font-medium text-center">
                  {member.position}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={member.twitter}
                  target="_blank"
                  className="text-gray-600 text-lg"
                >
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  className="text-gray-600 text-lg"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                  href={member.facebook}
                  target="_blank"
                  className="text-gray-600 text-lg"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-primary/10 py-16 mt-14">
        <div className="container flex items-center justify-between flex-wrap gap-6">
          <div>
            <h3 className="text-xl font-bold">Join Our Team Now</h3>
            <p className="max-w-2xl mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
              distinctio pariatur inventore illum odit perferendis itaque vitae
              est praesentium temporibus.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 border border-primary p-2.5 text-primary font-medium px-4 rounded-full group">
              Learn More <MoveRight size={20} />
            </button>
            <button className="flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-full font-medium">
              Get Started <MoveRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipTeam;
