import { Button } from "../components/Buttons.Components/Button.component";

export const ButtonGroup = ({ dataset }) => {
  return (
    <>
      {dataset.map((button) => {
        return (
          <Button
            onClick={button.onClick}
            type={button.type}
            data={button.data}
          />
        );
      })}
    </>
  );
};
