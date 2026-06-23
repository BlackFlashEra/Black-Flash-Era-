/**
 * script.js
 * BLACK FLASH ERA — 메인 UI 로직 (순수 JavaScript, React 없음)
 *
 * 의존: character.js, material.js 를 먼저 로드해야 한다.
 *
 * 앱 상태:
 *   state.lang          — 현재 언어: "ko" | "en"
 *   state.theme         — 현재 테마: "dark" | "light"
 *   state.page          — 현재 페이지: "character" | "tier"
 *   state.characterTab  — 캐릭터 페이지 탭: "character" | "ur" | "ssr"
 *   state.tierRole      — 티어 페이지 역할 필터: "all" | "aoe" | ...
 *   state.selectedChar  — 팝업에 표시할 캐릭터 객체 (없으면 null)
 *   state.openSkills    — 팝업 스킬 아코디언 열린 인덱스 Set
 *   state.menuOpen      — GNB 드롭다운 열림 여부
 *   state.langOpen      — 언어 선택 팝업 열림 여부
 */

// ──────────────────────────────────────────────
// 앱 상태 (단일 객체로 관리)
// ──────────────────────────────────────────────
const state = {
  lang:         "ko",
  theme:        "dark",
  page:         "character",
  characterTab: "character",
  tierRole:     "all",
  selectedChar: null,
  openSkills:   new Set(),
  menuOpen:     false,
  langOpen:     false
};

// ──────────────────────────────────────────────
// 번역 헬퍼: 현재 언어의 번역 문자열 반환
// ──────────────────────────────────────────────
function t(key) {
  return translations[state.lang][key] ?? key;
}

// ──────────────────────────────────────────────
// localStorage 초기화: 저장된 언어·테마 복원
// ──────────────────────────────────────────────
function loadSavedPreferences() {
  const savedLang  = localStorage.getItem("bfe-lang");
  const savedTheme = localStorage.getItem("bfe-theme");
  if (savedLang)  state.lang  = savedLang;
  if (savedTheme) state.theme = savedTheme;
  document.documentElement.setAttribute("data-theme", state.theme);
}

// ──────────────────────────────────────────────
// 언어 변경
// ──────────────────────────────────────────────
function setLang(lang) {
  state.lang = lang;
  localStorage.setItem("bfe-lang", lang);
  render();
}

// ──────────────────────────────────────────────
// 테마 변경
// ──────────────────────────────────────────────
function setTheme(theme) {
  state.theme = theme;
  localStorage.setItem("bfe-theme", theme);
  document.documentElement.setAttribute("data-theme", theme);
  render();
}

// ──────────────────────────────────────────────
// 페이지 전환 (캐릭터 정보 / 티어리스트)
// ──────────────────────────────────────────────
function switchPage(page) {
  state.page = page;
  window.scrollTo({ top: 0, behavior: "smooth" });
  render();
}

// ──────────────────────────────────────────────
// 캐릭터 팝업 열기 / 닫기
// ──────────────────────────────────────────────
function openPopup(character) {
  state.selectedChar = character;
  state.openSkills   = new Set();
  document.body.style.overflow = "hidden";
  render();
}

function closePopup() {
  state.selectedChar = null;
  document.body.style.overflow = "";
  render();
}

// ──────────────────────────────────────────────
// 스킬 아코디언 토글
// ──────────────────────────────────────────────
function toggleSkill(index) {
  if (state.openSkills.has(index)) {
    state.openSkills.delete(index);
  } else {
    state.openSkills.add(index);
  }
  // 팝업 DOM만 부분 업데이트 (전체 재렌더 방지)
  renderPopupSkills();
}

// ──────────────────────────────────────────────
// GNB 드롭다운 토글
// ──────────────────────────────────────────────
function toggleMenu() {
  state.menuOpen = !state.menuOpen;
  if (state.menuOpen) state.langOpen = false;
  render();
}

// ──────────────────────────────────────────────
// 언어 팝업 토글
// ──────────────────────────────────────────────
function toggleLangPopup() {
  state.langOpen = !state.langOpen;
  render();
}

