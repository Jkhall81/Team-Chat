"use client";

import { CreateWorkspaceModal } from "@/features/workspaces/components/create-workspace-modal";
import { CreateChannelModal } from "@/features/channels/components/create-channel-modal";
import { useState, useEffect } from "react";

export const Modals = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return;
  return (
    <>
      <CreateChannelModal />
      <CreateWorkspaceModal />
    </>
  );
};
