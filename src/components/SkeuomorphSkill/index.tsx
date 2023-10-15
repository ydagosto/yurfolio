import styles from "./index.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const SkeuomorphSkill = (props: any) => {
  const { label, logo } = props;
  return (
    <div className={cx("skeuomorph-button-container")}>
      <button title={label} disabled={true} className={cx("skeuomorph-button")}>
        {logo}
        <span className={cx("tooltiptext")}>{label}</span>
      </button>
    </div>
  );
};

export default SkeuomorphSkill;
