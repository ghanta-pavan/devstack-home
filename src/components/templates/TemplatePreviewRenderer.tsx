"use client";

import React from "react";
import { PersonaProfile } from "@/types/templates";
import {
  T1DemoHub,
  T1TerminalHacker,
  T1AcademicScholar,
  T1BuildInPublic
} from "./InternTemplates";
import {
  T2BentoBuilder,
  T2FullStackCraftsman,
  T2OpenSourceDriver,
  T2ScannableResume
} from "./JuniorTemplates";
import {
  T3SystemDesignDeepDive,
  T3HighPerformanceSystems,
  T3ProductEngineer,
  T3TechLeadMentor
} from "./SeniorTemplates";
import {
  T4EnterpriseArchitect,
  T4ThoughtLeader,
  T4StaffMultiplier,
  T4SystemSimulation
} from "./PrincipalTemplates";
import {
  T5PeopleCulture,
  T5DoraExecution,
  T5OrgScaling,
  T5BridgeTechPeople
} from "./ManagerTemplates";
import {
  T6ExecutiveBriefing,
  T6VisionaryCto,
  T6GlobalVpEngineering,
  T6BoardroomDossier
} from "./ExecutiveTemplates";
import { TemplateATSResume } from "./TemplateATSResume";

interface Props {
  templateId: string;
  data: PersonaProfile;
  viewMode: "portfolio" | "webpage" | "ats" | "json";
}

export function TemplatePreviewRenderer({ templateId, data, viewMode }: Props) {
  if (viewMode === "ats") {
    return <TemplateATSResume data={data} />;
  }

  if (viewMode === "json") {
    return (
      <div className="relative">
        <pre className="p-6 bg-slate-950 text-emerald-400 rounded-xl overflow-x-auto text-xs font-mono leading-relaxed max-h-[550px]">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    );
  }

  // Render specific template
  switch (templateId) {
    // TIER 1: INTERNS
    case "t1_demo":
      return <T1DemoHub data={data} />;
    case "t1_terminal":
      return <T1TerminalHacker data={data} />;
    case "t1_academic":
      return <T1AcademicScholar data={data} />;
    case "t1_build_in_public":
      return <T1BuildInPublic data={data} />;

    // TIER 2: JUNIOR
    case "t2_bento":
      return <T2BentoBuilder data={data} />;
    case "t2_craftsman":
      return <T2FullStackCraftsman data={data} />;
    case "t2_oss":
      return <T2OpenSourceDriver data={data} />;
    case "t2_scannable":
      return <T2ScannableResume data={data} />;

    // TIER 3: SENIOR
    case "t3_system_design":
      return <T3SystemDesignDeepDive data={data} />;
    case "t3_high_perf":
      return <T3HighPerformanceSystems data={data} />;
    case "t3_product_eng":
      return <T3ProductEngineer data={data} />;
    case "t3_tech_lead":
      return <T3TechLeadMentor data={data} />;

    // TIER 4: PRINCIPAL
    case "t4_enterprise_arch":
      return <T4EnterpriseArchitect data={data} />;
    case "t4_thought_leader":
      return <T4ThoughtLeader data={data} />;
    case "t4_staff_multiplier":
      return <T4StaffMultiplier data={data} />;
    case "t4_sys_explorer":
      return <T4SystemSimulation data={data} />;

    // TIER 5: MANAGER
    case "t5_people_culture":
      return <T5PeopleCulture data={data} />;
    case "t5_dora_delivery":
      return <T5DoraExecution data={data} />;
    case "t5_org_scaling":
      return <T5OrgScaling data={data} />;
    case "t5_bridge_tech_people":
      return <T5BridgeTechPeople data={data} />;

    // TIER 6: EXECUTIVE
    case "t6_briefing":
      return <T6ExecutiveBriefing data={data} />;
    case "t6_visionary_cto":
      return <T6VisionaryCto data={data} />;
    case "t6_global_vp":
      return <T6GlobalVpEngineering data={data} />;
    case "t6_boardroom":
      return <T6BoardroomDossier data={data} />;

    default:
      return <T6ExecutiveBriefing data={data} />;
  }
}
