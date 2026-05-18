/* =========================
   BADGE PRIORITY
========================= */

const badgePriority = {
    ur: 1,
    core: 2,
    ssr: 3
};

/* =========================
   DEX ORDER
========================= */

const dexOrder = [
];

/* =========================
   TIER ORDER
========================= */

const tierOrder = [

    'GOD',
    'SS',
    'S',
    'A',
    'B',
    'C',
    'D',
    'F'

];

/* =========================
   CHARACTER DATABASE
========================= */

const characters = [
/* =========================
   UR 캐릭터 정보
========================= */
{
    id:1,
    tierId:1,
    name:'결전의 자태 고죠 사토루',
    tier:'GOD',
    role:'aoe',
    aoeTierId:1,
    image:'https://i.imgur.com/DFgdD5m.jpeg',
    popupImage:'https://i.imgur.com/owMPNBH.jpeg',
    badge:'ur',
    badgeText:'UR',
    skills:[
        ['무량공처','영역 전개 및 적 행동 제한'],
        ['허식 자','광역 고정 피해'],
        ['창','다단 히트 공격'],
        ['자동 술식','피해 제한'],
        ['수정중','자가 회복'],
        ['무하한','방어 무시']
    ]
},
{
    id:2,
    tierId:2,
    name:'역대최강 고죠 사토루',
    tier:'GOD',
    role:'single',
    singleTierId:1,
    image:'https://i.imgur.com/peS0A2o.jpeg',
    popupImage:'https://i.imgur.com/53ak3GN.jpeg',
    badge:'ur',
    badgeText:'UR',
    skills:[
        ['[특성] 신성 각성',
         `<span class="level-text">레벨 1 :</span> 전투 중 매초 <span class="effect-buff">신성</span>을 1스택 획득합니다.<br><span class="effect-buff">신성</span>이 20스 택에 도달하면 영역 전개: 무량공처를 발동하고 부유 상태가 됩니다.<br>영역은 전투 종료 시까지 지속됩니다.
         <br><br>
         <span class="level-text">레벨 2 :</span> 스택당 <span class="effect-buff">신성</span>이 증가하는 스킬 피해량이 1.5%로 증가 합니다.
         <br><br>
         <span class="level-text">레벨 3 :</span> 스택당 <span class="effect-buff">신성</span>이 증가하는 스킬 피해량이 2%로 증가합니다.
         <br><br>
         <span class="level-text">레벨 4 :</span> 전투 시작 시 <span class="effect-buff">신성</span> 20중첩을 획득합니다.
         <br><br><hr><br>
         <span class="effect-buff">신성</span> 스택당 스킬 피해가 1% 증가합니다. 최대50회 중첩됩니다. 전투 종료 시까지 지속 됩니다. 해제되지 않습니다.`],
        ['[스킬 1] 무량공처 전역박탈',
         `<span class="level-text">레벨 1 :</span> 영역을 전개하여, 전장의 적에게 7회 80% 공격력의 물리 피해를 입히고, 영역전개 상태에 있을 때, 자신 에게 5겹 <span class="effect-buff">신성</span>이 있을 때마다 1회 피해를 추가로 입 힙니다.
         <br><br>
         <span class="level-text">레벨 2 :</span> 영역전개가 회수될 때, 각각 1회 100% 공격력의 고 정 피해를 추가로 입히고 적을 넉다운시킵니다.
         <br><br>
         <span class="level-text">레벨 3 :</span> 단일 기본 피해량이 공격력의 100%로 증가합니다.`],
        ['[스킬 2] 주술•창',
         `<span class="level-text">레벨 1 :</span> 적의 뒤에 나타나 대상에게 3회 80% 공격력의 물리 피해를 입히고, 영역전개 상태에 있을 때, 자신에게 20겹 <span class="effect-buff">신성</span>이 있을 때마다 1개 대상을 추가로 증가합니다.
         <br><br>
         <span class="level-text">레벨 2 :</span> 단일 피해량이 공격력 120%로 증가한다.
         <br><br>
         <span class="level-text">레벨 3 :</span> 해당 스킬은 50% 기본 치명타 확률이 존재합니다`],
        ['[스킬 3] 역대 최강',
         `<span class="level-text">레벨 1 :</span> HP 20% 증가, 공격력 40% 증가
         <br><br>
         <span class="level-text">레벨 2 :</span> HP 30% 증가, 공격력 60% 증가
         <br><br>
         <span class="level-text">레벨 3 :</span> HP 40% 증가, 공격력 80% 증가`],
        ['[스킬 4] 허식•자',
         `<span class="level-text">레벨 1 :</span> 전방에 발사하여, 경로상의 적들에게 180% 공격력 의 피해를 입히고, 영역전개 상태에 있을때, 자신에게 10겹 <span class="effect-buff">신성</span>이 있을 때마다 적을 1초 동안 기절시키며, 최대 5초 지속됩니다.
         <br><br>
         <span class="level-text">레벨 2 :</span> 피해량이 공격력 240%로 증가한다.`]
    ]
},

{
    id:2.1,
    tierId:2.1,
    name:'천여폭군',
    tier:'GOD',
    role:'aoe',
    aoeTierId:2,
    image:'https://i.imgur.com/hdIcnM5.jpeg',
    popupImage:'https://i.imgur.com/IYA7ZvA.jpeg',
    badge:'ur',
    badgeText:'UR',
    skills:[
        ['[특성] 천여폭군',
         `<span class="level-text">레벨 1 :</span> 자신의 HP가 20% 감소할 때마다, 자신의 치명타 피 해량이 15% 증가하고, 일반 공격을 발동할 때, 공격 력 100%의 보호막을 획득하며, 3초 동안 지속됩니다.<br>해당 보호막은 중첩하지 않습니다.
         <br><br>
         <span class="level-text">레벨 2 :</span> 자신의 HP가 15% 감소할 때마다, 자신의 치명타 피 해량이 15% 증가하고, 일반 공격을 발동할 때, 공격 력 100%의 보호막을 획득하며, 3초 동안 지속됩니다.<br>해당 보호막은 중첩하지 않습니다.
         <br><br>
         <span class="level-text">레벨 3 :</span> 자신의 HP가 10% 감소할 때마다, 자신의 치명타 피 해량이 15% 증가하고, 일반 공격을 발동할 때, 공격 력 100%의 보호막을 획득하며, 3초 동안 지속됩니다.<br>해당 보호막은 중첩하지 않습니다.
         <br><br>
         <span class="level-text">레벨 4 :</span> HP가 50% 이하일 때 자신 최대HP 6%의 고정피해를 추가로 입힙니다.`],
        ['[스킬 1] 종언·석혼단마참',
         `<span class="level-text">레벨 1 :</span> 석혼과 용골 쌍칼을 휘두르며, 공격력이 가장 높은 적 에게 돌진하여, 연속적인 넓은 범위의 참격을 가하여, 총 900% 공격력의 피해를 입히고, 시전 시 자신 50 %의 현재 HP를 소모합니다.
         <br><br>
         <span class="level-text">레벨 2 :</span> 피해 총량이 1350%로 증가합니다.
         <br><br>
         <span class="level-text">레벨 3 :</span> 시전 완료 후, 자신 총 피해량 35%의 HP를 회복합니다.`],
        ['[스킬 2] 쇄공 열참',
         `<span class="level-text">레벨 1 :</span> 궁극의 힘으로 공간을 파괴하여 전방의 적에게 공격 력의 200% 피해를 입히고 2초간 기절시키며, 시전 중 <span class="effect-buff">슈퍼 아머</span> 상태가 되고 필드 위의 모든 대상에게 <span class="effect-buff">영혼 봉인</span> 효과를 부여하며, 시전 시 현재 HP의 15%를 소모합니다.
         <br><br>
         <span class="level-text">레벨 2 :</span> 피해량이 공격력 240%로 증가한다.
         <br><br>
         <span class="level-text">레벨 3 :</span> 피해량이 공격력 280%로 증가한다.
         <br><br><hr><br>
         <span class="effect-buff">슈퍼 아머</span> 모든 제어 효과 및 다운 면역
         <br><br>
         <span class="effect-buff">영혼 봉인</span> 모든 스킬 시전을 차단하지만, 일반 공격 및 현재 시전 중인 스킬은 중단하지 않음`],
        ['[스킬 3] 천여주박',
         `<span class="level-text">레벨 1 :</span> HP 20% 증가, 공격력 40% 증가
         <br><br>
         <span class="level-text">레벨 2 :</span> HP 30% 증가, 공격력 60% 증가
         <br><br>
         <span class="level-text">레벨 3 :</span> HP 40% 증가, 공격력 80% 증가`],
        ['[스킬 4] 석혼 영역',
         `<span class="level-text">레벨 1 :</span> 치명피해를 받을 시, 자신의 모든 디버프 효과를 제거하고 6초의 <span class="effect-buff">체력 고정</span> 효과를 획득합니다.<br><span class="effect-buff">체력 고정</span> 효과가 사라질 때 자신 35%의 HP를 회복하고, 한 전투당 1회 발동합니다.
         <br><br>
         <span class="level-text">레벨 2 :</span> <span class="effect-buff">체력 고정</span> 효과의 지속 시간이 8초로 연장되고, 해제불가로 변경됩니다.
         <br><br><hr><br>
         <span class="effect-buff">체력 고정</span> HP는 1pt 아래로 떨어지지 않습니다.`]
    ]
},
  
/* =========================
   SSR 핵심 캐릭터 정보
========================= */
{
    id:3,
    tierId:3,
    name:'[완전해방] 료멘 스쿠나',
    tier:'SS',
    role:'single',
    singleTierId:1,
    image:'https://i.imgur.com/4nfCCE8.jpeg',
    popupImage:'https://i.imgur.com/qvHKp8y.jpeg',
    badge:'core',
    badgeText:'SSR Core',
    skills:[
        ['원초의 저주','다중 시전 확률 증가 및 최대 5회 재시전'],
        ['복마어주자','광역 참격 및 피해 증폭'],
        ['신무참','기절 및 단일 폭딜'],
        ['저주의 근원','다중 시전 발동 및 회복'],
        ['해체','광역 범위 참격'],
        ['개','필살 광역 일격']
    ]
},
{
    id:6,
    tierId:6,
    name:'게토 스구루',
    tier:'SS',
    role:'healer',
    healerTierId:1,
    image:'https://i.imgur.com/Edt3sZg.jpeg',
    popupImage:'https://i.imgur.com/jr7X0Zp.jpeg',
    badge:'core',
    badgeText:'SSR Core',
    skills:[
        ['주령조술','아군 공격 증가'],
        ['천조원야','광역 힐'],
        ['주령 가호','보호막 부여'],
        ['반전 술식','지속 회복']
    ]
},  
{
    id:4,
    tierId:4,
    name:'죠고',
    tier:'S',
    role:'single',
    singleTierId:2,
    image:'https://i.imgur.com/HC7aiYP.jpeg',
    popupImage:'https://i.imgur.com/30vlflV.jpeg',
    badge:'core',
    badgeText:'SSR Core',
    skills:[
        ['',''],
        ['',''],
        ['',''],
        ['','']
    ]
},
{
    id:5,
    tierId:5,
    name:'쵸소우',
    tier:'S',
    role:'tank',
    tankTierId:1,
    image:'https://i.imgur.com/OcFAf1P.jpeg',
    popupImage:'https://i.imgur.com/dmFMcC9.jpeg',
    badge:'core',
    badgeText:'SSR Core',
    skills:[
        ['',''],
        ['',''],
        ['',''],
        ['','']
    ]
},
{
    id:7,
    tierId:7,
    name:'하나미',
    tier:'S',
    role:'support',
    image:'https://i.imgur.com/VIc1HGx.jpeg',
    popupImage:'https://i.imgur.com/ZwLJul4.jpeg',
    badge:'core',
    badgeText:'SSR Core',
    skills:[
        ['',''],
        ['',''],
        ['',''],
        ['','']
    ]
},
{
    id:9,
    tierId:9,
    name:'츠쿠모 유키',
    tier:'S',
    role:'aoe',
    aoeTierId:1,
    image:'https://i.imgur.com/8Edx1OE.jpeg',
    popupImage:'https://i.imgur.com/raagMK8.jpeg',
    badge:'core',
    badgeText:'SSR Core',
    skills:[
        ['',''],
        ['',''],
        ['',''],
        ['','']
    ]
},
{
    id:10,
    tierId:10,
    name:'[청년] 고죠 사토루',
    tier:'SS',
    role:'single',
    singleTierId:2,
    image:'https://i.imgur.com/pNiNf5W.jpeg',
    popupImage:'https://i.imgur.com/eqCEnP2.jpeg',
    badge:'core',
    badgeText:'SSR Core',
    skills:[
        ['',''],
        ['',''],
        ['',''],
        ['','']
    ]
},
{
    id:11,
    tier:11,
    name:'하카리 킨지',
    tier:'S',
    role:'support',
    image:'https://i.imgur.com/pNG6rEz.jpeg',
    popupImage:'https://i.imgur.com/5tYnWYI.jpeg',
    badge:'core',
    badgeText:'SSR Core',
    skills:[
        ['',''],
        ['',''],
        ['',''],
        ['','']
    ]
},
{
    id:11,
    tierId:11,
    name:'후시구로 토우지',
    tier:'SS',
    role:'tank',
    tankTierId:2,
    image:'https://i.imgur.com/I0CJbO2.jpeg',
    popupImage:'https://i.imgur.com/Z8da75o.jpeg',
    badge:'core',
    badgeText:'SSR Core',
    skills:[
        ['',''],
        ['',''],
        ['',''],
        ['','']
    ]
},
{
    id:15,
    tierId:15,
    name:'이에이리 쇼코',
    tier:'SS',
    role:'support',
    image:'https://i.imgur.com/gkKKb9W.jpeg',
    popupImage:'https://i.imgur.com/cQ9tqWQ.jpeg',
    badge:'core',
    badgeText:'SSR Core',
    skills:[
        ['',''],
        ['',''],
        ['',''],
        ['','']
    ]
},
{
    id:16,
    tierId:16,
    name:'쿠사카베 아츠야',
    tier:'C',
    role:'aoe',
    aoeTierId:3,
    image:'https://i.imgur.com/g4MGcLX.jpeg',
    popupImage:'https://i.imgur.com/vepdGai.jpeg',
    badge:'core',
    badgeText:'SSR core',
    skills:[
        ['',''],
        ['',''],
        ['',''],
        ['','']
    ]
},
{
    id:17,
    tierId:17,
    name:'가쿠간지 요시노부',
    tier:'B',
    role:'single',
    singleTierId:2,
    image:'https://i.imgur.com/jhkHKfl.jpeg',
    popupImage:'https://i.imgur.com/jj3pr5P.jpeg',
    badge:'core',
    badgeText:'SSR core',
    skills:[
        ['',''],
        ['',''],
        ['',''],
        ['','']
    ]
},
{
    id:18,
    tierId:18,
    name:'이오리 우타히메',
    tier:'A',
    role:'support',
    image:'https://i.imgur.com/3tkRUx6.jpeg',
    popupImage:'https://i.imgur.com/uSy0FFZ.jpeg',
    badge:'core',
    badgeText:'SSR core',
    skills:[
        ['',''],
        ['',''],
        ['',''],
        ['','']
    ]
},
{
    id:19,
    tierId:19,
    name:'토도 아오이',
    tier:'A',
    role:'tank',
    tankTierId:1,
    image:'https://i.imgur.com/HLaJNXC.jpeg',
    popupImage:'https://i.imgur.com/BcQvnLm.jpeg',
    badge:'core',
    badgeText:'SSR core',
    skills:[
        ['',''],
        ['',''],
        ['',''],
        ['','']
    ]
},
{
    id:20,
    tierId:20,
    name:'카모 노리토시',
    tier:'B',
    role:'single',
    singleTierId:1,
    image:'https://i.imgur.com/gMWTUjy.jpeg',
    popupImage:'https://i.imgur.com/J4lFxKr.jpeg',
    badge:'core',
    badgeText:'SSR core',
    skills:[
        ['',''],
        ['',''],
        ['',''],
        ['','']
    ]
},
{
    id:21,
    tierId:21,
    name:'이누마키 토게',
    tier:'B',
    role:'support',
    image:'https://i.imgur.com/qAGDpHF.jpeg',
    popupImage:'https://i.imgur.com/UVFMPWD.jpeg',
    badge:'core',
    badgeText:'SSR core',
    skills:[
        ['',''],
        ['',''],
        ['',''],
        ['','']
    ]
},
{
    id:22,
    tierId:22,
    name:'야가 마사미치',
    tier:'A',
    role:'healer',
    image:'https://i.imgur.com/kwkjVkL.jpeg',
    popupImage:'https://i.imgur.com/SzTkS0a.jpeg',
    badge:'core',
    badgeText:'SSR core',
    skills:[
        ['',''],
        ['',''],
        ['',''],
        ['','']
    ]
},
{
    id:23,
    tierId:23,
    name:'나나미 켄토',
    tier:'B',
    role:'aoe',
    image:'https://i.imgur.com/a6ltez0.jpeg',
    popupImage:'https://i.imgur.com/1s4clTU.jpeg',
    badge:'core',
    badgeText:'SSR core',
    skills:[
        ['',''],
        ['',''],
        ['',''],
        ['','']
    ]
},
{
    id:24,
    tier:24,
    name:'젠인 나오비토',
    tier:'C',
    role:'single',
    image:'https://i.imgur.com/5W0fiJ3.jpeg',
    popupImage:'https://i.imgur.com/jl0DOHB.jpeg',
    badge:'core',
    badgeText:'SSR core',
    skills:[
        ['',''],
        ['',''],
        ['',''],
        ['','']
    ]
},
{
    id:30,
    tierId:30,
    name:'시게모 하루타',
    tier:'C',
    role:'aoe',
    aoeTierId:1,
    image:'https://i.imgur.com/CbNiLrc.jpeg',
    popupImage:'https://i.imgur.com/VfbmRUk.jpeg',
    badge:'core',
    badgeText:'SSR core',
    skills:[
        ['',''],
        ['',''],
        ['',''],
        ['','']
    ]
},
{
    id:29,
    tierId:29,
    name:'미겔',
    tier:'A',
    role:'tank',
    tankTierId:2,
    image:'https://i.imgur.com/5wzs0Sq.jpeg',
    popupImage:'https://i.imgur.com/IcN3uUf.jpeg',
    badge:'core',
    badgeText:'SSR core',
    skills:[
        ['',''],
        ['',''],
        ['',''],
        ['','']
    ]
},
{
    id:27,
    tierId:27,
    name:'라루',
    tier:'B',
    role:'support',
    image:'https://i.imgur.com/t32AHBp.jpeg',
    popupImage:'https://i.imgur.com/Afho0lP.jpeg',
    badge:'core',
    badgeText:'SSR core',
    skills:[
        ['',''],
        ['',''],
        ['',''],
        ['','']
    ]
},
{
    id:28,
    tierId:28,
    name:'료멘 스쿠나',
    tier:'A',
    role:'single',
    singleTierId:1,
    image:'https://i.imgur.com/7yiHu6a.jpeg',
    popupImage:'https://i.imgur.com/cv4megE.jpeg',
    badge:'core',
    badgeText:'SSR core',
    skills:[
        ['',''],
        ['',''],
        ['',''],
        ['','']
    ]
},
{
    id:26,
    tierId:26,
    name:'우라우메',
    tier:'A',
    role:'single',
    singleTierId:2,
    image:'https://i.imgur.com/rj7JPoV.jpeg',
    popupImage:'https://i.imgur.com/wHPRDSE.jpeg',
    badge:'core',
    badgeText:'SSR core',
    skills:[
        ['',''],
        ['',''],
        ['',''],
        ['','']
    ]
}, 
{
    id:25,
    tierId:25,
    name:'메이메이',
    tier:'C',
    role:'aoe',
    aoeTierId:2,
    image:'https://i.imgur.com/PebsWU3.jpeg',
    popupImage:'https://i.imgur.com/zZd6OvT.jpeg',
    badge:'core',
    badgeText:'SSR core',
    skills:[
        ['',''],
        ['',''],
        ['',''],
        ['','']
    ]
},
{
    id:13,
    tierId:13,
    name:'카시모 하지메',
    tier:'S',
    role:'single',
    singleTierId:1,
    image:'https://i.imgur.com/G8wjpPR.jpeg',
    popupImage:'https://i.imgur.com/hYGEwha.jpeg',
    badge:'core',
    badgeText:'SSR Core',
    skills:[
        ['[특성] 뇌신인',
         `<span class="level-text">레벨 1 :</span> 창성추 시전 시 28% 확률로 모든 아군이 8초 동안 총 240의 주력을 회복하며, 대상의 <span class="effect-buff">뇌흔</span> 1중첩마다 확률이 2% 증가한다.
         <br><br>
         <span class="level-text">레벨 2 :</span> 창성추 시전 시 28% 확률로 모든 아군이 8초 동안 총 320의 주력을 회복하며, 대상의 <span class="effect-buff">뇌흔</span> 1중첩마다 확률이 4% 증가한다.
         <br><br>
         <span class="level-text">레벨 3 :</span> 창뢰성추 시전 시 28% 확률로 모든 아군이 8초 동안 총 400의 주력을 회복하며, 대상의 <span class="effect-buff">뇌흔</span> 1중첩마다 확률이 6% 증가한다.
         <br><br>
         <span class="level-text">레벨 4 :</span> <span class="effect-buff">뇌흔</span> 1겹마다 모든 아군의 공격에 2%의 치명타 확률 이 추가로 붙습니다.<br>자신이 치명타 시 모든 아군의 치명타 피해가 4% 증가하고, 3초 동안 지속되며, 최대 10겹 중첩됩니다`],
        ['[스킬 1] 창뢰성추',
         `<span class="level-text">레벨 1 :</span> 한번에 대량의 전하를 방출해 뇌전 구체를 형성하여 적을 공격하고, 단일 적에게 6회 160% 공격력의 피 해를 입힙니다.<br>타깃이 보유한 <span class="effect-buff">뇌흔</span><br> 1겹마다 해당 스킬에 추가로 5%의 치명타 확률 및 5%의 치명타 피해가 적용됩니다.
        <br><br>
        <span class="level-text">레벨 2 :</span> 매회 피해량이 공격력의 190%로 증가한다.
        <br><br>
        <span class="level-text">레벨 3 :</span> 매회 피해량이 공격력의 220%로 증가합니다.<br>스킬 종료 시 자신의 치명타 확률이 10% 증가하고, 치명타 피해가 10% 증가하며, 15초 동안 지속되고, 최대로 3겹 중첩`],
        ['[스킬 2] 신뇌격',
         `<span class="level-text">레벨 1 :</span> 저장된 전하를 전방으로 방출하여 대상 적에게 280 % 공격력의 피해를 입히고, 대상의 치명타 저항이 15% 감소하며, 6초간 지속된다.<br>해당 디버프 효과가 존재할때 아군이 대상에게 치명타 시 <span class="effect-buff">뇌흔</span>을 부여하 고, 추가로 30의 주력을 획득하며, 해당 효과는 0.6 초마다 1회만 발동한다.
         <br><br>
         <span class="level-text">레벨 2 :</span> 피해량이 공격력 350%로 증가한다.
         <br><br>
         <span class="level-text">레벨 3 :</span> 피해량이 공격력의 400%로 증가하고, 아군이 치명 타 시 획득한 주력이 40pt로 증가합니다`],
        ['[스킬 3] 뇌의 주술',
         `<span class="level-text">레벨 1 :</span> HP 20% 증가, 공격력 40% 증가
         <br><br>
         <span class="level-text">레벨 2 :</span> HP 30% 증가, 공격력 60% 증가
         <br><br>
         <span class="level-text">레벨 3 :</span> HP 40% 증가, 공격력 80% 증가`],
        ['[스킬 4] 뇌흔',
         `<span class="level-text">레벨 1 :</span> 전투 중 자신의 치명타 확률이 15% 증가합니다. 치명타 시 적에게 1겹의 <span class="effect-buff">뇌흔</span>을 부여합니다.
        <br><br>
        <span class="level-text">레벨 2 :</span> 전투 중 자신의 치명타 확률이 20% 증가합니다.
        <br><br><hr><br>
        <span class="effect-buff">뇌흔</span><br>1겹당 적이 주는 피해가 5% 감소하고 자 신이 대상을 공격 시 4%의 추가 치명타 확 률이 붙으며, 최대 12겹까지 중첩됩니다.`]
    ]
},
{
    id:12,
    tierId:12,
    name:'옷코츠 유타',
    tier:'SS',
    role:'tank',
    tankTierId:1,
    image:'https://i.imgur.com/BElgjxv.jpeg',
    popupImage:'https://i.imgur.com/1AVzepO.jpeg',
    badge:'core',
    badgeText:'SSR Core',
    skills:[
        ['',''],
        ['',''],
        ['',''],
        ['','']
    ]
},
{
    id:8,
    tierId:8,
    name:'우로 타카코',
    tier:'S',
    role:'healer',
    image:'https://i.imgur.com/5UKVZCH.jpeg',
    popupImage:'https://i.imgur.com/TzWD3mt.jpeg',
    badge:'core',
    badgeText:'SSR Core',
    skills:[
        ['[특성] 우주환영',
         `<span class="level-text">레벨 1 :</span> 일반 공격 시 (우수라단 발동 확률/발사 수)와 동일한 확률로 한 번에 최대 2개의 우수라단을 발사한다.
         <br><br>
         <span class="level-text">레벨 2 :</span>  일반 공격 시 (우수라단 발동 확률/발사 수)와 동일한 확률로 한 번에 최대 3개의 우수라단을 발사한다.
         <br><br>
         <span class="level-text">레벨 3 :</span> 일반 공격 시 (우수라단 발동 확률/발사 수)와 동일한 확률로 한 번에 최대 4개의 우수라단을 발사한다.
         <br><br>
         <span class="level-text">레벨 4 :</span> 자신의 생명력이 처음으로 70%, 40%, 15% 미만으 로 감소 시 즉시 오로라 허계를 1회 시전한다.<br> 해당 효 과는 0.5초마다 최대 1회 발동한다`],
      
        ['[스킬 1] 오로라 허계',
         `<span class="level-text">레벨 1 :</span> 영역을 전개하여 적 전체에게 공격력의 400%만큼 피해를 입히고, 동시에 자신의 공격력의 600%만큼 자신을 제외한 아군의 생명력을 회복시킨다.<br> 첫 시전 시 10초 동안 자신의 급속이 50% 증가한다.
         <br><br>
         <span class="level-text">레벨 2 :</span> 피해량이 공격력의 500%로 증가하고, 치료량이 공 격력의 700%로 증가합니다.
         <br><br>
         <span class="level-text">레벨 3</span> : 피해량이 공격력의 600%로, 치유량이 공격력의 800%로 증가한다.<br> 동시에 아군 전체의 공격력을 15 % 증가시키고 적 전체의 공격력을 15% 감소시키며, 해당 효과는 8초 동안 지속된다`],
      
        ['[스킬 2] 우수라단',
         `<span class="level-text">레벨 1 :</span>
         일반 공격이 30%의 확률로 목표에게 우수라탄을 발사하도록 변경된다.<br> 우수라탄은 일직선상의 모든 적에게 공격력의 200%만큼 피해를 입히고, 범위 내 아군의 생명력을 공격력의 200%만큼 회복시킨다.
         <br><br>
         <span class="level-text">레벨 2 :</span>
         기본 확률이 36%로 증가한다.<br>
         우수라탄은 적에게 부여된 치유형 버프 효과를 1개 해제한다.
         <br><br>
         <span class="level-text">레벨 3 :</span>
         우수라탄이 1회 발동될 때마다 우수라탄의 최종 피해량 및 치유량이 5% 증가하며, 최대 100%까지 증가한다`
],
        ['[스킬 3] 천공의 그림자',`<span class="level-text">레벨 1 :</span> HP 20% 증가, 공격력 40% 증가
        <br><br>
        <span class="level-text">레벨 2 :</span> HP 30% 증가, 공격력 60% 증가
        <br><br>
        <span class="level-text">레벨 3 :</span> HP 40% 증가, 공격력 80% 증가`],
        ['[스킬 4] 액막이 성력',
         `<span class="level-text">레벨 1 :</span> 전공 술식을 해방해 아군을 보호하고, 모든 아군에게 <span class="effect-buff">성력 부여</span><br>
         <br><br>
         <span class="level-text">레벨 2 :</span> 전투 중 자신의 회피가 10% 증가한다. 회피할 때마 다 5초 동안 가속이 5% 증가하며, 최대 20%까지 증가한다.
         <br><br><hr><br>
         <span class="effect-buff">성력 부여</span><br> 여피해형 디버프를 1개 정화한다. 또한 회피 와 명중을 각각 30% 증가시키며, 이 효과 는 6초 동안 지속된다.`]
    ]
},
{
    name:'',
    tier:'',
    role:'',
    image:'',
    badge:'',
    badgeText:'',
    skills:[
        ['',''],
        ['',''],
        ['',''],
        ['','']
    ]
},
/* =========================
   SSR 캐릭터 정보
========================= */
{
    id:31,
    tierId:31,
    name:'다곤',
    tier:'F', 
    role:'support',
    image:'https://i.imgur.com/RoxpnFT.jpeg',  
    badge:'ssr',
    badgeText:'SSR',
    skills:[
        ['',''],
        ['',''],
        ['',''],
        ['','']
    ]
},
{
    id:32,
    tierId:32,
    name:'젠인 나오야',
    tier:'C',
    role:'healer',
    image:'https://i.imgur.com/p17QdxM.jpeg',
    badge:'ssr',
    badgeText:'SSR',
    skills:[
        ['',''],
        ['',''],
        [' ',''],
        ['','']
    ]
},
{
    id:33,
    tierId:33,
    name:'니시미야 모모',
    tier:'C',
    role:'support',
    image:'https://i.imgur.com/I94c7FN.jpeg',
    badge:'ssr',
    badgeText:'SSR',
    skills:[
        ['',''],
        ['',''],
        [' ',''],
        ['','']
    ]
},
{
    id:34,
    tierId:34,
    name:'메카마루',
    tier:'F',
    role:'single',
    image:'https://i.imgur.com/jdm6RjL.jpeg',
    badge:'ssr',
    badgeText:'SSR',
    skills:[
        ['',''],
        ['',''],
        [' ',''],
        ['','']
    ]
},
{
    id:35,
    tierId:35,
    name:'판다',
    tier:'A',
    role:'tank',
    tankTierId:3,
    image:'https://i.imgur.com/oti2RUo.jpeg',
    badge:'ssr',
    badgeText:'SSR',
    skills:[
        ['',''],
        ['',''],
        ['',''],
        ['','']
    ]
},
{
    id:36,
    tierId:36,
    name:'쿠라사키 노바라',
    tier:'F',
    role:'single',
    image:'https://i.imgur.com/jZb9gfK.jpeg',
    badge:'ssr',
    badgeText:'SSR',
    skills:[
        ['',''],
        ['',''],
        [' ',''],
        ['','']
    ]
}, 
{
    id:37,
    tierId:37,
    name:'네기 토시히사',
    tier:'F',
    role:'support',
    image:'https://i.imgur.com/NHaWRBk.jpeg',
    badge:'ssr',
    badgeText:'SSR',
    skills:[
        ['',''],
        ['',''],
        [' ',''],
        ['','']
    ]
}, 
{
    id:38,
    tierId:38,
    name:'요시노 준페이',
    tier:'F',
    role:'healer',
    image:'https://i.imgur.com/c2dNfGm.jpeg',
    badge:'ssr',
    badgeText:'SSR',
    skills:[
        ['',''],
        ['',''],
        [' ',''],
        ['','']
    ]
},
{
    id:39,
    tierId:39,
    name:'주태대천',
    tier:'F',
    role:'tank',
    image:'https://i.imgur.com/rktRXky.jpeg',
    badge:'ssr',
    badgeText:'SSR',
    skills:[
        ['',''],
        ['',''],
        [' ',''],
        ['','']
    ]
},  
{
    id:40,
    tierId:40,
    name:'하이바라 유우',
    tier:'F',
    role:'tank',
    image:'https://i.imgur.com/vTiTPlh.jpeg',
    badge:'ssr',
    badgeText:'SSR',
    skills:[
        ['',''],
        ['',''],
        [' ',''],
        ['','']
    ]
},  
{
    id:41,
    tierId:41,
    name:'미와 카스미',
    tier:'F',
    role:'single',
    image:'https://i.imgur.com/SMw7ffU.jpeg',
    badge:'ssr',
    badgeText:'SSR',
    skills:[
        ['',''],
        ['',''],
        [' ',''],
        ['','']
    ]
},
{
    id:42,
    tierId:42,
    name:'젠인 마이',
    tier:'F',
    role:'aoe',
    image:'https://i.imgur.com/LQT3SKU.jpeg',
    badge:'ssr',
    badgeText:'SSR',
    skills:[
        ['',''],
        ['',''],
        [' ',''],
        ['','']
    ]
},
{
    id:43,
    tierId:43,
    name:'이노 타쿠마',
    tier:'F',
    role:'single',
    image:'https://i.imgur.com/GUI2Svi.jpeg',
    badge:'ssr',
    badgeText:'SSR',
    skills:[
        ['',''],
        ['',''],
        [' ',''],
        ['','']
    ]
},
{
    id:44,
    tierId:44,
    name:'젠인 마키',
    tier:'F',
    role:'tank',
  image:'https://i.imgur.com/fxC1Zlc.jpeg',
    badge:'ssr',
    badgeText:'SSR',
    skills:[
        ['',''],
        ['',''],
        ['',''],
        ['','']
    ]
},
{
    id:45,
    tierId:45,
    name:'오가미 할멈의 손자',
    tier:'F',
    role:'aoe',
    image:'https://i.imgur.com/sGRvTT2.jpeg',
    badge:'ssr',
    badgeText:'SSR',
    skills:[
        ['',''],
        ['',''],
        ['',''],
        ['','']
    ]
},
{
    id:46,
    tierId:46,
    name:'마나미',
    tier:'F',
    role:'single',
    image:'https://i.imgur.com/vrGDIIe.jpeg',
    badge:'ssr',
    badgeText:'SSR',
    skills:[
        ['',''],
        ['',''],
        ['',''],
        ['','']
    ]
}
];

