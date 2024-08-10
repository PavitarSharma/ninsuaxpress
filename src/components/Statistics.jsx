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
  Plus,
  Search,
  Settings,
  UserRound,
  Users,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

const Statistics = () => {
  return (
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
  );
};

export default Statistics;

const StatisticsGrid = () => {
  return (
    <div className="grid lg:grid-cols-4 gap-4">
      <StatisticCard
        title="Total branch"
        value={75}
        prefix=""
        suffix=""
        icon={Users}
        badge="New"
        percentage={12}
        des="last year"
      />
      <StatisticCard
        title="Supply Chain Moment"
        value={700000}
        prefix=""
        suffix=""
        icon={Eye}
        percentage={-8}
        des="metric ton per year"
      />
      <StatisticCard
        title="Man Power"
        value={1280}
        prefix=""
        suffix=""
        icon={LayoutDashboard}
        percentage={8.9}
        des="3.9 in last year"
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

const StatisticCard = ({ title, value, prefix, suffix, des, badge }) => {
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
        +
        <CountUp
          start={0}
          end={value}
          prefix={prefix}
          suffix={suffix}
          duration={2.75}
        />
      </p>
      <p>{des}</p>
      {/* <div className="flex justify-between gap-2">
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
            <span className="text-sm"> vs last {time}</span>
          </div>
          <Icon className="text-gray-500" size={20} />
        </div> */}
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
