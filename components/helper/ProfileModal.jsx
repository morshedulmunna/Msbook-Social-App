import { Modal, useMantineTheme } from "@mantine/core";

function ProfileModal({ modalOpen, setModalOpen }) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      opened={modalOpen}
      onClose={() => setModalOpen(false)}
    >
      <form>
        <h2>You Info</h2>
      </form>
    </Modal>
  );
}

export default ProfileModal;
