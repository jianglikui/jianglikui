import * as React from "react";
import * as styles from "./index.css";
import { IoIosCloseCircle, IoIosSettings } from "react-icons/io";
import { format } from "date-fns";
import Popover from "../components/Popover";

function Launcher() {
  const [date, setDate] = React.useState(new Date());
  const time = format(date, "HH:mm");
  React.useEffect(() => {
    var timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div>
      <div className={styles.statusBar}>
        <span className={styles.icons}>
          <IoIosSettings />
        </span>
        <span>
          <Popover
            content={
              <div style={{ whiteSpace: "nowrap" }}>
                {format(date, "yyyy年M月d日")}
              </div>
            }
          >
            <span className={styles.time}>{time}</span>
          </Popover>
        </span>
        <span className={styles.icons}>
          <IoIosCloseCircle className={styles.closeIcon} />
        </span>
      </div>
    </div>
  );
}

export default Launcher;
