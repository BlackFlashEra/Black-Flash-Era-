/**
 * character.js
 * BLACK FLASH ERA — 전체 캐릭터 데이터
 *
 * 각 캐릭터 객체 필드:
 *   id           — 정렬용 고유 식별자 (소수점: 같은 티어 내 서브 캐릭터)
 *   tierId       — 티어 내 정렬 순서 (id와 동일)
 *   name         — 캐릭터 이름 (한국어)
 *   enName       — 캐릭터 이름 (영어)
 *   tier         — 티어 등급: GOD | SS | S | A | B | C | D | F
 *   role         — 역할: aoe | single | tank | healer | support
 *   aoeTierId    — 격투딜러 역할 내 정렬 순서 (해당 역할만)
 *   singleTierId — 술사딜러 역할 내 정렬 순서 (해당 역할만)
 *   tankTierId   — 탱커 역할 내 정렬 순서 (해당 역할만)
 *   healerTierId — 힐러 역할 내 정렬 순서 (해당 역할만)
 *   image        — 카드 썸네일 이미지 URL
 *   popupImage   — 팝업 상세 이미지 URL
 *   badge        — 뱃지 종류: ur | core | ssr
 *   badgeText    — 뱃지 표시 텍스트
 *   skills       — 스킬 목록 (한국어): [[이름, 설명], ...]
 *   enSkills     — 스킬 목록 (영어): [[이름, 설명], ...]
 */

