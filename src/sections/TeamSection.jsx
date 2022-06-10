import {ReactComponent as TeamSvg} from '../assets/images/teams/team_shape.svg'
import TeamCard from '../components/teams/TeamCard';
import teamData from '../mocks/team.mock'

function TeamSection({data=teamData}) {
  return (
    <>
      <section id="team-section" className="text-gray-600 body-font">
        <TeamSvg style={{ enableBackground: "new 0 0 800 600" }} />
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="w-full px-4">
              <div
                className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]"
                data-aos="zoom-in"
              >
                <span className="font-semibold text-lg text-white mb-2 block">
                  OUR TEAM
                </span>
                <h2
                  className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-white
                  mb-4
                  underLine2
                  "
                >
                  We're all about teamwork
                </h2>
                {/* <p className="text-white">
                  We have done multpile projects under diffrent categroies.
                </p> */}
              </div>
            </div>
            {data && data.map(mem => <TeamCard key={mem.key} {...mem} />)}
          </div>
        </div>
      </section>
    </>
  );
}

export default TeamSection;
