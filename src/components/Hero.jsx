import {
  ArrowLeftRight,
  Bell,
  Calendar,
  ChartNoAxesCombined,
  DollarSign,
  EllipsisVertical,
  Eye,
  House,
  LayoutDashboard,
  Link,
  LogOut,
  Plus,
  Search,
  Settings,
  Upload,
  UserRound,
  Users,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <div className="h-screen w-full  overflow-hidden">
      <div className="py-8 container flex flex-col justify-center items-center">
        <p className="bg-primary/10 text-primary p-2 px-3 rounded-full text-xs">
          A Design Breakthrough
        </p>
        <h1 className="my-4 md:text-5xl text-4xl font-bold max-w-lg text-center leading-tight">
          The World&#39;s Laziest Design System.
        </h1>
        <p className="max-w-3xl w-full text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis,
          accusantium totam. Aperiam ab sed, ratione neque aut eveniet minima
          aliquid dolor! Iure recusandae a iste pariatur, assumenda ad officia
          accusantium.
        </p>

        <div className="flex items-center gap-4 mt-8 sm:flex-nowrap flex-wrap">
          <button className="flex items-center justify-center gap-2 py-3 px-6 rounded-full border text-sm font-medium border-gray-300 shadow sm:w-auto w-full">
            <Upload />
            Download For Free
          </button>
          <button className="flex items-center justify-center gap-2 py-3 px-6 text-sm font-medium bg-primary text-white shadow rounded-full sm:w-auto w-full">
            {" "}
            <LogOut /> Sign In Today
          </button>
        </div>
      </div>

      <div className="bg-gradient-to-b to-primary/20 from-white px-6">
        <div className="max-w-6xl w-full bg-white rounded-xl  mx-auto flex ">
          <div className="w-14 h-full p-2 border-r px-2">
            <div className="w-10 h-10 bg-primary text-white flex items-center justify-center rounded-xl font-semibold text-xl mx-auto">
              V
            </div>
            <div className="mt-4 space-y-4 flex flex-col items-center justify-center">
              <button className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full">
                <House className="text-gray-600" />
              </button>
              <button className="w-12 h-12 flex items-center justify-center border  rounded-full">
                <ChartNoAxesCombined className="text-gray-600" />
              </button>
              <button className="w-12 h-12 flex items-center justify-center border  rounded-full">
                <UserRound className="text-gray-600" />
              </button>
              <button className="w-12 h-12 flex items-center justify-center border  rounded-full">
                <Calendar className="text-gray-600" />
              </button>
              <button className="w-12 h-12 flex items-center justify-center border  rounded-full">
                <Zap className="text-gray-600" />
              </button>
              <button className="w-12 h-12 flex items-center justify-center border  rounded-full">
                <Bell className="text-gray-600" />
              </button>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between w-full p-4 border-b">
              <h4 className="font-bold text-lg">Demographics Report</h4>
              <div className="flex items-center gap-2">
                <button className="flex items-center  border w-10 h-10 justify-center rounded-full">
                  <Search size={18} className="text-gray-600" />
                </button>
                <button className="flex items-center justify-center text-sm gap-2 border p-2 rounded-full px-3 text-gray-800">
                  <ArrowLeftRight size={18} className="text-gray-600" />
                  Customize
                </button>
                <button className="flex items-center justify-center text-sm gap-2 border p-2 rounded-full px-3 text-gray-800">
                  <Link size={18} className="text-gray-600" />
                  Add New
                </button>
              </div>
            </div>

            <div className="px-4 py-4">
              <StatisticsGrid />

              <div className="p-4 border rounded-xl mt-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <p className="text-lg font-semibold">Traget Demographics</p>
                  <div className="flex items-center border border-primary px-4 py-1 rounded-full gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <p className="text-sm text-primary">Beta</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Calendar size={20} className="text-gray-500" />
                  <Settings size={20} className="text-gray-500" />
                  <button className="flex items-center justify-center py-1 px-4 bg-primary text-white rounded-full">
                    <Plus size={18} />
                    <span>Add User</span>
                  </button>
                </div>
              </div>

              <div className="flex py-4">
                <div className="flex-1 relative"></div>

                <div className="w-72 border-l h-full px-2">
                  <h2 className="text-2xl font-bold">
                    <CountUp
                      start={0}
                      end={9881118}
                      prefix=""
                      suffix=""
                      duration={2.75}
                    />
                  </h2>
                  <p className="text-sm my-2 text-gray-600">
                    Global Customer Worldwide
                  </p>

                  <div className="space-y-4">
                    <WorldWideCard country="United State" total={90} />
                    <WorldWideCard country="Brazil" total={75} />
                    <WorldWideCard country="Japan" total={40} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

const StatisticsGrid = () => {
  return (
    <div className="grid lg:grid-cols-4 gap-4">
      <StatisticCard
        title="Audience"
        value={1876}
        prefix=""
        suffix=""
        icon={Users}
        badge="New"
        percentage={12}
      />
      <StatisticCard
        title="Visitors"
        value={21022}
        prefix=""
        suffix=""
        icon={Eye}
        percentage={-8}
      />
      <StatisticCard
        title="Conversion"
        value={9881118}
        prefix=""
        suffix=""
        icon={LayoutDashboard}
        percentage={8.9}
      />
      <StatisticCard
        title="Total Rate"
        value={187}
        prefix=""
        suffix="%"
        icon={DollarSign}
        badge="Beta"
        percentage={72}
      />
    </div>
  );
};

const StatisticCard = ({
  title,
  value,
  prefix,
  suffix,
  icon: Icon,
  badge,
  percentage,
}) => {
  // eslint-disable-next-line no-unused-vars
  const [start, setStart] = useState(0);

  useEffect(() => {
    setStart(value);
  }, [value]);

  return (
    <div className="p-4 bg-white border rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h5 className="font-medium">{title}</h5>
          {badge && (
            <p className="p-1 rounded-full px-2 bg-primary/10 text-sm font-medium text-primary">
              {badge}
            </p>
          )}
        </div>
        <EllipsisVertical className="text-gray-400" size={18} />
      </div>
      <p className="text-2xl font-bold font-poppins my-2">
        <CountUp
          start={0}
          end={value}
          prefix={prefix}
          suffix={suffix}
          duration={2.75}
        />
      </p>
      <div className="flex justify-between gap-2">
        <div className="flex items-center gap-2">
          <span
            className={`${
              percentage > 0 ? "text-green-600" : "text-red-600"
            } flex items-center`}
          >
            {percentage > 0 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"
                />
              </svg>
            )}{" "}
            <span className="text-sm">
              {percentage > 0 ? `+${percentage}%` : `${percentage}%`}
            </span>
          </span>
          <span className="text-sm"> vs last month</span>
        </div>
        <Icon className="text-gray-500" size={20} />
      </div>
    </div>
  );
};

const WorldWideCard = ({ country, flag, total }) => {
  return (
    <div>
      <div>{flag}</div>
      <div>
        <div className="flex items-center justify-between">
          <p className="text-xs font-medium">{country}</p>
          <p className="text-xs font-medium">{total}%</p>
        </div>

        <div className="w-full h-2 rounded-full bg-gray-200 mt-1">
          <div
            style={{ width: `${total}%` }}
            className="bg-primary h-full duration-300 ease-in-out rounded-full"
          ></div>
        </div>
      </div>
    </div>
  );
};
