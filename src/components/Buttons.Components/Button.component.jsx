import { Popup } from "../../layouts/Popup.layout";
import "../Buttons.Components/Button.component.css";
import { FaDice } from "react-icons/fa";

export const Button = (props) => {
  const { type } = props;
  switch (type) {
    case "Primary":
      return <PrimaryButton {...props} />;

    case "Secondary":
      return <SecondaryButton {...props} />;

    case "Transparent":
      return <TransparentButton {...props} />;
  }
};

export const PrimaryButton = ({ id, funclis, data, icon: Icon }) => {
  const buttonfunc = () => {
    if (funclis && funclis[id]) {
      return funclis[id]();
    }
  };
  return (
    <div className="primary-button">
      <button className="prim-but" onClick={buttonfunc}>
        {Icon && <Icon className="button-icon" />}
        {data}
      </button>
    </div>
  );
};


export const TransparentButton = ({ id, funclis, data, icon: Icon }) => {
  const buttonfunc = () => {
    if (funclis && funclis[id]) {
      return funclis[id]();
    }
  };
  return (
    <div className="transparent-button">
      <button className="transp-but" onClick={buttonfunc}>
        {Icon && <Icon className="button-icon" />}
        {data}
      </button>
    </div>
  );
};

export const SecondaryButton = ({ id, data, funclis, icon: Icon }) => {
  const buttonfunc = () => {
    if (funclis && funclis[id]) {
      return funclis[id]();
    }
  };
  return (
    <div className="secondary-button">
      <button className="sec-but" onClick={buttonfunc}>
        {Icon && <Icon className="button-icon" />}
        {data}
      </button>
    </div>
  );
};
