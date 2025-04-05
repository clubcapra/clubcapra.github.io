import type { Project } from './projects';
import type { Member } from './members';

import {
  Carthographie,
  Crate,
  DetecteurRadiation,
  RoboticArm,
  Roboguard,
  ArtificialIntelligence,
  StackEle,
  Support,
  Winch,
} from './projects';

import m from './members';

interface Team {
  members: Member[];
}

interface ProjectTeam extends Team {
  project: Project;
  leader?: Member;
}

interface UnManagedTeam extends Team {
  name: string;
  description: string;
}

const administrationTeam: UnManagedTeam = {
  name: 'team_administration_title',
  description: 'team_administration_description',
  members: [m.NathanGT, m.ÉtienneLG, m.JohnE],
};

const RoboguardTeam: ProjectTeam = {
  project: Roboguard,
  leader: m.PhilippeD,
  members: [m.LouisM, m.NathanGT, m.YanniH],
};

const StackEleTeam: ProjectTeam = {
  project: StackEle,
  leader: m.AntoineM,
  members: [m.AntonyA, m.JeanCharlesF],
};

const RadiationTeam: ProjectTeam = {
  project: DetecteurRadiation,
  members: [m.ÉmileL, m.ThomasRS, m.DavidC],
};

const WinchTeam: ProjectTeam = {
  project: Winch,
  leader: m.ZackaryB,
  members: [m.KevinL],
};

const OvisTeam: ProjectTeam = {
  project: RoboticArm,
  leader: m.JulesL,
  members: [m.EtienneT, m.ChristianB],
};

const CarthographieTeam: ProjectTeam = {
  project: Carthographie,
  leader: m.DenisT,
  members: [m.JaniceB, m.AngeOliveDN],
};

const ShepperdTeam: ProjectTeam = {
  project: ArtificialIntelligence,
  leader: m.SamuelB,
  members: [m.ThomasJ, m.SimonB],
};

const SupportTeam: ProjectTeam = {
  project: Support,
  leader: m.GabrielMD,
  members: [m.AppolinaireSF],
};

const CrateTeam: ProjectTeam = {
  project: Crate,
  leader: m.MargotM,
  members: [m.PierreAlixP, m.SteaveJonathanI],
};

const MaintenanceTeam: UnManagedTeam = {
  name: 'team_maintenance_title',
  description: 'team_maintenance_description',
  members: [
    m.JulesL,
    m.EtienneT,
    m.ÉtienneLG,
    m.DenisT,
    m.AntoineM,
    m.PhilippeD,
    m.AntonyA,
    m.DavidC,
    m.KevinL,
  ],
};

const definedTeams: (ProjectTeam | UnManagedTeam)[] = [
  administrationTeam,
  RoboguardTeam,
  StackEleTeam,
  RadiationTeam,
  WinchTeam,
  OvisTeam,
  CarthographieTeam,
  ShepperdTeam,
  SupportTeam,
  CrateTeam,
  MaintenanceTeam,
];

const OtherProjectTeam: UnManagedTeam = {
  name: 'team_other_projects_title',
  description: 'team_other_projects_description',
  members: Object.values(m).filter(member => {
    return !definedTeams.some(
      team =>
        team.members.includes(member) || (team as ProjectTeam).leader === member
    );
  }),
};

export const teams: (ProjectTeam | UnManagedTeam)[] = [
  ...definedTeams,
  OtherProjectTeam,
];