/* =========================

   CHARACTER SORT

========================= */

const dexCharacters = [...characters].sort(
(a,b)=>(a.id||9999)-(b.id||9999)
);

const tierCharacters = [...characters].sort((a,b)=>{

    if(a.tier !== b.tier){

        return tierOrder.indexOf(a.tier)
        - tierOrder.indexOf(b.tier);

    }

    const aRoleId =
        a[`${a.role}TierId`] || 9999;

    const bRoleId =
        b[`${b.role}TierId`] || 9999;

    return aRoleId - bRoleId;

});

/* =========================
   CHARACTER AUTO CREATE
========================= */

const grid = document.getElementById('characterGrid');

dexCharacters.forEach(character=>{

    /* 빈 캐릭터 숨김 */
    if(!character.id) return;

    grid.innerHTML += `

    <div class="character-card"

    onclick='openPopup(
"${character.name}",
"${character.image}",
${JSON.stringify(character.skills)},
"${character.popupImage || character.image}"
)'>

        <img src="${character.image}">

        <div class="badge ${character.badge}">

            ${character.badgeText}

        </div>

        <div class="character-name">

            ${character.name.replace('] ',']<br>')}

        </div>

    </div>

    `;

});

/* =========================
   TIER AUTO CREATE
========================= */

const tierContainer = document.getElementById('tierContainer');

