/**
 * material.js
 * BLACK FLASH ERA — 재료/공지/번역/티어 상수 데이터
 */

// ──────────────────────────────────────────────
// 번역 문자열 (한국어 / 영어)
// t(key) 함수로 접근: translations[currentLang][key]
// ──────────────────────────────────────────────
const translations = {
  ko: {
    'nav.character': '캐릭터 정보',
    'nav.tier': '티어리스트',
    'tab.character': '캐릭터',
    'tab.ur': 'UR 성급 재료',
    'tab.ssr': 'SSR 성급 재료',
    'role.all': '전체',
    'role.aoe': '격투딜러',
    'role.single': '술사딜러',
    'role.tank': '탱커',
    'role.healer': '힐러',
    'role.support': '서포터',
    'gnb.options': '옵션',
    'gnb.language': '언어',
    'gnb.theme': '테마',
    'gnb.dark': '다크 모드',
    'gnb.light': '라이트 모드',
    'lang.ko': '한국어',
    'lang.en': 'English',
    'lang.select': '언어 선택',
    'lang.desc': '사용할 언어를 선택하세요.',
    'skill.none': '스킬 정보 준비 중입니다.',
    'notice.1': '전체 티어리스트는 참고용 기준으로 제작되었습니다.',
    'notice.2': '정확한 성능 평가는 역할군별 티어리스트를 확인해주세요.',
    'notice.3': '티어는 지속적인 테스트를 통해 변경될 수 있습니다.',
    'material.grade': '성급',
    'material.material': '재료',
    'footer.maker': '제작자 : S1 기차나',
    'footer.discord': '디스코드',
    'footer.kakao': '카카오톡 오픈채팅방',
    'footer.copy': 'Copyright © 2026 BLACK FLASH ERA. All rights reserved.',
  },
  en: {
    'nav.character': 'Characters',
    'nav.tier': 'Tier List',
    'tab.character': 'Characters',
    'tab.ur': 'UR Star-Up Materials',
    'tab.ssr': 'SSR Star-Up Materials',
    'role.all': 'All',
    'role.aoe': 'Fighter DPS',
    'role.single': 'Sorcerer DPS',
    'role.tank': 'Tank',
    'role.healer': 'Healer',
    'role.support': 'Support',
    'gnb.options': 'Options',
    'gnb.language': 'Language',
    'gnb.theme': 'Theme',
    'gnb.dark': 'Dark Mode',
    'gnb.light': 'Light Mode',
    'lang.ko': '한국어',
    'lang.en': 'English',
    'lang.select': 'Select Language',
    'lang.desc': 'Choose your preferred language.',
    'skill.none': 'Skill info coming soon.',
    'notice.1': 'The overall tier list is provided for reference only.',
    'notice.2': 'Check the role-specific tier list for accurate evaluations.',
    'notice.3': 'Tier rankings may change through ongoing testing.',
    'material.grade': 'Star',
    'material.material': 'Materials',
    'footer.maker': 'Creator: S1 기차나',
    'footer.discord': 'Discord',
    'footer.kakao': 'KakaoTalk Open Chat',
    'footer.copy': 'Copyright © 2026 BLACK FLASH ERA. All rights reserved.',
  },
};

// ──────────────────────────────────────────────
// 공지 텍스트 (티어 페이지 상단 슬라이딩 배너)
// ──────────────────────────────────────────────
const NOTICE_ITEMS = {
  ko: [
    '전체 티어리스트는 참고용 기준으로 제작되었습니다.',
    '정확한 성능 평가는 역할군별 티어리스트를 확인해주세요.',
    '티어는 지속적인 테스트를 통해 변경될 수 있습니다.',
  ],
  en: [
    'The overall tier list is provided for reference only.',
    'Check the role-specific tier list for accurate evaluations.',
    'Tier rankings may change through ongoing testing.',
  ],
};

