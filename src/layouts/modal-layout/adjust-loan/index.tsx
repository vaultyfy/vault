import { ModalLayout } from "@components/ui";
import { CreateGroupContent } from "@layouts/modal-layout";
import { AdjustLoanContent } from "./adjust-loan-content";

interface AdjustLoanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdjustLoanModal = ({ isOpen, onClose }: AdjustLoanModalProps) => {
  return (
    <ModalLayout
      isOpen={isOpen}
      onClose={onClose}
      title="Adjust Loan"
      size="xl"
      px="14px"
      py="32px">
      <AdjustLoanContent />
    </ModalLayout>
  );
};