const tierSortedCharacters = [...characters].sort((a,b)=>{

    return (a.tierId || 9999) - (b.tierId || 9999);

});

tierOrder.forEach(tier=>{

    const tierCharacters = tierSortedCharacters
    .filter(c => c.tier === tier && c.id)
    .sort((a,b) => {
        const aId = a[`${a.role}TierId`] || 9999;
        const bId = b[`${b.role}TierId`] || 9999;
        return aId - bId;
    });

    if(tierCharacters.length > 0){

        let tierHTML = `

        <div class="tier-box">

            <div class="tier-title tier-${tier.toLowerCase()}">

                ${tier} Tier

            </div>

            <div class="tier-character-list">

        `;

        tierCharacters.forEach(character=>{

            tierHTML += `

            <div class="character-card"

            data-role="${character.role || 'none'}"

            onclick='openPopup(
"${character.name}",
"${character.image}",
${JSON.stringify(character.skills)},
"${character.popupImage || character.image}"
)'>

                <img src="${character.image}">

                <div class="badge ${character.badge}">

                    ${character.badgeText}

                </div>

                <div class="character-name">

                    ${character.name.replace('] ',']<br>')}

                </div>

            </div>

            `;

        });

        tierHTML += `

            </div>

        </div>

        `;

        tierContainer.innerHTML += tierHTML;

    }

});

