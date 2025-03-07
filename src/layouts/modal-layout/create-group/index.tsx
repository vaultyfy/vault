import { ModalLayout } from "@components/ui";
import { CreateGroupContent } from "./create-group-content";

interface CreateGroupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreateGroupModal = ({
  isOpen,
  onClose,
}: CreateGroupModalProps) => {
  return (
    <ModalLayout
      isOpen={isOpen}
      onClose={onClose}
      title="Create Group"
      size="xl"
      px="14px"
      py="32px"
    >
      <CreateGroupContent />
    </ModalLayout>
  );
};
