import { ModalLayout } from "@components/ui";
import { CreateGroupContent } from "./components/create-group-content";
import { BaseModalProps } from "@utils/constants";

interface CreateGroupModalProps extends BaseModalProps {}

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
      <CreateGroupContent onClose={onClose} />
    </ModalLayout>
  );
};
