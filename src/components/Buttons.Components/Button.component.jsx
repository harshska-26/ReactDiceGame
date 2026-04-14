import "../Buttons.Components/Button.component.css";

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

export const PrimaryButton = ({ data }) => {
  return (
    <div className="primary-button">
      <button className="prim-but">{data}</button>
    </div>
  );
};
export const TransparentButton = ({ id, funclis, data }) => {
  const buttonfunc = () => {
    if (funclis && funclis[id]) {
      return funclis[id]();
    }
  };
  return (
    <div className="transparent-button">
      <button className="transp-but" onClick={buttonfunc}>
        {data}
      </button>
    </div>
  );
};

export const SecondaryButton = ({ data }) => {
  return (
    <div className="secondary-button">
      <button className="sec-but">{data}</button>
    </div>
  );
};