function closeLangPopup() {
  state.langOpen  = false;
  state.menuOpen  = false;
  render();
}

// ══════════════════════════════════════════════
// HTML 생성 함수들
// ══════════════════════════════════════════════

// ──────────────────────────────────────────────
// GNB (상단 고정 내비게이션 바)
// ──────────────────────────────────────────────
function buildGnbHtml() {
  const isLight = state.theme === "light";
  const langBadgeText = state.lang === "ko" ? "한국어" : "English";

  const dropdownHtml = state.menuOpen ? `
    <div class="gnb-dropdown" id="gnb-dropdown">
      <button class="gnb-menu-item" id="btn-lang-open">
        <span class="gnb-menu-icon">🌐</span>
        <span class="gnb-menu-text">${t("gnb.language")}</span>
        <span class="gnb-menu-badge">${langBadgeText}</span>
        <span class="gnb-menu-arrow">›</span>
      </button>
      <div class="gnb-menu-item gnb-theme-row" id="btn-theme-toggle">
        <span class="gnb-menu-icon">${isLight ? "🌙" : "☀️"}</span>
        <span class="gnb-menu-text">${t("gnb.theme")}</span>
        <div class="theme-toggle${isLight ? " on" : ""}" aria-label="Toggle theme">
          <div class="theme-toggle-knob"></div>
        </div>
      </div>
    </div>
  ` : "";

  return `
    <div class="gnb" id="gnb">
      <span class="gnb-brand">BFE</span>
      <div class="gnb-right" id="gnb-right">
        <button class="gnb-options-btn" id="btn-menu-toggle" aria-label="Options">
          <span class="gnb-options-icon">⚙</span>
          <span class="gnb-options-label">${t("gnb.options")}</span>
        </button>
        ${dropdownHtml}
      </div>
    </div>
  `;
}

// ──────────────────────────────────────────────
// 언어 선택 팝업 오버레이
// ──────────────────────────────────────────────
function buildLangPopupHtml() {
  if (!state.langOpen) return "";
  return `
    <div class="lang-overlay" id="lang-overlay">
      <div class="lang-popup" id="lang-popup">
        <div class="lang-popup-title">${t("lang.select")}</div>
        <div class="lang-popup-desc">${t("lang.desc")}</div>
        <div class="lang-options">
          <button class="lang-option${state.lang === "ko" ? " selected" : ""}" data-lang="ko">
            <span class="lang-flag">🇰🇷</span>
            <span>${t("lang.ko")}</span>
            ${state.lang === "ko" ? '<span class="lang-check">✓</span>' : ""}
          </button>
          <button class="lang-option${state.lang === "en" ? " selected" : ""}" data-lang="en">
            <span class="lang-flag">🇺🇸</span>
            <span>${t("lang.en")}</span>
            ${state.lang === "en" ? '<span class="lang-check">✓</span>' : ""}
          </button>
        </div>
      </div>
    </div>
  `;
}

// ──────────────────────────────────────────────
// 캐릭터 카드 하나
// ──────────────────────────────────────────────
function buildCharCardHtml(character) {
  return `
    <div class="char-card" data-char-id="${character.id}">
      <img src="${character.image}" alt="${character.name}" loading="lazy" decoding="async">
      <div class="badge badge-${character.badge}">${character.badgeText}</div>
    </div>
  `;
}

// ──────────────────────────────────────────────
// 재료 페이지 (UR / SSR)
// ──────────────────────────────────────────────
function buildMaterialHtml(type) {
  const d = materialData[state.lang][type];
  const gradeLabel    = t("material.grade");
  const materialLabel = t("material.material");

  const rowsHtml = d.rows.map(([grade, desc]) => `
    <div class="material-row">
      <div class="material-grade">${grade}</div>
      <div class="material-desc">${desc}</div>
    </div>
  `).join("");

  return `
    <div class="material-ui ${type}">
      <div class="material-main-title">${d.title}</div>
      <div class="material-sub-title">${d.sub}</div>
      <div class="material-head ${type}">
        <div>${gradeLabel}</div>
        <div>${materialLabel}</div>
      </div>
      <div class="material-list ${type}">
        ${rowsHtml}
      </div>
      <div class="material-summary">
        <div class="summary-title">▶ ${d.summaryTitle}</div>
        <div class="summary-text">${d.summary1}</div>
        <div class="summary-text blue">${d.summary2}</div>
      </div>
      <div class="material-credit">${d.credit}</div>
    </div>
  `;
}

