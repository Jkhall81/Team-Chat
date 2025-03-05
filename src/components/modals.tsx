"use client";

import { CreateWorkspaceModal } from "@/features/workspaces/components/create-workspace-modal";
import { useState, useEffect } from "react";

export const Modals = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return;
  return (
    <>
      <CreateWorkspaceModal />
    </>
  );
};