// ──────────────────────────────────────────────
// 성급업 재료 데이터 (UR / SSR × 한국어 / 영어)
// rows: [[등급표시, 재료설명], ...]
// ──────────────────────────────────────────────
const materialData = {
  ko: {
    ur: {
      title: '성급업 재료',
      sub: '(UR 기준)',
      rows: [
        ['6성', '본인 2개 + 아무 6성 2개'],
        ['7성', '아무 6성 2개'],
        ['8성', '아무 6성 4개'],
        ['9성', '본인 1개 + 아무 9성 2개'],
        ['10성', '본인 2개 + 아무 9성 2개'],
        ['11성', '본인 6성 1개 + 아무 9성 2개'],
        ['12성', '6성 2개 + 아무 9성 2개'],
      ],
      summaryTitle: '9성 1개 만드는 데 필요한 재료',
      summary1: '본인 3개 + 동일속성 재료 26개',
      summary2: '→ 총 5성 29개 필요',
      credit: 'UR 재료 정리 made by 가드',
    },
    ssr: {
      title: '성급업 재료',
      sub: '(SSR 기준)',
      rows: [
        ['6성', '본인 2개 + 동일속성 4개'],
        ['7성', '동일속성 4개'],
        ['8성', '동일속성 6성 1개 + 동일속성 4개'],
        ['9성', '본인 1개 + 동일속성 6성 1개 + 동일속성 2개'],
        ['10성', '본인 2개 + 아무 9성 1개'],
        ['11성', '본인 6성 1개 + 9성 1개'],
        ['12성', '본인 6성 2개'],
      ],
      summaryTitle: '9성 1개 만드는 데 필요한 재료',
      summary1: '본인 3개 + 동일속성 재료 26개',
      summary2: '→ 총 5성 29개 필요',
      credit: 'SSR 재료 정리 made by 스님',
    },
  },
  en: {
    ur: {
      title: 'Star-Up Materials',
      sub: '(UR Standard)',
      rows: [
        ['6★', 'Own x2 + Any 6★ x2'],
        ['7★', 'Any 6★ x2'],
        ['8★', 'Any 6★ x4'],
        ['9★', 'Own x1 + Any 9★ x2'],
        ['10★', 'Own x2 + Any 9★ x2'],
        ['11★', 'Own 6★ x1 + Any 9★ x2'],
        ['12★', '6★ x2 + Any 9★ x2'],
      ],
      summaryTitle: 'Materials to craft 1x 9★',
      summary1: 'Own x3 + Same-type materials x26',
      summary2: '→ Total 29x 5★ required',
      credit: 'UR Material Guide by 가드',
    },
    ssr: {
      title: 'Star-Up Materials',
      sub: '(SSR Standard)',
      rows: [
        ['6★', 'Own x2 + Same-type x4'],
        ['7★', 'Same-type x4'],
        ['8★', 'Same-type 6★ x1 + Same-type x4'],
        ['9★', 'Own x1 + Same-type 6★ x1 + Same-type x2'],
        ['10★', 'Own x2 + Any 9★ x1'],
        ['11★', 'Own 6★ x1 + 9★ x1'],
        ['12★', 'Own 6★ x2'],
      ],
      summaryTitle: 'Materials to craft 1x 9★',
      summary1: 'Own x3 + Same-type materials x26',
      summary2: '→ Total 29x 5★ required',
      credit: 'SSR Material Guide by 스님',
    },
  },
};

// ──────────────────────────────────────────────
// 티어 목록 (표시 순서)
// ──────────────────────────────────────────────
const TIER_ORDER = ['GOD', 'SS', 'S', 'A', 'B', 'C', 'D', 'F'];

// 티어별 CSS 클래스 매핑
const TIER_CSS = {
  GOD: 'tier-god',
  SS: 'tier-ss',
  S: 'tier-s',
  A: 'tier-a',
  B: 'tier-b',
  C: 'tier-c',
  D: 'tier-d',
  F: 'tier-f',
};

// ──────────────────────────────────────────────
// 역할 필터 버튼 목록 (티어 페이지)
// value: 내부 role 값, key: 번역 키
// ──────────────────────────────────────────────
const ROLE_KEYS = [
  { value: 'all', key: 'role.all' },
  { value: 'aoe', key: 'role.aoe' },
  { value: 'single', key: 'role.single' },
  { value: 'tank', key: 'role.tank' },
  { value: 'healer', key: 'role.healer' },
  { value: 'support', key: 'role.support' },
];

// ──────────────────────────────────────────────
// 역할별 정렬 ID 반환 헬퍼
// 역할 필터 적용 시 티어 내 순서를 결정한다
// ──────────────────────────────────────────────
function getRoleId(character) {
  const key = character.role + 'TierId';
  return character[key] ?? 9999;
}