// ──────────────────────────────────────────────
// 캐릭터 탭 페이지 (캐릭터 그리드 + 탭 전환)
// ──────────────────────────────────────────────
function buildCharacterPageHtml() {
  const tabs = ["character", "ur", "ssr"];
  const tabButtons = tabs.map(tk => `
    <button class="character-btn${state.characterTab === tk ? " active" : ""}" data-tab="${tk}">
      ${t("tab." + tk)}
    </button>
  `).join("");

  let contentHtml;
  if (state.characterTab === "character") {
    // id 기준 오름차순 정렬
    const sorted = [...characters].sort((a, b) => a.id - b.id);
    contentHtml = `
      <div class="character-grid">
        ${sorted.map(buildCharCardHtml).join("")}
      </div>
    `;
  } else {
    contentHtml = buildMaterialHtml(state.characterTab);
  }

  return `
    <div class="character-filter">${tabButtons}</div>
    ${contentHtml}
  `;
}

// ──────────────────────────────────────────────
// 공지 슬라이더 (티어 페이지 상단)
// ──────────────────────────────────────────────
function buildNoticeTickerHtml() {
  // 마지막 항목 뒤에 첫 번째 항목을 반복해 부드러운 루프 구현
  const items = [...NOTICE_ITEMS[state.lang], NOTICE_ITEMS[state.lang][0]];
  const itemsHtml = items.map(text =>
    `<div class="notice-item">${text}</div>`
  ).join("");

  return `
    <div class="tier-notice">
      <div class="notice-left">
        <span class="notice-badge">NOTICE</span>
      </div>
      <div class="notice-slide">
        <div class="notice-track">${itemsHtml}</div>
      </div>
    </div>
  `;
}

// ──────────────────────────────────────────────
// 티어 페이지 (역할 필터 + 티어 박스들)
// ──────────────────────────────────────────────
function buildTierPageHtml() {
  // 역할 필터 버튼
  const roleButtons = ROLE_KEYS.map(({ value, key }) => `
    <button class="role-btn${state.tierRole === value ? " active" : ""}" data-role="${value}">
      ${t(key)}
    </button>
  `).join("");

  // 역할 필터 + tierId 기준 정렬 후 티어 그룹 구성
  const tierGroups = TIER_ORDER.map(tier => {
    const list = characters
      .filter(c => c.tier === tier)
      .filter(c => state.tierRole === "all" || c.role === state.tierRole)
      .sort((a, b) => getRoleId(a) - getRoleId(b));
    return { tier, list };
  }).filter(g => g.list.length > 0);

  const tierBoxesHtml = tierGroups.map(({ tier, list }) => `
    <div class="tier-box">
      <div class="tier-title ${TIER_CSS[tier]}">${tier} Tier</div>
      <div class="tier-character-list">
        ${list.map(buildCharCardHtml).join("")}
      </div>
    </div>
  `).join("");

  return `
    ${buildNoticeTickerHtml()}
    <div class="role-filter">${roleButtons}</div>
    <div id="tierContainer">${tierBoxesHtml}</div>
  `;
}

// ──────────────────────────────────────────────
// 스킬 아코디언 목록 (팝업 내부)
// ──────────────────────────────────────────────
function buildSkillsHtml(skills) {
  if (!skills || skills.length === 0) {
    return `<p class="no-skill-text">${t("skill.none")}</p>`;
  }

  const count = skills.length;
  let layoutClass = "layout-3";
  if (count >= 6)      layoutClass = "layout-6";
  else if (count >= 4) layoutClass = "layout-5";

  const skillBoxes = skills.map(([name, desc], i) => `
    <div class="skill-box${state.openSkills.has(i) ? " open" : ""}" data-skill-index="${i}">
      <div class="skill-header">
        <b>${name}</b>
      </div>
      <div class="skill-desc">${desc}</div>
    </div>
  `).join("");

  return `<div class="skill-grid ${layoutClass}">${skillBoxes}</div>`;
}