const characters = [
  // ──────────────────────────────────────────────
  // GOD 티어
  // ──────────────────────────────────────────────
  {
    id: 1,
    tierId: 1,
    name: "결전의 자태 고죠 사토루",
    enName: "Gojo Satoru: Decisive Battle",
    tier: "GOD",
    role: "aoe",
    aoeTierId: 1,
    image: "https://i.imgur.com/DFgdD5m.jpeg",
    popupImage: "https://i.imgur.com/owMPNBH.jpeg",
    badge: "ur",
    badgeText: "UR",
    skills: [
      ["[근원] 영역전개· 무량공처",
       `전투 시작 시, 고죠 사토루는 모든 적에게 <span class="effect-buff">정체</span> 효과를 부여한다.<br>고죠 사토루가 필드에 있을때, 모든 아군 캐릭터가 받는 1회 피해량은 최대 HP의 25%를 초과하지 않으며, 해당 피해 제한 효과는 전투당 최대 3회 발동한다.`],
      ["[특성] 무한 패러독스",
         `<span class="level-text">레벨 1 :</span> 피해를 입을 시 공격자에게 <span class="effect-buff">정지</span> 효과를 부여하며, <span class="effect-buff">정지</span> 효과를 지닌 적이 고죠 사토루에게 가하는 피해가 7% 감소한다.
         <br><br>
         <span class="level-text">레벨 2 :</span> <span class="effect-buff">정지</span> 효과를 보유한 적이 고죠 사토루에게 입히는 피해가 11% 감소한다.
         <br><br>
         <span class="level-text">레벨 3 :</span> <span class="effect-buff">정지</span> 효과를 보유한 적이 고죠 사토루에게 입히는 피해가 15% 감소한다.
         <br><br>
         <span class="level-text">레벨 4 :</span> 전투 시작 후 10초 동안 직접 피해에 면역됩니다. 10초 내에 100회 피해를 입으면 효과가 조기 종료됩니다.
         <br><br><hr><br>
         <span class="effect-buff">정지</span> 가속 50% 감소, 2초마다 부여자 공격력의 100% 만큼 피해를 입는다.`],
      ["[스킬 1] 허식·자",
         `<span class="level-text">레벨 1 :</span> HP 20% 증가, 공격력 40% 증가
         <br><br>
         <span class="level-text">레벨 2 :</span> '창'은 피해량은 30% 만큼 체력을 회복하고,<br>'혁'은 5초동안 적의 방어력을 15% 감소시키며,<br>'자'는 두가지 효과를 동시에 발휘 합니다.
         <br><br>
         <span class="level-text">레벨 3 :</span> 창과 혁의 피해량이 75%로, 자의 매회 피해량이 100%로 증가한다.`],
      ["[스킬 2] 창의 순신",
         `<span class="level-text">레벨 1 :</span> 창을 연속으로 빠르게 사용하여 적에게 6회 순간이동 공격을 가한다. 매 공격 시 무작위로 1명이 적에게 공격력의 80% 만큼 피해를 준다.<br>공격 중 자신은 공격을 받지 않으며, 종료 시 마지막 대상 앞에 나타난다.
         <br><br>
         <span class="level-text">레벨 2 :</span> 공격 횟수가 8회로 증가
         <br><br>
         <span class="level-text">레벨 3 :</span> 매회 피해량이 공격력의 90%로 증가하며, 매 타격 시 15%의 확률로 1초동안 기절 시킵니다.`],
      ["[스킬 3] 술식 완전 정복",
         `<span class="level-text">레벨 1 :</span> HP 20% 증가, 공격력 40% 증가
         <br><br>
         <span class="level-text">레벨 2 :</span> HP 30% 증가, 공격력 60% 증가
         <br><br>
         <span class="level-text">레벨 3 :</span> HP 40% 증가, 공격력 80% 증가`],
      ["[스킬 4] 자동 술식",
         `<span class="level-text">레벨 1 :</span> 전투 진입 시 자신은 <span class="effect-buff">정지의 힘</span>을 획득하며, <span class="effect-buff">정지의 힘</span>은 전투당 7회 발동한다.
         <br><br>
         <span class="level-text">레벨 2 :</span> <span class="effect-buff">정지의 힘</span> 발동 시 모든 적에게 자신의 공격력 200% 만큼의 고정 피해를 입힙니다.
         <br><br><hr><br>
         <span class="effect-buff">정지의 힘</span> 1회 피격 시 받는 피해량이 자신의 최대 생명력의 13% 초과하지 않는다.`]
    ],
    enSkills: [
      ["Unlimited Void", "Domain Expansion & enemy immobilization"],
      ["Hollow Purple", "Wide-range fixed damage"],
      ["Spear", "Multi-hit attack"],
      ["Auto Technique", "Damage reduction"],
      ["In Progress", "Self-recovery"]
    ]
  },
  {
    id: 2,
    tierId: 2,
    name: "역대최강 고죠 사토루",
    enName: "Gojo Satoru: The Strongest",
    tier: "GOD",
    role: "single",
    singleTierId: 1,
    image: "https://i.imgur.com/peS0A2o.jpeg",
    popupImage: "https://i.imgur.com/53ak3GN.jpeg",
    badge: "ur",
    badgeText: "UR",
    skills: [
      ["[특성] 신성 각성",
       `<span class="level-text">레벨 1 :</span> 전투 중 매초 <span class="effect-buff">신성</span>을 1스택 획득합니다.<br><span class="effect-buff">신성</span>이 20스택에 도달하면 영역 전개: 무량공처를 발동하고 부유 상태가 됩니다.<br>영역은 전투 종료 시까지 지속됩니다.
       <br><br>
       <span class="level-text">레벨 2 :</span> 스택당 <span class="effect-buff">신성</span>이 증가하는 스킬 피해량이 1.5%로 증가 합니다.
       <br><br>
       <span class="level-text">레벨 3 :</span> 스택당 <span class="effect-buff">신성</span>이 증가하는 스킬 피해량이 2%로 증가합니다.
       <br><br>
       <span class="level-text">레벨 4 :</span> 전투 시작 시 <span class="effect-buff">신성</span> 20중첩을 획득합니다.
       <br><br><hr><br>
       <span class="effect-buff">신성</span> 스택당 스킬 피해가 1% 증가합니다. 최대50회 중첩됩니다. 전투 종료 시까지 지속 됩니다. 해제되지 않습니다.`],
      ["[스킬 1] 무량공처 전역박탈",
       `<span class="level-text">레벨 1 :</span> 영역을 전개하여, 전장의 적에게 7회 80% 공격력의 물리 피해를 입히고, 영역전개 상태에 있을 때, 자신에게 5겹 <span class="effect-buff">신성</span>이 있을 때마다 1회 피해를 추가로 입힙니다.
       <br><br>
       <span class="level-text">레벨 2 :</span> 영역전개가 회수될 때, 각각 1회 100% 공격력의 고정 피해를 추가로 입히고 적을 넉다운시킵니다.
       <br><br>
       <span class="level-text">레벨 3 :</span> 단일 기본 피해량이 공격력의 100%로 증가합니다.`],
      ["[스킬 2] 주술•창",
       `<span class="level-text">레벨 1 :</span> 적의 뒤에 나타나 대상에게 3회 80% 공격력의 물리 피해를 입히고, 영역전개 상태에 있을 때, 자신에게 20겹 <span class="effect-buff">신성</span>이 있을 때마다 1개 대상을 추가로 증가합니다.
       <br><br>
       <span class="level-text">레벨 2 :</span> 단일 피해량이 공격력 120%로 증가한다.
       <br><br>
       <span class="level-text">레벨 3 :</span> 해당 스킬은 50% 기본 치명타 확률이 존재합니다`],
      ["[스킬 3] 역대 최강",
       `<span class="level-text">레벨 1 :</span> HP 20% 증가, 공격력 40% 증가
       <br><br>
       <span class="level-text">레벨 2 :</span> HP 30% 증가, 공격력 60% 증가
       <br><br>
       <span class="level-text">레벨 3 :</span> HP 40% 증가, 공격력 80% 증가`],
      ["[스킬 4] 허식•자",
       `<span class="level-text">레벨 1 :</span> 전방에 발사하여, 경로상의 적들에게 180% 공격력의 피해를 입히고, 영역전개 상태에 있을때, 자신에게 10겹 <span class="effect-buff">신성</span>이 있을 때마다 적을 1초 동안 기절시키며, 최대 5초 지속됩니다.
       <br><br>
       <span class="level-text">레벨 2 :</span> 피해량이 공격력 240%로 증가한다.`]
    ],
    enSkills: [
      ["[Trait] Divine Awakening",
       `<span class="level-text">Level 1 :</span> Gains 1 stack of <span class="effect-buff">Divinity</span> every second during battle.<br>When <span class="effect-buff">Divinity</span> reaches 20 stacks, activates Domain Expansion: Unlimited Void and enters a floating state.<br>The Domain remains active until the battle ends.
       <br><br>
       <span class="level-text">Level 2 :</span> Skill damage increased per stack of <span class="effect-buff">Divinity</span> is raised to 1.5%.
       <br><br>
       <span class="level-text">Level 3 :</span> Skill damage increased per stack of <span class="effect-buff">Divinity</span> is raised to 2%.
       <br><br>
       <span class="level-text">Level 4 :</span> Gains 20 stacks of <span class="effect-buff">Divinity</span> at the start of battle.
       <br><br><hr><br>
       <span class="effect-buff">Divinity</span> increases Skill Damage by 1% per stack. Can stack up to 50 times. Lasts until the battle ends and cannot be dispelled.`],
      ["[Skill 1] Unlimited Void - Total Deprivation",
       `<span class="level-text">Level 1 :</span> Expands the Domain, dealing Physical Damage equal to 80% Attack Power 7 times to all enemies on the battlefield. While in Domain Expansion state, deals 1 additional hit for every 5 stacks of <span class="effect-buff">Divinity</span>.
       <br><br>
       <span class="level-text">Level 2 :</span> When the Domain Expansion ends, deals Fixed Damage equal to 100% Attack Power once more and knocks enemies down.
       <br><br>
       <span class="level-text">Level 3 :</span> Base damage per hit increases to 100% Attack Power.`],
      ["[Skill 2] Cursed Technique: Blue",
       `<span class="level-text">Level 1 :</span> Appears behind the target and deals Physical Damage equal to 80% Attack Power 3 times. While in Domain Expansion state, gains 1 additional target for every 20 stacks of <span class="effect-buff">Divinity</span>.
       <br><br>
       <span class="level-text">Level 2 :</span> Damage per hit increases to 120% Attack Power.
       <br><br>
       <span class="level-text">Level 3 :</span> This skill has a base Critical Hit Rate of 50%.`],
      ["[Skill 3] The Strongest in History",
       `<span class="level-text">Level 1 :</span> HP +20%, Attack +40%
       <br><br>
       <span class="level-text">Level 2 :</span> HP +30%, Attack +60%
       <br><br>
       <span class="level-text">Level 3 :</span> HP +40%, Attack +80%`],
      ["[Skill 4] Hollow Technique: Purple",
       `<span class="level-text">Level 1 :</span> Fires forward, dealing damage equal to 180% Attack Power to enemies in its path. While in Domain Expansion state, stuns enemies for 1 second for every 10 stacks of <span class="effect-buff">Divinity</span>, up to a maximum of 5 seconds.
       <br><br>
       <span class="level-text">Level 2 :</span> Damage increases to 240% Attack Power.`]
    ]
  },
  {
    id: 2.1,
    tierId: 2.1,
    name: "천여폭군",
    enName: "Heavenly Tyrant",
    tier: "GOD",
    role: "aoe",
    aoeTierId: 2,
    image: "https://i.imgur.com/jkXSlfy.jpeg",
    popupImage: "https://i.imgur.com/4XLmDlj.jpeg",
    badge: "ur",
    badgeText: "UR",
    skills: [
      ["[특성] 천여폭군",
       `<span class="level-text">레벨 1 :</span> 자신의 HP가 20% 감소할 때마다, 자신의 치명타 피해량이 15% 증가하고, 일반 공격을 발동할 때, 공격력 100%의 보호막을 획득하며, 3초 동안 지속됩니다.<br>해당 보호막은 중첩하지 않습니다.
       <br><br>
       <span class="level-text">레벨 2 :</span> 자신의 HP가 15% 감소할 때마다, 자신의 치명타 피해량이 15% 증가하고, 일반 공격을 발동할 때, 공격력 100%의 보호막을 획득하며, 3초 동안 지속됩니다.<br>해당 보호막은 중첩하지 않습니다.
       <br><br>
       <span class="level-text">레벨 3 :</span> 자신의 HP가 10% 감소할 때마다, 자신의 치명타 피해량이 15% 증가하고, 일반 공격을 발동할 때, 공격력 100%의 보호막을 획득하며, 3초 동안 지속됩니다.<br>해당 보호막은 중첩하지 않습니다.
       <br><br>
       <span class="level-text">레벨 4 :</span> HP가 50% 이하일 때 자신 최대HP 6%의 고정피해를 추가로 입힙니다.`],
      ["[스킬 1] 종언·석혼단마참",
       `<span class="level-text">레벨 1 :</span> 석혼과 용골 쌍칼을 휘두르며, 공격력이 가장 높은 적에게 돌진하여, 연속적인 넓은 범위의 참격을 가하여, 총 900% 공격력의 피해를 입히고, 시전 시 자신 50%의 현재 HP를 소모합니다.
       <br><br>
       <span class="level-text">레벨 2 :</span> 피해 총량이 1350%로 증가합니다.
       <br><br>
       <span class="level-text">레벨 3 :</span> 시전 완료 후, 자신 총 피해량 35%의 HP를 회복합니다.`],
      ["[스킬 2] 쇄공 열참",
       `<span class="level-text">레벨 1 :</span> 궁극의 힘으로 공간을 파괴하여 전방의 적에게 공격력의 200% 피해를 입히고 2초간 기절시키며, 시전 중 <span class="effect-buff">슈퍼 아머</span> 상태가 되고 필드 위의 모든 대상에게 <span class="effect-buff">영혼 봉인</span> 효과를 부여하며, 시전 시 현재 HP의 15%를 소모합니다.
       <br><br>
       <span class="level-text">레벨 2 :</span> 피해량이 공격력 240%로 증가한다.
       <br><br>
       <span class="level-text">레벨 3 :</span> 피해량이 공격력 280%로 증가한다.
       <br><br><hr><br>
       <span class="effect-buff">슈퍼 아머</span> 모든 제어 효과 및 다운 면역
       <br><br>
       <span class="effect-buff">영혼 봉인</span> 모든 스킬 시전을 차단하지만, 일반 공격 및 현재 시전 중인 스킬은 중단하지 않음`],
      ["[스킬 3] 천여주박",
       `<span class="level-text">레벨 1 :</span> HP 20% 증가, 공격력 40% 증가
       <br><br>
       <span class="level-text">레벨 2 :</span> HP 30% 증가, 공격력 60% 증가
       <br><br>
       <span class="level-text">레벨 3 :</span> HP 40% 증가, 공격력 80% 증가`],
      ["[스킬 4] 석혼 영역",
       `<span class="level-text">레벨 1 :</span> 치명피해를 받을 시, 자신의 모든 디버프 효과를 제거하고 6초의 <span class="effect-buff">체력 고정</span> 효과를 획득합니다.<br><span class="effect-buff">체력 고정</span> 효과가 사라질 때 자신 35%의 HP를 회복하고, 한 전투당 1회 발동합니다.
       <br><br>
       <span class="level-text">레벨 2 :</span> <span class="effect-buff">체력 고정</span> 효과의 지속 시간이 8초로 연장되고, 해제불가로 변경됩니다.
       <br><br><hr><br>
       <span class="effect-buff">체력 고정</span> HP는 1pt 아래로 떨어지지 않습니다.`]
    ],
    enSkills: [
      ["[Trait] Heavenly Tyrant", `<span class="level-text">Lv 1:</span> Each time own HP decreases by 20%, Crit DMG +15%. On basic attack, gain a shield equal to 100% ATK lasting 3s (non-stackable).<br><br><span class="level-text">Lv 4:</span> When HP is below 50%, deal additional fixed damage equal to 6% max HP.`],
      ["[Skill 1] Terminus·Demon Slash", `<span class="level-text">Lv 1:</span> Wield twin blades and rush the highest ATK enemy, dealing continuous wide-range slashes for a total of 900% ATK damage, consuming 50% current HP on cast.<br><br><span class="level-text">Lv 2:</span> Total damage increases to 1350%.`],
      ["[Skill 2] Crushing Frenzy Slash", `<span class="level-text">Lv 1:</span> Destroy space with ultimate power, dealing 200% ATK damage and stunning the target for 2s. Gain <span class="effect-buff">Super Armor</span> during cast, and apply <span class="effect-buff">Soul Seal</span> to all targets on the field.`],
      ["[Skill 3] Heavenly Shackles", `<span class="level-text">Lv 1:</span> HP +20%, ATK +40%<br><br><span class="level-text">Lv 2:</span> HP +30%, ATK +60%<br><br><span class="level-text">Lv 3:</span> HP +40%, ATK +80%`],
      ["[Skill 4] Stone Soul Domain", `<span class="level-text">Lv 1:</span> Upon receiving critical damage, remove all debuffs and gain <span class="effect-buff">HP Lock</span> for 6 seconds.<br><br><hr><br><span class="effect-buff">HP Lock</span> HP cannot drop below 1pt.`]
    ]
  },

  // ──────────────────────────────────────────────
  // SS 티어
  // ──────────────────────────────────────────────
  {
    id: 3,
    tierId: 3,
    name: "[완전해방] 료멘 스쿠나",
    enName: "Ryomen Sukuna [Full Release]",
    tier: "SS",
    role: "single",
    singleTierId: 1,
    image: "https://i.imgur.com/4nfCCE8.jpeg",
    popupImage: "https://i.imgur.com/qvHKp8y.jpeg",
    badge: "core",
    badgeText: "SSR Core",
    skills: [
      ["원초의 저주", "다중 시전 확률 증가 및 최대 5회 재시전"],
      ["복마어주자", "광역 참격 및 피해 증폭"],
      ["신무참", "기절 및 단일 폭딜"],
      ["저주의 근원", "다중 시전 발동 및 회복"],
      ["해체", "광역 범위 참격"],
      ["개", "필살 광역 일격"]
    ],
    enSkills: [
      ["Primal Curse", "Increased multi-cast chance (up to 5 recasts)"],
      ["Malevolent Shrine", "AoE slash with DMG amplification"],
      ["Divine Slash", "Stun & single-target burst damage"],
      ["Source of Curse", "Multi-cast activation & recovery"],
      ["Dismantle", "Wide-range slash"],
      ["Cleave", "Fatal wide-range strike"]
    ]
  },
  {
    id: 4.1,
    tierId: 4.1,
    name: "쿠루스 하나",
    enName: "Hana Kurusu",
    tier: "SS",
    role: "tank",
    tankTierId: 1,
    image: "https://i.imgur.com/PDa3LfQ.jpeg",
    popupImage: "https://i.imgur.com/DuyHytT.jpeg",
    badge: "core",
    badgeText: "SSR Core",
    skills: [
      ["[특성] 래더",
       `<span class="level-text">레벨 1 :</span> 자신이 빛의 고치 상태일 때, 매초 모든 적에게 공격력의 50%만큼 피해를 줍니다.
       <br><br>
       <span class="level-text">레벨 2 :</span> 부활 시 모든 아군에게 쿠루스 하나 공격력의 200%만큼 생명력을 회복시킵니다.
       <br><br>
       <span class="level-text">레벨 3 :</span> 자신이 빛의 고치 상태일 때, 모든 적의 공격력을 15% 감소시킵니다.
       <br><br>
       <span class="level-text">레벨 4 :</span> 기본 부활 시간이 8초로 감소합니다. 자신이 빛의 고치 상태일때 어느 한쪽 캐릭터가 전투에서 패배하면, 자신의 부활 남은 시간이 절반으로 감소하고, 부활 시간은 최소 4초 미만으로 떨어지지 않습니다.`],
      ["[스킬 1] 신광 보조",
       `<span class="level-text">레벨 1 :</span> 성광 결계를 펼쳐, 4초 동안 모든 적에게 6회에 걸쳐 공격력의 120%에 해당하는 피해를 주고, 모든 아군이 이후 8초 동안 받는 피해를 35% 감소시키며, 생명력이 가장 낮은 아군을 4회 치료하며 매번 래서화 공격력의 100% 만큼 생명력을 회복시킵니다.<br>시전중 자신은 피해 및 제어효과에 면역됩니다.
       <br><br>
       <span class="level-text">레벨 2 :</span> 매번 피해량이 공격력의 150%로 증가하고, 동시에 생명력이 가장 낮은 아군 2명을 치유합니다.
       <br><br>
       <span class="level-text">레벨 3 :</span> 공격 시 피해량이 공격력의 180%로 증가하고 대상의 버프 효과 1개를 해제하며, 치유 시마다 쿠루스 하나를 추가로 치유하고 대상의 디버프 효과 1개를 정화합니다.`],
      ["[스킬 2] 찬란한 별의 강림",
       `<span class="level-text">레벨 1 :</span> 현재 생명력의 10%를 소모하여 빛의 혜성을 소환해 대상을 강타하며, 대상에게 공격력의 280% 피해를 입히고, 대상과 그 주변의 좁은 범위 내 모든 적에게 공격력의 200% 피해를 입힙니다.
       <br><br>
       <span class="level-text">레벨 2 :</span> 혜성이 목표 위치에 6초 동안 지속되는 플레어를 남기며, 플레어 안의 적들에게 매초 쿠루스 하나 공격력의 100% 피해를 줍니다.
       <br><br>
       <span class="level-text">레벨 3 :</span> 혜성은 주요 대상에게 추가로 쿠루스 하나 최대 생명력의 10%에 해당하는 고정피해를 입히고, 3초 동안 <span class="effect-buff">스킬 제한</span> 상태를 부여합니다.
       <br><br><hr><br>
       <span class="effect-buff">스킬 제한</span> 현재 스킬을 중단시키며, 상태 지속 중에는 모든 스킬 사용이 금지됩니다.`],
      ["[스킬 3] 천사 빙의",
       `<span class="level-text">레벨 1 :</span> HP 40% 증가, 공격력 20% 증가
       <br><br>
       <span class="level-text">레벨 2 :</span> HP 60% 증가, 공격력 30% 증가
       <br><br>
       <span class="level-text">레벨 3 :</span> HP 80% 증가, 공격력 40% 증가`],
      ["[스킬 4] 성약의 고치",
       `<span class="level-text">레벨 1 :</span> 라이치화가 전투에서 패배하면 빛의 고치가 된다. 12초 후 라이치화는 고치에서 부활하여 100%의 생명력을 회복하고, 주변 적에게 200% 공격력의 피해를 입힌다. 매 부활마다 이후 부활 시간이 2초 증가한다.<br>빛의 고치 상태에서는 자신이 생존 영웅으로 간주되지 않으며, 어떤 스킬효과의 영향도 받지 않는다.
       <br><br>
       <span class="level-text">레벨 3 :</span> 부활 시 주변 적에게 주는 피해가 240%로 증가하고, 2초 기절을 부여합니다.`]
    ],
    enSkills: [
      ["[Trait] Ladder", `<span class="level-text">Lv 1:</span> While in Cocoon of Light state, deal 50% ATK damage to all enemies each second.<br><br><span class="level-text">Lv 4:</span> Base revival time reduced to 8 seconds.`],
      ["[Skill 1] Holy Light Support", `<span class="level-text">Lv 1:</span> Deploy a sacred barrier dealing 120% ATK damage 6 times to all enemies over 4 seconds, while reducing all allies' damage taken by 35% for 8 seconds.`],
      ["[Skill 2] Descent of the Brilliant Star", `<span class="level-text">Lv 1:</span> Consume 10% current HP to summon a light comet to strike the target, dealing 280% ATK damage.`],
      ["[Skill 3] Angel Possession", `<span class="level-text">Lv 1:</span> HP +40%, ATK +20%<br><br><span class="level-text">Lv 2:</span> HP +60%, ATK +30%<br><br><span class="level-text">Lv 3:</span> HP +80%, ATK +40%`],
      ["[Skill 4] Sacred Covenant Cocoon", `<span class="level-text">Lv 1:</span> When defeated in battle, she becomes the Cocoon of Light. After 12 seconds, she revives from the cocoon with 100% HP.`]
    ]
  },
  {
    id: 6,
    tierId: 6,
    name: "게토 스구루",
    enName: "Suguru Geto",
    tier: "SS",
    role: "healer",
    healerTierId: 1,
    image: "https://i.imgur.com/Edt3sZg.jpeg",
    popupImage: "https://i.imgur.com/jr7X0Zp.jpeg",
    badge: "core",
    badgeText: "SSR Core",
    skills: [
      ["주령조술", "아군 공격 증가"],
      ["천조원야", "광역 힐"],
      ["주령 가호", "보호막 부여"],
      ["반전 술식", "지속 회복"]
    ],
    enSkills: [
      ["Cursed Spirit Manipulation", "Team ATK boost"],
      ["Thousand Blessings", "AoE heal"],
      ["Spirit Ward", "Shield grant"],
      ["Reverse Technique", "Continuous recovery"]
    ]
  },
  {
    id: 10,
    tierId: 10,
    name: "[청년] 고죠 사토루",
    enName: "Gojo Satoru [Young]",
    tier: "SS",
    role: "single",
    singleTierId: 2,
    image: "https://i.imgur.com/pNiNf5W.jpeg",
    popupImage: "https://i.imgur.com/eqCEnP2.jpeg",
    badge: "core",
    badgeText: "SSR Core",
    skills: [["", ""], ["", ""], ["", ""], ["", ""]]
  },
  {
    id: 11.1,
    tierId: 11.1,
    name: "후시구로 토우지",
    enName: "Toji Fushiguro",
    tier: "SS",
    role: "tank",
    tankTierId: 2,
    image: "https://i.imgur.com/I0CJbO2.jpeg",
    popupImage: "https://i.imgur.com/Z8da75o.jpeg",
    badge: "core",
    badgeText: "SSR Core",
    skills: [["", ""], ["", ""], ["", ""], ["", ""]]
  },
  {
    id: 12,
    tierId: 12,
    name: "옷코츠 유타",
    enName: "Yuta Okkotsu",
    tier: "SS",
    role: "tank",
    tankTierId: 1,
    image: "https://i.imgur.com/BElgjxv.jpeg",
    popupImage: "https://i.imgur.com/1AVzepO.jpeg",
    badge: "core",
    badgeText: "SSR Core",
    skills: [["", ""], ["", ""], ["", ""], ["", ""]]
  },
  {
    id: 15,
    tierId: 15,
    name: "이에이리 쇼코",
    enName: "Shoko Ieiri",
    tier: "SS",
    role: "support",
    image: "https://i.imgur.com/gkKKb9W.jpeg",
    popupImage: "https://i.imgur.com/cQ9tqWQ.jpeg",
    badge: "core",
    badgeText: "SSR Core",
    skills: [["", ""], ["", ""], ["", ""], ["", ""]]
  },

  // ──────────────────────────────────────────────
  // S 티어
  // ──────────────────────────────────────────────
  {
    id: 4,
    tierId: 4,
    name: "죠고",
    enName: "Jogo",
    tier: "S",
    role: "single",
    singleTierId: 2,
    image: "https://i.imgur.com/HC7aiYP.jpeg",
    popupImage: "https://i.imgur.com/30vlflV.jpeg",
    badge: "core",
    badgeText: "SSR Core",
    skills: [["", ""], ["", ""], ["", ""], ["", ""]]
  },
  {
    id: 5,
    tierId: 5,
    name: "쵸소우",
    enName: "Choso",
    tier: "S",
    role: "tank",
    tankTierId: 1,
    image: "https://i.imgur.com/OcFAf1P.jpeg",
    popupImage: "https://i.imgur.com/dmFMcC9.jpeg",
    badge: "core",
    badgeText: "SSR Core",
    skills: [["", ""], ["", ""], ["", ""], ["", ""]]
  },
  {
    id: 7,
    tierId: 7,
    name: "하나미",
    enName: "Hanami",
    tier: "S",
    role: "support",
    image: "https://i.imgur.com/VIc1HGx.jpeg",
    popupImage: "https://i.imgur.com/ZwLJul4.jpeg",
    badge: "core",
    badgeText: "SSR Core",
    skills: [["", ""], ["", ""], ["", ""], ["", ""]]
  },
  {
    id: 8,
    tierId: 8,
    name: "우로 타카코",
    enName: "Takako Uro",
    tier: "S",
    role: "healer",
    image: "https://i.imgur.com/5UKVZCH.jpeg",
    popupImage: "https://i.imgur.com/TzWD3mt.jpeg",
    badge: "core",
    badgeText: "SSR Core",
    skills: [
      ["[특성] 우주환영",
       `<span class="level-text">레벨 1 :</span> 일반 공격 시 (우수라단 발동 확률/발사 수)와 동일한 확률로 한 번에 최대 2개의 우수라단을 발사한다.
       <br><br>
       <span class="level-text">레벨 2 :</span> 일반 공격 시 (우수라단 발동 확률/발사 수)와 동일한 확률로 한 번에 최대 3개의 우수라단을 발사한다.
       <br><br>
       <span class="level-text">레벨 3 :</span> 일반 공격 시 (우수라단 발동 확률/발사 수)와 동일한 확률로 한 번에 최대 4개의 우수라단을 발사한다.
       <br><br>
       <span class="level-text">레벨 4 :</span> 자신의 생명력이 처음으로 70%, 40%, 15% 미만으로 감소 시 즉시 오로라 허계를 1회 시전한다.<br>해당 효과는 0.5초마다 최대 1회 발동한다`],
      ["[스킬 1] 오로라 허계",
       `<span class="level-text">레벨 1 :</span> 영역을 전개하여 적 전체에게 공격력의 400%만큼 피해를 입히고, 동시에 자신의 공격력의 600%만큼 자신을 제외한 아군의 생명력을 회복시킨다.<br>첫 시전 시 10초 동안 자신의 급속이 50% 증가한다.
       <br><br>
       <span class="level-text">레벨 2 :</span> 피해량이 공격력의 500%로 증가하고, 치료량이 공격력의 700%로 증가합니다.
       <br><br>
       <span class="level-text">레벨 3 :</span> 피해량이 공격력의 600%로, 치유량이 공격력의 800%로 증가한다.<br>동시에 아군 전체의 공격력을 15% 증가시키고 적 전체의 공격력을 15% 감소시키며, 해당 효과는 8초 동안 지속된다`],
      ["[스킬 2] 우수라단",
       `<span class="level-text">레벨 1 :</span> 일반 공격이 30%의 확률로 목표에게 우수라탄을 발사하도록 변경된다.<br>우수라탄은 일직선상의 모든 적에게 공격력의 200%만큼 피해를 입히고, 범위 내 아군의 생명력을 공격력의 200%만큼 회복시킨다.
       <br><br>
       <span class="level-text">레벨 2 :</span> 기본 확률이 36%로 증가한다.<br>우수라탄은 적에게 부여된 치유형 버프 효과를 1개 해제한다.
       <br><br>
       <span class="level-text">레벨 3 :</span> 우수라탄이 1회 발동될 때마다 우수라탄의 최종 피해량 및 치유량이 5% 증가하며, 최대 100%까지 증가한다`],
      ["[스킬 3] 천공의 그림자",
       `<span class="level-text">레벨 1 :</span> HP 20% 증가, 공격력 40% 증가
       <br><br>
       <span class="level-text">레벨 2 :</span> HP 30% 증가, 공격력 60% 증가
       <br><br>
       <span class="level-text">레벨 3 :</span> HP 40% 증가, 공격력 80% 증가`],
      ["[스킬 4] 액막이 성력",
       `<span class="level-text">레벨 1 :</span> 전공 술식을 해방해 아군을 보호하고, 모든 아군에게 <span class="effect-buff">성력 부여</span>
       <br><br>
       <span class="level-text">레벨 2 :</span> 전투 중 자신의 회피가 10% 증가한다. 회피할 때마다 5초 동안 가속이 5% 증가하며, 최대 20%까지 증가한다.
       <br><br><hr><br>
       <span class="effect-buff">성력 부여</span><br>여피해형 디버프를 1개 정화한다. 또한 회피와 명중을 각각 30% 증가시키며, 이 효과는 6초 동안 지속된다.`]
    ],
    enSkills: [
      ["[Trait] Cosmic Illusion", `<span class="level-text">Lv 1:</span> On basic attack, fire up to 2 Uraura-dan at once with the same probability as (Uraura-dan trigger rate / shots).<br><br><span class="level-text">Lv 4:</span> When own HP first drops below 70%, 40%, or 15%, immediately cast Aurora Phantom once.`],
      ["[Skill 1] Aurora Phantom", `<span class="level-text">Lv 1:</span> Deploy a domain dealing 400% ATK damage to all enemies, while recovering 600% ATK HP for all allies except self.`],
      ["[Skill 2] Uraura-dan", `<span class="level-text">Lv 1:</span> Basic attacks gain a 30% chance to fire Uraura-dan. It deals 200% ATK damage to all enemies in a line and recovers 200% ATK HP for nearby allies.`],
      ["[Skill 3] Shadow of the Sky", `<span class="level-text">Lv 1:</span> HP +20%, ATK +40%<br><br><span class="level-text">Lv 2:</span> HP +30%, ATK +60%<br><br><span class="level-text">Lv 3:</span> HP +40%, ATK +80%`],
      ["[Skill 4] Divine Power Blessing", `<span class="level-text">Lv 1:</span> Release the full power of the technique to protect allies, granting all allies <span class="effect-buff">Divine Blessing</span>. Evasion and Accuracy each +30% for 6 seconds.`]
    ]
  },
  {
    id: 9,
    tierId: 9,
    name: "츠쿠모 유키",
    enName: "Yuki Tsukumo",
    tier: "S",
    role: "aoe",
    aoeTierId: 1,
    image: "https://i.imgur.com/8Edx1OE.jpeg",
    popupImage: "https://i.imgur.com/raagMK8.jpeg",
    badge: "core",
    badgeText: "SSR Core",
    skills: [["", ""], ["", ""], ["", ""], ["", ""]]
  },
  {
    id: 11,
    tierId: 11,
    name: "하카리 킨지",
    enName: "Kinji Hakari",
    tier: "S",
    role: "support",
    image: "https://i.imgur.com/pNG6rEz.jpeg",
    popupImage: "https://i.imgur.com/5tYnWYI.jpeg",
    badge: "core",
    badgeText: "SSR Core",
    skills: [["", ""], ["", ""], ["", ""], ["", ""]]
  },
  {
    id: 13,
    tierId: 13,
    name: "카시모 하지메",
    enName: "Hajime Kashimo",
    tier: "S",
    role: "single",
    singleTierId: 1,
    image: "https://i.imgur.com/G8wjpPR.jpeg",
    popupImage: "https://i.imgur.com/4BMxZXV.jpeg",
    badge: "core",
    badgeText: "SSR Core",
    skills: [
      ["[특성] 뇌신인",
       `<span class="level-text">레벨 1 :</span> 창성추 시전 시 28% 확률로 모든 아군이 8초 동안 총 240의 주력을 회복하며, 대상의 <span class="effect-buff">뇌흔</span> 1중첩마다 확률이 2% 증가한다.
       <br><br>
       <span class="level-text">레벨 2 :</span> 창성추 시전 시 28% 확률로 모든 아군이 8초 동안 총 320의 주력을 회복하며, 대상의 <span class="effect-buff">뇌흔</span> 1중첩마다 확률이 4% 증가한다.
       <br><br>
       <span class="level-text">레벨 3 :</span> 창뢰성추 시전 시 28% 확률로 모든 아군이 8초 동안 총 400의 주력을 회복하며, 대상의 <span class="effect-buff">뇌흔</span> 1중첩마다 확률이 6% 증가한다.
       <br><br>
       <span class="level-text">레벨 4 :</span> <span class="effect-buff">뇌흔</span> 1겹마다 모든 아군의 공격에 2%의 치명타 확률이 추가로 붙습니다.<br>자신이 치명타 시 모든 아군의 치명타 피해가 4% 증가하고, 3초 동안 지속되며, 최대 10겹 중첩됩니다`],
      ["[스킬 1] 창뢰성추",
       `<span class="level-text">레벨 1 :</span> 한번에 대량의 전하를 방출해 뇌전 구체를 형성하여 적을 공격하고, 단일 적에게 6회 160% 공격력의 피해를 입힙니다.<br>타깃이 보유한 <span class="effect-buff">뇌흔</span> 1겹마다 해당 스킬에 추가로 5%의 치명타 확률 및 5%의 치명타 피해가 적용됩니다.
       <br><br>
       <span class="level-text">레벨 2 :</span> 매회 피해량이 공격력의 190%로 증가한다.
       <br><br>
       <span class="level-text">레벨 3 :</span> 매회 피해량이 공격력의 220%로 증가합니다.<br>스킬 종료 시 자신의 치명타 확률이 10% 증가하고, 치명타 피해가 10% 증가하며, 15초 동안 지속되고, 최대로 3겹 중첩`],
      ["[스킬 2] 신뇌격",
       `<span class="level-text">레벨 1 :</span> 저장된 전하를 전방으로 방출하여 대상 적에게 280% 공격력의 피해를 입히고, 대상의 치명타 저항이 15% 감소하며, 6초간 지속된다.<br>해당 디버프 효과가 존재할때 아군이 대상에게 치명타 시 <span class="effect-buff">뇌흔</span>을 부여하고, 추가로 30의 주력을 획득하며, 해당 효과는 0.6초마다 1회만 발동한다.
       <br><br>
       <span class="level-text">레벨 2 :</span> 피해량이 공격력 350%로 증가한다.
       <br><br>
       <span class="level-text">레벨 3 :</span> 피해량이 공격력의 400%로 증가하고, 아군이 치명타 시 획득한 주력이 40pt로 증가합니다`],
      ["[스킬 3] 뇌의 주술",
       `<span class="level-text">레벨 1 :</span> HP 20% 증가, 공격력 40% 증가
       <br><br>
       <span class="level-text">레벨 2 :</span> HP 30% 증가, 공격력 60% 증가
       <br><br>
       <span class="level-text">레벨 3 :</span> HP 40% 증가, 공격력 80% 증가`],
      ["[스킬 4] 뇌흔",
       `<span class="level-text">레벨 1 :</span> 전투 중 자신의 치명타 확률이 15% 증가합니다. 치명타 시 적에게 1겹의 <span class="effect-buff">뇌흔</span>을 부여합니다.
       <br><br>
       <span class="level-text">레벨 2 :</span> 전투 중 자신의 치명타 확률이 20% 증가합니다.
       <br><br><hr><br>
       <span class="effect-buff">뇌흔</span> 1겹당 적이 주는 피해가 5% 감소하고 자신이 대상을 공격 시 4%의 추가 치명타 확률이 붙으며, 최대 12겹까지 중첩됩니다.`]
    ],
    enSkills: [
      ["[Trait] Thunder God Lineage", `<span class="level-text">Lv 1:</span> Thunder Spear cast has a 28% chance to recover 240 total HP for all allies over 8s.<br><br><span class="level-text">Lv 4:</span> Each stack of <span class="effect-buff">Thunder Mark</span> adds 2% Crit Rate to all allies' attacks.`],
      ["[Skill 1] Thunder Spear", `<span class="level-text">Lv 1:</span> Release a massive charge to form a lightning orb, dealing 6 hits of 160% ATK damage to a single enemy.<br><br><span class="level-text">Lv 3:</span> Each hit increases to 220% ATK.`],
      ["[Skill 2] Divine Thunder Strike", `<span class="level-text">Lv 1:</span> Release stored charge forward, dealing 280% ATK damage to target and reducing their Crit Resistance by 15% for 6s.`],
      ["[Skill 3] Thunder Curse Technique", `<span class="level-text">Lv 1:</span> HP +20%, ATK +40%<br><br><span class="level-text">Lv 2:</span> HP +30%, ATK +60%<br><br><span class="level-text">Lv 3:</span> HP +40%, ATK +80%`],
      ["[Skill 4] Thunder Mark", `<span class="level-text">Lv 1:</span> Own Crit Rate +15% in combat. On Crit, apply 1 stack of <span class="effect-buff">Thunder Mark</span> to enemy.<br><br><hr><br><span class="effect-buff">Thunder Mark</span> Per stack reduces enemy's damage dealt by 5%, max 12 stacks.`]
    ]
  },

  // ──────────────────────────────────────────────
  // A 티어
  // ──────────────────────────────────────────────
  {
    id: 18,
    tierId: 18,
    name: "이오리 우타히메",
    enName: "Utahime Iori",
    tier: "A",
    role: "support",
    image: "https://i.imgur.com/3tkRUx6.jpeg",
    popupImage: "https://i.imgur.com/uSy0FFZ.jpeg",
    badge: "core",
    badgeText: "SSR core",
    skills: [["", ""], ["", ""], ["", ""], ["", ""]]
  },
  {
    id: 19,
    tierId: 19,
    name: "토도 아오이",
    enName: "Aoi Todo",
    tier: "A",
    role: "tank",
    tankTierId: 1,
    image: "https://i.imgur.com/HLaJNXC.jpeg",
    popupImage: "https://i.imgur.com/BcQvnLm.jpeg",
    badge: "core",
    badgeText: "SSR core",
    skills: [["", ""], ["", ""], ["", ""], ["", ""]]
  },
  {
    id: 22,
    tierId: 22,
    name: "야가 마사미치",
    enName: "Masamichi Yaga",
    tier: "A",
    role: "healer",
    image: "https://i.imgur.com/kwkjVkL.jpeg",
    popupImage: "https://i.imgur.com/SzTkS0a.jpeg",
    badge: "core",
    badgeText: "SSR core",
    skills: [["", ""], ["", ""], ["", ""], ["", ""]]
  },
  {
    id: 26,
    tierId: 26,
    name: "우라우메",
    enName: "Uraume",
    tier: "A",
    role: "single",
    singleTierId: 2,
    image: "https://i.imgur.com/rj7JPoV.jpeg",
    popupImage: "https://i.imgur.com/wHPRDSE.jpeg",
    badge: "core",
    badgeText: "SSR core",
    skills: [["", ""], ["", ""], ["", ""], ["", ""]]
  },
  {
    id: 28,
    tierId: 28,
    name: "료멘 스쿠나",
    enName: "Ryomen Sukuna",
    tier: "A",
    role: "single",
    singleTierId: 1,
    image: "https://i.imgur.com/7yiHu6a.jpeg",
    popupImage: "https://i.imgur.com/cv4megE.jpeg",
    badge: "core",
    badgeText: "SSR core",
    skills: [["", ""], ["", ""], ["", ""], ["", ""]]
  },
  {
    id: 29,
    tierId: 29,
    name: "미겔",
    enName: "Miguel",
    tier: "A",
    role: "tank",
    tankTierId: 2,
    image: "https://i.imgur.com/5wzs0Sq.jpeg",
    popupImage: "https://i.imgur.com/IcN3uUf.jpeg",
    badge: "core",
    badgeText: "SSR core",
    skills: [["", ""], ["", ""], ["", ""], ["", ""]]
  },
  {
    id: 35,
    tierId: 35,
    name: "판다",
    enName: "Panda",
    tier: "A",
    role: "tank",
    tankTierId: 3,
    image: "https://i.imgur.com/oti2RUo.jpeg",
    badge: "ssr",
    badgeText: "SSR",
    skills: [["", ""], ["", ""], ["", ""], ["", ""]]
  },

  // ──────────────────────────────────────────────
  // B 티어
  // ──────────────────────────────────────────────
  {
    id: 17,
    tierId: 17,
    name: "가쿠간지 요시노부",
    enName: "Yoshinobu Gakuganji",
    tier: "B",
    role: "single",
    singleTierId: 2,
    image: "https://i.imgur.com/jhkHKfl.jpeg",
    popupImage: "https://i.imgur.com/jj3pr5P.jpeg",
    badge: "core",
    badgeText: "SSR core",
    skills: [["", ""], ["", ""], ["", ""], ["", ""]]
  },
  {
    id: 20,
    tierId: 20,
    name: "카모 노리토시",
    enName: "Noritoshi Kamo",
    tier: "B",
    role: "single",
    singleTierId: 1,
    image: "https://i.imgur.com/gMWTUjy.jpeg",
    popupImage: "https://i.imgur.com/J4lFxKr.jpeg",
    badge: "core",
    badgeText: "SSR core",
    skills: [["", ""], ["", ""], ["", ""], ["", ""]]
  },
  {
    id: 21,
    tierId: 21,
    name: "이누마키 토게",
    enName: "Toge Inumaki",
    tier: "B",
    role: "support",
    image: "https://i.imgur.com/qAGDpHF.jpeg",
    popupImage: "https://i.imgur.com/UVFMPWD.jpeg",
    badge: "core",
    badgeText: "SSR core",
    skills: [["", ""], ["", ""], ["", ""], ["", ""]]
  },
  {
    id: 23,
    tierId: 23,
    name: "나나미 켄토",
    enName: "Kento Nanami",
    tier: "B",
    role: "aoe",
    image: "https://i.imgur.com/a6ltez0.jpeg",
    popupImage: "https://i.imgur.com/1s4clTU.jpeg",
    badge: "core",
    badgeText: "SSR core",
    skills: [["", ""], ["", ""], ["", ""], ["", ""]]
  },
  {
    id: 27,
    tierId: 27,
    name: "라루",
    enName: "Raru",
    tier: "B",
    role: "support",
    image: "https://i.imgur.com/t32AHBp.jpeg",
    popupImage: "https://i.imgur.com/Afho0lj.jpeg",
    badge: "core",
    badgeText: "SSR core",
    skills: [["", ""], ["", ""], ["", ""], ["", ""]]
  },

  // ──────────────────────────────────────────────
  // C 티어
  // ──────────────────────────────────────────────
  {
    id: 16,
    tierId: 16,
    name: "쿠사카베 아츠야",
    enName: "Atsuya Kusakabe",
    tier: "C",
    role: "aoe",
    aoeTierId: 3,
    image: "https://i.imgur.com/g4MGcLX.jpeg",
    popupImage: "https://i.imgur.com/vepdGai.jpeg",
    badge: "core",
    badgeText: "SSR Core",
    skills: [["", ""], ["", ""], ["", ""], ["", ""]]
  },
  {
    id: 24,
    tierId: 24,
    name: "젠인 나오비토",
    enName: "Naobito Zenin",
    tier: "C",
    role: "single",
    image: "https://i.imgur.com/5W0fiJ3.jpeg",
    popupImage: "https://i.imgur.com/jl0DOHB.jpeg",
    badge: "core",
    badgeText: "SSR core",
    skills: [["", ""], ["", ""], ["", ""], ["", ""]]
  },
  {
    id: 25,
    tierId: 25,
    name: "메이메이",
    enName: "Mei Mei",
    tier: "C",
    role: "aoe",
    aoeTierId: 2,
    image: "https://i.imgur.com/PebsWU3.jpeg",
    popupImage: "https://i.imgur.com/zZd6OvT.jpeg",
    badge: "core",
    badgeText: "SSR core",
    skills: [["", ""], ["", ""], ["", ""], ["", ""]]
  },
  {
    id: 30,
    tierId: 30,
    name: "시게모 하루타",
    enName: "Haruta Shigemo",
    tier: "C",
    role: "aoe",
    aoeTierId: 1,
    image: "https://i.imgur.com/CbNiLrc.jpeg",
    popupImage: "https://i.imgur.com/VfbmRUk.jpeg",
    badge: "core",
    badgeText: "SSR core",
    skills: [["", ""], ["", ""], ["", ""], ["", ""]]
  },
  {
    id: 32,
    tierId: 32,
    name: "젠인 나오야",
    enName: "Naoya Zenin",
    tier: "C",
    role: "healer",
    image: "https://i.imgur.com/p17QdxM.jpeg",
    badge: "ssr",
    badgeText: "SSR",
    skills: [["", ""], ["", ""], ["", ""], ["", ""]]
  },
  {
    id: 33,
    tierId: 33,
    name: "니시미야 모모",
    enName: "Momo Nishimiya",
    tier: "C",
    role: "support",
    image: "https://i.imgur.com/I94c7FN.jpeg",
    badge: "ssr",
    badgeText: "SSR",
    skills: [["", ""], ["", ""], ["", ""], ["", ""]]
  },

  // ──────────────────────────────────────────────
  // F 티어
  // ──────────────────────────────────────────────
  {
    id: 31,
    tierId: 31,
    name: "다곤",
    enName: "Dagon",
    tier: "F",
    role: "support",
    image: "https://i.imgur.com/RoxpnFT.jpeg",
    badge: "ssr",
    badgeText: "SSR",
    skills: [["", ""], ["", ""], ["", ""], ["", ""]]
  },
  {
    id: 34,
    tierId: 34,
    name: "메카마루",
    enName: "Mechamaru",
    tier: "F",
    role: "single",
    image: "https://i.imgur.com/jdm6RjL.jpeg",
    badge: "ssr",
    badgeText: "SSR",
    skills: [["", ""], ["", ""], ["", ""], ["", ""]]
  },
  {
    id: 36,
    tierId: 36,
    name: "쿠라사키 노바라",
    enName: "Nobara Kugisaki",
    tier: "F",
    role: "single",
    image: "https://i.imgur.com/jZb9gfK.jpeg",
    badge: "ssr",
    badgeText: "SSR",
    skills: [["", ""], ["", ""], ["", ""], ["", ""]]
  },
  {
    id: 37,
    tierId: 37,
    name: "네기 토시히사",
    enName: "Toshihisa Negi",
    tier: "F",
    role: "support",
    image: "https://i.imgur.com/NHaWRBk.jpeg",
    badge: "ssr",
    badgeText: "SSR",
    skills: [["", ""], ["", ""], ["", ""], ["", ""]]
  },
  {
    id: 38,
    tierId: 38,
    name: "요시노 준페이",
    enName: "Junpei Yoshino",
    tier: "F",
    role: "healer",
    image: "https://i.imgur.com/c2dNfGm.jpeg",
    badge: "ssr",
    badgeText: "SSR",
    skills: [["", ""], ["", ""], ["", ""], ["", ""]]
  },
  {
    id: 39,
    tierId: 39,
    name: "주태대천",
    enName: "Jutai Daiten",
    tier: "F",
    role: "tank",
    image: "https://i.imgur.com/rktRXky.jpeg",
    badge: "ssr",
    badgeText: "SSR",
    skills: [["", ""], ["", ""], ["", ""], ["", ""]]
  },
  {
    id: 40,
    tierId: 40,
    name: "하이바라 유우",
    enName: "Yu Haibara",
    tier: "F",
    role: "tank",
    image: "https://i.imgur.com/vTiTPlh.jpeg",
    badge: "ssr",
    badgeText: "SSR",
    skills: [["", ""], ["", ""], ["", ""], ["", ""]]
  },
  {
    id: 41,
    tierId: 41,
    name: "미와 카스미",
    enName: "Kasumi Miwa",
    tier: "F",
    role: "single",
    image: "https://i.imgur.com/SMw7ffU.jpeg",
    badge: "ssr",
    badgeText: "SSR",
    skills: [["", ""], ["", ""], ["", ""], ["", ""]]
  },
  {
    id: 42,
    tierId: 42,
    name: "젠인 마이",
    enName: "Mai Zenin",
    tier: "F",
    role: "aoe",
    image: "https://i.imgur.com/LQT3SKU.jpeg",
    badge: "ssr",
    badgeText: "SSR",
    skills: [["", ""], ["", ""], ["", ""], ["", ""]]
  },
  {
    id: 43,
    tierId: 43,
    name: "이노 타쿠마",
    enName: "Takuma Ino",
    tier: "F",
    role: "single",
    image: "https://i.imgur.com/GUI2Svi.jpeg",
    badge: "ssr",
    badgeText: "SSR",
    skills: [["", ""], ["", ""], ["", ""], ["", ""]]
  },
  {
    id: 44,
    tierId: 44,
    name: "젠인 마키",
    enName: "Maki Zenin",
    tier: "F",
    role: "tank",
    image: "https://i.imgur.com/fxC1Zlc.jpeg",
    badge: "ssr",
    badgeText: "SSR",
    skills: [["", ""], ["", ""], ["", ""], ["", ""]]
  },
  {
    id: 45,
    tierId: 45,
    name: "오가미 할멈의 손자",
    enName: "Ogami's Grandson",
    tier: "F",
    role: "aoe",
    image: "https://i.imgur.com/sGRvTT2.jpeg",
    badge: "ssr",
    badgeText: "SSR",
    skills: [["", ""], ["", ""], ["", ""], ["", ""]]
  },
  {
    id: 46,
    tierId: 46,
    name: "마나미",
    enName: "Manami",
    tier: "F",
    role: "single",
    image: "https://i.imgur.com/vrGDIIe.jpeg",
    badge: "ssr",
    badgeText: "SSR",
    skills: [["", ""], ["", ""], ["", ""], ["", ""]]
  }
];
