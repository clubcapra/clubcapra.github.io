import type { Project } from './projects';
import type { Member } from './members';

import {
  Batterie,
  ControleBaseMobile,
  Communication,
  Carthographie,
  RoboticArm,
  Roboguard,
  ArtificialIntelligence,
  StackEle,
  GUI,
  Telemetrie,
  TopBox,
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
  members: [
    m.ÉtienneLG,
    m.NathanGT,
    m.EtienneT,
    m.JulesL,
    m.DenisT,
    m.AntoineM,
  ],
};

const RoboguardTeam: ProjectTeam = {
  project: Roboguard,
  leader: m.PhilippeD,
  members: [],
};

const StackEleTeam: ProjectTeam = {
  project: StackEle,
  leader: m.AntoineM,
  members: [],
};

const OvisTeam: ProjectTeam = {
  project: RoboticArm,
  leader: m.WilliamT,
  members: [m.EtienneT, m.RobertoL],
};

const CommunicationTeam: ProjectTeam = {
  project: Communication,
  leader: m.DenisT,
  members: [m.ÉmileL],
};

const CarthographieTeam: ProjectTeam = {
  project: Carthographie,
  leader: m.NathanGT,
  members: [m.JaniceB, m.AngeOliveDN],
};

const ControlTeam: ProjectTeam = {
  project: ControleBaseMobile,
  leader: m.IlianaDC,
  members: [],
};

const ShepperdTeam: ProjectTeam = {
  project: ArtificialIntelligence,
  leader: m.EtienneT,
  members: [],
};

const GUITeam: ProjectTeam = {
  project: GUI,
  leader: m.YanniH,
  members: [],
};

const TelemetrieTeam: ProjectTeam = {
  project: Telemetrie,
  leader: m.YanniH,
  members: [],
};

const BatterieTeam: ProjectTeam = {
  project: Batterie,
  leader: m.AntonyA,
  members: [],
};

const TopBoxTeam: ProjectTeam = {
  project: TopBox,
  leader: m.AntoineM,
  members: [],
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
  OvisTeam,
  CommunicationTeam,
  CarthographieTeam,
  ControlTeam,
  ShepperdTeam,
  GUITeam,
  TelemetrieTeam,
  BatterieTeam,
  TopBoxTeam,
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