// ──────────────────────────────────────────────
// 캐릭터 팝업 전체
// ──────────────────────────────────────────────
function buildPopupHtml() {
  const c = state.selectedChar;
  if (!c) return "";

  const displayName = state.lang === "en" && c.enName ? c.enName : c.name;

  // 스킬: 영어 모드이면 enSkills 우선, 빈 항목 제거
  const rawSkills = state.lang === "en" && c.enSkills ? c.enSkills : c.skills;
  const skills    = rawSkills.filter(([name]) => name !== "");

  return `
    <div class="popup-overlay" id="popup-overlay">
      <div class="popup-content">
        <button class="popup-close" id="btn-popup-close" aria-label="Close">×</button>
        <img class="popup-img" src="${c.popupImage || c.image}" alt="${displayName}">
        <div class="popup-body" id="popup-body">
          ${buildSkillsHtml(skills)}
        </div>
      </div>
    </div>
  `;
}

// ──────────────────────────────────────────────
// 푸터
// ──────────────────────────────────────────────
function buildFooterHtml() {
  return `
    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-text">${t("footer.maker")}</div>
        <div class="footer-sns">
          <a class="footer-btn discord"
             href="https://discord.gg/xYAcG65mXu"
             target="_blank" rel="noopener noreferrer">
            <img class="sns-icon"
                 src="https://cdn-icons-png.flaticon.com/512/2111/2111370.png"
                 alt="discord" width="18" height="18">
            <span>${t("footer.discord")}</span>
          </a>
          <a class="footer-btn kakao"
             href="https://open.kakao.com/o/gXcLKUti"
             target="_blank" rel="noopener noreferrer">
            <img class="sns-icon"
                 src="https://cdn-icons-png.flaticon.com/512/2111/2111466.png"
                 alt="kakao" width="18" height="18">
            <span>${t("footer.kakao")}</span>
          </a>
        </div>
        <div class="footer-copy">${t("footer.copy")}</div>
      </div>
    </footer>
  `;
}

// ══════════════════════════════════════════════
// 전체 렌더 (메인 진입점)
// ══════════════════════════════════════════════
function render() {
  const app = document.getElementById("app");

  const pageContent = state.page === "character"
    ? buildCharacterPageHtml()
    : buildTierPageHtml();

  app.innerHTML = `
    ${buildGnbHtml()}

    <header class="site-header">
      <h1 class="logo">BLACK FLASH ERA</h1>
    </header>

    <nav class="depth-menu">
      <button class="depth-btn${state.page === "character" ? " active" : ""}" data-page="character">
        ${t("nav.character")}
      </button>
      <button class="depth-btn${state.page === "tier" ? " active" : ""}" data-page="tier">
        ${t("nav.tier")}
      </button>
    </nav>

    <div class="page-wrapper">
      ${pageContent}
    </div>

    ${buildFooterHtml()}
    ${buildPopupHtml()}
    ${buildLangPopupHtml()}
  `;

  attachEventListeners();
}

// ──────────────────────────────────────────────
// 팝업 스킬만 부분 업데이트 (토글 시 전체 재렌더 방지)
// ──────────────────────────────────────────────
function renderPopupSkills() {
  const body = document.getElementById("popup-body");
  if (!body || !state.selectedChar) return;

  const c         = state.selectedChar;
  const rawSkills = state.lang === "en" && c.enSkills ? c.enSkills : c.skills;
  const skills    = rawSkills.filter(([name]) => name !== "");

  body.innerHTML = buildSkillsHtml(skills);
  attachSkillListeners();
}

