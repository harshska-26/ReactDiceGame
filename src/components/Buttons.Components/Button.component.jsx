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
      <button class="prim-but">{data}</button>
    </div>
  );
};

export const TransparentButton = ({ data }) => {
  return (
    <div className="transparent-button">
      <button class="transp-but">{data}</button>
    </div>
  );
};

export const SecondaryButton = ({ data }) => {
  return (
    <div className="secondary-button">
      <button class="sec-but">{data}</button>
    </div>
  );
};
