import { Button } from "baseui/button";
import { InputField } from "../../components/InputField";
import { SSWAppLayout } from "../../layout/SSWAppLayout";
import SSWEventPageLayout from "../../layout/SSWEventPageLayout";

type Props = {};

function CreateEvent({}: Props) {
  return (
    <SSWAppLayout>
      <SSWEventPageLayout pageTitle="Create event">
        <form method="post" action="/api/forms/create-event">
          <InputField label="Name" name="name" />
          <InputField label="Location" name="location" />
          <InputField label="Price" name="price" type="number" />
          <InputField
            label="Start time"
            name="startTime"
            type="datetime-local"
          />
          <InputField label="End time" name="endTime" type="datetime-local" />

          <Button type="submit">Create</Button>
        </form>
      </SSWEventPageLayout>
    </SSWAppLayout>
  );
}

export default CreateEvent;
