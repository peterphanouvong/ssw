import { ActiveKidsForm } from "../../components/ActiveKidsForm";
import { SSWAppLayout } from "../../layout/SSWAppLayout";
import SSWProfilePageLayout from "../../layout/SSWProfilePageLayout";

type Props = {};

export default function ActiveKids({}: Props) {
  return (
    <SSWAppLayout>
      <SSWProfilePageLayout pageTitle="Active Kids Voucher">
        <ActiveKidsForm />
      </SSWProfilePageLayout>
    </SSWAppLayout>
  );
}
