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
  Telemetry,
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
  showTitles: boolean;
}

interface CoreTeam extends Team {
  name: string;
  description: string;
  leader?: Member;
}

const captainTeam: UnManagedTeam = {
  name: 'team_captain_title',
  description: 'team_captain_description',
  showTitles: true,
  members: [m.ÉtienneLG, m.NathanGT, m.EtienneT],
};

const administrationTeam: UnManagedTeam = {
  name: 'team_administration_title',
  description: 'team_administration_description',
  showTitles: true,
  members: [m.JulesL, m.ÉmileL, m.DenisT, m.GhanaisM, m.ZackaryB, m.BenjaminT],
};

const RoboguardTeam: ProjectTeam = {
  project: Roboguard,
  leader: m.PhilippeD,
  members: [],
};

const StackEleTeam: ProjectTeam = {
  project: StackEle,
  leader: m.AntoineM,
  members: [m.ThomasRS, m.AlexisGA],
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
  members: [m.HugoB, m.FelixT, m.AudreyCMN],
};

const ControlTeam: ProjectTeam = {
  project: ControleBaseMobile,
  leader: m.IlianaDC,
  members: [m.RodrigoATP, m.SamuelKB],
};

const ShepperdTeam: ProjectTeam = {
  project: ArtificialIntelligence,
  leader: m.EtienneT,
  members: [],
};

const GUITeam: ProjectTeam = {
  project: GUI,
  leader: m.WilliamC,
  members: [],
};

const TelemetrieTeam: ProjectTeam = {
  project: Telemetry,
  leader: m.YanniH,
  members: [],
};

const BatterieTeam: ProjectTeam = {
  project: Batterie,
  leader: m.AntonyA,
  members: [m.KoffiK],
};

const TopBoxTeam: ProjectTeam = {
  project: TopBox,
  leader: m.GhanaisM,
  members: [m.ClementDJ, m.MarieJeanneB, m.TommyV, m.YoanP],
};

const MaintenanceTeam: UnManagedTeam = {
  name: 'team_maintenance_title',
  description: 'team_maintenance_description',
  showTitles: false,
  members: [
    m.JulesL,
    m.EtienneT,
    m.ÉtienneLG,
    m.DenisT,
    m.AntoineM,
    m.PhilippeD,
    m.AntonyA,
    m.IlianaDC,
  ],
};

const definedTeams: (ProjectTeam | UnManagedTeam)[] = [
  captainTeam,
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
  showTitles: false,
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