/* =========================

   PAGE CHANGE

========================= */

function showPage(pageId, button){

    document.querySelectorAll('.page').forEach(page=>{

        page.classList.remove('active');

    });

    document.getElementById(pageId).classList.add('active');

    document.querySelectorAll('.depth-btn').forEach(btn=>{

        btn.classList.remove('active');

    });

    button.classList.add('active');
    
window.scrollTo({

        top: 0,

        behavior: 'smooth'

    })
}

/* =========================

   POPUP

========================= */

function openPopup(name, image, skills, popupImage){

    // 이름 제거
// document.getElementById('popup-title').innerHTML = name;

    document.getElementById('popup-image').src = popupImage || image;

    const skillGrid = document.getElementById('popup-skills');

    let skillHTML = '';

    /* 레이아웃 초기화 */
    skillGrid.className = 'skill-grid';

    /* 스킬 개수별 레이아웃 */
    if(skills.length >= 6){

        skillGrid.classList.add('layout-6');

    }else if(skills.length === 4 || skills.length === 5){

        skillGrid.classList.add('layout-5');

    }else{

        skillGrid.classList.add('layout-3');

    }

    skills.forEach((skill,index)=>{

    skillHTML += `

    <div class="skill-box accordion">

        <div class="skill-header"
        onclick="toggleSkill(this)">

            <b>${skill[0]}</b>

        </div>

        <div class="skill-desc">

            ${skill[1]}

        </div>

    </div>

    `;

});

    skillGrid.innerHTML = skillHTML;

    document.getElementById('popup').style.display = 'flex';

}

function closePopup(){

    document.getElementById('popup').style.display = 'none';

}

/* =========================

   ESC CLOSE

========================= */

document.addEventListener('keydown',function(event){

    if(event.key === 'Escape'){

        closePopup();

    }

});

function toggleSkill(element){

    const parent = element.parentElement;

    parent.classList.toggle('open');

}

/* =========================

   ROLE FILTER

========================= */

window.filterRole = function(role, button){

    document.querySelectorAll('.role-btn').forEach(btn=>{

        btn.classList.remove('active');

    });

    button.classList.add('active');

    const tierBoxes = document.querySelectorAll('.tier-box');

    tierBoxes.forEach(box=>{

        const cards = box.querySelectorAll('.character-card');

        let visibleCount = 0;

        cards.forEach(card=>{

            const cardRole = card.dataset.role;

            if(role === 'all' || cardRole === role){

                card.style.display = 'block';

                visibleCount++;

            }else{

                card.style.display = 'none';

            }

        });

        if(visibleCount === 0){

            box.style.display = 'none';

        }else{

            box.style.display = 'block';

        }

    });

};