// ══════════════════════════════════════════════
// 이벤트 리스너 등록
// ══════════════════════════════════════════════
function attachEventListeners() {
  // ── GNB ──
  const btnMenu = document.getElementById("btn-menu-toggle");
  if (btnMenu) btnMenu.addEventListener("click", toggleMenu);

  const btnLangOpen = document.getElementById("btn-lang-open");
  if (btnLangOpen) btnLangOpen.addEventListener("click", toggleLangPopup);

  const btnTheme = document.getElementById("btn-theme-toggle");
  if (btnTheme) btnTheme.addEventListener("click", () => {
    setTheme(state.theme === "light" ? "dark" : "light");
  });

  // ── 내비게이션 버튼 (캐릭터 정보 / 티어리스트) ──
  document.querySelectorAll(".depth-btn").forEach(btn => {
    btn.addEventListener("click", () => switchPage(btn.dataset.page));
  });

  // ── 캐릭터 페이지 탭 버튼 ──
  document.querySelectorAll(".character-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      state.characterTab = btn.dataset.tab;
      render();
    });
  });

  // ── 역할 필터 버튼 (티어 페이지) ──
  document.querySelectorAll(".role-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      state.tierRole = btn.dataset.role;
      render();
    });
  });

  // ── 캐릭터 카드 클릭 → 팝업 열기 ──
  document.querySelectorAll(".char-card").forEach(card => {
    card.addEventListener("click", () => {
      const charId    = parseFloat(card.dataset.charId);
      const character = characters.find(c => c.id === charId);
      if (character) openPopup(character);
    });
  });

  // ── 팝업 닫기 ──
  const btnClose = document.getElementById("btn-popup-close");
  if (btnClose) btnClose.addEventListener("click", closePopup);

  const overlay = document.getElementById("popup-overlay");
  if (overlay) {
    overlay.addEventListener("click", e => {
      if (e.target === overlay) closePopup();
    });
  }

  // ── 언어 팝업 ──
  const langOverlay = document.getElementById("lang-overlay");
  if (langOverlay) {
    langOverlay.addEventListener("click", e => {
      if (e.target === langOverlay) closeLangPopup();
    });
  }

  const langPopup = document.getElementById("lang-popup");
  if (langPopup) {
    langPopup.addEventListener("mousedown", e => e.stopPropagation());
  }

  document.querySelectorAll(".lang-option").forEach(btn => {
    btn.addEventListener("click", () => {
      setLang(btn.dataset.lang);
      closeLangPopup();
    });
  });

  // ── 스킬 아코디언 ──
  attachSkillListeners();
}

// 스킬 헤더 클릭 → 아코디언 토글
function attachSkillListeners() {
  document.querySelectorAll(".skill-header").forEach(header => {
    header.addEventListener("click", () => {
      const box   = header.closest(".skill-box");
      const index = parseInt(box.dataset.skillIndex, 10);
      toggleSkill(index);
    });
  });
}

// ══════════════════════════════════════════════
// 전역 document 리스너 (초기화 시 딱 한 번 등록)
// render() 호출마다 재등록하면 누적되므로 여기서만 등록한다.
// ══════════════════════════════════════════════

// GNB 드롭다운 외부 클릭 → 닫기
function setupOutsideClickHandler() {
  document.addEventListener("mousedown", (e) => {
    if (!state.menuOpen) return;
    const gnbRight = document.getElementById("gnb-right");
    if (gnbRight && !gnbRight.contains(e.target)) {
      state.menuOpen = false;
      render();
    }
  });
}

// ESC 키 → 열린 팝업/메뉴 순서대로 닫기
function setupEscKeyHandler() {
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (state.selectedChar) {
      closePopup();
    } else if (state.langOpen) {
      closeLangPopup();
    } else if (state.menuOpen) {
      state.menuOpen = false;
      render();
    }
  });
}

// ══════════════════════════════════════════════
// 앱 초기화
// ══════════════════════════════════════════════
document.addEventListener("DOMContentLoaded", () => {
  loadSavedPreferences();
  setupOutsideClickHandler();
  setupEscKeyHandler();
  render();
});
