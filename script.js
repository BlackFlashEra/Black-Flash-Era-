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
        ['','자가 회복'],
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
        ['',''],
        ['',''],
        ['',''],
        ['','']
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
    singleTierId:1,
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
    tier:'',
    role:'single',
    image:'https://i.imgur.com/G8wjpPR.jpeg',
    popupImage:'',
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
    popupImage:'',
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