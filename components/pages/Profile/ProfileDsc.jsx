import React, { useState } from "react";

import ProfileModal from "../../helper/ProfileModal";

const ProfileDsc = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col items-start justify-center w-full p-5 bg-gray-100 rounded-lg drop-shadow-lg">
        <p
          onClick={() => setModalOpen(true)}
          className="text-sm text-blue-600 cursor-pointer "
        >
          Edit Profile
          <ProfileModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </p>
        <h3 className="font-bold">Your Info</h3>
      </div>
    </>
  );
};

export default ProfileDsc;
