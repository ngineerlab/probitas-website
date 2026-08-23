import {
  RiComputerLine,
  RiCpuLine,
  RiSeedlingLine,
  RiServerLine,
  RiTeamLine,
  RiUserHeartLine,
} from '@remixicon/react';

export const programIcons = {
  RiComputerLine,
  RiSeedlingLine,
  RiTeamLine,
  RiUserHeartLine,
  RiServerLine,
  RiCpuLine,
} as const;

export type ProgramIconKey = keyof typeof programIcons;
