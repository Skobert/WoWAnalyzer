import CoreCombatLogParser from 'parser/core/CombatLogParser';
import DamageDone from 'parser/shared/modules/DamageDone';

import Abilities from './modules/Abilities';
import AlwaysBeCasting from './modules/features/AlwaysBeCasting';
import Channeling from './modules/features/Channeling';
import Checklist from './modules/features/checklist/Module';
import CooldownThroughputTracker from './modules/features/CooldownThroughputTracker';
import SpellUsable from './modules/features/SpellUsable';

import Enrage from './modules/buffdebuff/Enrage';

import MissedRampage from './modules/spells/MissedRampage';
import RampageCancelled from './modules/spells/RampageCancelled';
import Recklessness from './modules/spells/Recklessness';

import AngerManagement from './modules/talents/AngerManagement';
import Carnage from './modules/talents/Carnage';
import Bladestorm from './modules/talents/Bladestorm';
import DragonRoar from './modules/talents/DragonRoar';
import FrothingBerserker from './modules/talents/FrothingBerserker';
import FuriousSlashTimesByStacks from './modules/talents/FuriousSlashTimesByStacks';
import FuriousSlashUptime from './modules/talents/FuriousSlashUptime';
import ImpendingVicory from './modules/talents/ImpendingVictory';
import Siegebreaker from './modules/talents/Siegebreaker';
import RecklessAbandon from './modules/talents/RecklessAbandon';
import Warpaint from './modules/talents/Warpaint';

import ColdStealHotBlood from './modules/azerite/ColdSteelHotBlood';
import RecklessFlurry from './modules/azerite/RecklessFlurry';
import UnbridledFerocity from './modules/azerite/UnbridledFerocity';

class CombatLogParser extends CoreCombatLogParser {
  static specModules = {
    damageDone: [DamageDone, {showStatistic: true}],

    abilities: Abilities,
    alwaysBeCasting: AlwaysBeCasting,
    channeling: Channeling,
    checklist: Checklist,
    cooldownThroughputTracker: CooldownThroughputTracker,
    spellUsable: SpellUsable,

    enrageUptime: Enrage,

    missedRampage: MissedRampage,
    rampageCancelled: RampageCancelled,
    recklessness: Recklessness,

    angerManagement: AngerManagement,
    carnage: Carnage,
    bladestorm: Bladestorm,
    dragonRoar: DragonRoar,
    frothingBerserker: FrothingBerserker,    
    furiousSlashTimesByStacks: FuriousSlashTimesByStacks,
    furiousSlashUptime: FuriousSlashUptime,
    impendingVictory: ImpendingVicory,
    siegebreaker: Siegebreaker,
    recklessAbandon: RecklessAbandon,
    warpaint: Warpaint,

    coldStealHotBlood: ColdStealHotBlood,
    recklessFlurry: RecklessFlurry,
    unbridledFerocity: UnbridledFerocity,

    // Overrides default PrePotion
    //prePotion: PrePotion, TODO: Update this to BFA and ensure it works properly with parser/core/Modules/Features/Checklist2/PreparationRuleAnalyzer.js
  };
}

export default CombatLogParser;
