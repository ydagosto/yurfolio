import styles from "./index.module.scss";
import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

const SkeuomorphButton = (props: any) => {
  const { label, dir } = props;

  const navigate = useNavigate();

  const coursesPage = (direction: string) => {
    navigate(direction);
  };

  return (
    <div className={cx("skeuomorph-button-container")}>
      <button
        onClick={coursesPage.bind(this, dir)}
        className={cx("skeuomorph-button")}
      >
        {label}
      </button>
    </div>
  );
};

export default SkeuomorphButton;
