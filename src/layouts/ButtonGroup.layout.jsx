import { Button } from "../components/Buttons.Components/Button.component";

export const ButtonGroup = ({ funcObj, dataset }) => {
  return (
    <>
      {dataset.map((button) => {
        return (
          <Button
            id={button.id}
            funclis={funcObj}
            type={button.type}
            data={button.data}
          />
        );
      })}
    </>
  );
};
