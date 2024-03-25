// main.jsx\
import ActivityCalendar from "react-activity-calendar";
import { Tooltip as MuiTooltip } from "@mui/material";

const data = [
  {
    date: "2024-01-01",
    count: 0,
    level: 0,
  },
  {
    date: "2024-03-23",
    count: 30,
    level: 1,
  },
  {
    date: "2024-03-24",
    count: 60,
    level: 3,
  },
  {
    date: new Date().toISOString().split("T")[0],
    count: 0,
    level: 0,
  },
];
const minimalTheme = {
  light: ["hsl(0, 0%, 92%)", "green"],
};

const labels = {
  months: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  weekdays: [
    "Sun", // Sunday first!
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ],
  totalCount: "{{count}} minutes practiced in {{year}}",
  legend: {
    less: "Less",
    more: "More",
  },
};

const ContributionsCalendar = () => {
  return (
    <div>
      <ActivityCalendar
        data={data}
        blockSize={14}
        blockMargin={2}
        fontSize={16}
        colorScheme="light"
        labels={labels}
        theme={minimalTheme}
        renderBlock={(block, activity) => (
          <MuiTooltip
            title={`${activity.count} minutes of practice on ${activity.date}`}
          >
            {block}
          </MuiTooltip>
        )}
      />
    </div>
  );
};

export default ContributionsCalendar;
