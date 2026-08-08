// --- EMBEDDED SVG ICON SYSTEM ---
const SVG_ICONS = {
  user: '<svg xmlns="http://www.w3.org/2000/svg" class="w-current h-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  shield: '<svg xmlns="http://www.w3.org/2000/svg" class="w-current h-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>',
  bell: '<svg xmlns="http://www.w3.org/2000/svg" class="w-current h-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>',
  'layout-dashboard': '<svg xmlns="http://www.w3.org/2000/svg" class="w-current h-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>',
  'file-spreadsheet': '<svg xmlns="http://www.w3.org/2000/svg" class="w-current h-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M8 13h8"/><path d="M8 17h8"/><path d="M10 9h4"/></svg>',
  'plane-landing': '<svg xmlns="http://www.w3.org/2000/svg" class="w-current h-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 22h20"/><path d="M3.77 10.77 2 9l2-2.5 5 1.5 5-5 2.5 1-3 7 5 3 2.5-1.5L20 14l-4 3-12.23-6.23Z"/></svg>',
  wallet: '<svg xmlns="http://www.w3.org/2000/svg" class="w-current h-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-3"/></svg>',
  sliders: '<svg xmlns="http://www.w3.org/2000/svg" class="w-current h-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="4" y1="21" y2="14"/><line x1="4" x2="4" y1="10" y2="3"/><line x1="12" x2="12" y1="21" y2="12"/><line x1="12" x2="12" y1="8" y2="3"/><line x1="20" x2="20" y1="21" y2="16"/><line x1="20" x2="20" y1="12" y2="3"/><line x1="2" x2="6" y1="14" y2="14"/><line x1="10" x2="14" y1="8" y2="8"/><line x1="18" x2="22" y1="16" y2="16"/></svg>',
  'graduation-cap': '<svg xmlns="http://www.w3.org/2000/svg" class="w-current h-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>',
  activity: '<svg xmlns="http://www.w3.org/2000/svg" class="w-current h-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
  landmark: '<svg xmlns="http://www.w3.org/2000/svg" class="w-current h-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="22" y2="22"/><line x1="6" x2="6" y1="18" y2="11"/><line x1="10" x2="10" y1="18" y2="11"/><line x1="14" x2="14" y1="18" y2="11"/><line x1="18" x2="18" y1="18" y2="11"/><polygon points="12 2 20 7 4 7 12 2"/></svg>',
  award: '<svg xmlns="http://www.w3.org/2000/svg" class="w-current h-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>',
  calendar: '<svg xmlns="http://www.w3.org/2000/svg" class="w-current h-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>',
  megaphone: '<svg xmlns="http://www.w3.org/2000/svg" class="w-current h-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8 a3 3 0 1 1-5.8-1.6"/></svg>',
  plus: '<svg xmlns="http://www.w3.org/2000/svg" class="w-current h-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="5" y2="19"/><line x1="5" x2="19" y1="12" y2="12"/></svg>',
  'trash-2': '<svg xmlns="http://www.w3.org/2000/svg" class="w-current h-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>',
  'check-square': '<svg xmlns="http://www.w3.org/2000/svg" class="w-current h-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>',
  radio: '<svg xmlns="http://www.w3.org/2000/svg" class="w-current h-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M7.76 16.24a6 6 0 0 1 0-8.49"/><path d="M4.93 19.07a10 10 0 0 1 0-14.14"/></svg>',
  'user-check': '<svg xmlns="http://www.w3.org/2000/svg" class="w-current h-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>',
  x: '<svg xmlns="http://www.w3.org/2000/svg" class="w-current h-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>',
  'alert-circle': '<svg xmlns="http://www.w3.org/2000/svg" class="w-current h-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>',
  'chevron-right': '<svg xmlns="http://www.w3.org/2000/svg" class="w-current h-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>',
  'chevron-down': '<svg xmlns="http://www.w3.org/2000/svg" class="w-current h-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',
  'log-out': '<svg xmlns="http://www.w3.org/2000/svg" class="w-current h-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>',
  lock: '<svg xmlns="http://www.w3.org/2000/svg" class="w-current h-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
  arrowRight: '<svg xmlns="http://www.w3.org/2000/svg" class="w-current h-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
  download: '<svg xmlns="http://www.w3.org/2000/svg" class="w-current h-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>',
  clock: '<svg xmlns="http://www.w3.org/2000/svg" class="w-current h-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  key: '<svg xmlns="http://www.w3.org/2000/svg" class="w-current h-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3.5"/></svg>',
  users: '<svg xmlns="http://www.w3.org/2000/svg" class="w-current h-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  bookOpen: '<svg xmlns="http://www.w3.org/2000/svg" class="w-current h-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
  userPlus: '<svg xmlns="http://www.w3.org/2000/svg" class="w-current h-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="16" x2="22" y1="11" y2="11"/></svg>',
  'arrow-down-left': '<svg xmlns="http://www.w3.org/2000/svg" class="w-current h-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="17" y1="7" x2="7" y2="17"/><polyline points="17 17 7 17 7 7"/></svg>',
  'arrow-up-right': '<svg xmlns="http://www.w3.org/2000/svg" class="w-current h-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>',
  edit: '<svg xmlns="http://www.w3.org/2000/svg" class="w-current h-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>',
  save: '<svg xmlns="http://www.w3.org/2000/svg" class="w-current h-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>',
  check: '<svg xmlns="http://www.w3.org/2000/svg" class="w-current h-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  'arrow-left': '<svg xmlns="http://www.w3.org/2000/svg" class="w-current h-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>',
  camera: '<svg xmlns="http://www.w3.org/2000/svg" class="w-current h-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>'
};

function icon(name, className = "w-5 h-5") {
  const svg = SVG_ICONS[name] || '';
  return `<span class="inline-flex items-center justify-center ${className}">${svg}</span>`;
}

function formatINR(amount) {
  const val = Number(amount) || 0;
  return '₹' + val.toLocaleString('en-IN');
}

function getAdminAvatarHtml(sizeClass = "w-10 h-10 text-sm ring-2 ring-indigo-500 shadow-sm") {
  const cleanSizeClass = sizeClass.replace('object-cover', '').replace('rounded-xl', 'rounded-full');
  return `<div class="${cleanSizeClass} rounded-full bg-gradient-to-tr from-slate-900 via-slate-800 to-indigo-950 text-indigo-300 flex items-center justify-center shadow-md border border-indigo-400/40">
    <svg xmlns="http://www.w3.org/2000/svg" class="w-1/2 h-1/2 text-indigo-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <circle cx="12" cy="11" r="2.5"/>
    </svg>
  </div>`;
}

function getStudentAvatarHtml(student, sizeClass = "w-10 h-10 text-sm ring-2 ring-brand-400 shadow-sm", initialsSizeClass = "text-sm") {
  if (student && student.photoUrl) {
    return `<img src="${student.photoUrl}" class="${sizeClass} rounded-full object-cover" alt="${student.name || 'User'}" />`;
  } else {
    const cleanSizeClass = sizeClass.replace('object-cover', '').replace('rounded-xl', 'rounded-full');
    return `<div class="${cleanSizeClass} rounded-full bg-slate-50 border border-slate-200/80 text-slate-400 flex items-center justify-center shadow-inner transition-colors">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-1/2 h-1/2 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    </div>`;
  }
}

function get12HourTimeString(date = new Date()) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  const strHours = hours < 10 ? '0' + hours : hours;
  const strMinutes = minutes < 10 ? '0' + minutes : minutes;
  const strSeconds = seconds < 10 ? '0' + seconds : seconds;
  return `${strHours}:${strMinutes}:${strSeconds} ${ampm}`;
}

function getGradeFromScore(score) {
  const m = parseFloat(score);
  if (isNaN(m)) return 'E';
  if (m >= 90) return 'A+';
  if (m >= 80) return 'A';
  if (m >= 70) return 'B+';
  if (m >= 60) return 'B';
  if (m >= 50) return 'C+';
  if (m >= 40) return 'C';
  if (m >= 30) return 'D+';
  if (m >= 20) return 'D';
  return 'E';
}

// --- GLOBAL APPLICATION STATE ---
const state = {
  isAuthenticated: false,
  loginRole: "student",
  loginError: "",

  adminCredentials: {
    username: "admin",
    password: "0000",
  },

  controlPanelCredentials: {
    username: "control panel",
    password: "234",
  },
  
  role: "student",
  activeTab: "dashboard",
  adminActiveTab: "overview",
  activeGraphTag: "analytics",
  selectedSem: "Sem 1",
  attendanceFilterMonth: "August 2026",
  selectedBatchFilter: "Genesis 01",
  fundCategoryFilter: "All",
  fundDateFilter: "",
  
  currentStudentId: "MSH-2026-0001",
  cpActiveTab: "overview",
  cpSelectedStudentId: "MSH-2026-0001",

  // OFFICIAL INSTITUTE STUDENT ROSTER (Genesis 01 & Genesis 02 - 16 Students)
  students: [
    { id: "MSH-2026-0001", username: "ziyan", password: "123", name: "Ziyan", status: "Present", school: "Manshau Alfaris", class: "Genesis 01", program: "Genesis 01", age: 15, phone: "+919800000001", attendanceRate: 100.0, totalLeaveDays: 0, avatarInitials: "ZY", lastUpdated: Date.now(), transactions: [], exams: [], leaves: [], attendanceRecords: {} },
    { id: "MSH-2026-0002", username: "mishalm", password: "123", name: "Mishal M", status: "Present", school: "Manshau Alfaris", class: "Genesis 01", program: "Genesis 01", age: 15, phone: "+919800000002", attendanceRate: 100.0, totalLeaveDays: 0, avatarInitials: "MM", lastUpdated: Date.now(), transactions: [], exams: [], leaves: [], attendanceRecords: {} },
    { id: "MSH-2026-0003", username: "roshan", password: "123", name: "Roshan", status: "Present", school: "Manshau Alfaris", class: "Genesis 01", program: "Genesis 01", age: 15, phone: "+919800000003", attendanceRate: 100.0, totalLeaveDays: 0, avatarInitials: "RO", lastUpdated: Date.now(), transactions: [], exams: [], leaves: [], attendanceRecords: {} },
    { id: "MSH-2026-0004", username: "shammas", password: "123", name: "Shammas", status: "Present", school: "Manshau Alfaris", class: "Genesis 01", program: "Genesis 01", age: 15, phone: "+919800000004", attendanceRate: 100.0, totalLeaveDays: 0, avatarInitials: "SH", lastUpdated: Date.now(), transactions: [], exams: [], leaves: [], attendanceRecords: {} },
    { id: "MSH-2026-0005", username: "masab", password: "123", name: "Mas ab", status: "Present", school: "Manshau Alfaris", class: "Genesis 01", program: "Genesis 01", age: 15, phone: "+919800000005", attendanceRate: 100.0, totalLeaveDays: 0, avatarInitials: "MA", lastUpdated: Date.now(), transactions: [], exams: [], leaves: [], attendanceRecords: {} },
    { id: "MSH-2026-0006", username: "asim", password: "123", name: "Asim", status: "Present", school: "Manshau Alfaris", class: "Genesis 01", program: "Genesis 01", age: 15, phone: "+919800000006", attendanceRate: 100.0, totalLeaveDays: 0, avatarInitials: "AS", lastUpdated: Date.now(), transactions: [], exams: [], leaves: [], attendanceRecords: {} },
    { id: "MSH-2026-0007", username: "swalih", password: "123", name: "Swalih", status: "Present", school: "Manshau Alfaris", class: "Genesis 02", program: "Genesis 02", age: 15, phone: "+919800000007", attendanceRate: 100.0, totalLeaveDays: 0, avatarInitials: "SW", lastUpdated: Date.now(), transactions: [], exams: [], leaves: [], attendanceRecords: {} },
    { id: "MSH-2026-0008", username: "shafeeh", password: "123", name: "Shafeeh", status: "Present", school: "Manshau Alfaris", class: "Genesis 02", program: "Genesis 02", age: 15, phone: "+919800000008", attendanceRate: 100.0, totalLeaveDays: 0, avatarInitials: "SF", lastUpdated: Date.now(), transactions: [], exams: [], leaves: [], attendanceRecords: {} },
    { id: "MSH-2026-0009", username: "anshid", password: "123", name: "Anshid", status: "Present", school: "Manshau Alfaris", class: "Genesis 02", program: "Genesis 02", age: 14, phone: "+919800000009", attendanceRate: 100.0, totalLeaveDays: 0, avatarInitials: "AN", lastUpdated: Date.now(), transactions: [], exams: [], leaves: [], attendanceRecords: {} },
    { id: "MSH-2026-0010", username: "nooruddin", password: "123", name: "Nooruddin", status: "Present", school: "Manshau Alfaris", class: "Genesis 02", program: "Genesis 02", age: 14, phone: "+919800000010", attendanceRate: 100.0, totalLeaveDays: 0, avatarInitials: "NO", lastUpdated: Date.now(), transactions: [], exams: [], leaves: [], attendanceRecords: {} },
    { id: "MSH-2026-0011", username: "adhinan", password: "123", name: "Adhinan", status: "Present", school: "Manshau Alfaris", class: "Genesis 02", program: "Genesis 02", age: 14, phone: "+919800000011", attendanceRate: 100.0, totalLeaveDays: 0, avatarInitials: "AD", lastUpdated: Date.now(), transactions: [], exams: [], leaves: [], attendanceRecords: {} },
    { id: "MSH-2026-0012", username: "siyad", password: "123", name: "Siyad", status: "Present", school: "Manshau Alfaris", class: "Genesis 02", program: "Genesis 02", age: 14, phone: "+919800000012", attendanceRate: 100.0, totalLeaveDays: 0, avatarInitials: "SI", lastUpdated: Date.now(), transactions: [], exams: [], leaves: [], attendanceRecords: {} },
    { id: "MSH-2026-0013", username: "mishalt", password: "123", name: "Mishal T", status: "Present", school: "Manshau Alfaris", class: "Genesis 02", program: "Genesis 02", age: 14, phone: "+919800000013", attendanceRate: 100.0, totalLeaveDays: 0, avatarInitials: "MT", lastUpdated: Date.now(), transactions: [], exams: [], leaves: [], attendanceRecords: {} },
    { id: "MSH-2026-0014", username: "vahid", password: "123", name: "Vahid", status: "Present", school: "Manshau Alfaris", class: "Genesis 02", program: "Genesis 02", age: 14, phone: "+919800000014", attendanceRate: 100.0, totalLeaveDays: 0, avatarInitials: "VA", lastUpdated: Date.now(), transactions: [], exams: [], leaves: [], attendanceRecords: {} },
    { id: "MSH-2026-0015", username: "amjad", password: "123", name: "Amjad", status: "Present", school: "Manshau Alfaris", class: "Genesis 02", program: "Genesis 02", age: 14, phone: "+919800000015", attendanceRate: 100.0, totalLeaveDays: 0, avatarInitials: "AM", lastUpdated: Date.now(), transactions: [], exams: [], leaves: [], attendanceRecords: {} },
    { id: "MSH-2026-0016", username: "yaseen", password: "123", name: "Yaseen", status: "Present", school: "Manshau Alfaris", class: "Genesis 02", program: "Genesis 02", age: 14, phone: "+919800000016", attendanceRate: 100.0, totalLeaveDays: 0, avatarInitials: "YA", lastUpdated: Date.now(), transactions: [], exams: [], leaves: [], attendanceRecords: {} }
  ],

  announcements: [],

  modals: {
    leave: false,
    profile: false,
    notification: false,
    addStudent: false,
    editStudent: false,
    addSubject: false,
    editSubject: false,
    editBroadcast: false,
    editLeave: false,
    roleAuth: false,
    firebaseForm: false
  },
  firebaseMessages: [],
  latestTestResult: null,
  roleAuthTarget: 'admin',
  roleAuthError: '',
  addSubjectStudentId: "",
  editSubjectStudentId: "",
  editSubjectIndex: -1,
  editingStudentId: "",
  editingBroadcastId: null,
  editingLeaveStudentId: null,
  editingLeaveId: null,
  deletedStudentIds: []
};

const INITIAL_SEED_STUDENTS = JSON.parse(JSON.stringify(state.students));
const STORAGE_KEY = "manshau_erp_state_v8";

// Firebase Client Initialization Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgHuEPFHrClZPBhan8JEPrF-vsba6-AQI",
  authDomain: "manshau-alfaris-ee0e9.firebaseapp.com",
  databaseURL: "https://manshau-alfaris-ee0e9-default-rtdb.firebaseio.com",
  projectId: "manshau-alfaris-ee0e9",
  storageBucket: "manshau-alfaris-ee0e9.firebasestorage.app",
  messagingSenderId: "923493602955",
  appId: "1:923493602955:web:e18f4a17e35f908384668e",
  measurementId: "G-WB3382F1XJ"
};

let db;
let rtdbRef, rtdbSet, rtdbGet, rtdbOnValue, rtdbRemove, rtdbOff, rtdbPush;
let isBackendActive = false;

function showToast(message, type = 'success') {
  if (!message) return;
  let toastContainer = document.getElementById("toastContainer");
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.id = "toastContainer";
    toastContainer.className = "fixed top-5 right-5 z-50 flex flex-col space-y-2 pointer-events-none max-w-sm w-full px-4";
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement("div");
  const bgColor = type === 'error' ? 'bg-rose-600 text-white' : (type === 'info' ? 'bg-slate-900 text-white' : 'bg-emerald-600 text-white');
  const iconSvg = type === 'error' 
    ? `<svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`
    : `<svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>`;

  toast.className = `pointer-events-auto flex items-center space-x-3 p-3.5 rounded-2xl shadow-xl transition-all duration-300 transform translate-y-0 opacity-100 ${bgColor} font-extrabold text-xs sm:text-sm`;
  toast.innerHTML = `${iconSvg}<span>${message}</span>`;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

async function initFirebase() {
  if (window.db) {
    db = window.db;
    try {
      const rtdbMod = await import("https://www.gstatic.com/firebasejs/11.7.1/firebase-database.js");
      rtdbRef = rtdbMod.ref;
      rtdbSet = rtdbMod.set;
      rtdbGet = rtdbMod.get;
      rtdbOnValue = rtdbMod.onValue;
      rtdbRemove = rtdbMod.remove;
      rtdbOff = rtdbMod.off;
      rtdbPush = rtdbMod.push;
      setupRealtimeSync();
      console.log("Firebase Realtime Database connected!");
      return;
    } catch(e) {
      console.error("Realtime Database loading error:", e);
    }
  }

  try {
    const { initializeApp } = await import("https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js");
    const rtdbMod = await import("https://www.gstatic.com/firebasejs/11.7.1/firebase-database.js");

    const app = initializeApp(firebaseConfig);
    db = rtdbMod.getDatabase(app);
    window.db = db;

    rtdbRef = rtdbMod.ref;
    rtdbSet = rtdbMod.set;
    rtdbGet = rtdbMod.get;
    rtdbOnValue = rtdbMod.onValue;
    rtdbRemove = rtdbMod.remove;
    rtdbOff = rtdbMod.off;
    rtdbPush = rtdbMod.push;

    setupRealtimeSync();
    console.log("Firebase Realtime Database initialized successfully!");
  } catch (e) {
    console.error("Firebase init failed:", e);
  }
}

function updateStatusBadgeUI() {
  const badge = document.getElementById("dbStatusBadge");
  if (!badge) return;
  if (isBackendActive) {
    badge.className = "hidden md:flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-[10px] font-extrabold border shadow-sm bg-emerald-50 text-emerald-700 border-emerald-200";
    badge.innerHTML = `<span class="relative flex h-1.5 w-1.5"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span></span><span>Firebase Synced</span>`;
  } else {
    badge.className = "hidden md:flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-[10px] font-extrabold border shadow-sm bg-blue-50 text-blue-700 border-blue-200";
    badge.innerHTML = `<span class="relative flex h-1.5 w-1.5"><span class="animate-pulse absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span><span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span></span><span>Local Storage Mode</span>`;
  }
}

function saveStateLocalOnly() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      students: state.students,
      announcements: state.announcements,
      currentStudentId: state.currentStudentId,
      role: state.role,
      isAuthenticated: state.isAuthenticated,
      adminCredentials: state.adminCredentials,
      controlPanelCredentials: state.controlPanelCredentials,
      deletedStudentIds: state.deletedStudentIds
    }));
  } catch(e) {}
}

let unsubscribeSystem = null;
let unsubscribeAnnouncements = null;
let unsubscribeUsers = null;
let unsubscribeMessages = null;
let unsubscribeTest = null;

function setupRealtimeSync() {
  if (!db || !rtdbRef || !rtdbOnValue) return;

  if (unsubscribeSystem) { try { unsubscribeSystem(); } catch(e){} }
  if (unsubscribeAnnouncements) { try { unsubscribeAnnouncements(); } catch(e){} }
  if (unsubscribeUsers) { try { unsubscribeUsers(); } catch(e){} }
  if (unsubscribeMessages) { try { unsubscribeMessages(); } catch(e){} }
  if (unsubscribeTest) { try { unsubscribeTest(); } catch(e){} }

  unsubscribeSystem = rtdbOnValue(rtdbRef(db, 'system/credentials'), (snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      if (data.adminCredentials) state.adminCredentials = data.adminCredentials;
      if (data.controlPanelCredentials) state.controlPanelCredentials = data.controlPanelCredentials;
      if (data.deletedStudentIds && Array.isArray(data.deletedStudentIds)) {
        state.deletedStudentIds = data.deletedStudentIds;
      }
      sanitizeStudentsRoster();
      saveStateLocalOnly();
      renderApp();
    }
  });

  unsubscribeAnnouncements = rtdbOnValue(rtdbRef(db, 'announcements/global'), (snapshot) => {
    if (snapshot.exists()) {
      const incoming = snapshot.val().data || [];
      const readMap = new Map((state.announcements || []).map(a => [a.id, a.read]));
      state.announcements = incoming.map(a => ({
        ...a,
        read: readMap.has(a.id) ? readMap.get(a.id) : (a.read || false)
      }));
      saveStateLocalOnly();
      isBackendActive = true;
      updateStatusBadgeUI();
      renderApp();
    }
  });

  unsubscribeUsers = rtdbOnValue(rtdbRef(db, 'users'), (snapshot) => {
    const dbStudents = [];
    if (snapshot.exists()) {
      const usersData = snapshot.val();
      Object.keys(usersData).forEach((studentId) => {
        const docData = usersData[studentId];
        if (docData && docData.data) {
          const trimmedId = studentId.trim();
          if (state.deletedStudentIds && state.deletedStudentIds.includes(trimmedId)) {
            if (db && rtdbRef && rtdbRemove) {
              rtdbRemove(rtdbRef(db, 'users/' + trimmedId)).catch(() => {});
            }
            return;
          }
          dbStudents.push({
            id: trimmedId,
            data: docData.data,
            last_updated: docData.last_updated || docData.data.lastUpdated || 0
          });
        }
      });
    }

    handleIncomingUsersSync(dbStudents);
  });

  unsubscribeMessages = rtdbOnValue(rtdbRef(db, 'messages'), (snapshot) => {
    const list = [];
    if (snapshot.exists()) {
      const data = snapshot.val();
      Object.keys(data).forEach(id => {
        list.push({ id, ...data[id] });
      });
      list.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
    }
    state.firebaseMessages = list;
    const container = document.getElementById("firebaseMessagesContainer");
    if (container) {
      container.innerHTML = renderFirebaseMessagesListHtml();
    }
  }, (error) => {
    console.error("🔥 [Messages Listener Error]:", error);
  });

  unsubscribeTest = rtdbOnValue(rtdbRef(db, 'connection_test'), (snapshot) => {
    if (snapshot.exists()) {
      const testVal = snapshot.val();
      console.log("🔥 [Firebase Realtime Listener] connection_test data:", testVal);
      state.latestTestResult = testVal;
      const testValEl = document.getElementById("fbTestConsoleOutput");
      if (testValEl) {
        testValEl.textContent = JSON.stringify(testVal, null, 2);
      }
    }
  }, (error) => {
    console.error("🔥 [Connection Test Listener Error]:", error);
  });
}

function handleIncomingUsersSync(dbStudents) {
  isBackendActive = true;
  updateStatusBadgeUI();

  if (dbStudents.length === 0) {
    saveState();
    return;
  }

  dbStudents.forEach(row => {
    const dbStud = row.data;
    if (!dbStud || !dbStud.id) return;
    if (state.deletedStudentIds && state.deletedStudentIds.includes(dbStud.id)) return;

    const localIndex = state.students.findIndex(s => s.id === dbStud.id);
    if (localIndex > -1) {
      const localStud = state.students[localIndex];
      const localTime = Number(localStud.lastUpdated) || 0;
      const dbTime = Number(row.last_updated) || Number(dbStud.lastUpdated) || 0;

      if (dbTime >= localTime || JSON.stringify(localStud) !== JSON.stringify(dbStud)) {
        state.students[localIndex] = dbStud;
      }
    } else {
      state.students.push(dbStud);
    }
  });

  if (state.deletedStudentIds && state.deletedStudentIds.length > 0) {
    state.students = state.students.filter(s => s && s.id && !state.deletedStudentIds.includes(s.id));
  }

  sanitizeStudentsRoster();

  state.students.forEach(s => {
    s.attendanceRecords = s.attendanceRecords || {};
    recalculateAttendanceRate(s);
    if (!Array.isArray(s.transactions)) s.transactions = [];
    if (!Array.isArray(s.exams)) s.exams = [];
    if (!Array.isArray(s.leaves)) s.leaves = [];
  });

  saveStateLocalOnly();
  const isTyping = document.activeElement && (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA');
  if (!isTyping) {
    renderApp();
  }
}

function syncGlobalAcademicLeaves() {
  const globalAcademicLeaveKeys = new Set();
  (state.students || []).forEach(s => {
    if (s && s.attendanceRecords) {
      Object.entries(s.attendanceRecords).forEach(([key, val]) => {
        if (val === "Academic Leave") {
          globalAcademicLeaveKeys.add(key);
        }
      });
    }
  });

  if (globalAcademicLeaveKeys.size > 0) {
    (state.students || []).forEach(s => {
      s.attendanceRecords = s.attendanceRecords || {};
      globalAcademicLeaveKeys.forEach(key => {
        s.attendanceRecords[key] = "Academic Leave";
      });
      recalculateAttendanceRate(s);
    });
  }
}

function sanitizeStudentsRoster() {
  state.deletedStudentIds = state.deletedStudentIds || [];
  const studentMap = new Map();

  INITIAL_SEED_STUDENTS.forEach(seed => {
    if (!state.deletedStudentIds.includes(seed.id)) {
      studentMap.set(seed.id, JSON.parse(JSON.stringify(seed)));
    }
  });

  if (Array.isArray(state.students)) {
    state.students.forEach(s => {
      if (s && s.id && !state.deletedStudentIds.includes(s.id)) {
        const existing = studentMap.get(s.id) || {};
        const mergedAttendance = {
          ...(existing.attendanceRecords || {}),
          ...(s.attendanceRecords || {})
        };
        // Strict Filter: Keep ONLY August 2026 records
        const augustOnlyAttendance = {};
        Object.keys(mergedAttendance).forEach(k => {
          if (k.startsWith("August 2026-")) {
            augustOnlyAttendance[k] = mergedAttendance[k];
          }
        });
        studentMap.set(s.id, { 
          ...existing, 
          ...s,
          attendanceRecords: augustOnlyAttendance
        });
      }
    });
  }

  const uniqueStudents = Array.from(studentMap.values());
  uniqueStudents.sort((a, b) => (a.id || '').localeCompare(b.id || ''));
  state.students = uniqueStudents;

  if (!state.students.some(s => s && s.id === state.currentStudentId)) {
    state.currentStudentId = state.students[0] ? state.students[0].id : "MSH-2026-0001";
  }
}

function recalculateAttendanceRate(student) {
  if (!student) return;
  const records = student.attendanceRecords || {};
  const entries = Object.entries(records);
  if (entries.length === 0) {
    student.attendanceRate = 100.0;
    student.totalLeaveDays = 0;
    return;
  }
  let presents = 0;
  let leaves = 0;
  let totalEvaluatedDays = 0;

  entries.forEach(([dateKey, status]) => {
    if (status === "Present") {
      presents += 1;
      totalEvaluatedDays += 1;
    } else if (status === "Half Day") {
      presents += 0.5;
      totalEvaluatedDays += 1;
    } else if (status === "Absent" || status === "Leave") {
      leaves += 1;
      totalEvaluatedDays += 1;
    }
  });

  if (totalEvaluatedDays > 0) {
    student.attendanceRate = parseFloat(((presents / totalEvaluatedDays) * 100).toFixed(1));
  } else {
    student.attendanceRate = 100.0;
  }
  student.totalLeaveDays = leaves;
}

async function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (parsed.deletedStudentIds && Array.isArray(parsed.deletedStudentIds)) {
        state.deletedStudentIds = parsed.deletedStudentIds;
      }
      if (parsed.students && Array.isArray(parsed.students)) {
        state.students = parsed.students.filter(s => s && s.id && !state.deletedStudentIds.includes(s.id));
      }
      if (parsed.currentStudentId) state.currentStudentId = parsed.currentStudentId;
      if (parsed.role) state.role = parsed.role;
      if (parsed.isAuthenticated !== undefined) state.isAuthenticated = parsed.isAuthenticated;
      if (parsed.adminCredentials) state.adminCredentials = parsed.adminCredentials;
      if (parsed.controlPanelCredentials) state.controlPanelCredentials = parsed.controlPanelCredentials;
    } catch(e) {}
  }
  state.announcements = [];
  sanitizeStudentsRoster();
}

async function saveStudentDoc(student) {
  saveStateLocalOnly();
  if (!db || !rtdbRef || !rtdbSet || !student || !student.id) return;
  try {
    const incomingTime = Number(student.lastUpdated) || Date.now();
    student.lastUpdated = incomingTime;
    await rtdbSet(rtdbRef(db, 'users/' + student.id), {
      data: student,
      last_updated: incomingTime
    });
    isBackendActive = true;
    updateStatusBadgeUI();
  } catch (e) {
    console.error("saveStudentDoc write error:", e);
    isBackendActive = false;
    updateStatusBadgeUI();
  }
}

async function saveState() {
  saveStateLocalOnly();
  if (!db || !rtdbRef || !rtdbSet) return;

  try {
    const studentPromises = (state.students || []).map(student => {
      const incomingTime = Number(student.lastUpdated) || Date.now();
      student.lastUpdated = incomingTime;
      return rtdbSet(rtdbRef(db, 'users/' + student.id), {
        data: student,
        last_updated: incomingTime
      });
    });

    const announcementsPromise = rtdbSet(rtdbRef(db, 'announcements/global'), {
      data: state.announcements || []
    });

    const credentialsPromise = rtdbSet(rtdbRef(db, 'system/credentials'), {
      adminCredentials: state.adminCredentials,
      controlPanelCredentials: state.controlPanelCredentials,
      deletedStudentIds: state.deletedStudentIds || []
    });

    await Promise.all([...studentPromises, announcementsPromise, credentialsPromise]);

    isBackendActive = true;
    updateStatusBadgeUI();
  } catch(e) {
    console.error("saveState write error:", e);
  }
}

function getCurrentStudent() {
  const found = (state.students || []).find(s => s && s.id === state.currentStudentId);
  return found || (state.students && state.students[0]) || INITIAL_SEED_STUDENTS[0];
}

function getFinancials(studentObj) {
  const student = studentObj || getCurrentStudent();
  const txs = (student && Array.isArray(student.transactions)) ? student.transactions : [];
  const totalCredits = txs.filter(t => t.type === "Credit").reduce((sum, t) => sum + (Number(t.amount) || 0), 0);
  const totalDebits = txs.filter(t => t.type === "Debit").reduce((sum, t) => sum + (Number(t.amount) || 0), 0);
  const totalFeesAssigned = 85000;
  const pendingDues = Math.max(0, totalFeesAssigned - totalCredits + totalDebits);
  return { totalCredits, totalDebits, totalFeesAssigned, pendingDues };
}

// --- MAIN APP RENDERER ---
function renderApp() {
  try {
    saveStateLocalOnly();
    const container = document.getElementById("app");
    if (!container) return;

    if (!state.isAuthenticated) {
      container.innerHTML = renderLoginWindow();
      return;
    }

    const unreadCount = (Array.isArray(state.announcements) ? state.announcements : []).filter(a => a && !a.read).length;
    const currentStudent = getCurrentStudent();
    const fin = getFinancials(currentStudent);

    container.innerHTML = `
      <!-- Sticky Header -->
      <header class="sticky top-0 z-40 bg-white/85 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <!-- Brand Logo -->
          <div class="flex items-center space-x-3 cursor-pointer" onclick="setActiveTab('dashboard')">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-sky-400 p-2 shadow-md shadow-brand-500/20 flex items-center justify-center text-white font-black text-xl tracking-wider">
              M
            </div>
            <div>
              <div class="flex items-center space-x-2">
                <span class="font-extrabold text-slate-900 text-lg tracking-tight">MANSHAU</span>
              </div>
            </div>
          </div>

            <!-- Live Clock & Profile -->
            <div class="flex items-center space-x-3 sm:space-x-4">
              ${(state.role === 'admin' || state.role === 'controlpanel') ? `
              <div id="dbStatusBadge" class="hidden md:flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-[10px] font-extrabold border shadow-sm ${
                isBackendActive ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-blue-50 text-blue-700 border-blue-200"
              }">
                <span class="relative flex h-1.5 w-1.5">
                  ${isBackendActive
                    ? `<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>`
                    : `<span class="animate-pulse absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span><span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>`
                  }
                </span>
                <span>${isBackendActive ? "Firebase Synced" : "Local Storage Mode"}</span>
              </div>
              ` : ''}

              <!-- 12-Hour Clock -->
              <div class="hidden sm:flex items-center space-x-2 bg-slate-100/90 px-3.5 py-1.5 rounded-full text-xs font-extrabold text-slate-700 border border-slate-200/80 shadow-inner">
                ${icon('clock', 'w-4 h-4 text-brand-600 animate-pulse')}
                <span id="liveClockPill">${get12HourTimeString()}</span>
              </div>
            </div>

            <!-- Notification Bell & Profile Menu Group -->
            <div class="flex items-center space-x-2">
              <!-- Bell -->
              <button 
                onclick="toggleModal('notification', true)"
                class="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-slate-50 border border-slate-200/80 shadow-sm transition-all hover:scale-105 flex flex-shrink-0 items-center justify-center text-slate-600"
                title="Notifications"
              >
                ${icon('bell', 'w-5 h-5 text-slate-600')}
                ${unreadCount > 0 ? `
                  <span class="absolute -top-1 -right-1 bg-rose-500 text-white text-[9px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
                    ${unreadCount > 9 ? '9+' : unreadCount}
                  </span>
                ` : ''}
              </button>

              <!-- Profile Menu -->
              <div class="relative">
                <button
                  id="headerProfileBtn"
                  onclick="toggleHeaderProfileMenu()"
                  class="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-slate-50 border-2 border-brand-500/80 shadow-sm transition-all hover:scale-105 p-0.5 flex flex-shrink-0 items-center justify-center group"
                  title="Profile & Settings"
                >
                  ${(state.role === 'admin' || state.role === 'controlpanel') 
                    ? getAdminAvatarHtml("w-full h-full rounded-full") 
                    : getStudentAvatarHtml(currentStudent, "w-full h-full rounded-full object-cover", "text-xs")}
                  <span class="absolute -bottom-0.5 -right-0.5 bg-white rounded-full p-0.5 border border-slate-200 shadow-sm text-slate-400 flex items-center justify-center">
                    ${icon('chevron-down', 'w-2.5 h-2.5')}
                  </span>
                </button>

              <div id="headerProfileMenu" class="hidden absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-anti-gravity-lg border border-slate-100 overflow-hidden z-50 animate-fade-in-up">
                <div class="p-3 bg-gradient-to-r from-brand-50/60 to-slate-50 border-b border-slate-100">
                  <div class="flex items-center space-x-3">
                    ${(state.role === 'admin' || state.role === 'controlpanel')
                      ? getAdminAvatarHtml("w-10 h-10 rounded-full ring-2 ring-indigo-500 shadow-sm") 
                      : getStudentAvatarHtml(currentStudent, "w-10 h-10 rounded-full object-cover ring-2 ring-brand-400 shadow-sm", "text-sm")}
                    <div class="overflow-hidden">
                      <p class="font-extrabold text-slate-900 text-xs truncate">${state.role === 'admin' ? 'Administrator' : state.role === 'controlpanel' ? 'Control Panel' : currentStudent.name}</p>
                      <p class="text-[10px] text-slate-500 font-semibold truncate">${state.role === 'admin' ? 'System Master' : state.role === 'controlpanel' ? 'Batch Controller' : (currentStudent.class || 'Student')}</p>
                    </div>
                  </div>
                </div>

                <div class="p-1.5 space-y-0.5 text-xs">
                  <p class="px-3 pt-1 pb-0.5 text-[9px] uppercase font-extrabold text-slate-400 tracking-wider">Switch View</p>

                  <button onclick="setRole('student'); closeHeaderProfileMenu()" class="w-full flex items-center justify-between px-3 py-2 rounded-xl font-bold ${state.role === 'student' ? 'bg-brand-50 text-brand-600' : 'text-slate-700 hover:bg-slate-50'} transition-colors text-left">
                    <div class="flex items-center space-x-2.5">
                      ${icon('user-check', 'w-4 h-4 text-brand-500')}
                      <span>Student View</span>
                    </div>
                    ${state.role === 'student' ? '<span class="w-2 h-2 rounded-full bg-brand-600"></span>' : ''}
                  </button>

                  <button onclick="openRoleAuthModal('admin'); closeHeaderProfileMenu()" class="w-full flex items-center justify-between px-3 py-2 rounded-xl font-bold ${state.role === 'admin' ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-50'} transition-colors text-left">
                    <div class="flex items-center space-x-2.5">
                      ${icon('shield', 'w-4 h-4 text-brand-500')}
                      <span>Admin Panel</span>
                    </div>
                    ${state.role === 'admin' ? '<span class="w-2 h-2 rounded-full bg-emerald-400"></span>' : ''}
                  </button>

                  <button onclick="openRoleAuthModal('controlpanel'); closeHeaderProfileMenu()" class="w-full flex items-center justify-between px-3 py-2 rounded-xl font-bold ${state.role === 'controlpanel' ? 'bg-emerald-600 text-white' : 'text-slate-700 hover:bg-slate-50'} transition-colors text-left">
                    <div class="flex items-center space-x-2.5">
                      ${icon('sliders', 'w-4 h-4 text-emerald-500')}
                      <span>Control Panel</span>
                    </div>
                    ${state.role === 'controlpanel' ? '<span class="w-2 h-2 rounded-full bg-emerald-400"></span>' : ''}
                  </button>

                  <div class="border-t border-slate-100 my-1"></div>

                  <button onclick="logout(); closeHeaderProfileMenu()" class="w-full flex items-center space-x-2.5 px-3 py-2 rounded-xl font-bold text-rose-600 hover:bg-rose-50 transition-colors text-left">
                    ${icon('log-out', 'w-4 h-4 text-rose-500')}
                    <span>Log Out</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <!-- Main Stage -->
      <main class="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-36">
        ${
          state.role === "student" ? renderStudentPortal(currentStudent, fin) :
          state.role === "controlpanel" ? renderControlPanelPortal() :
          renderAdminPortal(currentStudent, fin)
        }
      </main>

      <!-- Modals -->
      ${renderModals()}
    `;

    setTimeout(initCharts, 50);
  } catch(err) {
    console.error("Render error:", err);
  }
}

// --- LOGIN WINDOW ---
function renderLoginWindow() {
  const isStudentRole = state.loginRole === 'student';
  const isAdminRole = state.loginRole === 'admin';

  return `
    <div class="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-slate-100 text-slate-800">
      <div class="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-brand-400/10 blur-3xl pointer-events-none"></div>
      <div class="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-purple-400/10 blur-3xl pointer-events-none"></div>

      <div class="w-full max-w-md relative z-10">
        <div class="text-center mb-6">
          <div class="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand-600 to-sky-400 p-0.5 shadow-md inline-flex items-center justify-center text-white font-black text-3xl mb-3 shadow-brand-500/20">
            M
          </div>
          <h1 class="text-3xl font-black text-slate-900 tracking-tight lowercase">manshau</h1>
          <p class="text-xs text-slate-500 font-semibold mt-1">Educational Institute Authentication Gateway</p>
        </div>

        ${isStudentRole ? `
          <div class="glass-card rounded-3xl p-6 sm:p-8 shadow-anti-gravity border border-white bg-white/80 backdrop-blur-md space-y-5">
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <label class="block text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-1">Select Batch</label>
                <div class="flex items-center space-x-1 bg-slate-100 p-1 rounded-xl border border-slate-200/80 text-[10px]">
                  ${["Genesis 01", "Genesis 02"].map(b => `
                    <button onclick="changeBatchFilter('${b}')" class="px-2.5 py-1 rounded-lg font-extrabold transition-all ${state.selectedBatchFilter === b ? 'bg-brand-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}">
                      ${b}
                    </button>
                  `).join('')}
                </div>
              </div>

              <label class="block text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-1">Choose Student User</label>
              <select onchange="if(this.value) quickLoginStudent(this.value)" class="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white font-bold text-xs sm:text-sm text-slate-800 shadow-sm focus:ring-2 focus:ring-brand-500 focus:outline-none cursor-pointer">
                <option value="">-- Choose Student Account (${state.selectedBatchFilter || 'Genesis 01'}) --</option>
                ${state.students
                  .filter(s => (s.class || 'Genesis 01') === (state.selectedBatchFilter || 'Genesis 01'))
                  .map(s => `
                    <option value="${s.id}">${s.name}</option>
                  `).join('')}
              </select>
            </div>

            <div class="pt-3 border-t border-slate-200/80 flex items-center justify-between gap-2">
              <button onclick="setLoginRole('admin')" class="w-1/2 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs shadow-md transition-all flex items-center justify-center space-x-1.5">
                ${icon('shield', 'w-3.5 h-3.5 text-emerald-400')}
                <span>Admin Login</span>
              </button>

              <button onclick="setLoginRole('controlpanel')" class="w-1/2 py-2.5 px-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-extrabold text-xs shadow-md transition-all flex items-center justify-center space-x-1.5">
                ${icon('sliders', 'w-3.5 h-3.5')}
                <span>Control Panel</span>
              </button>
            </div>
          </div>
        ` : isAdminRole ? `
          <div class="glass-card rounded-3xl p-6 sm:p-8 shadow-anti-gravity border border-white bg-white/90 backdrop-blur-md space-y-5">
            <div class="flex items-center justify-between border-b border-slate-100 pb-3">
              <div class="flex items-center space-x-2">
                <div class="p-2 rounded-xl bg-slate-900 text-emerald-400 shadow-sm">
                  ${icon('shield', 'w-4 h-4')}
                </div>
                <div>
                  <h2 class="text-base font-black text-slate-900">Admin Portal Sign In</h2>
                  <p class="text-[10px] text-slate-400 font-bold uppercase tracking-wider">System Control</p>
                </div>
              </div>
              <button onclick="setLoginRole('student')" class="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100">
                ${icon('x', 'w-4 h-4')}
              </button>
            </div>

            <form onsubmit="handleLoginSubmit(event)" class="space-y-4">
              ${state.loginError ? `
                <div class="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold flex items-center space-x-2">
                  ${icon('alert-circle', 'w-4 h-4 text-rose-500 flex-shrink-0')}
                  <span>${state.loginError}</span>
                </div>
              ` : ''}

              <div>
                <label class="block text-[11px] font-extrabold uppercase text-slate-500 mb-1">Username</label>
                <input type="text" id="loginUsername" value="admin" required class="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white font-bold text-xs sm:text-sm text-slate-900 shadow-sm focus:ring-2 focus:ring-brand-500 focus:outline-none" />
              </div>

              <div>
                <label class="block text-[11px] font-extrabold uppercase text-slate-500 mb-1">Password</label>
                <input type="password" id="loginPassword" placeholder="••••••••" required class="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white font-bold text-xs sm:text-sm text-slate-900 shadow-sm focus:ring-2 focus:ring-brand-500 focus:outline-none" />
              </div>

              <button type="submit" class="w-full py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center space-x-2">
                ${icon('lock', 'w-4 h-4 text-emerald-400')}
                <span>Sign In to Admin Portal</span>
              </button>

              <button type="button" onclick="setLoginRole('student')" class="w-full py-2.5 px-4 rounded-xl text-slate-500 hover:text-slate-800 font-bold text-xs transition-colors flex items-center justify-center space-x-1.5">
                ${icon('arrow-left', 'w-3.5 h-3.5')}
                <span>Back to Student Login</span>
              </button>
            </form>
          </div>
        ` : `
          <div class="glass-card rounded-3xl p-6 sm:p-8 shadow-anti-gravity border border-white bg-white/90 backdrop-blur-md space-y-5">
            <div class="flex items-center justify-between border-b border-slate-100 pb-3">
              <div class="flex items-center space-x-2">
                <div class="p-2 rounded-xl bg-brand-600 text-white shadow-sm">
                  ${icon('sliders', 'w-4 h-4')}
                </div>
                <div>
                  <h2 class="text-base font-black text-slate-900">Control Panel Sign In</h2>
                  <p class="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Genesis 01 Batch Control</p>
                </div>
              </div>
              <button onclick="setLoginRole('student')" class="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100">
                ${icon('x', 'w-4 h-4')}
              </button>
            </div>

            <form onsubmit="handleLoginSubmit(event)" class="space-y-4">
              ${state.loginError ? `
                <div class="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold flex items-center space-x-2">
                  ${icon('alert-circle', 'w-4 h-4 text-rose-500 flex-shrink-0')}
                  <span>${state.loginError}</span>
                </div>
              ` : ''}

              <div>
                <label class="block text-[11px] font-extrabold uppercase text-slate-500 mb-1">Username</label>
                <input type="text" id="loginUsername" value="control panel" required class="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white font-bold text-xs sm:text-sm text-slate-900 shadow-sm focus:ring-2 focus:ring-brand-500 focus:outline-none" />
              </div>

              <div>
                <label class="block text-[11px] font-extrabold uppercase text-slate-500 mb-1">Password</label>
                <input type="password" id="loginPassword" placeholder="••••••••" required class="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white font-bold text-xs sm:text-sm text-slate-900 shadow-sm focus:ring-2 focus:ring-brand-500 focus:outline-none" />
              </div>

              <button type="submit" class="w-full py-3.5 px-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-extrabold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center space-x-2">
                ${icon('lock', 'w-4 h-4 text-white')}
                <span>Sign In to Control Panel</span>
              </button>

              <button type="button" onclick="setLoginRole('student')" class="w-full py-2.5 px-4 rounded-xl text-slate-500 hover:text-slate-800 font-bold text-xs transition-colors flex items-center justify-center space-x-1.5">
                ${icon('arrow-left', 'w-3.5 h-3.5')}
                <span>Back to Student Login</span>
              </button>
            </form>
          </div>
        `}
      </div>
    </div>
  `;
}

// --- STUDENT PORTAL ---
function renderStudentPortal(student, fin) {
  return `
    <div class="max-w-7xl mx-auto w-full">
      <div class="w-full">
        ${renderActiveNavView(student, fin)}
      </div>

      <!-- STICKY FOOTER NAV -->
      <nav class="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-slate-200/80 py-3 sm:py-3.5 px-2 sm:px-8 shadow-anti-gravity-lg">
        <div class="max-w-4xl mx-auto w-full">
          <div class="grid grid-cols-4 gap-1.5 sm:gap-3.5 w-full">
            ${[
              { id: "dashboard", label: "Dashboard" },
              { id: "examination", label: "Exam" },
              { id: "leaves", label: "Leaves" },
              { id: "bank", label: "Fund" }
            ].map(item => {
              const isActive = state.activeTab === item.id;
              return `
                <button
                  onclick="setActiveTab('${item.id}')"
                  class="w-full py-3 sm:py-3.5 px-1 sm:px-4 rounded-2xl font-black text-xs sm:text-base md:text-lg transition-all duration-300 flex items-center justify-center border text-center tracking-tight ${
                    isActive
                      ? "bg-brand-600 text-white border-brand-600 shadow-md shadow-brand-500/25 scale-[1.03]"
                      : "bg-slate-50 text-slate-700 border-slate-200/80 hover:bg-slate-100 hover:text-slate-900 hover:border-slate-300"
                  }"
                >
                  <span class="whitespace-nowrap">
                    ${item.label}
                  </span>
                </button>
              `;
            }).join('')}
          </div>
        </div>
      </nav>
    </div>
  `;
}

// --- ADMIN PORTAL ---
function renderAdminPortal(student, fin) {
  const adminStudent = (student && (student.class || 'Genesis 01') !== 'Genesis 01')
    ? student 
    : (state.students.find(s => (s.class || 'Genesis 01') === 'Genesis 02') || student);
  const adminFin = getFinancials(adminStudent);

  return `
    <div class="max-w-7xl mx-auto w-full">
      <div class="w-full">
        ${renderActiveAdminNavView(adminStudent, adminFin)}
      </div>

      <nav class="admin-sticky-footer fixed bottom-0 left-0 right-0 p-2.5 shadow-2xl flex justify-around items-center z-40 w-full">
        <div class="max-w-4xl mx-auto w-full flex justify-start sm:justify-around items-center overflow-x-auto scrollbar-none gap-2 px-2 py-0.5">
          ${[
            { id: "overview", label: "Overview", labelMobile: "Overview", iconName: "layout-dashboard" },
            { id: "academics", label: "Academics & Exams", labelMobile: "Academic", iconName: "bookOpen" },
            { id: "leaves", label: "Leave Approvals", labelMobile: "Leaves", iconName: "check-square" },
            { id: "finance", label: "Institute Fund", labelMobile: "Fund", iconName: "landmark" },
            { id: "broadcast", label: "Broadcaster", labelMobile: "Broadcast", iconName: "radio" },
            { id: "security", label: "Security & Passwords", labelMobile: "Security", iconName: "key" },
          ].map(item => {
            const isActive = state.adminActiveTab === item.id;
            return `
              <button
                onclick="setAdminActiveTab('${item.id}')"
                class="whitespace-nowrap flex-shrink-0 flex items-center space-x-1.5 px-3 py-2.5 rounded-xl font-bold text-xs md:text-sm transition-all duration-300 nav-item-lift ${
                  isActive
                    ? "bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-md font-bold"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }"
              >
                ${icon(item.iconName, `w-3.5 h-3.5 md:w-4 md:h-4 ${isActive ? "text-white" : "text-slate-400"}`)}
                <span>
                  <span class="hidden md:inline">${item.label}</span>
                  <span class="inline md:hidden">${item.labelMobile}</span>
                </span>
              </button>
            `;
          }).join('')}
        </div>
      </nav>
    </div>
  `;
}

function renderActiveNavView(student, fin) {
  if (state.activeTab === "dashboard") return renderDashboardView(student, fin);
  if (state.activeTab === "examination") return renderExaminationView(student);
  if (state.activeTab === "leaves") return renderLeaveTakenView(student);
  if (state.activeTab === "bank") return renderBankCreditsView(student, fin);
  return renderDashboardView(student, fin);
}

function renderActiveAdminNavView(student, fin) {
  if (state.adminActiveTab === "overview") return renderAdminOverviewView(fin);
  if (state.adminActiveTab === "academics") return renderAdminAcademicsView(student);
  if (state.adminActiveTab === "leaves") return renderAdminLeavesView(student);
  if (state.adminActiveTab === "finance") return renderAdminFinanceView(student, fin);
  if (state.adminActiveTab === "broadcast") return renderAdminBroadcastView();
  if (state.adminActiveTab === "security") return renderAdminSecurityView();
  return renderAdminOverviewView(fin);
}

// --- STUDENT ACCOUNTS ROSTER ---
function renderStudentAccountsRosterComponent() {
  const adminStudents = (state.students || []).filter(s => (s.class || "Genesis 01") !== "Genesis 01");
  const classMap = {};
  adminStudents.forEach(s => {
    const cls = s.class || "Genesis 02";
    if (!classMap[cls]) classMap[cls] = [];
    classMap[cls].push(s);
  });

  const classNames = Object.keys(classMap).sort();

  return `
    <div class="glass-card p-4 sm:p-6 rounded-3xl shadow-anti-gravity border border-white space-y-5">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
        <div>
          <h3 class="text-sm font-extrabold text-slate-900">Genesis 02 Student Users (${adminStudents.length})</h3>
        </div>
        <button onclick="toggleModal('addStudent', true)" class="flex items-center justify-center space-x-1.5 bg-brand-600 hover:bg-brand-700 text-white px-3.5 py-2 rounded-xl text-xs font-bold shadow-md shadow-brand-500/20 transition-all hover:scale-105 self-start sm:self-auto">
          ${icon('userPlus', 'w-3.5 h-3.5')}
          <span>Add New Student User</span>
        </button>
      </div>

      <div class="space-y-6">
        ${classNames.map(cls => {
          const studentsInClass = classMap[cls];
          return `
            <div class="space-y-3">
              <div class="flex items-center justify-between px-1">
                <div class="flex items-center space-x-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-brand-500 inline-block shadow-xs"></span>
                  <h4 class="text-xs font-black text-brand-600 uppercase tracking-wider">${cls} (${studentsInClass.length})</h4>
                </div>
              </div>

              <div class="md:hidden space-y-3">
                ${studentsInClass.map(s => `
                  <div class="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3">
                    <div class="flex items-center justify-between">
                      <div class="flex items-center space-x-2.5 min-w-0">
                        ${getStudentAvatarHtml(s, "w-9 h-9 flex-shrink-0", "text-xs")}
                        <div class="min-w-0">
                          <p class="font-extrabold text-xs text-slate-900 truncate">${s.name}</p>
                          <p class="text-[10px] text-slate-400 font-semibold">${s.class}</p>
                        </div>
                      </div>
                      <button onclick="toggleSpecificStudentStatus('${s.id}')" class="px-2.5 py-1 rounded-full text-[10px] font-extrabold flex-shrink-0 ${s.status === 'Present' ? 'bg-emerald-100 text-emerald-700 border border-emerald-200' : 'bg-amber-100 text-amber-700 border border-amber-200'}">
                        ${s.status}
                      </button>
                    </div>

                    <div class="flex items-center justify-between text-[11px] bg-slate-50 p-2.5 rounded-xl border border-slate-100 font-bold">
                      <div>
                        <span class="text-slate-400 text-[10px] uppercase block font-bold">Username</span>
                        <span class="text-brand-600">${s.username}</span>
                      </div>
                      <div class="text-right">
                        <span class="text-slate-400 text-[10px] uppercase block font-bold">Password</span>
                        <span class="font-mono text-slate-700">${s.password}</span>
                      </div>
                    </div>

                    <div class="flex items-center space-x-2 pt-1 border-t border-slate-100">
                      <button onclick="openEditStudentModal('${s.id}')" class="flex-1 py-2 rounded-xl bg-brand-50 text-brand-600 font-extrabold hover:bg-brand-100 text-xs text-center border border-brand-100">
                        Edit Profile & Settings
                      </button>
                      <button onclick="deleteStudentUser('${s.id}')" class="px-4 py-2 rounded-xl bg-rose-50 text-rose-600 font-extrabold hover:bg-rose-100 text-xs text-center border border-rose-100">
                        Delete
                      </button>
                    </div>
                  </div>
                `).join('')}
              </div>

              <div class="hidden md:block w-full overflow-x-auto">
                <table class="w-full text-left border-collapse text-xs min-w-[550px]">
                  <thead>
                    <tr class="border-b border-slate-100 text-slate-400 font-bold uppercase text-[10px]">
                      <th class="py-2 px-3">Student Name</th>
                      <th class="py-2 px-3">Username</th>
                      <th class="py-2 px-3">Password</th>
                      <th class="py-2 px-3">Status</th>
                      <th class="py-2 px-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-50">
                    ${studentsInClass.map(s => `
                      <tr class="hover:bg-slate-50/80 transition-colors">
                        <td class="py-2.5 px-3 font-bold text-slate-800">
                          <div class="flex items-center space-x-2.5">
                            ${getStudentAvatarHtml(s, "w-7 h-7 flex-shrink-0", "text-[10px]")}
                            <div>
                              <p class="font-bold text-slate-800">${s.name}</p>
                              <p class="text-[10px] text-slate-400 font-semibold">${s.class}</p>
                            </div>
                          </div>
                        </td>
                        <td class="py-2.5 px-3 font-bold text-brand-600">${s.username}</td>
                        <td class="py-2.5 px-3 font-mono font-bold text-slate-700">${s.password}</td>
                        <td class="py-2.5 px-3">
                          <button onclick="toggleSpecificStudentStatus('${s.id}')" class="px-2.5 py-0.5 rounded-full text-[10px] font-bold shadow-sm transition-all hover:scale-105 ${s.status === 'Present' ? 'bg-emerald-100 text-emerald-700 border border-emerald-200' : 'bg-amber-100 text-amber-700 border border-amber-200'}">
                            ${s.status}
                          </button>
                        </td>
                        <td class="py-2.5 px-3 text-right space-x-2">
                          <button onclick="openEditStudentModal('${s.id}')" class="px-2.5 py-1 rounded-lg bg-brand-50 text-brand-600 font-bold hover:bg-brand-100 text-[11px]">
                            Edit Profile & Settings
                          </button>
                          <button onclick="deleteStudentUser('${s.id}')" class="px-2.5 py-1 rounded-lg bg-rose-50 text-rose-600 font-bold hover:bg-rose-100 text-[11px]" title="Delete Student">
                            Delete
                          </button>
                        </td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function calculateLiveAverageAttendance() {
  let totalRecords = 0;
  let totalPresents = 0;
  (state.students || []).forEach(s => {
    if (s.attendanceRecords) {
      const vals = Object.values(s.attendanceRecords);
      vals.forEach(v => {
        if (v === "Present") {
          totalRecords++;
          totalPresents += 1.0;
        } else if (v === "Half Day") {
          totalRecords++;
          totalPresents += 0.5;
        } else if (v === "Absent") {
          totalRecords++;
        }
      });
    }
  });
  if (totalRecords === 0) return "100.0%";
  return ((totalPresents / totalRecords) * 100).toFixed(1) + "%";
}

// --- ADMIN OVERVIEW ---
function renderAdminOverviewView(fin) {
  const adminStudents = (state.students || []).filter(s => (s.class || "Genesis 01") !== "Genesis 01");
  const adminLeavesCount = adminStudents.reduce((acc, s) => acc + (s.leaves || []).length, 0);

  return `
    <div class="space-y-4">
      <div class="p-5 rounded-3xl bg-slate-900 text-white shadow-anti-gravity">
        <div class="flex items-center justify-between">
          <div>
            <span class="bg-brand-500/20 text-sky-400 text-[10px] px-2.5 py-0.5 rounded-full font-bold border border-sky-400/30 uppercase tracking-wider">
              ORCHESTRATOR COMMAND CENTER
            </span>
            <h2 class="text-xl sm:text-2xl font-black tracking-tight mt-1">Admin Dashboard</h2>
          </div>
          <div class="hidden sm:flex items-center space-x-2 text-xs font-semibold text-emerald-400 bg-slate-800/80 px-3 py-1.5 rounded-xl border border-slate-700">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Context State Synchronized</span>
          </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
          <div class="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60">
            <p class="text-[10px] uppercase font-bold text-slate-400">Genesis 02 Students</p>
            <p class="text-xl font-black text-white mt-0.5">${adminStudents.length} Accounts</p>
          </div>
          <div class="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60">
            <p class="text-[10px] uppercase font-bold text-slate-400">Total Requested Leaves</p>
            <p class="text-xl font-black text-amber-400 mt-0.5">${adminLeavesCount} Total</p>
          </div>
          <div class="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60">
            <p class="text-[10px] uppercase font-bold text-slate-400">Total Collections</p>
            <p class="text-xl font-black text-emerald-400 mt-0.5">${formatINR(fin.totalCredits)}</p>
          </div>
          <div class="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60">
            <p class="text-[10px] uppercase font-bold text-slate-400">Average Attendance</p>
            <p class="text-xl font-black text-sky-400 mt-0.5">${calculateLiveAverageAttendance()}</p>
          </div>
        </div>
      </div>

      ${renderStudentAccountsRosterComponent()}
    </div>
  `;
}

function getSemesterRankHolders(sem, classFilter) {
  const targetSem = sem || state.selectedSem || 'Sem 1';
  let list = state.students || [];
  if (classFilter) {
    list = list.filter(st => (st.class || '').toLowerCase().includes(classFilter.toLowerCase()));
  }

  const studentScores = list.map(st => {
    const semExams = (st.exams || []).filter(e => (e.sem) === targetSem);
    const totalScore = semExams.reduce((s, e) => s + (e.score || 0), 0);
    const maxScore = semExams.length * 100;
    const pct = maxScore > 0 ? (totalScore / maxScore) * 100 : 0;
    const grade = semExams.length > 0 ? getGradeFromScore(pct) : 'N/A';
    return {
      student: st,
      totalScore,
      maxScore,
      pct: parseFloat(pct.toFixed(1)),
      grade,
      examCount: semExams.length
    };
  }).filter(item => item.examCount > 0)
    .sort((a, b) => b.pct - a.pct || b.totalScore - a.totalScore);

  return studentScores.slice(0, 3);
}

function renderSemesterRankHoldersComponent(sem) {
  const targetSem = sem || state.selectedSem || 'Sem 1';
  const classes = ["Genesis 01", "Genesis 02"];
  const medals = ["🥇", "🥈", "🥉"];

  return `
    <div class="glass-card p-6 sm:p-8 rounded-3xl shadow-anti-gravity border border-white space-y-6">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span class="bg-amber-50 text-amber-700 text-xs px-3 py-1 rounded-full font-bold border border-amber-200 uppercase tracking-wider">
            ACADEMIC LEADERBOARD HERO
          </span>
          <h3 class="text-2xl font-black text-slate-900 tracking-tight mt-2">Class Leaderboards</h3>
        </div>

        <div class="flex items-center space-x-3 flex-wrap gap-y-2">
          <div class="flex items-center space-x-2 bg-amber-50/90 p-1.5 rounded-2xl border border-amber-200/80 shadow-xs">
            <span class="text-xs font-extrabold text-amber-800 pl-2">Semester:</span>
            <select onchange="changeSelectedSemester(this.value)" class="p-2 bg-white border border-amber-200 rounded-xl text-xs font-extrabold text-brand-600 shadow-xs focus:outline-none focus:ring-2 focus:ring-brand-500 cursor-pointer">
              ${["Sem 1", "Sem 2", "Sem 3", "Sem 4"].map(s => `
                <option value="${s}" ${targetSem === s ? 'selected' : ''}>${s}</option>
              `).join('')}
            </select>
          </div>

          <div class="hidden sm:flex items-center space-x-2 text-xs font-extrabold text-amber-800 bg-amber-50 px-4 py-2.5 rounded-2xl border border-amber-200/80 shadow-xs">
            ${icon('award', 'w-4.5 h-4.5 text-amber-600')}
            <span>Class Leaderboard</span>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
        ${classes.map(cls => {
          const rankHolders = getSemesterRankHolders(targetSem, cls);
          return `
            <div class="p-5 rounded-2xl bg-slate-50/90 border border-slate-200/80 space-y-3 shadow-xs">
              <div class="flex items-center justify-between border-b border-slate-200/60 pb-2.5">
                <span class="text-xs font-black text-brand-600 uppercase tracking-wider flex items-center space-x-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-brand-500 inline-block shadow-xs"></span>
                  <span>${cls} Leaderboard</span>
                </span>
                <span class="text-[10px] font-extrabold text-slate-400 uppercase">Top 3 Rankers</span>
              </div>

              <div class="space-y-2.5">
                ${rankHolders.length === 0 ? `
                  <div class="p-4 text-center text-xs text-slate-400 font-bold bg-white rounded-xl border border-slate-100">
                    No exam records submitted for ${cls} in ${targetSem} yet.
                  </div>
                ` : rankHolders.map((rh, index) => `
                  <div class="p-3 rounded-2xl bg-white border border-slate-200/90 flex items-center justify-between shadow-xs hover:border-brand-300 transition-all hover:scale-[1.01]">
                    <div class="flex items-center space-x-3">
                      <span class="text-2xl">${medals[index]}</span>
                      <div>
                        <p class="font-extrabold text-xs text-slate-900">${rh.student.name}</p>
                        <p class="text-[10px] text-slate-500 font-semibold mt-0.5">${rh.pct}% Total Score • ${rh.totalScore}/${rh.maxScore} marks</p>
                      </div>
                    </div>
                    <span class="px-3 py-1 rounded-full text-xs font-black ${
                      index === 0 ? 'bg-amber-500 text-white shadow-sm' :
                      index === 1 ? 'bg-slate-700 text-white shadow-sm' : 'bg-amber-700 text-white shadow-sm'
                    }">
                      Rank #${index + 1}
                    </span>
                  </div>
                `).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

// --- ADMIN ACADEMICS ---
function renderAdminAcademicsView(student) {
  const semExams = (student.exams || []).filter(e => (e.sem) === state.selectedSem);
  const presentExams = semExams.filter(e => !e.absent);
  const totalScore = presentExams.reduce((s, e) => s + (e.score || 0), 0);
  const maxScore   = presentExams.length * 100;
  const pct        = maxScore > 0 ? ((totalScore / maxScore) * 100).toFixed(1) : '0.0';
  const grade      = presentExams.length > 0 ? getGradeFromScore(parseFloat(pct)) : 'N/A';

  return `
    <div class="space-y-6">
      <div class="glass-card p-5 sm:p-6 rounded-3xl shadow-anti-gravity border border-white flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div>
          <span class="bg-brand-50 text-brand-600 text-[10px] px-2.5 py-0.5 rounded-full font-bold border border-brand-100 uppercase tracking-wider">
            ACADEMIC ORCHESTRATOR
          </span>
          <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mt-1">Academics & Examination Control</h2>
        </div>

        <div class="flex flex-wrap items-center gap-2">
          ${renderBatchAndStudentSelectorHtml(student.id, 'switchStudentAccount(this.value)')}

          <select onchange="changeSelectedSemester(this.value)" class="p-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 shadow-sm">
            ${["Sem 1", "Sem 2", "Sem 3", "Sem 4"].map(sem => `
              <option value="${sem}" ${state.selectedSem === sem ? 'selected' : ''}>${sem}</option>
            `).join('')}
          </select>

          <button onclick="openAddSubjectModal('${student.id}')" class="flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-md shadow-brand-500/20 transition-all hover:scale-105">
            ${icon('plus', 'w-3.5 h-3.5')}
            <span>Add Subject</span>
          </button>
        </div>
      </div>

      <div class="glass-card p-5 sm:p-6 rounded-3xl shadow-anti-gravity border border-white space-y-3">
        <div class="w-full overflow-x-auto custom-scrollbar">
          <table class="w-full text-left border-collapse text-xs min-w-[340px]">
            <thead>
              <tr class="border-b border-slate-100 text-slate-400 font-bold uppercase text-[10px]">
                <th class="py-2 px-2">Subject</th>
                <th class="py-2 px-1 text-center">Score</th>
                <th class="py-2 px-1 text-center">Grade</th>
                <th class="py-2 px-1 text-right">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-50">
              ${semExams.map((item, idx) => `
                <tr class="hover:bg-slate-50/80 transition-colors">
                  <td class="py-2.5 px-2 font-bold text-slate-800">
                    <p class="break-words line-clamp-2">${item.subject}</p>
                    <span class="text-[10px] text-slate-400 font-normal">${item.code || ''}</span>
                  </td>
                  <td class="py-2.5 px-1 text-center font-bold ${item.absent ? 'text-rose-500' : 'text-slate-700'}">${item.absent ? '<span class="px-2 py-0.5 rounded-md text-[10px] font-black bg-rose-100 text-rose-600 border border-rose-200">Absent</span>' : item.score + ' / 100'}</td>
                  <td class="py-2.5 px-1 text-center">
                    <span class="px-2 py-0.5 rounded-md text-[10px] font-bold ${item.absent ? 'bg-rose-100 text-rose-600 border border-rose-200' : 'bg-slate-100 text-slate-800 border border-slate-200'}">
                      ${item.absent ? 'AB' : item.grade}
                    </span>
                  </td>
                  <td class="py-2.5 px-1 text-right space-x-1.5">
                    <button onclick="editExamScoreForStudent('${student.id}', '${item.id || item.subject}')" class="text-brand-600 hover:text-brand-800 font-bold text-xs">Edit</button>
                    <button onclick="deleteExamForStudent('${student.id}', '${item.id || item.subject}')" class="text-rose-600 hover:text-rose-800 font-bold text-xs">Delete</button>
                  </td>
                </tr>
              `).join('')}
            </tbody>

            ${semExams.length > 0 ? `
              <tfoot class="border-t-2 border-slate-200 bg-slate-50/90 font-black">
                <tr class="text-slate-900">
                  <td class="py-2.5 px-2 uppercase font-extrabold tracking-wider text-[11px] sm:text-xs text-slate-700">
                    Grand Total
                  </td>
                  <td class="py-2.5 px-1 text-center font-black text-xs sm:text-sm text-slate-900">
                    ${totalScore}/${maxScore}
                  </td>
                  <td class="py-2.5 px-1 text-center">
                    <span class="px-2 py-0.5 rounded-md text-[10px] font-black bg-brand-600 text-white shadow-xs">
                      ${grade} (${pct}%)
                    </span>
                  </td>
                  <td class="py-2.5 px-1"></td>
                </tr>
              </tfoot>
            ` : ''}
          </table>
        </div>
      </div>

      ${renderSemesterRankHoldersComponent(state.selectedSem)}
    </div>
  `;
}

// --- ADMIN LEAVES & ATTENDANCE ---
function renderAdminLeavesView(student) {
  const adminStudents = state.students.filter(s => (s.class || 'Genesis 01') !== 'Genesis 01');
  const allLeaves = [];
  adminStudents.forEach(s => {
    (s.leaves || []).forEach(l => {
      allLeaves.push({ ...l, studentName: s.name, studentId: s.id });
    });
  });

  return `
    <div class="space-y-8">
      <div class="glass-card p-6 sm:p-8 rounded-3xl shadow-anti-gravity border border-white flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span class="bg-amber-50 text-amber-600 text-xs px-3 py-1 rounded-full font-bold border border-amber-100">
            OFFICIAL ABSENCE QUEUE
          </span>
          <h2 class="text-3xl font-extrabold text-slate-900 tracking-tight mt-2">Leave & Approvals</h2>
        </div>

        ${renderBatchAndStudentSelectorHtml(student.id, 'switchStudentAccount(this.value)')}
      </div>

      <div class="glass-card p-6 rounded-3xl shadow-anti-gravity border border-white">
        <div class="space-y-3">
          ${allLeaves.length === 0 ? `
            <p class="text-xs text-slate-400 text-center py-8">No leave applications found.</p>
          ` : allLeaves.map(l => `
            <div class="p-4 rounded-2xl bg-white border border-slate-100 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p class="font-bold text-slate-800 text-sm">${l.reason} <span class="text-brand-600 font-semibold">(${l.studentName})</span></p>
                <p class="text-[11px] text-slate-500 mt-0.5">${l.startDate} to ${l.endDate} (${l.category}) • Applied On: ${l.appliedOn || 'Recently'}</p>
                <span class="inline-block mt-2 px-3 py-0.5 rounded-full text-[10px] font-bold ${
                  l.status === "Approved" ? "bg-emerald-100 text-emerald-700 border border-emerald-200" :
                  l.status === "Pending" ? "bg-amber-100 text-amber-700 border border-amber-200" : "bg-rose-100 text-rose-700 border border-rose-200"
                }">${l.status}</span>
              </div>

              <div class="flex items-center space-x-2 flex-wrap gap-y-1">
                <button onclick="updateStudentLeaveStatus('${l.studentId}', '${l.id}', 'Approved')" class="px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs transition-all shadow-sm">
                  Approve
                </button>
                <button onclick="updateStudentLeaveStatus('${l.studentId}', '${l.id}', 'Rejected')" class="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs transition-all shadow-sm">
                  Reject
                </button>
                <button onclick="openEditLeaveModal('${l.studentId}', '${l.id}')" class="px-2.5 py-1.5 rounded-xl bg-brand-50 hover:bg-brand-100 text-brand-600 font-bold text-xs border border-brand-100 transition-all shadow-sm flex items-center space-x-1">
                  ${icon('edit', 'w-3.5 h-3.5')}
                  <span>Edit</span>
                </button>
                <button onclick="deleteStudentLeave('${l.studentId}', '${l.id}')" class="px-2.5 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 font-bold text-xs border border-rose-100 transition-all shadow-sm flex items-center space-x-1">
                  ${icon('trash-2', 'w-3.5 h-3.5')}
                  <span>Delete</span>
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="glass-card p-6 rounded-3xl shadow-anti-gravity border border-white">
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
          <div>
            <h3 class="text-base font-extrabold text-slate-900">Daily Attendance Register for ${student.name}</h3>
            ${renderInteractiveAttendanceLegend()}
          </div>
          
          <div class="flex flex-wrap gap-2.5 items-center">
            ${renderBatchAndStudentSelectorHtml(student.id, 'switchStudentAccount(this.value)')}

            <select onchange="changeAttendanceFilterMonth(this.value)" class="p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800">
              ${[
                "August 2026", "September 2026", "October 2026", "November 2026", "December 2026",
                "January 2027", "February 2027", "March 2027", "April 2027", "May 2027", "June 2027", "July 2027"
              ].map(m => `
                <option value="${m}" ${state.attendanceFilterMonth === m ? 'selected' : ''}>${m}</option>
              `).join('')}
            </select>
          </div>
        </div>

        <div class="grid grid-cols-7 gap-2 mb-3 mt-4">
          <div class="py-2 rounded-xl bg-blue-50/60 text-blue-600 font-extrabold text-[11px] text-center border border-blue-100/70 tracking-wider">SUN</div>
          <div class="py-2 rounded-xl bg-blue-50/60 text-blue-600 font-extrabold text-[11px] text-center border border-blue-100/70 tracking-wider">MON</div>
          <div class="py-2 rounded-xl bg-blue-50/60 text-blue-600 font-extrabold text-[11px] text-center border border-blue-100/70 tracking-wider">TUE</div>
          <div class="py-2 rounded-xl bg-blue-50/60 text-blue-600 font-extrabold text-[11px] text-center border border-blue-100/70 tracking-wider">WED</div>
          <div class="py-2 rounded-xl bg-blue-50/60 text-blue-600 font-extrabold text-[11px] text-center border border-blue-100/70 tracking-wider">THU</div>
          <div class="py-2 rounded-xl bg-blue-50/60 text-blue-600 font-extrabold text-[11px] text-center border border-blue-100/70 tracking-wider">FRI</div>
          <div class="py-2 rounded-xl bg-blue-50/60 text-blue-600 font-extrabold text-[11px] text-center border border-blue-100/70 tracking-wider">SAT</div>
        </div>

        <div class="grid grid-cols-7 gap-2">
          ${generateAttendanceDaysGrid(student, state.attendanceFilterMonth || "August 2026")}
        </div>
      </div>
    </div>
  `;
}

// --- CONTROL PANEL PORTAL ---
function renderControlPanelPortal() {
  const targetStudents = (state.students || []).filter(s => (s.class || 'Genesis 01') === 'Genesis 01');
  if (!targetStudents.some(s => s.id === state.cpSelectedStudentId)) {
    state.cpSelectedStudentId = targetStudents[0] ? targetStudents[0].id : 'MSH-2026-0001';
  }
  const cpStudent = targetStudents.find(s => s.id === state.cpSelectedStudentId) || targetStudents[0];
  if (!cpStudent) return `<div class="glass-card p-8 rounded-3xl text-center text-slate-400 font-bold">No student records found.</div>`;

  const fin = getFinancials(cpStudent);
  const netBalance = fin.totalCredits - fin.totalDebits;
  const cpTab = state.cpActiveTab || 'overview';
  const filterMonth = state.attendanceFilterMonth || 'August 2026';

  // Summary Metrics for Genesis 01
  const totalGenesis01Count = targetStudents.length;
  const presentTodayCount = targetStudents.filter(s => s.status === 'Present').length;
  const absentTodayCount = totalGenesis01Count - presentTodayCount;
  const totalBatchFund = targetStudents.reduce((acc, s) => {
    const f = getFinancials(s);
    return acc + (f.totalCredits - f.totalDebits);
  }, 0);

  const overviewSection = `
    <div class="space-y-4">
      <div class="p-5 rounded-3xl bg-slate-900 text-white shadow-anti-gravity">
        <div class="flex items-center justify-between">
          <div>
            <span class="bg-brand-500/20 text-sky-400 text-[10px] px-2.5 py-0.5 rounded-full font-bold border border-sky-400/30 uppercase tracking-wider">
              GENESIS 01 BATCH CONTROL
            </span>
            <h2 class="text-xl sm:text-2xl font-black tracking-tight mt-1">Genesis 01 Overview</h2>
          </div>
          <div class="flex items-center gap-2.5">
            <button onclick="toggleModal('addStudent', true)" class="flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-extrabold text-xs shadow-md shadow-brand-500/20 transition-all hover:scale-105">
              ${icon('userPlus', 'w-3.5 h-3.5 text-white')}
              <span>Add Genesis 01 User</span>
            </button>
          </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
          <div class="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60">
            <p class="text-[10px] uppercase font-bold text-slate-400">Genesis 01 Users</p>
            <p class="text-xl font-black text-white mt-0.5">${totalGenesis01Count} Accounts</p>
          </div>
          <div class="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60">
            <p class="text-[10px] uppercase font-bold text-slate-400">Present Today</p>
            <p class="text-xl font-black text-emerald-400 mt-0.5">${presentTodayCount}</p>
          </div>
          <div class="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60">
            <p class="text-[10px] uppercase font-bold text-slate-400">On Leave / Absent</p>
            <p class="text-xl font-black text-amber-400 mt-0.5">${absentTodayCount}</p>
          </div>
          <div class="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60">
            <p class="text-[10px] uppercase font-bold text-slate-400">Total Batch Fund</p>
            <p class="text-xl font-black text-sky-400 mt-0.5">${formatINR(totalBatchFund)}</p>
          </div>
        </div>
      </div>

      <div class="glass-card p-6 rounded-3xl shadow-anti-gravity border border-white space-y-4">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <h3 class="text-base font-extrabold text-slate-900">Genesis 01 Registered User Accounts</h3>
          </div>
          <span class="px-3 py-1 bg-indigo-50 text-indigo-700 font-extrabold text-xs rounded-full border border-indigo-100 self-start sm:self-auto">
            Genesis 01 Batch Control
          </span>
        </div>

        <div class="md:hidden space-y-3">
          ${targetStudents.map(s => {
            const sFin = getFinancials(s);
            const sNet = sFin.totalCredits - sFin.totalDebits;
            return `
              <div class="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-3 min-w-0">
                    ${getStudentAvatarHtml(s, "w-10 h-10 flex-shrink-0", "text-xs")}
                    <div class="min-w-0">
                      <p class="font-extrabold text-sm text-slate-900 truncate">${s.name}</p>
                    </div>
                  </div>
                  <button onclick="toggleSpecificStudentStatus('${s.id}')" class="px-2.5 py-1 rounded-full text-[10px] font-extrabold flex-shrink-0 ${s.status === 'Present' ? 'bg-emerald-100 text-emerald-700 border border-emerald-200' : 'bg-amber-100 text-amber-700 border border-amber-200'}">
                    ${s.status}
                  </button>
                </div>

                <div class="grid grid-cols-2 gap-2 text-[11px] bg-slate-50 p-2.5 rounded-xl border border-slate-100 font-bold">
                  <div>
                    <span class="text-slate-400 text-[10px] uppercase block font-bold">Username</span>
                    <span class="text-brand-600">${s.username}</span>
                  </div>
                  <div>
                    <span class="text-slate-400 text-[10px] uppercase block font-bold">Password</span>
                    <span class="font-mono text-slate-700">${s.password}</span>
                  </div>
                  <div class="col-span-2 pt-1 border-t border-slate-200/60 flex justify-between items-center">
                    <span class="text-slate-400 text-[10px] uppercase font-bold">Fund Balance:</span>
                    <span class="font-black ${sNet >= 0 ? 'text-emerald-600' : 'text-rose-600'}">${formatINR(sNet)}</span>
                  </div>
                </div>

                <div class="flex flex-wrap items-center gap-2 pt-1 border-t border-slate-100">
                  <button onclick="openEditStudentModal('${s.id}')" class="flex-1 py-2 px-3 rounded-xl bg-brand-50 hover:bg-brand-100 text-brand-600 font-extrabold text-xs text-center border border-brand-100 transition-colors">
                    Edit Profile
                  </button>
                  <button onclick="state.cpSelectedStudentId='${s.id}'; state.cpActiveTab='fund'; renderApp();" class="flex-1 py-2 px-3 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-600 font-extrabold text-xs text-center border border-indigo-100 transition-colors">
                    View Fund
                  </button>
                  <button onclick="deleteStudentUser('${s.id}')" class="py-2 px-3 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 font-extrabold text-xs text-center border border-rose-100 transition-colors">
                    Delete
                  </button>
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <div class="hidden md:block w-full overflow-x-auto">
          <table class="w-full text-left border-collapse text-xs">
            <thead>
              <tr class="border-b border-slate-100 text-slate-400 font-bold uppercase text-[10px]">
                <th class="py-3 px-3">Student Name</th>
                <th class="py-3 px-3">Username</th>
                <th class="py-3 px-3">Password</th>
                <th class="py-3 px-3">Status</th>
                <th class="py-3 px-3 text-right">Net Balance</th>
                <th class="py-3 px-3 text-right">User Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-50">
              ${targetStudents.map(s => {
                const sFin = getFinancials(s);
                const sNet = sFin.totalCredits - sFin.totalDebits;
                return `
                  <tr class="hover:bg-slate-50/80 transition-colors">
                    <td class="py-3 px-3 font-bold text-slate-800">
                      <div class="flex items-center space-x-3">
                        ${getStudentAvatarHtml(s, "w-8 h-8 flex-shrink-0", "text-[10px]")}
                        <div>
                          <p class="font-extrabold text-slate-900 text-xs">${s.name}</p>
                        </div>
                      </div>
                    </td>
                    <td class="py-3 px-3 font-bold text-brand-600">${s.username}</td>
                    <td class="py-3 px-3 font-mono text-slate-700 font-bold">${s.password}</td>
                    <td class="py-3 px-3">
                      <button onclick="toggleSpecificStudentStatus('${s.id}')" class="px-2.5 py-1 rounded-full text-[10px] font-bold shadow-sm transition-all hover:scale-105 ${s.status === 'Present' ? 'bg-emerald-100 text-emerald-700 border border-emerald-200' : 'bg-amber-100 text-amber-700 border border-amber-200'}">
                        ${s.status}
                      </button>
                    </td>
                    <td class="py-3 px-3 text-right font-black ${sNet >= 0 ? 'text-emerald-600' : 'text-rose-600'}">
                      ${formatINR(sNet)}
                    </td>
                    <td class="py-3 px-3 text-right space-x-1.5">
                      <button onclick="openEditStudentModal('${s.id}')" class="px-2.5 py-1.5 rounded-lg bg-brand-50 hover:bg-brand-100 text-brand-600 font-bold text-[11px] border border-brand-100 transition-colors">
                        Edit
                      </button>
                      <button onclick="state.cpSelectedStudentId='${s.id}'; state.cpActiveTab='fund'; renderApp();" class="px-2.5 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-600 font-bold text-[11px] border border-indigo-100 transition-colors">
                        Fund
                      </button>
                      <button onclick="deleteStudentUser('${s.id}')" class="px-2.5 py-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600 font-bold text-[11px] border border-rose-100 transition-colors" title="Delete Student Account">
                        Delete
                      </button>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  const fundSection = `
    <div class="space-y-6">
      <div class="glass-card p-6 sm:p-8 rounded-3xl shadow-anti-gravity border border-white flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span class="bg-emerald-50 text-emerald-700 text-xs px-3 py-1 rounded-full font-bold border border-emerald-100 uppercase tracking-wider">INSTITUTE FUND (₹)</span>
          <h2 class="text-3xl font-extrabold text-slate-900 tracking-tight mt-2">Institute Fund</h2>
        </div>
        ${renderBatchAndStudentSelectorHtml(cpStudent.id, 'state.cpSelectedStudentId=this.value;renderApp()')}
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div class="p-5 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md flex items-center justify-between">
          <div>
            <p class="text-xs font-semibold opacity-90 uppercase tracking-wider">Cash In</p>
            <p class="text-3xl font-black mt-1">${formatINR(fin.totalCredits)}</p>
          </div>
          <div class="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">${icon('arrow-down-left','w-6 h-6')}</div>
        </div>
        <div class="p-5 rounded-3xl bg-gradient-to-br from-rose-500 to-pink-600 text-white shadow-md flex items-center justify-between">
          <div>
            <p class="text-xs font-semibold opacity-90 uppercase tracking-wider">Cash Out</p>
            <p class="text-3xl font-black mt-1">${formatINR(fin.totalDebits)}</p>
          </div>
          <div class="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">${icon('arrow-up-right','w-6 h-6')}</div>
        </div>
        <div class="p-5 rounded-3xl bg-gradient-to-br from-brand-600 to-blue-700 text-white shadow-md flex items-center justify-between">
          <div>
            <p class="text-xs font-semibold opacity-90 uppercase tracking-wider">Net Total Balance</p>
            <p class="text-3xl font-black mt-1">${formatINR(netBalance)}</p>
          </div>
          <div class="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">${icon('wallet','w-6 h-6')}</div>
        </div>
      </div>

      <div class="glass-card p-6 rounded-3xl shadow-anti-gravity border border-white">
        <h3 class="text-base font-extrabold text-slate-900 mb-4 flex items-center space-x-2">
          ${icon('landmark','w-5 h-5 text-emerald-600')}
          <span>Add Transaction for ${cpStudent.name}</span>
        </h3>
        <form onsubmit="cpAddTransaction(event,'${cpStudent.id}')" class="space-y-3 text-xs">
          <div>
            <label class="block font-bold text-slate-700 mb-1">Transaction Type</label>
            <select id="cpTxnType" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-bold">
              <option value="Credit">+ Cash In (INR)</option>
              <option value="Debit">- Cash Out (INR)</option>
            </select>
          </div>
          <div>
            <label class="block font-bold text-slate-700 mb-1">Amount (₹)</label>
            <input type="number" id="cpTxnAmount" required placeholder="2500" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200" />
          </div>
          <div>
            <label class="block font-bold text-slate-700 mb-1">Description <span class="text-slate-400 font-normal">(optional)</span></label>
            <input type="text" id="cpTxnDesc" placeholder="e.g. Tuition Fee Payment" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200" />
          </div>
          <button type="submit" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3 rounded-xl transition-all shadow-md shadow-emerald-500/20">
            Add Transaction to Fund (₹)
          </button>
        </form>
      </div>

      <div class="glass-card p-6 rounded-3xl shadow-anti-gravity border border-white">
        <h3 class="text-base font-extrabold text-slate-900 mb-4">${cpStudent.name}'s Fund History</h3>
        <div class="space-y-3 text-xs max-h-[400px] overflow-y-auto pr-1">
          ${(!cpStudent.transactions || cpStudent.transactions.length === 0) ? `
            <p class="text-slate-400 font-bold text-center py-8">No transactions recorded for ${cpStudent.name}.</p>
          ` : cpStudent.transactions.map((t, tIdx) => `
            <div class="p-3.5 rounded-2xl bg-white border border-slate-100 flex items-center justify-between shadow-xs gap-2">
              <div class="flex-1 min-w-0">
                <p class="font-bold text-slate-800 truncate">${t.description || (t.type === 'Credit' ? 'Cash In' : 'Cash Out')}</p>
                <p class="text-[10px] text-slate-400 font-semibold mt-0.5">${t.date} • <span class="${t.type === 'Credit' ? 'text-emerald-600' : 'text-rose-600'}">${t.type === 'Credit' ? 'Cash In' : 'Cash Out'}</span></p>
              </div>
              <div class="flex items-center space-x-2 flex-shrink-0">
                <span class="font-black text-sm ${t.type === 'Credit' ? 'text-emerald-600' : 'text-rose-600'}">${t.type === 'Credit' ? '+' : '-'}${formatINR(t.amount)}</span>
                <button onclick="cpDeleteTransaction('${cpStudent.id}',${tIdx})" class="p-1.5 rounded-lg hover:bg-rose-50 text-rose-400 hover:text-rose-600 transition-colors" title="Delete">
                  ${icon('trash-2','w-3.5 h-3.5')}
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  const attendanceSection = `
    <div class="space-y-6">
      <div class="glass-card p-6 sm:p-8 rounded-3xl shadow-anti-gravity border border-white flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span class="bg-amber-50 text-amber-600 text-xs px-3 py-1 rounded-full font-bold border border-amber-100 uppercase tracking-wider">ATTENDANCE REGISTER</span>
          <h2 class="text-3xl font-extrabold text-slate-900 tracking-tight mt-2">Daily Attendance</h2>
        </div>
      </div>

      <div class="glass-card p-6 rounded-3xl shadow-anti-gravity border border-white">
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
          <div>
            <h3 class="text-base font-extrabold text-slate-900">Daily Attendance Register for ${cpStudent.name}</h3>
            ${renderInteractiveAttendanceLegend()}
          </div>
          <div class="flex flex-wrap gap-2.5 items-center">
            ${renderBatchAndStudentSelectorHtml(cpStudent.id, 'state.cpSelectedStudentId=this.value;renderApp()')}
            <select onchange="changeAttendanceFilterMonth(this.value)" class="p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800">
              ${["August 2026","September 2026","October 2026","November 2026","December 2026","January 2027","February 2027","March 2027","April 2027","May 2027","June 2027","July 2027"].map(m => `
                <option value="${m}" ${filterMonth === m ? 'selected' : ''}>${m}</option>
              `).join('')}
            </select>
          </div>
        </div>

        <div class="grid grid-cols-7 gap-2 mb-3 mt-4">
          <div class="py-2 rounded-xl bg-blue-50/60 text-blue-600 font-extrabold text-[11px] text-center border border-blue-100/70 tracking-wider">SUN</div>
          <div class="py-2 rounded-xl bg-blue-50/60 text-blue-600 font-extrabold text-[11px] text-center border border-blue-100/70 tracking-wider">MON</div>
          <div class="py-2 rounded-xl bg-blue-50/60 text-blue-600 font-extrabold text-[11px] text-center border border-blue-100/70 tracking-wider">TUE</div>
          <div class="py-2 rounded-xl bg-blue-50/60 text-blue-600 font-extrabold text-[11px] text-center border border-blue-100/70 tracking-wider">WED</div>
          <div class="py-2 rounded-xl bg-blue-50/60 text-blue-600 font-extrabold text-[11px] text-center border border-blue-100/70 tracking-wider">THU</div>
          <div class="py-2 rounded-xl bg-blue-50/60 text-blue-600 font-extrabold text-[11px] text-center border border-blue-100/70 tracking-wider">FRI</div>
          <div class="py-2 rounded-xl bg-blue-50/60 text-blue-600 font-extrabold text-[11px] text-center border border-blue-100/70 tracking-wider">SAT</div>
        </div>

        <div class="grid grid-cols-7 gap-2">
          ${generateAttendanceDaysGrid(cpStudent, filterMonth)}
        </div>
      </div>
    </div>
  `;

  const semExams = (cpStudent.exams || []).filter(e => (e.sem) === state.selectedSem);
  const presentExams = semExams.filter(e => !e.absent);
  const totalScore = presentExams.reduce((s, e) => s + (e.score || 0), 0);
  const maxScore   = presentExams.length * 100;
  const pct        = maxScore > 0 ? ((totalScore / maxScore) * 100).toFixed(1) : '0.0';
  const grade      = presentExams.length > 0 ? getGradeFromScore(parseFloat(pct)) : 'N/A';

  const marksSection = `
    <div class="space-y-6">
      <div class="glass-card p-5 sm:p-6 rounded-3xl shadow-anti-gravity border border-white flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span class="bg-brand-50 text-brand-600 text-xs px-3 py-1 rounded-full font-bold border border-brand-100 uppercase tracking-wider">
            MARK ENTRY CONTROL
          </span>
          <h2 class="text-3xl font-extrabold text-slate-900 tracking-tight mt-2">Mark Entry — ${cpStudent.name}</h2>
        </div>

        <div class="flex flex-wrap items-center gap-2.5">
          ${renderBatchAndStudentSelectorHtml(cpStudent.id, 'state.cpSelectedStudentId=this.value;renderApp()')}

          <select onchange="changeSelectedSemester(this.value)" class="p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 shadow-sm">
            ${["Sem 1", "Sem 2", "Sem 3", "Sem 4"].map(sem => `
              <option value="${sem}" ${state.selectedSem === sem ? 'selected' : ''}>${sem}</option>
            `).join('')}
          </select>

          <button onclick="openAddSubjectModal('${cpStudent.id}')" class="flex items-center space-x-1.5 px-3.5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-md shadow-brand-500/20 transition-all hover:scale-105">
            ${icon('plus', 'w-3.5 h-3.5')}
            <span>Add Subject</span>
          </button>
        </div>
      </div>

      <div class="glass-card p-5 sm:p-6 rounded-3xl shadow-anti-gravity border border-white space-y-3">
        <div class="w-full overflow-x-auto">
          <table class="w-full text-left border-collapse text-xs">
            <thead>
              <tr class="border-b border-slate-100 text-slate-400 font-bold uppercase text-[10px]">
                <th class="py-2.5 px-3">Subject</th>
                <th class="py-2.5 px-3 text-center">Score</th>
                <th class="py-2.5 px-3 text-center">Grade</th>
                <th class="py-2.5 px-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-50">
              ${semExams.length === 0 ? `
                <tr>
                  <td colspan="4" class="py-6 text-center text-slate-400 font-bold">No subjects recorded for ${state.selectedSem || 'Sem 1'}. Click "Add Subject" to enter marks.</td>
                </tr>
              ` : semExams.map((item, idx) => `
                <tr class="hover:bg-slate-50/80 transition-colors">
                  <td class="py-3 px-3 font-bold text-slate-800">
                    <p class="break-words font-extrabold text-sm text-slate-900">${item.subject}</p>
                    <span class="text-[10px] text-slate-400 font-normal">${item.code || ''}</span>
                  </td>
                  <td class="py-3 px-3 text-center font-black text-sm ${item.absent ? 'text-rose-500' : 'text-slate-800'}">${item.absent ? '<span class="px-2.5 py-1 rounded-lg text-xs font-black bg-rose-100 text-rose-600 border border-rose-200">Absent</span>' : item.score + ' / 100'}</td>
                  <td class="py-3 px-3 text-center">
                    <span class="px-2.5 py-1 rounded-lg text-xs font-black ${item.absent ? 'bg-rose-100 text-rose-600 border border-rose-200' : 'bg-brand-50 text-brand-700 border border-brand-200'}">
                      ${item.absent ? 'AB' : item.grade}
                    </span>
                  </td>
                  <td class="py-3 px-3 text-right space-x-2">
                    <button onclick="editExamScoreForStudent('${cpStudent.id}', '${item.id || item.subject}')" class="px-3 py-1.5 rounded-lg bg-brand-50 hover:bg-brand-100 text-brand-600 font-bold text-xs border border-brand-100 transition-colors">Edit</button>
                    <button onclick="deleteExamForStudent('${cpStudent.id}', '${item.id || item.subject}')" class="px-3 py-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600 font-bold text-xs border border-rose-100 transition-colors">Delete</button>
                  </td>
                </tr>
              `).join('')}
            </tbody>

            ${semExams.length > 0 ? `
              <tfoot class="border-t-2 border-slate-200 bg-slate-50/90 font-black">
                <tr class="text-slate-900">
                  <td class="py-3 px-3 uppercase font-extrabold tracking-wider text-xs text-slate-700">
                    Grand Total
                  </td>
                  <td class="py-3 px-3 text-center font-black text-sm text-slate-900">
                    ${totalScore}/${maxScore}
                  </td>
                  <td class="py-3 px-3 text-center">
                    <span class="px-2.5 py-1 rounded-lg text-xs font-black bg-brand-600 text-white shadow-xs">
                      ${grade} (${pct}%)
                    </span>
                  </td>
                  <td class="py-3 px-3"></td>
                </tr>
              </tfoot>
            ` : ''}
          </table>
        </div>
      </div>

      ${renderSemesterRankHoldersComponent(state.selectedSem)}
    </div>
  `;

  return `
    <div class="max-w-7xl mx-auto w-full">
      <div class="w-full">
        ${cpTab === 'overview' ? overviewSection : cpTab === 'fund' ? fundSection : cpTab === 'marks' ? marksSection : attendanceSection}
      </div>

      <nav class="admin-sticky-footer fixed bottom-0 left-0 right-0 p-2.5 shadow-2xl flex justify-around items-center z-40 w-full">
        <div class="max-w-4xl mx-auto w-full flex justify-start sm:justify-around items-center overflow-x-auto scrollbar-none gap-2 px-2 py-0.5">
          ${[
            { id: 'overview',   label: 'Overview & Users', labelMobile: 'Overview',  iconName: 'users'        },
            { id: 'fund',       label: 'Institute Fund',   labelMobile: 'Fund',       iconName: 'landmark'     },
            { id: 'attendance', label: 'Attendance',       labelMobile: 'Attendance', iconName: 'check-square' },
            { id: 'marks',      label: 'Mark Entry',       labelMobile: 'Marks',      iconName: 'bookOpen'     },
          ].map(item => {
            const isActive = cpTab === item.id;
            return `
              <button
                onclick="state.cpActiveTab='${item.id}';renderApp()"
                class="whitespace-nowrap flex-shrink-0 flex items-center space-x-1.5 px-3 py-2.5 rounded-xl font-bold text-xs md:text-sm transition-all duration-300 nav-item-lift ${
                  isActive
                    ? 'bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-md font-bold'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }"
              >
                ${icon(item.iconName, `w-3.5 h-3.5 md:w-4 md:h-4 ${isActive ? 'text-white' : 'text-slate-400'}`)}
                <span>
                  <span class="hidden md:inline">${item.label}</span>
                  <span class="inline md:hidden">${item.labelMobile}</span>
                </span>
              </button>
            `;
          }).join('')}
        </div>
      </nav>
    </div>
  `;
}

async function cpAddTransaction(e, studentId) {
  e.preventDefault();
  const student = state.students.find(s => s.id === studentId);
  if (!student) return;
  const type = document.getElementById('cpTxnType').value;
  const desc = (document.getElementById('cpTxnDesc').value || '').trim();
  const amount = parseFloat(document.getElementById('cpTxnAmount').value);
  if (!amount || isNaN(amount) || amount <= 0) return;
  if (!Array.isArray(student.transactions)) student.transactions = [];
  student.transactions.unshift({
    id: `TXN-${Math.floor(100 + Math.random() * 900)}`,
    date: new Date().toISOString().split('T')[0],
    description: desc || (type === 'Credit' ? 'Cash In' : 'Cash Out'),
    type,
    amount,
    category: type === 'Credit' ? 'Cash In' : 'Cash Out'
  });
  student.lastUpdated = Date.now();
  await saveStudentDoc(student);
  await saveState();
  showToast("Transaction added successfully!");
  renderApp();
}

async function cpDeleteTransaction(studentId, index) {
  const student = state.students.find(s => s.id === studentId);
  if (!student || !student.transactions[index]) return;
  student.transactions.splice(index, 1);
  student.lastUpdated = Date.now();
  await saveStudentDoc(student);
  await saveState();
  showToast("Transaction deleted");
  renderApp();
}

function renderAdminFinanceView(student, fin) {
  const netBalance = fin.totalCredits - fin.totalDebits;

  return `
    <div class="space-y-6">
      <div class="glass-card p-6 sm:p-8 rounded-3xl shadow-anti-gravity border border-white flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span class="bg-emerald-50 text-emerald-700 text-xs px-3 py-1 rounded-full font-bold border border-emerald-100 uppercase tracking-wider">
            INSTITUTE FUND (₹)
          </span>
          <h2 class="text-3xl font-extrabold text-slate-900 tracking-tight mt-2">Institute Fund</h2>
        </div>

        <select onchange="switchStudentAccount(this.value)" class="p-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-800 shadow-sm focus:ring-2 focus:ring-brand-500 cursor-pointer">
          ${state.students.map(s => `<option value="${s.id}" ${s.id === student.id ? 'selected' : ''}>${s.name} (${s.class || 'Genesis 01'})</option>`).join('')}
        </select>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div class="p-5 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md flex items-center justify-between">
          <div>
            <p class="text-xs font-semibold opacity-90 uppercase tracking-wider">Cash In</p>
            <p class="text-3xl font-black mt-1">${formatINR(fin.totalCredits)}</p>
          </div>
          <div class="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
            ${icon('arrow-down-left', 'w-6 h-6')}
          </div>
        </div>

        <div class="p-5 rounded-3xl bg-gradient-to-br from-rose-500 to-pink-600 text-white shadow-md flex items-center justify-between">
          <div>
            <p class="text-xs font-semibold opacity-90 uppercase tracking-wider">Cash Out</p>
            <p class="text-3xl font-black mt-1">${formatINR(fin.totalDebits)}</p>
          </div>
          <div class="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
            ${icon('arrow-up-right', 'w-6 h-6')}
          </div>
        </div>

        <div class="p-5 rounded-3xl bg-gradient-to-br from-brand-600 to-blue-700 text-white shadow-md flex items-center justify-between">
          <div>
            <p class="text-xs font-semibold opacity-90 uppercase tracking-wider">Net Total Balance</p>
            <p class="text-3xl font-black mt-1">${formatINR(netBalance)}</p>
          </div>
          <div class="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
            ${icon('wallet', 'w-6 h-6')}
          </div>
        </div>
      </div>

      <div class="glass-card p-6 rounded-3xl shadow-anti-gravity border border-white">
        <h3 class="text-base font-extrabold text-slate-900 mb-4 flex items-center space-x-2">
          ${icon('landmark', 'w-5 h-5 text-emerald-600')}
          <span>Add Transaction for ${student.name}</span>
        </h3>

        <form onsubmit="handleAdminInjectTxnForStudent(event, '${student.id}')" class="space-y-3 text-xs">
          <div>
            <label class="block font-bold text-slate-700 mb-1">Transaction Type</label>
            <select id="adminTxnType" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-bold">
              <option value="Credit">+ Cash In (INR)</option>
              <option value="Debit">- Cash Out (INR)</option>
            </select>
          </div>

          <div>
            <label class="block font-bold text-slate-700 mb-1">Amount (₹)</label>
            <input type="number" id="adminTxnAmount" required placeholder="2500" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200" />
          </div>

          <div>
            <label class="block font-bold text-slate-700 mb-1">Description <span class="text-slate-400 font-normal">(optional)</span></label>
            <input type="text" id="adminTxnDesc" placeholder="e.g. Tuition Fee Payment" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200" />
          </div>

          <button type="submit" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3 rounded-xl transition-all shadow-md shadow-emerald-500/20">
            Add Transaction to Fund (₹)
          </button>
        </form>
      </div>

      <div class="glass-card p-6 rounded-3xl shadow-anti-gravity border border-white">
        <h3 class="text-base font-extrabold text-slate-900 mb-4">${student.name}'s Fund History</h3>
        <div class="space-y-3 text-xs max-h-[400px] overflow-y-auto pr-1">
          ${(!student.transactions || student.transactions.length === 0) ? `
            <p class="text-slate-400 font-bold text-center py-8">No transactions recorded for ${student.name}.</p>
          ` : student.transactions.map((t, tIdx) => `
            <div class="p-3.5 rounded-2xl bg-white border border-slate-100 flex items-center justify-between shadow-xs gap-2">
              <div class="flex-1 min-w-0">
                <p class="font-bold text-slate-800 truncate">${t.description || (t.type === 'Credit' ? 'Cash In' : 'Cash Out')}</p>
                <p class="text-[10px] text-slate-400 font-semibold mt-0.5">${t.date} • <span class="${t.type === 'Credit' ? 'text-emerald-600' : 'text-rose-600'}">${t.type === 'Credit' ? 'Cash In' : 'Cash Out'}</span></p>
              </div>
              <div class="flex items-center space-x-2 flex-shrink-0">
                <span class="font-black text-sm ${t.type === 'Credit' ? 'text-emerald-600' : 'text-rose-600'}">
                  ${t.type === 'Credit' ? '+' : '-'}${formatINR(t.amount)}
                </span>
                <button onclick="deleteTxnForStudent('${student.id}', ${tIdx})" class="p-1.5 rounded-lg hover:bg-rose-50 text-rose-400 hover:text-rose-600 transition-colors" title="Delete">
                  ${icon('trash-2', 'w-3.5 h-3.5')}
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

// --- ADMIN BROADCASTER ---
function renderAdminBroadcastView() {
  return `
    <div class="space-y-8">
      <div class="glass-card p-6 sm:p-8 rounded-3xl shadow-anti-gravity border border-white flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span class="bg-rose-50 text-rose-700 text-xs px-3 py-1 rounded-full font-bold border border-rose-100">
            INSTITUTE BROADCASTER
          </span>
          <h2 class="text-3xl font-extrabold text-slate-900 tracking-tight mt-2">Academic Notice Broadcaster</h2>
        </div>
      </div>

      <div class="glass-card p-6 rounded-3xl shadow-anti-gravity border border-white space-y-4">
        <h3 class="text-base font-extrabold text-slate-900 mb-2">Create New Broadcast Notice</h3>
        <form onsubmit="handleAdminBroadcast(event)" class="space-y-4 text-xs">
          <div>
            <label class="block font-bold text-slate-700 mb-1">Announcement Title</label>
            <input type="text" id="adminAnnTitle" required placeholder="Write an Announcement Title" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200" />
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block font-bold text-slate-700 mb-1">Urgency Priority</label>
              <select id="adminAnnUrgency" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-bold">
                <option value="Normal">Normal Urgency</option>
                <option value="High">High Urgency</option>
              </select>
            </div>
            <div>
              <label class="block font-bold text-slate-700 mb-1">Category / Tag</label>
              <input type="text" id="adminAnnCategory" value="Academic" required placeholder="e.g. Academic, Event, Facility" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200" />
            </div>
          </div>

          <div>
            <label class="block font-bold text-slate-700 mb-1">Announcement Details</label>
            <textarea id="adminAnnContent" rows="3" required placeholder="Write broadcast details here..." class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200"></textarea>
          </div>

          <button type="submit" class="w-full bg-brand-600 hover:bg-brand-700 text-white font-extrabold py-3 rounded-xl transition-all shadow-md shadow-brand-500/20">
            Broadcast to Student Feed
          </button>
        </form>
      </div>

      <div class="glass-card p-6 rounded-3xl shadow-anti-gravity border border-white space-y-4">
        <div class="flex items-center justify-between border-b border-slate-100 pb-3">
          <div>
            <h3 class="text-base font-extrabold text-slate-900">Broadcast History</h3>
          </div>
        </div>

        ${state.announcements.length === 0 ? `
          <div class="p-8 text-center text-slate-400 font-bold text-xs bg-slate-50 rounded-2xl border border-slate-100">
            No broadcast notices published yet.
          </div>
        ` : `
          <div class="space-y-3">
            ${state.announcements.map(item => `
              <div class="p-4 rounded-2xl bg-white border border-slate-150 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div class="space-y-1.5 flex-1">
                  <div class="flex items-center space-x-2 flex-wrap gap-y-1">
                    <span class="px-2.5 py-0.5 rounded-md text-[10px] font-bold ${
                      item.urgency === "High" ? "bg-rose-500 text-white" : "bg-brand-100 text-brand-700"
                    }">
                      ${item.category || "Broadcast"}
                    </span>
                    <span class="px-2 py-0.5 rounded-md text-[10px] font-bold ${
                      item.urgency === "High" ? "bg-rose-50 text-rose-700 border border-rose-200" : "bg-slate-100 text-slate-600"
                    }">
                      ${item.urgency || "Normal"} Urgency
                    </span>
                    <span class="text-[11px] text-slate-400 font-semibold">• Published: ${item.date || 'Recently'}</span>
                  </div>
                  <h4 class="text-sm font-extrabold text-slate-900">${item.title}</h4>
                  <p class="text-xs text-slate-600 leading-relaxed">${item.content}</p>
                </div>

                <div class="flex items-center space-x-2 flex-shrink-0 self-end md:self-center">
                  <button onclick="openEditBroadcastModal(${item.id})" class="px-3 py-1.5 rounded-xl bg-brand-50 hover:bg-brand-100 text-brand-600 font-bold text-xs border border-brand-100 transition-all flex items-center space-x-1 shadow-sm">
                    ${icon('edit', 'w-3.5 h-3.5')}
                    <span>Edit</span>
                  </button>
                  <button onclick="deleteBroadcast(${item.id})" class="px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 font-bold text-xs border border-rose-100 transition-all flex items-center space-x-1 shadow-sm">
                    ${icon('trash-2', 'w-3.5 h-3.5')}
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        `}
      </div>
    </div>
  `;
}

// --- STUDENT DASHBOARD ---
function renderDashboardView(student, fin) {
  return `
    <div class="relative overflow-hidden glass-card rounded-3xl p-6 sm:p-8 shadow-anti-gravity anti-gravity-card border border-white bg-gradient-to-r from-white via-slate-50/60 to-brand-50/50 mb-6">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-100">
        <span class="text-xs font-extrabold uppercase tracking-wider text-slate-400">Batch & Student User Selector</span>
        ${renderBatchAndStudentSelectorHtml(student.id, 'switchStudentAccount(this.value)')}
      </div>
      <div class="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div onclick="toggleModal('profile', true)" class="flex items-center space-x-4 sm:space-x-6 cursor-pointer hover:opacity-85 transition-opacity" title="Click to view details">
          <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-slate-200/60 shadow-sm flex-shrink-0 flex items-center justify-center overflow-hidden">
            ${getStudentAvatarHtml(student, "w-full h-full object-cover", "text-xl")}
          </div>
          <div>
            <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-[10px] font-bold tracking-wide border shadow-sm mb-3 ${
              student.status === "Present" ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-amber-50 text-amber-700 border-amber-200"
            }">
              <span class="relative flex h-2 w-2">
                ${student.status === "Present"
                  ? `<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>`
                  : `<span class="animate-pulse absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span><span class="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>`
                }
              </span>
              <span>${student.status}</span>
            </div>

            <h1 class="text-5xl sm:text-7xl md:text-8xl font-black text-slate-900 tracking-tight leading-none mb-3">
              Hi, <span class="animated-student-name inline-block drop-shadow-xs">${student.name}</span>
            </h1>

            <p class="text-xs sm:text-sm font-semibold text-slate-600 flex items-center space-x-2">
              ${icon('graduation-cap', 'w-4 h-4 text-brand-500')}
              <span>${student.school}</span>
              <span class="text-slate-300">|</span>
              <span class="font-extrabold text-slate-800">${student.class}</span>
            </p>
          </div>
        </div>

        <div class="flex items-center space-x-3 self-start md:self-auto flex-wrap gap-y-2">
          <div onclick="showAttendanceGraph()" class="bg-white/95 p-4 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-brand-200 hover:scale-105 transition-all cursor-pointer text-center min-w-[115px]">
            <p class="text-[10px] uppercase font-extrabold tracking-wider text-slate-500">Attendance</p>
            <p class="text-2xl font-black text-brand-600 mt-0.5">${student.attendanceRate}%</p>
          </div>
          <div onclick="toggleModal('profile', true)" class="bg-white/95 p-4 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-brand-200 hover:scale-105 transition-all cursor-pointer text-center min-w-[115px]">
            <p class="text-[10px] uppercase font-extrabold tracking-wider text-slate-500">Leaves Taken</p>
            <p class="text-2xl font-black text-slate-800 mt-0.5">${student.totalLeaveDays} Days</p>
          </div>
        </div>
      </div>
    </div>

    ${renderAcademicUpdatesTicker()}

    ${(() => {
      const dashExams = (student.exams || []).filter(e => (e.sem) === state.selectedSem);
      const dashTotal = dashExams.reduce((s, e) => s + (e.score || 0), 0);
      const dashMax   = dashExams.length * 100;
      const dashPct   = dashMax > 0 ? ((dashTotal / dashMax) * 100).toFixed(1) : '0.0';
      const dashGrade = dashExams.length > 0 ? getGradeFromScore(parseFloat(dashPct)) : 'N/A';

      const sameClassStudents = state.students.filter(st => (st.class || '') === (student.class || 'Genesis 01'));
      const allAvgs = sameClassStudents.map(st => {
        const exs = (st.exams || []).filter(e => (e.sem) === state.selectedSem);
        return exs.length ? exs.reduce((s, e) => s + (e.score || 0), 0) / exs.length : 0;
      }).sort((a, b) => b - a);
      const myAvg = dashExams.length ? dashTotal / dashExams.length : 0;
      const rank  = dashExams.length ? (allAvgs.findIndex(a => a <= myAvg) + 1) : '-';

      let rankCardStyle = 'bg-slate-50/60 border border-slate-200/80 text-slate-900';
      let rankLabelStyle = 'text-slate-400';
      if (rank === 1) { rankCardStyle = 'bg-amber-50/60 border border-amber-200/80 text-amber-950'; rankLabelStyle = 'text-amber-600'; }
      else if (rank === 2) { rankCardStyle = 'bg-slate-100/60 border border-slate-300/60 text-slate-900'; rankLabelStyle = 'text-slate-500'; }
      else if (rank === 3) { rankCardStyle = 'bg-orange-50/40 border border-amber-200/60 text-amber-950'; rankLabelStyle = 'text-amber-700'; }

      return `
      <div class="glass-card rounded-3xl p-6 shadow-anti-gravity border border-white mb-6">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
          <div class="flex items-center space-x-3">
            <div class="w-8 h-8 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
              ${icon('graduation-cap', 'w-4 h-4')}
            </div>
            <h3 class="text-sm font-extrabold text-slate-900">Academic Performance</h3>
          </div>
          <div class="flex items-center space-x-2 bg-slate-100/90 p-1.5 rounded-2xl border border-slate-200 shadow-sm self-start sm:self-auto">
            <span class="text-[11px] font-extrabold text-slate-500 pl-1">Semester:</span>
            <select onchange="changeSelectedSemester(this.value)" class="p-1.5 bg-white border border-slate-200 rounded-xl text-xs font-extrabold text-brand-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500 cursor-pointer">
              ${["Sem 1","Sem 2","Sem 3","Sem 4"].map(sem => `
                <option value="${sem}" ${state.selectedSem === sem ? 'selected' : ''}>${sem}</option>
              `).join('')}
            </select>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-3">
          <div class="rounded-2xl border p-4 text-center flex flex-col items-center justify-center transition-all ${rankCardStyle}">
            <p class="text-[10px] uppercase font-bold tracking-wider ${rankLabelStyle}">Class Rank</p>
            <p class="text-2xl sm:text-3xl font-black mt-1">#${rank}</p>
          </div>
          <div class="rounded-2xl bg-emerald-50/60 border border-emerald-100/80 p-4 text-center shadow-sm flex flex-col items-center justify-center">
            <p class="text-[10px] uppercase font-bold text-emerald-600 tracking-wider">Grade</p>
            <p class="text-2xl sm:text-3xl font-black text-emerald-950 mt-1">${dashPct}%</p>
            <p class="text-[10px] text-emerald-600 font-bold mt-0.5">${dashGrade} Grade</p>
          </div>
          <div class="rounded-2xl bg-blue-50/60 border border-blue-100/80 p-4 text-center shadow-sm flex flex-col items-center justify-center">
            <p class="text-[10px] uppercase font-bold text-blue-600 tracking-wider">Total Marks</p>
            <p class="text-2xl sm:text-3xl font-black text-blue-950 mt-1">${dashTotal}</p>
            <p class="text-[10px] text-blue-500 font-bold mt-0.5">out of ${dashMax}</p>
          </div>
        </div>
      </div>
      `;
    })()}

    <div class="glass-card rounded-3xl p-6 shadow-anti-gravity anti-gravity-card border border-white mb-6">
      <div class="flex items-center space-x-3 mb-6">
        <div class="w-8 h-8 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center font-bold">
          ${icon('activity', 'w-4 h-4')}
        </div>
        <div>
          <h3 class="text-sm font-extrabold text-slate-900">Analytics & Graphs</h3>
        </div>
      </div>

      ${renderGraphContent(student, fin)}
    </div>

    <div class="mb-6">
      ${renderSemesterRankHoldersComponent(state.selectedSem)}
    </div>
  `;
}

// --- STUDENT EXAMINATION HUB ---
function renderExaminationView(student) {
  const semExams = (student.exams || []).filter(e => (e.sem) === state.selectedSem);
  const presentExams = semExams.filter(e => !e.absent);
  const totalScore = presentExams.reduce((s, e) => s + (e.score || 0), 0);
  const maxScore   = presentExams.length * 100;
  const pct        = maxScore > 0 ? ((totalScore / maxScore) * 100).toFixed(1) : '0.0';
  const grade      = presentExams.length > 0 ? getGradeFromScore(parseFloat(pct)) : 'N/A';
  
  const sameClassStudents = state.students.filter(st => (st.class || '') === (student.class || 'Genesis 01'));
  const allAvgs = sameClassStudents.map(st => {
    const exs = (st.exams || []).filter(e => (e.sem) === state.selectedSem);
    return exs.length ? exs.reduce((s, e) => s + (e.score || 0), 0) / exs.length : 0;
  }).sort((a, b) => b - a);
  const myAvg = semExams.length ? totalScore / semExams.length : 0;
  const rank  = semExams.length ? (allAvgs.findIndex(a => a <= myAvg) + 1) : '-';

  return `
    <div class="space-y-8">
      <div class="glass-card p-6 sm:p-8 rounded-3xl shadow-anti-gravity border border-white space-y-6">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span class="bg-brand-50 text-brand-600 text-xs px-3 py-1 rounded-full font-bold border border-brand-100">
              ACADEMIC PERFORMANCE
            </span>
            <h2 class="text-3xl font-extrabold text-slate-900 tracking-tight mt-2">Examinations & Marksheet</h2>
            <p class="text-xs text-slate-400 font-semibold mt-1">Student Batch: <span class="text-brand-600 font-bold">${student.class || 'Genesis 01'}</span></p>
          </div>

          ${renderBatchAndStudentSelectorHtml(student.id, 'switchStudentAccount(this.value)')}
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div class="rounded-2xl bg-amber-50/50 border border-amber-200/80 p-5 text-center flex flex-col items-center justify-center">
            <p class="text-[11px] uppercase font-bold text-amber-700 tracking-wider">Class Rank</p>
            <p class="text-3xl font-black text-amber-950 mt-1">#${rank}</p>
          </div>

          <div class="rounded-2xl bg-emerald-50/60 border border-emerald-100/80 p-5 text-center shadow-sm flex flex-col items-center justify-center">
            <p class="text-[11px] uppercase font-bold text-emerald-600 tracking-wider">Grade</p>
            <p class="text-3xl font-black text-emerald-950 mt-1">${pct}%</p>
            <p class="text-[10px] text-emerald-600 font-bold mt-0.5">${grade} Grade</p>
          </div>

          <div class="rounded-2xl bg-blue-50/60 border border-blue-100/80 p-5 text-center shadow-sm flex flex-col items-center justify-center">
            <p class="text-[11px] uppercase font-bold text-blue-600 tracking-wider">Total Marks</p>
            <p class="text-3xl font-black text-blue-950 mt-1">${totalScore}</p>
            <p class="text-[10px] text-blue-500 font-bold mt-0.5">out of ${maxScore}</p>
          </div>
        </div>
      </div>

      <div class="glass-card p-6 rounded-3xl shadow-anti-gravity border border-white">
        <div class="flex flex-col md:flex-row md:items-center justify-end gap-4 mb-5">
          <div class="flex items-center space-x-3 flex-wrap gap-y-2">
            <div class="flex items-center space-x-2 bg-slate-100/90 p-1.5 rounded-2xl border border-slate-200 shadow-sm">
              <span class="text-xs font-extrabold text-slate-600 pl-2">Semester:</span>
              <select onchange="changeSelectedSemester(this.value)" class="p-2 bg-white border border-slate-200 rounded-xl text-xs font-extrabold text-brand-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500 cursor-pointer">
                ${["Sem 1", "Sem 2", "Sem 3", "Sem 4"].map(sem => `
                  <option value="${sem}" ${state.selectedSem === sem ? 'selected' : ''}>${sem}</option>
                `).join('')}
              </select>
            </div>

            ${(state.role === 'admin' || state.role === 'controlpanel') ? `
              <button onclick="openAddSubjectModal('${student.id}')" class="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-md shadow-brand-500/20 transition-all hover:scale-105">
                ${icon('plus', 'w-3.5 h-3.5')}
                <span>Add Subject</span>
              </button>
            ` : ''}
          </div>
        </div>

        <div class="w-full overflow-x-auto custom-scrollbar" id="marksheetPDFContent">
          <table class="w-full text-left border-collapse text-xs min-w-[340px]">
            <thead>
              <tr class="border-b border-slate-100 text-slate-400 font-bold uppercase text-[10px]">
                <th class="py-2.5 px-2">Subject</th>
                <th class="py-2.5 px-1 text-center">Score</th>
                <th class="py-2.5 px-1 text-center">Grade</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-50">
              ${semExams.length === 0 ? `
                <tr>
                  <td colspan="3" class="py-6 text-center text-slate-400 font-bold">No exam subjects recorded for ${state.selectedSem}.</td>
                </tr>
              ` : semExams.map(item => `
                <tr class="hover:bg-slate-50/80 transition-colors">
                  <td class="py-3 px-2 font-bold text-slate-800">
                    <p class="break-words line-clamp-2">${item.subject}</p>
                    <span class="text-[10px] text-slate-400 font-normal">${item.code || ''}</span>
                  </td>
                  <td class="py-3 px-1 text-center font-bold ${item.absent ? 'text-rose-500' : 'text-slate-700'}">${item.absent ? '<span class="px-2 py-0.5 rounded-md text-[10px] font-black bg-rose-100 text-rose-600 border border-rose-200">Absent</span>' : item.score + ' / 100'}</td>
                  <td class="py-3 px-1 text-center">
                    <span class="px-2 py-1 rounded-md text-[10px] font-black ${item.absent ? 'bg-rose-100 text-rose-600' : 'bg-emerald-100 text-emerald-700'}">
                      ${item.absent ? 'AB' : item.grade}
                    </span>
                  </td>
                </tr>
              `).join('')}
            </tbody>

            ${semExams.length > 0 ? `
              <tfoot class="border-t-2 border-slate-200 bg-slate-50/90 font-black">
                <tr class="text-slate-900">
                  <td class="py-2.5 px-2 uppercase font-extrabold tracking-wider text-[11px] sm:text-xs text-slate-700">
                    Grand Total
                  </td>
                  <td class="py-2.5 px-1 text-center font-black text-xs sm:text-sm text-slate-900">
                    ${totalScore}/${maxScore}
                  </td>
                  <td class="py-2.5 px-1 text-center">
                    <span class="px-2 py-1 rounded-lg text-[11px] sm:text-xs font-black bg-brand-600 text-white shadow-sm inline-block">
                      ${grade} Grade
                    </span>
                  </td>
                </tr>
              </tfoot>
            ` : ''}
          </table>
        </div>

        <div class="mt-5 pt-4 border-t border-slate-100 flex justify-end">
          <button onclick="downloadMarksheetPDF('${student.id}')" class="flex items-center space-x-2 bg-brand-600 hover:bg-brand-700 text-white px-5 py-3 rounded-2xl text-xs font-bold shadow-md shadow-brand-500/20 transition-all hover:scale-105">
            ${icon('download', 'w-4 h-4')}
            <span>Download Marksheet PDF</span>
          </button>
        </div>
      </div>
    </div>
  `;
}

// --- STUDENT LEAVES MANAGEMENT ---
function renderLeaveTakenView(student) {
  return `
    <div class="space-y-8">
      <div class="glass-card p-6 sm:p-8 rounded-3xl shadow-anti-gravity border border-white flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span class="bg-amber-50 text-amber-600 text-xs px-3 py-1 rounded-full font-bold border border-amber-100">
            OFFICIAL ABSENCE MANAGEMENT
          </span>
          <h2 class="text-3xl font-extrabold text-slate-900 tracking-tight mt-2">Attendance & Leave</h2>
        </div>

        <div class="flex flex-wrap items-center gap-3">
          ${renderBatchAndStudentSelectorHtml(student.id, 'switchStudentAccount(this.value)')}

          <button onclick="toggleModal('leave', true)" class="flex items-center space-x-2 bg-brand-600 hover:bg-brand-700 text-white px-5 py-3 rounded-2xl text-xs font-bold shadow-md shadow-brand-500/20 transition-all hover:scale-105">
            ${icon('plus', 'w-4 h-4')}
            <span>Apply New Leave</span>
          </button>
        </div>
      </div>

      <div class="glass-card p-6 rounded-3xl shadow-anti-gravity border border-white">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <h3 class="text-base font-extrabold text-slate-900">Attendance Calendar</h3>
            ${renderInteractiveAttendanceLegend()}
          </div>
          
          <select onchange="changeAttendanceFilterMonth(this.value)" class="p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800">
            ${[
              "August 2026", "September 2026", "October 2026", "November 2026", "December 2026",
              "January 2027", "February 2027", "March 2027", "April 2027", "May 2027", "June 2027", "July 2027"
            ].map(m => `
              <option value="${m}" ${state.attendanceFilterMonth === m ? 'selected' : ''}>${m}</option>
            `).join('')}
          </select>
        </div>

        <div class="grid grid-cols-7 gap-2 mb-3 mt-4">
          <div class="py-2 rounded-xl bg-blue-50/60 text-blue-600 font-extrabold text-[11px] text-center border border-blue-100/70 tracking-wider">SUN</div>
          <div class="py-2 rounded-xl bg-blue-50/60 text-blue-600 font-extrabold text-[11px] text-center border border-blue-100/70 tracking-wider">MON</div>
          <div class="py-2 rounded-xl bg-blue-50/60 text-blue-600 font-extrabold text-[11px] text-center border border-blue-100/70 tracking-wider">TUE</div>
          <div class="py-2 rounded-xl bg-blue-50/60 text-blue-600 font-extrabold text-[11px] text-center border border-blue-100/70 tracking-wider">WED</div>
          <div class="py-2 rounded-xl bg-blue-50/60 text-blue-600 font-extrabold text-[11px] text-center border border-blue-100/70 tracking-wider">THU</div>
          <div class="py-2 rounded-xl bg-blue-50/60 text-blue-600 font-extrabold text-[11px] text-center border border-blue-100/70 tracking-wider">FRI</div>
          <div class="py-2 rounded-xl bg-blue-50/60 text-blue-600 font-extrabold text-[11px] text-center border border-blue-100/70 tracking-wider">SAT</div>
        </div>

        <div class="grid grid-cols-7 gap-2">
          ${generateAttendanceDaysGrid(student, state.attendanceFilterMonth || "August 2026")}
        </div>
      </div>

      <div class="glass-card p-6 rounded-3xl shadow-anti-gravity border border-white">
        <h3 class="text-base font-extrabold text-slate-900 mb-4">Leave Application History</h3>
        <div class="space-y-3">
          ${(!student.leaves || student.leaves.length === 0) ? `
            <div class="p-6 text-center text-slate-400 font-bold bg-slate-50 rounded-2xl border border-slate-100 text-xs">
              No leave requests recorded yet.
            </div>
          ` : student.leaves.map(l => `
            <div class="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div class="flex items-center space-x-3">
                <span class="relative flex h-3.5 w-3.5">
                  ${
                    l.status === "Approved" ? `<span class="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>` :
                    l.status === "Pending" ? `<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span><span class="relative inline-flex rounded-full h-3.5 w-3.5 bg-amber-500"></span>` :
                    `<span class="relative inline-flex rounded-full h-3.5 w-3.5 bg-rose-500"></span>`
                  }
                </span>
                <div>
                  <p class="font-bold text-slate-800 text-sm">${l.reason}</p>
                  <p class="text-[11px] text-slate-500 mt-0.5">
                    ${l.startDate} to ${l.endDate} &bull; <span class="font-semibold text-brand-600">${l.category}</span>
                  </p>
                </div>
              </div>

              <div class="flex items-center space-x-2">
                <span class="px-3 py-1 rounded-full text-xs font-bold ${
                  l.status === "Approved" ? "bg-emerald-50 text-emerald-700 border border-emerald-200" :
                  l.status === "Pending" ? "bg-amber-50 text-amber-700 border border-amber-200" :
                  "bg-rose-50 text-rose-700 border border-rose-200"
                }">${l.status}</span>
                <button onclick="openEditLeaveModal('${student.id}', '${l.id}')" class="px-2.5 py-1 rounded-xl bg-brand-50 hover:bg-brand-100 text-brand-600 font-bold text-xs border border-brand-100 transition-all flex items-center space-x-1 shadow-sm" title="Edit">
                  ${icon('edit', 'w-3.5 h-3.5')}
                  <span>Edit</span>
                </button>
                <button onclick="deleteStudentLeave('${student.id}', '${l.id}')" class="px-2.5 py-1 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 font-bold text-xs border border-rose-100 transition-all flex items-center space-x-1 shadow-sm" title="Delete">
                  ${icon('trash-2', 'w-3.5 h-3.5')}
                  <span>Delete</span>
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

// --- STUDENT FUND LEDGER ---
function renderBankCreditsView(student, fin) {
  const catFilter = state.fundCategoryFilter || "All";
  const dateFilter = state.fundDateFilter || "";
  const netBalance = fin.totalCredits - fin.totalDebits;

  let filteredTxns = (student.transactions || []);
  if (catFilter !== "All") {
    filteredTxns = filteredTxns.filter(t => t.category === catFilter);
  }
  if (dateFilter) {
    filteredTxns = filteredTxns.filter(t => t.date && t.date.includes(dateFilter));
  }

  return `
    <div class="space-y-8">
      <div class="glass-card p-6 sm:p-8 rounded-3xl shadow-anti-gravity border border-white flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span class="bg-emerald-50 text-emerald-700 text-xs px-3 py-1 rounded-full font-bold border border-emerald-100">
            STUDENTS' FUND (INR ₹)
          </span>
          <h2 class="text-3xl font-extrabold text-slate-900 tracking-tight mt-2">${student.name}'s Fund</h2>
        </div>

        ${renderBatchAndStudentSelectorHtml(student.id, 'switchStudentAccount(this.value)')}
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div class="p-5 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md flex items-center justify-between">
          <div>
            <p class="text-xs font-semibold opacity-90 uppercase tracking-wider">Cash In</p>
            <p class="text-3xl font-black mt-1">${formatINR(fin.totalCredits)}</p>
          </div>
          <div class="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
            ${icon('arrow-down-left', 'w-6 h-6')}
          </div>
        </div>

        <div class="p-5 rounded-3xl bg-gradient-to-br from-rose-500 to-pink-600 text-white shadow-md flex items-center justify-between">
          <div>
            <p class="text-xs font-semibold opacity-90 uppercase tracking-wider">Cash Out</p>
            <p class="text-3xl font-black mt-1">${formatINR(fin.totalDebits)}</p>
          </div>
          <div class="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
            ${icon('arrow-up-right', 'w-6 h-6')}
          </div>
        </div>

        <div class="p-5 rounded-3xl bg-gradient-to-br from-brand-600 to-blue-700 text-white shadow-md flex items-center justify-between">
          <div>
            <p class="text-xs font-semibold opacity-90 uppercase tracking-wider">Net Total Balance</p>
            <p class="text-3xl font-black mt-1">${formatINR(netBalance)}</p>
          </div>
          <div class="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
            ${icon('wallet', 'w-6 h-6')}
          </div>
        </div>
      </div>

      <div class="glass-card p-6 rounded-3xl shadow-anti-gravity border border-white space-y-4">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 class="text-base font-extrabold text-slate-900">Transaction History</h3>
          </div>

          <div class="flex items-center space-x-2.5 flex-wrap gap-y-2">
            <div class="flex items-center space-x-1 bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs">
              <span class="text-[10px] font-bold text-slate-400 px-2">Date:</span>
              <input
                type="date"
                value="${dateFilter}"
                onchange="changeFundDateFilter(this.value)"
                class="p-1 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-800 focus:outline-none"
              />
              ${dateFilter ? `
                <button onclick="changeFundDateFilter('')" class="text-slate-400 hover:text-rose-500 p-1 text-[10px] font-bold">
                  ${icon('x', 'w-3.5 h-3.5')}
                </button>
              ` : ''}
            </div>
          </div>
        </div>

        <div class="space-y-2 pt-2">
          ${filteredTxns.length === 0 ? `
            <div class="p-8 text-center text-slate-400 font-bold bg-slate-50 rounded-2xl border border-slate-100 text-xs">
              No transaction records match the selected date filters.
            </div>
          ` : filteredTxns.map(t => `
            <div class="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 transition-all text-xs shadow-sm">
              <div class="flex items-center space-x-3">
                <div class="w-9 h-9 rounded-xl flex items-center justify-center font-bold ${
                  t.type === "Credit" ? "bg-emerald-100 text-emerald-600" : "bg-rose-100 text-rose-600"
                }">
                  ${t.type === "Credit" ? icon('arrow-down-left', 'w-4 h-4') : icon('arrow-up-right', 'w-4 h-4')}
                </div>
                <div>
                  <p class="font-bold text-slate-800 text-sm">${t.description}</p>
                  <p class="text-[10px] text-slate-400">${t.date} • <span class="font-semibold text-slate-600">${t.category || 'General'}</span> • ID: ${t.id}</p>
                </div>
              </div>
              <div class="text-right">
                <span class="font-black text-base ${t.type === "Credit" ? "text-emerald-600" : "text-rose-600"}">
                  ${t.type === "Credit" ? `+${formatINR(t.amount)}` : `-${formatINR(t.amount)}`}
                </span>
                <p class="text-[10px] font-bold ${t.type === "Credit" ? "text-emerald-600" : "text-rose-600"}">${t.type === "Credit" ? "Cash In" : "Cash Out"}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderGraphContent(student, fin) {
  return `
    <div class="space-y-8">
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div class="p-5 rounded-3xl bg-slate-50/50 border border-slate-200/60 flex flex-col justify-between">
          <div>
            <div class="mb-3">
              <h4 class="font-extrabold text-slate-900 text-sm">Attendance vs Leaves</h4>
            </div>
            <div class="h-56 w-full relative">
              <canvas id="attendanceCanvas"></canvas>
            </div>
          </div>
        </div>

        <div class="p-5 rounded-3xl bg-slate-50/50 border border-slate-200/60 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-4">
              <h4 class="font-extrabold text-slate-900 text-sm">Institute Fund Overview</h4>
              <span class="text-[10px] font-bold text-brand-600 bg-brand-50 px-2 py-0.5 rounded-full border border-brand-100">Financial</span>
            </div>

            <div class="grid grid-cols-1 gap-2.5 mb-4">
              <div class="p-3.5 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md flex items-center justify-between">
                <div>
                  <p class="text-[9px] font-semibold opacity-90 uppercase tracking-wider">Cash In</p>
                  <p class="text-base font-black mt-0.5">${formatINR(fin.totalCredits)}</p>
                </div>
                <div class="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white flex-shrink-0">
                  ${icon('arrow-down-left', 'w-5 h-5')}
                </div>
              </div>
              <div class="p-3.5 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 text-white shadow-md flex items-center justify-between">
                <div>
                  <p class="text-[9px] font-semibold opacity-90 uppercase tracking-wider">Cash Out</p>
                  <p class="text-base font-black mt-0.5">${formatINR(fin.totalDebits)}</p>
                </div>
                <div class="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white flex-shrink-0">
                  ${icon('arrow-up-right', 'w-5 h-5')}
                </div>
              </div>
              <div class="p-3.5 rounded-2xl bg-gradient-to-br from-brand-600 to-blue-700 text-white shadow-md flex items-center justify-between">
                <div>
                  <p class="text-[9px] font-semibold opacity-90 uppercase tracking-wider">Net Total Balance</p>
                  <p class="text-base font-black mt-0.5">${formatINR(fin.totalCredits - fin.totalDebits)}</p>
                </div>
                <div class="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white flex-shrink-0">
                  ${icon('wallet', 'w-5 h-5')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderAcademicUpdatesTicker() {
  if (!state.announcements || state.announcements.length === 0) return '';

  const contentHtml = state.announcements.map(item => `
    <div class="p-4 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
      item.urgency === "High" ? "bg-rose-50/40 border-rose-200/80" : "bg-white border-slate-100"
    }">
      <div class="flex items-start justify-between gap-2 mb-2">
        <span class="px-2.5 py-0.5 rounded-md text-[10px] font-bold ${
          item.urgency === "High" ? "bg-rose-500 text-white" : "bg-brand-100 text-brand-700"
        }">
          ${item.category}
        </span>
      </div>
      <h4 class="text-xs font-bold text-slate-900 mb-1">${item.title}</h4>
      <p class="text-[11px] text-slate-600 line-clamp-2">${item.content}</p>
      ${!item.read ? `
        <button onclick="markRead(${item.id})" class="mt-2 text-[10px] font-bold text-brand-600 hover:text-brand-800 transition-colors flex items-center space-x-1">
          <span>Mark as Read</span>
          ${icon('check', 'w-3 h-3')}
        </button>
      ` : ''}
    </div>
  `).join('');

  return `
    <div id="academic-ticker" class="glass-card rounded-3xl p-6 shadow-anti-gravity anti-gravity-card border border-white mb-6">
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center space-x-3">
          <div class="w-8 h-8 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center font-bold">
            ${icon('megaphone', 'w-4 h-4')}
          </div>
          <div>
            <h3 class="text-sm font-extrabold text-slate-900">Manshau Updates</h3>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        ${contentHtml}
      </div>
    </div>
  `;
}

function renderInteractiveAttendanceLegend() {
  return `
    <div class="flex items-center space-x-3 flex-wrap gap-y-1.5 mt-2 text-[10px] font-extrabold">
      <div class="flex items-center space-x-1.5">
        <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-xs"></span>
        <span class="text-slate-700">Present</span>
      </div>
      <div class="flex items-center space-x-1.5">
        <span class="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-xs"></span>
        <span class="text-slate-700">Half Day</span>
      </div>
      <div class="flex items-center space-x-1.5">
        <span class="w-2.5 h-2.5 rounded-full bg-rose-500 shadow-xs"></span>
        <span class="text-slate-700">Absent</span>
      </div>
      <div class="flex items-center space-x-1.5">
        <span class="w-2.5 h-2.5 rounded-full bg-slate-900 shadow-xs"></span>
        <span class="text-slate-700">Academic Leave</span>
      </div>
      <div class="flex items-center space-x-1.5">
        <span class="w-2.5 h-2.5 rounded-full bg-white border-2 border-slate-400 shadow-xs"></span>
        <span class="text-slate-700">Upcoming</span>
      </div>
    </div>
  `;
}

function getMonthYearDetails(monthYearStr) {
  if (!monthYearStr) monthYearStr = "August 2026";
  const parts = monthYearStr.split(' ');
  const monthName = parts[0] || "August";
  const year = parseInt(parts[1], 10) || 2026;

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  let monthIndex = monthNames.indexOf(monthName);
  if (monthIndex === -1) monthIndex = 7;

  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const firstDayOfWeek = new Date(year, monthIndex, 1).getDay(); // 0 = Sun, 1 = Mon, ... 6 = Sat

  return { monthName, monthIndex, year, daysInMonth, firstDayOfWeek };
}

function clearNonAugust2026Attendance() {
  (state.students || []).forEach(student => {
    if (student && student.attendanceRecords) {
      const cleanRecords = {};
      Object.keys(student.attendanceRecords).forEach(key => {
        if (key.startsWith("August 2026-")) {
          cleanRecords[key] = student.attendanceRecords[key];
        }
      });
      student.attendanceRecords = cleanRecords;
      recalculateAttendanceRate(student);
      student.lastUpdated = Date.now();
      saveStudentDoc(student);
    }
  });
}

function processDailyAutoAttendance() {
  const now = new Date();
  
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const currentMonthName = monthNames[now.getMonth()];
  const currentYear = now.getFullYear();
  const monthYearKey = `${currentMonthName} ${currentYear}`;
  const todayNum = now.getDate();
  const currentHour = now.getHours();

  (state.students || []).forEach(student => {
    student.attendanceRecords = student.attendanceRecords || {};
    
    // Strict Cleanup: Remove any non-August 2026 keys
    Object.keys(student.attendanceRecords).forEach(k => {
      if (!k.startsWith("August 2026-")) {
        delete student.attendanceRecords[k];
      }
    });
    
    // Only apply default preset values for August 2026
    if (monthYearKey === "August 2026") {
      if (student.attendanceRecords[`${monthYearKey}-1`] === undefined) {
        student.attendanceRecords[`${monthYearKey}-1`] = "Academic Leave";
      }
      if (student.attendanceRecords[`${monthYearKey}-2`] === undefined) {
        student.attendanceRecords[`${monthYearKey}-2`] = "Academic Leave";
      }

      for (let d = 1; d <= 31; d++) {
        const key = `${monthYearKey}-${d}`;
        if (d === 1 || d === 2) continue;

        if (d < todayNum) {
          if (student.attendanceRecords[key] === undefined || student.attendanceRecords[key] === "Upcoming") {
            student.attendanceRecords[key] = "Present";
          }
        } else if (d === todayNum) {
          // Automatic Present (green) marking every day on 5 AM (currentHour >= 5)
          if (currentHour >= 5) {
            if (student.attendanceRecords[key] === undefined || student.attendanceRecords[key] === "Upcoming") {
              student.attendanceRecords[key] = "Present";
            }
          } else {
            if (student.attendanceRecords[key] === undefined) {
              student.attendanceRecords[key] = "Upcoming";
            }
          }
        } else {
          if (student.attendanceRecords[key] === undefined) {
            student.attendanceRecords[key] = "Upcoming";
          }
        }
      }
    }

    recalculateAttendanceRate(student);
  });

  syncGlobalAcademicLeaves();
}

function generateAttendanceDaysGrid(student, monthYearStr) {
  const details = getMonthYearDetails(monthYearStr || "August 2026");
  const records = (student && student.attendanceRecords) ? student.attendanceRecords : {};
  let html = '';
  const canEditAttendance = state.role === 'admin' || state.role === 'controlpanel';

  // Render empty padding cells for days before the 1st of month
  for (let p = 0; p < details.firstDayOfWeek; p++) {
    html += `<div class="h-9 sm:h-10 rounded-xl bg-transparent"></div>`;
  }

  // Render real calendar days
  for (let i = 1; i <= details.daysInMonth; i++) {
    const key = `${monthYearStr}-${i}`;
    const dayOfWeek = new Date(details.year, details.monthIndex, i).getDay();
    const isAugust2026 = (monthYearStr || "").trim() === "August 2026";
    const defaultStatus = isAugust2026 ? ((dayOfWeek === 0) ? "Upcoming" : "Present") : "Upcoming";
    const status = records[key] || defaultStatus;

    let cursorHoverClass = canEditAttendance ? "cursor-pointer hover:scale-105" : "cursor-default opacity-90";

    let bgClass = `bg-emerald-500 text-white border-emerald-500 shadow-xs ${canEditAttendance ? 'hover:bg-emerald-600' : ''} ${cursorHoverClass}`;

    if (status === "Half Day") {
      bgClass = `bg-amber-500 text-white border-amber-500 shadow-xs ${canEditAttendance ? 'hover:bg-amber-600' : ''} ${cursorHoverClass}`;
    }
    if (status === "Absent" || status === "Leave") {
      bgClass = `bg-rose-500 text-white border-rose-500 shadow-xs ${canEditAttendance ? 'hover:bg-rose-600' : ''} ${cursorHoverClass}`;
    }
    if (status === "Academic Leave") {
      bgClass = `bg-slate-900 text-white border-slate-900 shadow-xs font-black ${canEditAttendance ? 'hover:bg-black' : ''} ${cursorHoverClass}`;
    }
    if (status === "Upcoming" || status === "Holiday") {
      bgClass = `bg-white text-slate-800 border-slate-300 shadow-xs font-black ${canEditAttendance ? 'hover:bg-slate-100' : ''} ${cursorHoverClass}`;
    }

    const titleAttr = canEditAttendance 
      ? `Day ${i} (${status}) - Click to toggle` 
      : `Day ${i} (${status})`;

    const onClickAttr = canEditAttendance 
      ? `onclick="toggleAttendanceDayState('${student.id}', '${key}')"` 
      : `onclick="showToast('Attendance can only be marked by Admin or Control Panel', 'info')"`;

    html += `
      <button 
        ${onClickAttr}
        class="h-9 sm:h-10 rounded-xl border font-black text-xs sm:text-sm transition-all flex items-center justify-center ${bgClass}"
        title="${titleAttr}"
      >
        <span>${i}</span>
      </button>
    `;
  }
  return html;
}

async function toggleAttendanceDayState(studentId, dateKey) {
  if (state.role !== 'admin' && state.role !== 'controlpanel') {
    showToast("Attendance can only be marked by Admin or Control Panel", "error");
    return;
  }
  const student = state.students.find(s => s.id === studentId);
  if (!student) return;
  if (!student.attendanceRecords) student.attendanceRecords = {};

  const parts = dateKey.split('-');
  const monthYearStr = parts[0] || "August 2026";
  const dayNum = parseInt(parts[1], 10) || 1;
  const details = getMonthYearDetails(monthYearStr);
  const dayOfWeek = new Date(details.year, details.monthIndex, dayNum).getDay();
  const defaultStatus = (dayOfWeek === 0) ? "Upcoming" : "Present";

  const current = student.attendanceRecords[dateKey] || defaultStatus;
  
  let next = "Half Day";
  if (current === "Present") next = "Half Day";
  else if (current === "Half Day") next = "Absent";
  else if (current === "Absent") next = "Academic Leave";
  else if (current === "Academic Leave") next = "Upcoming";
  else if (current === "Upcoming" || current === "Holiday") next = "Present";

  if (next === "Academic Leave") {
    // If Academic Leave is clicked for one user, black mark (Academic Leave) appears on ALL users
    state.students.forEach(s => {
      s.attendanceRecords = s.attendanceRecords || {};
      s.attendanceRecords[dateKey] = "Academic Leave";
      recalculateAttendanceRate(s);
      s.lastUpdated = Date.now();
      saveStudentDoc(s);
    });
    showToast(`Academic Leave applied for ${dateKey} on all users!`, "info");
  } else if (current === "Academic Leave") {
    state.students.forEach(s => {
      s.attendanceRecords = s.attendanceRecords || {};
      s.attendanceRecords[dateKey] = next;
      recalculateAttendanceRate(s);
      s.lastUpdated = Date.now();
      saveStudentDoc(s);
    });
  } else {
    student.attendanceRecords[dateKey] = next;
    recalculateAttendanceRate(student);
    student.lastUpdated = Date.now();
    await saveStudentDoc(student);
  }

  await saveState();
  renderApp();
}


// --- ADMIN SECURITY & PASSWORDS PANEL ---
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

async function handleUpdateAdminCredentials(event) {
  if (event) event.preventDefault();
  const usernameInput = document.getElementById("adminSecurityUsername");
  const passInput = document.getElementById("adminSecurityPassword");
  const confirmInput = document.getElementById("adminSecurityPasswordConfirm");

  if (!usernameInput || !passInput) return;

  const newUsername = usernameInput.value.trim();
  const newPass = passInput.value.trim();
  const confirmPass = confirmInput ? confirmInput.value.trim() : newPass;

  if (!newUsername || !newPass) {
    showToast("Username and Password cannot be empty", "error");
    return;
  }

  if (confirmInput && newPass !== confirmPass) {
    showToast("Admin passwords do not match!", "error");
    return;
  }

  state.adminCredentials = {
    username: newUsername,
    password: newPass
  };

  await saveState();
  showToast("Admin credentials updated & synced to Firebase successfully!", "success");
  renderApp();
}

async function handleUpdateControlPanelCredentials(event) {
  if (event) event.preventDefault();
  const usernameInput = document.getElementById("cpSecurityUsername");
  const passInput = document.getElementById("cpSecurityPassword");
  const confirmInput = document.getElementById("cpSecurityPasswordConfirm");

  if (!usernameInput || !passInput) return;

  const newUsername = usernameInput.value.trim();
  const newPass = passInput.value.trim();
  const confirmPass = confirmInput ? confirmInput.value.trim() : newPass;

  if (!newUsername || !newPass) {
    showToast("Username and Password cannot be empty", "error");
    return;
  }

  if (confirmInput && newPass !== confirmPass) {
    showToast("Control Panel passwords do not match!", "error");
    return;
  }

  state.controlPanelCredentials = {
    username: newUsername,
    password: newPass
  };

  await saveState();
  showToast("Control Panel credentials updated & synced to Firebase successfully!", "success");
  renderApp();
}

function renderAdminSecurityView() {
  return `
    <div class="space-y-6">
      <!-- Header Banner -->
      <div class="glass-card rounded-3xl p-6 sm:p-8 shadow-anti-gravity border border-white bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 text-white">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-emerald-400">
              ${icon('key', 'w-6 h-6')}
            </div>
            <div>
              <span class="bg-emerald-500/20 text-emerald-400 text-[10px] px-3 py-1 rounded-full font-black uppercase tracking-wider border border-emerald-400/30 inline-block mb-1">
                SYSTEM SECURITY & CREDENTIALS
              </span>
              <h2 class="text-2xl sm:text-3xl font-black tracking-tight">Access & Password Manager</h2>
            </div>
          </div>
          <div class="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-2xl border border-white/10 text-xs font-bold self-start sm:self-auto">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Realtime Synced to Firebase</span>
          </div>
        </div>
      </div>

      <!-- Grid for Admin & Control Panel Credentials -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- 1. ADMIN CREDENTIALS CARD -->
        <div class="glass-card rounded-3xl p-6 sm:p-8 shadow-anti-gravity border border-white bg-white">
          <div class="flex items-center space-x-3 border-b border-slate-100 pb-4 mb-6">
            <div class="w-10 h-10 rounded-2xl bg-slate-900 text-emerald-400 flex items-center justify-center shadow-md">
              ${icon('shield', 'w-5 h-5')}
            </div>
            <div>
              <h3 class="text-base font-extrabold text-slate-900">Administrator Credentials</h3>
              <p class="text-xs text-slate-500 font-semibold">Change System Master login details</p>
            </div>
          </div>

          <form onsubmit="handleUpdateAdminCredentials(event)" class="space-y-4">
            <div>
              <label class="block text-[11px] font-extrabold uppercase text-slate-500 mb-1">Admin Username</label>
              <input 
                type="text" 
                id="adminSecurityUsername" 
                value="${escapeHtml(state.adminCredentials.username || 'admin')}" 
                required 
                class="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white font-extrabold text-xs sm:text-sm text-slate-900 shadow-sm focus:ring-2 focus:ring-slate-900 focus:outline-none" 
              />
            </div>

            <div>
              <label class="block text-[11px] font-extrabold uppercase text-slate-500 mb-1">New Admin Password</label>
              <input 
                type="password" 
                id="adminSecurityPassword" 
                value="${escapeHtml(state.adminCredentials.password || '')}" 
                placeholder="Enter new password" 
                required 
                class="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white font-extrabold text-xs sm:text-sm text-slate-900 shadow-sm focus:ring-2 focus:ring-slate-900 focus:outline-none" 
              />
            </div>

            <div>
              <label class="block text-[11px] font-extrabold uppercase text-slate-500 mb-1">Confirm Admin Password</label>
              <input 
                type="password" 
                id="adminSecurityPasswordConfirm" 
                value="${escapeHtml(state.adminCredentials.password || '')}" 
                placeholder="Confirm new password" 
                required 
                class="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white font-extrabold text-xs sm:text-sm text-slate-900 shadow-sm focus:ring-2 focus:ring-slate-900 focus:outline-none" 
              />
            </div>

            <button 
              type="submit" 
              class="w-full py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs sm:text-sm shadow-md transition-all hover:scale-[1.01] flex items-center justify-center space-x-2"
            >
              ${icon('save', 'w-4 h-4 text-emerald-400')}
              <span>Save Admin Password</span>
            </button>
          </form>
        </div>

        <!-- 2. CONTROL PANEL CREDENTIALS CARD -->
        <div class="glass-card rounded-3xl p-6 sm:p-8 shadow-anti-gravity border border-white bg-white">
          <div class="flex items-center space-x-3 border-b border-slate-100 pb-4 mb-6">
            <div class="w-10 h-10 rounded-2xl bg-brand-600 text-white flex items-center justify-center shadow-md shadow-brand-500/20">
              ${icon('sliders', 'w-5 h-5')}
            </div>
            <div>
              <h3 class="text-base font-extrabold text-slate-900">Control Panel Credentials</h3>
              <p class="text-xs text-slate-500 font-semibold">Change Batch Controller login details</p>
            </div>
          </div>

          <form onsubmit="handleUpdateControlPanelCredentials(event)" class="space-y-4">
            <div>
              <label class="block text-[11px] font-extrabold uppercase text-slate-500 mb-1">Control Panel Username</label>
              <input 
                type="text" 
                id="cpSecurityUsername" 
                value="${escapeHtml(state.controlPanelCredentials.username || 'control panel')}" 
                required 
                class="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white font-extrabold text-xs sm:text-sm text-slate-900 shadow-sm focus:ring-2 focus:ring-brand-500 focus:outline-none" 
              />
            </div>

            <div>
              <label class="block text-[11px] font-extrabold uppercase text-slate-500 mb-1">New Control Panel Password</label>
              <input 
                type="password" 
                id="cpSecurityPassword" 
                value="${escapeHtml(state.controlPanelCredentials.password || '')}" 
                placeholder="Enter new password" 
                required 
                class="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white font-extrabold text-xs sm:text-sm text-slate-900 shadow-sm focus:ring-2 focus:ring-brand-500 focus:outline-none" 
              />
            </div>

            <div>
              <label class="block text-[11px] font-extrabold uppercase text-slate-500 mb-1">Confirm Control Panel Password</label>
              <input 
                type="password" 
                id="cpSecurityPasswordConfirm" 
                value="${escapeHtml(state.controlPanelCredentials.password || '')}" 
                placeholder="Confirm new password" 
                required 
                class="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white font-extrabold text-xs sm:text-sm text-slate-900 shadow-sm focus:ring-2 focus:ring-brand-500 focus:outline-none" 
              />
            </div>

            <button 
              type="submit" 
              class="w-full py-3.5 px-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-brand-500/20 transition-all hover:scale-[1.01] flex items-center justify-center space-x-2"
            >
              ${icon('save', 'w-4 h-4 text-white')}
              <span>Save Control Panel Password</span>
            </button>
          </form>
        </div>
      </div>

      <!-- 3. CURRENT CREDENTIALS STATUS TABLE -->
      <div class="glass-card rounded-3xl p-6 sm:p-8 shadow-anti-gravity border border-white bg-slate-50/70">
        <div class="flex items-center space-x-3 mb-4">
          ${icon('lock', 'w-5 h-5 text-slate-700')}
          <h3 class="text-sm font-extrabold text-slate-900">Current Security Configuration Summary</h3>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div class="p-4 bg-white rounded-2xl border border-slate-200 flex items-center justify-between">
            <div>
              <span class="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">Admin Username</span>
              <span class="font-extrabold text-slate-900 text-sm">${escapeHtml(state.adminCredentials.username)}</span>
            </div>
            <span class="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-extrabold">Active</span>
          </div>

          <div class="p-4 bg-white rounded-2xl border border-slate-200 flex items-center justify-between">
            <div>
              <span class="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">Control Panel Username</span>
              <span class="font-extrabold text-slate-900 text-sm">${escapeHtml(state.controlPanelCredentials.username)}</span>
            </div>
            <span class="px-2.5 py-1 rounded-full bg-blue-100 text-blue-800 text-[10px] font-extrabold">Active</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

// --- MARKSHEET PDF GENERATOR ---
function downloadMarksheetPDF(studentId) {
  const student = state.students.find(s => s.id === studentId) || getCurrentStudent();
  const element = document.createElement("div");
  element.className = "p-8 bg-white font-sans text-slate-800 space-y-6";

  const semExams = (student.exams || []).filter(e => (e.sem) === state.selectedSem);
  const presentExams = semExams.filter(e => !e.absent);
  const totalScore = presentExams.reduce((s, e) => s + (e.score || 0), 0);
  const maxScore = presentExams.length * 100;
  const pct = maxScore > 0 ? ((totalScore / maxScore) * 100).toFixed(1) : '0.0';
  const grade = presentExams.length > 0 ? getGradeFromScore(parseFloat(pct)) : 'N/A';

  element.innerHTML = `
    <div class="border-b-2 border-brand-600 pb-4 mb-6 flex justify-between items-center">
      <div>
        <h1 class="text-2xl font-black text-slate-900 tracking-tight">MANSHAU ALFARIS</h1>
        <p class="text-xs font-bold text-brand-600 uppercase tracking-widest">Official Academic Marksheet Statement</p>
      </div>
      <div class="text-right">
        <p class="text-xs font-bold text-slate-500">Date: ${new Date().toLocaleDateString('en-IN')}</p>
        <p class="text-xs font-bold text-slate-500">Semester: ${state.selectedSem}</p>
      </div>
    </div>

    <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 grid grid-cols-2 gap-4 text-xs font-bold text-slate-700 mb-6">
      <div><span class="text-slate-400">Student Name:</span> ${student.name}</div>
      <div><span class="text-slate-400">Student ID:</span> ${student.id}</div>
      <div><span class="text-slate-400">Class / Batch:</span> ${student.class || 'Genesis 01'}</div>
      <div><span class="text-slate-400">School:</span> ${student.school}</div>
    </div>

    <table class="w-full text-left border-collapse text-xs mb-6">
      <thead>
        <tr class="bg-slate-100 text-slate-600 font-bold uppercase text-[10px] border-b border-slate-200">
          <th class="py-2.5 px-3">Subject</th>
          <th class="py-2.5 px-3 text-center">Score</th>
          <th class="py-2.5 px-3 text-center">Grade</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-100">
        ${semExams.map(item => `
          <tr>
            <td class="py-3 px-3 font-bold text-slate-800">${item.subject}</td>
            <td class="py-3 px-3 text-center font-bold ${item.absent ? 'text-rose-500' : ''}">${item.absent ? 'Absent' : item.score + ' / 100'}</td>
            <td class="py-3 px-3 text-center font-black ${item.absent ? 'text-rose-500' : 'text-brand-600'}">${item.absent ? 'AB' : item.grade}</td>
          </tr>
        `).join('')}
      </tbody>
      <tfoot class="border-t-2 border-slate-200 bg-slate-50 font-black">
        <tr>
          <td class="py-3 px-3 uppercase text-slate-700">Grand Total</td>
          <td class="py-3 px-3 text-center text-slate-900">${totalScore} / ${maxScore}</td>
          <td class="py-3 px-3 text-center text-brand-600">${grade} (${pct}%)</td>
        </tr>
      </tfoot>
    </table>

    <div class="pt-12 flex justify-between items-center text-xs font-bold text-slate-500 border-t border-slate-200">
      <div>Verified by Academic Office</div>
      <div>Principal / Controller Signature</div>
    </div>
  `;

  const opt = {
    margin: 10,
    filename: `Marksheet_${student.name.replace(/\s+/g, '_')}_${state.selectedSem}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(element).save();
  showToast("Downloading Marksheet PDF...");
}

// --- MODALS RENDERER ---
function renderModals() {
  let html = '';

  if (state.modals.roleAuth) {
    const isAdmin = state.roleAuthTarget === 'admin';
    const title = isAdmin ? 'Admin Portal Authentication' : 'Control Panel Authentication';
    const subtitle = isAdmin ? 'System Control Access' : 'Genesis 01 Batch Control Access';

    html += `
      <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
        <div class="glass-card w-full max-w-md rounded-3xl p-6 sm:p-8 shadow-anti-gravity-lg border border-white bg-white/95 my-auto max-h-[90vh] overflow-y-auto custom-scrollbar">
          <div class="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-2xl ${isAdmin ? 'bg-slate-900 text-emerald-400' : 'bg-brand-600 text-white'} shadow-md flex items-center justify-center">
                ${icon(isAdmin ? 'shield' : 'sliders', 'w-5 h-5')}
              </div>
              <div>
                <h3 class="text-base font-extrabold text-slate-900">${title}</h3>
                <p class="text-[10px] text-slate-400 font-bold uppercase tracking-wider">${subtitle}</p>
              </div>
            </div>
            <button onclick="closeRoleAuthModal()" class="text-slate-400 hover:text-slate-600 p-1.5 rounded-xl hover:bg-slate-100">
              ${icon('x', 'w-5 h-5')}
            </button>
          </div>

          <form onsubmit="handleRoleAuthSubmit(event)" class="space-y-4">
            ${state.roleAuthError ? `
              <div class="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold flex items-center space-x-2">
                ${icon('alert-circle', 'w-4 h-4 text-rose-500 flex-shrink-0')}
                <span>${state.roleAuthError}</span>
              </div>
            ` : ''}

            <div>
              <label class="block text-[11px] font-extrabold uppercase text-slate-500 mb-1">Username</label>
              <input type="text" id="roleAuthUsername" value="${isAdmin ? state.adminCredentials.username : state.controlPanelCredentials.username}" required class="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white font-bold text-xs sm:text-sm text-slate-900 shadow-sm focus:ring-2 focus:ring-brand-500 focus:outline-none" />
            </div>

            <div>
              <label class="block text-[11px] font-extrabold uppercase text-slate-500 mb-1">Password</label>
              <input type="password" id="roleAuthPassword" placeholder="••••••••" required class="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white font-bold text-xs sm:text-sm text-slate-900 shadow-sm focus:ring-2 focus:ring-brand-500 focus:outline-none" />
            </div>

            <button type="submit" class="w-full py-3.5 px-4 rounded-xl ${isAdmin ? 'bg-slate-900 hover:bg-slate-800' : 'bg-brand-600 hover:bg-brand-700'} text-white font-extrabold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center space-x-2">
              ${icon('lock', 'w-4 h-4 text-white')}
              <span>Authenticate & Enter View</span>
            </button>
          </form>
        </div>
      </div>
    `;
  }

  // ADD STUDENT MODAL
  if (state.modals.addStudent) {
    html += `
      <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
        <div class="glass-card w-full max-w-md rounded-3xl p-6 sm:p-8 shadow-anti-gravity-lg border border-white bg-white/95 space-y-4 my-8">
          <div class="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 class="text-base font-black text-slate-900">Add New Student User</h3>
            <button onclick="toggleModal('addStudent', false)" class="text-slate-400 hover:text-slate-600 p-1.5 rounded-xl hover:bg-slate-100">
              ${icon('x', 'w-5 h-5')}
            </button>
          </div>

          <form onsubmit="handleCreateStudentUser(event)" class="space-y-3 text-xs">
            <div class="flex flex-col items-center space-y-2 pb-2">
              <div class="w-20 h-20 rounded-full border-2 border-brand-500 overflow-hidden relative group bg-slate-100 flex items-center justify-center shadow-sm">
                <img id="newStudAvatarPreview" src="${newStudPhotoDataUrl || 'https://api.dicebear.com/7.x/avataaars/svg?seed=new'}" class="w-full h-full object-cover" />
              </div>
              <input type="file" id="newStudPhotoInput" accept="image/*" onchange="handleNewStudPhotoSelect(event)" class="hidden" />
              <button type="button" onclick="document.getElementById('newStudPhotoInput').click()" class="px-3 py-1.5 rounded-xl bg-brand-50 text-brand-600 font-bold hover:bg-brand-100 flex items-center space-x-1">
                ${icon('camera', 'w-3.5 h-3.5')}
                <span>Choose Profile Picture</span>
              </button>
            </div>

            <!-- Cropper Container for New Student -->
            <div id="newStudCropperContainer" class="hidden space-y-2 p-3 bg-slate-50 rounded-2xl border border-slate-200">
              <div class="max-h-64 overflow-hidden rounded-xl">
                <img id="newStudCropperImage" class="max-w-full" />
              </div>
              <button type="button" onclick="cropAndSaveNewStudPhoto()" class="w-full py-2 bg-emerald-600 text-white font-bold rounded-xl text-xs">
                Crop & Set 1:1 Photo
              </button>
            </div>

            <div>
              <label class="block font-bold text-slate-700 mb-1">Student Full Name</label>
              <input type="text" id="newStudName" required placeholder="e.g. Rahul Sharma" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-bold" />
            </div>
            <div>
              <label class="block font-bold text-slate-700 mb-1">Class / Batch</label>
              <select id="newStudClass" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-bold">
                <option value="Genesis 01">Genesis 01</option>
                <option value="Genesis 02">Genesis 02</option>
              </select>
            </div>
            <div>
              <label class="block font-bold text-slate-700 mb-1">Login Username</label>
              <input type="text" id="newStudUsername" required placeholder="rahul" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-bold" />
            </div>
            <div>
              <label class="block font-bold text-slate-700 mb-1">Password</label>
              <input type="text" id="newStudPassword" value="123" required class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-bold" />
            </div>
            <button type="submit" class="w-full bg-brand-600 hover:bg-brand-700 text-white font-extrabold py-3 rounded-xl transition-all shadow-md shadow-brand-500/20">
              Create Student User Account
            </button>
          </form>
        </div>
      </div>
    `;
  }

  // EDIT STUDENT MODAL
  if (state.modals.editStudent) {
    const s = state.students.find(st => st.id === state.editingStudentId);
    if (s) {
      html += `
        <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
          <div class="glass-card w-full max-w-md rounded-3xl p-6 sm:p-8 shadow-anti-gravity-lg border border-white bg-white/95 space-y-4 my-8">
            <div class="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 class="text-base font-black text-slate-900">Edit Profile & Settings for ${s.name}</h3>
              <button onclick="toggleModal('editStudent', false)" class="text-slate-400 hover:text-slate-600 p-1.5 rounded-xl hover:bg-slate-100">
                ${icon('x', 'w-5 h-5')}
              </button>
            </div>

            <form onsubmit="handleSaveEditStudent(event)" class="space-y-3 text-xs">
              <div class="flex flex-col items-center space-y-2 pb-2">
                <div class="w-20 h-20 rounded-full border-2 border-brand-500 overflow-hidden relative group">
                  ${getStudentAvatarHtml(s, "w-full h-full object-cover")}
                </div>
                <input type="file" id="editPhotoInput" accept="image/*" onchange="handlePhotoSelect(event)" class="hidden" />
                <button type="button" onclick="document.getElementById('editPhotoInput').click()" class="px-3 py-1.5 rounded-xl bg-brand-50 text-brand-600 font-bold hover:bg-brand-100 flex items-center space-x-1">
                  ${icon('camera', 'w-3.5 h-3.5')}
                  <span>Change Profile Photo</span>
                </button>
              </div>

              <!-- Cropper Container -->
              <div id="cropperContainer" class="hidden space-y-2 p-3 bg-slate-50 rounded-2xl border border-slate-200">
                <div class="max-h-64 overflow-hidden rounded-xl">
                  <img id="cropperImage" class="max-w-full" />
                </div>
                <button type="button" onclick="cropAndSavePhoto()" class="w-full py-2 bg-emerald-600 text-white font-bold rounded-xl text-xs">
                  Crop & Set 1:1 Photo
                </button>
              </div>

              <div>
                <label class="block font-bold text-slate-700 mb-1">Full Name</label>
                <input type="text" id="editStudName" value="${s.name}" required class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-bold" />
              </div>
              <div>
                <label class="block font-bold text-slate-700 mb-1">Class / Batch</label>
                <select id="editStudClass" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-bold">
                  <option value="Genesis 01" ${s.class === 'Genesis 01' ? 'selected' : ''}>Genesis 01</option>
                  <option value="Genesis 02" ${s.class === 'Genesis 02' ? 'selected' : ''}>Genesis 02</option>
                </select>
              </div>
              <div>
                <label class="block font-bold text-slate-700 mb-1">Status</label>
                <select id="editStudStatus" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-bold">
                  <option value="Present" ${s.status === 'Present' ? 'selected' : ''}>Present</option>
                  <option value="Absent" ${s.status === 'Absent' ? 'selected' : ''}>Absent</option>
                </select>
              </div>
              <div>
                <label class="block font-bold text-slate-700 mb-1">Password</label>
                <input type="text" id="editStudPassword" value="${s.password}" required class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-bold" />
              </div>
              <button type="submit" class="w-full bg-brand-600 hover:bg-brand-700 text-white font-extrabold py-3 rounded-xl transition-all shadow-md shadow-brand-500/20">
                Save Profile Changes
              </button>
            </form>
          </div>
        </div>
      `;
    }
  }

  // APPLY LEAVE MODAL
  if (state.modals.leave) {
    const student = getCurrentStudent();
    html += `
      <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
        <div class="glass-card w-full max-w-md rounded-3xl p-6 sm:p-8 shadow-anti-gravity-lg border border-white bg-white/95 space-y-4 my-auto max-h-[90vh] overflow-y-auto custom-scrollbar">
          <div class="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 class="text-base font-black text-slate-900">Apply Leave Request</h3>
            <button onclick="toggleModal('leave', false)" class="text-slate-400 hover:text-slate-600 p-1.5 rounded-xl hover:bg-slate-100">
              ${icon('x', 'w-5 h-5')}
            </button>
          </div>

          <form onsubmit="handleApplyLeave(event)" class="space-y-3 text-xs">
            <div>
              <label class="block font-bold text-slate-700 mb-1">Leave Category</label>
              <select id="leaveCategory" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-bold">
                <option value="Sick Leave">Sick Leave</option>
                <option value="Personal Leave">Personal Leave</option>
                <option value="Emergency Leave">Emergency Leave</option>
              </select>
            </div>
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block font-bold text-slate-700 mb-1">Start Date</label>
                <input type="date" id="leaveStartDate" required class="w-full px-3 py-2 rounded-xl border border-slate-200 font-bold" />
              </div>
              <div>
                <label class="block font-bold text-slate-700 mb-1">End Date</label>
                <input type="date" id="leaveEndDate" required class="w-full px-3 py-2 rounded-xl border border-slate-200 font-bold" />
              </div>
            </div>
            <div>
              <label class="block font-bold text-slate-700 mb-1">Reason for Leave</label>
              <textarea id="leaveReason" rows="3" required placeholder="Explain your reason..." class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-bold"></textarea>
            </div>
            <button type="submit" class="w-full bg-brand-600 hover:bg-brand-700 text-white font-extrabold py-3 rounded-xl transition-all shadow-md shadow-brand-500/20">
              Submit Leave Request
            </button>
          </form>
        </div>
      </div>
    `;
  }

  // NOTIFICATION DRAWER MODAL
  if (state.modals.notification) {
    html += `
      <div class="fixed inset-0 z-50 flex items-center justify-end p-4 bg-slate-900/60 backdrop-blur-sm">
        <div class="glass-card w-full max-w-sm rounded-3xl p-6 shadow-anti-gravity-lg border border-white bg-white/95 space-y-4 max-h-[90vh] overflow-y-auto">
          <div class="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 class="text-base font-black text-slate-900">Academic Notifications</h3>
            <button onclick="toggleModal('notification', false)" class="text-slate-400 hover:text-slate-600 p-1.5 rounded-xl hover:bg-slate-100">
              ${icon('x', 'w-5 h-5')}
            </button>
          </div>

          <div class="space-y-3 text-xs">
            ${state.announcements.map(a => `
              <div class="p-3.5 rounded-2xl bg-white border border-slate-100 space-y-1">
                <span class="px-2 py-0.5 rounded text-[9px] font-bold ${a.urgency === 'High' ? 'bg-rose-100 text-rose-700' : 'bg-brand-100 text-brand-700'}">${a.category}</span>
                <h4 class="font-extrabold text-slate-900">${a.title}</h4>
                <p class="text-slate-600 text-[11px]">${a.content}</p>
                <p class="text-[9px] text-slate-400">${a.date}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  // ADD SUBJECT MODAL
  if (state.modals.addSubject) {
    const s = state.students.find(st => st.id === state.addSubjectStudentId) || getCurrentStudent();
    html += `
      <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
        <div class="glass-card w-full max-w-md rounded-3xl p-6 sm:p-8 shadow-anti-gravity-lg border border-white bg-white/95 space-y-4 my-auto max-h-[90vh] overflow-y-auto custom-scrollbar">
          <div class="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 class="text-base font-black text-slate-900">Add Subject</h3>
              <p class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Student: ${s ? s.name : ''}</p>
            </div>
            <button onclick="toggleModal('addSubject', false)" class="text-slate-400 hover:text-slate-600 p-1.5 rounded-xl hover:bg-slate-100">
              ${icon('x', 'w-5 h-5')}
            </button>
          </div>

          <form onsubmit="handleCreateSubject(event)" class="space-y-4 text-xs">
            <div>
              <label class="block font-extrabold text-slate-700 uppercase mb-1">Subject Name</label>
              <input type="text" id="addSubjectName" required placeholder="e.g. Mathematics, Science" class="w-full px-4 py-3 rounded-xl border border-slate-200 font-bold text-slate-900 focus:ring-2 focus:ring-brand-500 focus:outline-none" />
            </div>

            <div>
              <label class="block font-extrabold text-slate-700 uppercase mb-1">Semester</label>
              <select id="addSubjectSem" class="w-full px-4 py-3 rounded-xl border border-slate-200 font-bold text-slate-900 focus:ring-2 focus:ring-brand-500 focus:outline-none bg-white">
                ${["Sem 1", "Sem 2", "Sem 3", "Sem 4"].map(sem => `
                  <option value="${sem}" ${state.selectedSem === sem ? 'selected' : ''}>${sem}</option>
                `).join('')}
              </select>
            </div>

            <div>
              <label class="block font-extrabold text-slate-700 uppercase mb-1">Marks Obtained (0 - 100)</label>
              <input type="number" id="addSubjectMarks" min="0" max="100" placeholder="e.g. 85" class="w-full px-4 py-3 rounded-xl border border-slate-200 font-bold text-slate-900 focus:ring-2 focus:ring-brand-500 focus:outline-none" />
            </div>

            <div class="flex items-center space-x-3 p-3 rounded-xl bg-rose-50/60 border border-rose-100">
              <input type="checkbox" id="addSubjectAbsent" onchange="toggleAddSubjectAbsent()" class="w-4 h-4 rounded border-rose-300 text-rose-600 focus:ring-rose-500 cursor-pointer" />
              <label for="addSubjectAbsent" class="font-bold text-rose-600 uppercase text-[11px] tracking-wider cursor-pointer">Mark as Absent</label>
            </div>

            <div class="flex items-center justify-end space-x-3 pt-3 border-t border-slate-100">
              <button type="button" onclick="toggleModal('addSubject', false)" class="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-all">
                Cancel
              </button>
              <button type="submit" class="px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-extrabold text-xs shadow-md shadow-brand-500/20 transition-all hover:scale-105">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    `;
  }

  // EDIT SUBJECT / MARKS MODAL
  if (state.modals.editSubject) {
    const editS = state.students.find(st => st.id === state.editSubjectStudentId);
    const editExam = editS ? (editS.exams || [])[state.editSubjectIndex] : null;
    if (editS && editExam) {
      html += `
        <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
          <div class="glass-card w-full max-w-md rounded-3xl p-6 sm:p-8 shadow-anti-gravity-lg border border-white bg-white/95 space-y-4 my-auto max-h-[90vh] overflow-y-auto custom-scrollbar">
            <div class="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 class="text-base font-black text-slate-900">Edit Subject Marks</h3>
                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Student: ${editS.name}</p>
              </div>
              <button onclick="toggleModal('editSubject', false)" class="text-slate-400 hover:text-slate-600 p-1.5 rounded-xl hover:bg-slate-100">
                ${icon('x', 'w-5 h-5')}
              </button>
            </div>

            <form onsubmit="handleSaveEditSubject(event)" class="space-y-4 text-xs">
              <div>
                <label class="block font-extrabold text-slate-700 uppercase mb-1">Subject Name</label>
                <input type="text" id="editSubjectName" value="${editExam.subject}" class="w-full px-4 py-3 rounded-xl border border-slate-200 font-bold text-slate-900 bg-slate-50 focus:ring-2 focus:ring-brand-500 focus:outline-none" />
              </div>

              <div>
                <label class="block font-extrabold text-slate-700 uppercase mb-1">Semester</label>
                <select id="editSubjectSem" class="w-full px-4 py-3 rounded-xl border border-slate-200 font-bold text-slate-900 focus:ring-2 focus:ring-brand-500 focus:outline-none bg-white">
                  ${["Sem 1", "Sem 2", "Sem 3", "Sem 4"].map(sem => `
                    <option value="${sem}" ${editExam.sem === sem ? 'selected' : ''}>${sem}</option>
                  `).join('')}
                </select>
              </div>

              <div id="editSubjectMarksWrapper" class="${editExam.absent ? 'opacity-40 pointer-events-none' : ''}">
                <label class="block font-extrabold text-slate-700 uppercase mb-1">Marks Obtained (0 - 100)</label>
                <input type="number" id="editSubjectMarks" min="0" max="100" value="${editExam.absent ? 0 : editExam.score}" class="w-full px-4 py-3 rounded-xl border border-slate-200 font-bold text-slate-900 focus:ring-2 focus:ring-brand-500 focus:outline-none" />
              </div>

              <div class="flex items-center space-x-3 p-3 rounded-xl bg-rose-50/60 border border-rose-100">
                <input type="checkbox" id="editSubjectAbsent" ${editExam.absent ? 'checked' : ''} onchange="toggleEditSubjectAbsent()" class="w-4 h-4 rounded border-rose-300 text-rose-600 focus:ring-rose-500 cursor-pointer" />
                <label for="editSubjectAbsent" class="font-bold text-rose-600 uppercase text-[11px] tracking-wider cursor-pointer">Mark as Absent</label>
              </div>

              <div class="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                <span class="text-[11px] font-bold text-slate-500 uppercase">Current Grade</span>
                <span class="px-3 py-1 rounded-lg text-xs font-black ${editExam.absent ? 'bg-rose-100 text-rose-600 border border-rose-200' : 'bg-brand-50 text-brand-700 border border-brand-200'}">${editExam.absent ? 'AB' : editExam.grade}</span>
              </div>

              <div class="flex items-center justify-end space-x-3 pt-3 border-t border-slate-100">
                <button type="button" onclick="toggleModal('editSubject', false)" class="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-all">
                  Cancel
                </button>
                <button type="submit" class="px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-extrabold text-xs shadow-md shadow-brand-500/20 transition-all hover:scale-105">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      `;
    }
  }

  return html;
}

// --- PHOTO CROPPER LOGIC ---
let cropperInstance = null;
let newStudCropperInstance = null;
let newStudPhotoDataUrl = null;

function handleNewStudPhotoSelect(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(evt) {
    const container = document.getElementById('newStudCropperContainer');
    const image = document.getElementById('newStudCropperImage');
    if (!container || !image) return;

    image.src = evt.target.result;
    container.classList.remove('hidden');

    if (newStudCropperInstance) {
      newStudCropperInstance.destroy();
    }

    newStudCropperInstance = new Cropper(image, {
      aspectRatio: 1,
      viewMode: 1,
      autoCropArea: 1,
    });
  };
  reader.readAsDataURL(file);
}

function cropAndSaveNewStudPhoto() {
  if (!newStudCropperInstance) return;
  const canvas = newStudCropperInstance.getCroppedCanvas({ width: 300, height: 300 });
  newStudPhotoDataUrl = canvas.toDataURL('image/jpeg');

  const previewImg = document.getElementById('newStudAvatarPreview');
  if (previewImg) {
    previewImg.src = newStudPhotoDataUrl;
  }

  if (newStudCropperInstance) {
    newStudCropperInstance.destroy();
    newStudCropperInstance = null;
  }
  document.getElementById('newStudCropperContainer').classList.add('hidden');
  showToast("Profile photo cropped & ready!");
}

function handlePhotoSelect(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(evt) {
    const container = document.getElementById('cropperContainer');
    const image = document.getElementById('cropperImage');
    if (!container || !image) return;

    image.src = evt.target.result;
    container.classList.remove('hidden');

    if (cropperInstance) {
      cropperInstance.destroy();
    }

    cropperInstance = new Cropper(image, {
      aspectRatio: 1,
      viewMode: 1,
      autoCropArea: 1,
    });
  };
  reader.readAsDataURL(file);
}

function cropAndSavePhoto() {
  if (!cropperInstance) return;
  const canvas = cropperInstance.getCroppedCanvas({ width: 300, height: 300 });
  const croppedDataUrl = canvas.toDataURL('image/jpeg');

  const student = state.students.find(s => s.id === state.editingStudentId);
  if (student) {
    student.photoUrl = croppedDataUrl;
    student.lastUpdated = Date.now();
    saveStudentDoc(student);
    saveState();
    showToast("Profile photo updated successfully!");
  }

  if (cropperInstance) {
    cropperInstance.destroy();
    cropperInstance = null;
  }
  document.getElementById('cropperContainer').classList.add('hidden');
  renderApp();
}

// --- HANDLERS & NAVIGATION ---
function toggleModal(name, show) {
  state.modals[name] = show;
  if (name === 'notification' && show) {
    if (Array.isArray(state.announcements)) {
      state.announcements.forEach(a => {
        if (a) a.read = true;
      });
    }
    saveStateLocalOnly();
  }
  if (name === 'addStudent' && !show) {
    newStudPhotoDataUrl = null;
  }
  renderApp();
}

function setActiveTab(tab) {
  state.activeTab = tab;
  renderApp();
}

function setAdminActiveTab(tab) {
  state.adminActiveTab = tab;
  renderApp();
}

function setRole(role) {
  state.role = role;
  renderApp();
}

function switchStudentAccount(studentId) {
  state.currentStudentId = studentId;
  state.cpSelectedStudentId = studentId;
  renderApp();
}

function changeSelectedSemester(sem) {
  state.selectedSem = sem;
  renderApp();
}

function changeAttendanceFilterMonth(m) {
  state.attendanceFilterMonth = m;
  renderApp();
}

function changeFundDateFilter(d) {
  state.fundDateFilter = d;
  renderApp();
}

function toggleHeaderProfileMenu() {
  const menu = document.getElementById('headerProfileMenu');
  if (menu) menu.classList.toggle('hidden');
}

function closeHeaderProfileMenu() {
  const menu = document.getElementById('headerProfileMenu');
  if (menu) menu.classList.add('hidden');
}

function openRoleAuthModal(targetRole) {
  state.roleAuthTarget = targetRole;
  state.roleAuthError = '';
  state.modals.roleAuth = true;
  renderApp();
}

function closeRoleAuthModal() {
  state.modals.roleAuth = false;
  renderApp();
}

function handleRoleAuthSubmit(e) {
  e.preventDefault();
  const u = document.getElementById('roleAuthUsername').value.trim();
  const p = document.getElementById('roleAuthPassword').value.trim();

  if (state.roleAuthTarget === 'admin') {
    if (u === state.adminCredentials.username && p === state.adminCredentials.password) {
      state.role = 'admin';
      state.modals.roleAuth = false;
      showToast("Authenticated as Admin");
    } else {
      state.roleAuthError = 'Invalid Admin credentials';
    }
  } else {
    if (u === state.controlPanelCredentials.username && p === state.controlPanelCredentials.password) {
      state.role = 'controlpanel';
      state.modals.roleAuth = false;
      showToast("Authenticated as Control Panel");
    } else {
      state.roleAuthError = 'Invalid Control Panel credentials';
    }
  }
  renderApp();
}

function quickLoginStudent(studentId) {
  state.currentStudentId = studentId;
  state.isAuthenticated = true;
  state.role = "student";
  showToast("Signed in as Student");
  renderApp();
}

function setLoginRole(r) {
  state.loginRole = r;
  state.loginError = '';
  renderApp();
}

function handleLoginSubmit(e) {
  e.preventDefault();
  const u = document.getElementById('loginUsername').value.trim();
  const p = document.getElementById('loginPassword').value.trim();

  if (state.loginRole === 'admin') {
    if (u === state.adminCredentials.username && p === state.adminCredentials.password) {
      state.isAuthenticated = true;
      state.role = 'admin';
      showToast("Welcome Administrator");
    } else {
      state.loginError = 'Invalid Admin credentials';
    }
  } else if (state.loginRole === 'controlpanel') {
    if (u === state.controlPanelCredentials.username && p === state.controlPanelCredentials.password) {
      state.isAuthenticated = true;
      state.role = 'controlpanel';
      showToast("Welcome Control Panel");
    } else {
      state.loginError = 'Invalid Control Panel credentials';
    }
  }
  renderApp();
}

function logout() {
  state.isAuthenticated = false;
  state.role = 'student';
  showToast("Logged out successfully");
  renderApp();
}

async function handleApplyLeave(e) {
  e.preventDefault();
  const student = getCurrentStudent();
  const cat = document.getElementById('leaveCategory').value;
  const start = document.getElementById('leaveStartDate').value;
  const end = document.getElementById('leaveEndDate').value;
  const reason = document.getElementById('leaveReason').value.trim();

  if (!student.leaves) student.leaves = [];
  student.leaves.unshift({
    id: `LV-${Date.now()}`,
    category: cat,
    startDate: start,
    endDate: end,
    reason: reason,
    status: "Pending",
    appliedOn: new Date().toLocaleDateString('en-IN')
  });

  student.lastUpdated = Date.now();
  await saveStudentDoc(student);
  await saveState();

  toggleModal('leave', false);
  showToast("Leave request submitted!");
  renderApp();
}

async function handleAdminBroadcast(e) {
  e.preventDefault();
  const title = document.getElementById('adminAnnTitle').value.trim();
  const urgency = document.getElementById('adminAnnUrgency').value;
  const category = document.getElementById('adminAnnCategory').value.trim();
  const content = document.getElementById('adminAnnContent').value.trim();

  state.announcements.unshift({
    id: Date.now(),
    title,
    urgency,
    category,
    content,
    date: 'Just now',
    read: false
  });

  await saveState();
  showToast("Broadcast published!");
  renderApp();
}

function markRead(id) {
  const ann = state.announcements.find(a => a.id === id);
  if (ann) {
    ann.read = true;
    saveState();
    renderApp();
  }
}

async function handleCreateStudentUser(e) {
  e.preventDefault();
  const name = document.getElementById('newStudName').value.trim();
  const cls = document.getElementById('newStudClass').value;
  const username = document.getElementById('newStudUsername').value.trim().toLowerCase();
  const password = document.getElementById('newStudPassword').value.trim();

  const newId = `MSH-2026-${String(state.students.length + 1).padStart(4, '0')}`;
  const newStudent = {
    id: newId,
    username,
    password,
    name,
    status: "Present",
    school: "Manshau Alfaris",
    class: cls,
    program: cls,
    age: 15,
    phone: "+919800000000",
    attendanceRate: 100.0,
    totalLeaveDays: 0,
    avatarInitials: name.substring(0,2).toUpperCase(),
    lastUpdated: Date.now(),
    transactions: [],
    exams: [],
    leaves: [],
    attendanceRecords: {}
  };

  if (newStudPhotoDataUrl) {
    newStudent.photoUrl = newStudPhotoDataUrl;
    newStudPhotoDataUrl = null;
  }

  state.students.push(newStudent);
  await saveStudentDoc(newStudent);
  await saveState();

  toggleModal('addStudent', false);
  showToast(`Student user ${name} created!`);
  renderApp();
}

function openEditStudentModal(id) {
  state.editingStudentId = id;
  toggleModal('editStudent', true);
}

async function handleSaveEditStudent(e) {
  e.preventDefault();
  const s = state.students.find(st => st.id === state.editingStudentId);
  if (!s) return;

  s.name = document.getElementById('editStudName').value.trim();
  s.class = document.getElementById('editStudClass').value;
  s.status = document.getElementById('editStudStatus').value;
  s.password = document.getElementById('editStudPassword').value.trim();
  s.lastUpdated = Date.now();

  await saveStudentDoc(s);
  await saveState();

  toggleModal('editStudent', false);
  showToast(`Profile updated for ${s.name}`);
  renderApp();
}

async function deleteStudentUser(id) {
  if (confirm("Are you sure you want to delete this student account?")) {
    state.deletedStudentIds.push(id);
    state.students = state.students.filter(s => s.id !== id);
    if (db && rtdbRef && rtdbRemove) {
      rtdbRemove(rtdbRef(db, 'users/' + id)).catch(() => {});
    }
    await saveState();
    showToast("Student account deleted");
    renderApp();
  }
}

async function toggleSpecificStudentStatus(id) {
  const s = state.students.find(st => st.id === id);
  if (!s) return;
  s.status = s.status === 'Present' ? 'Absent' : 'Present';
  s.lastUpdated = Date.now();
  await saveStudentDoc(s);
  await saveState();
  renderApp();
}

async function updateStudentLeaveStatus(studentId, leaveId, newStatus) {
  const s = state.students.find(st => st.id === studentId);
  if (!s) return;
  const leave = (s.leaves || []).find(l => l.id === leaveId);
  if (leave) {
    leave.status = newStatus;
    s.lastUpdated = Date.now();
    await saveStudentDoc(s);
    await saveState();
    showToast(`Leave request ${newStatus}`);
    renderApp();
  }
}

async function deleteStudentLeave(studentId, leaveId) {
  const s = state.students.find(st => st.id === studentId);
  if (!s) return;
  s.leaves = (s.leaves || []).filter(l => l.id !== leaveId);
  s.lastUpdated = Date.now();
  await saveStudentDoc(s);
  await saveState();
  showToast("Leave request deleted");
  renderApp();
}

function openAddSubjectModal(studentId) {
  if (state.role !== 'admin' && state.role !== 'controlpanel') {
    showToast("Adding subjects can only be done by Admin or Control Panel", "error");
    return;
  }
  state.addSubjectStudentId = studentId || state.currentStudentId;
  state.modals.addSubject = true;
  renderApp();
}

function toggleAddSubjectAbsent() {
  const cb = document.getElementById('addSubjectAbsent');
  const marksInput = document.getElementById('addSubjectMarks');
  if (cb && marksInput) {
    if (cb.checked) {
      marksInput.value = '';
      marksInput.parentElement.classList.add('opacity-40', 'pointer-events-none');
    } else {
      marksInput.parentElement.classList.remove('opacity-40', 'pointer-events-none');
    }
  }
}

function toggleEditSubjectAbsent() {
  const cb = document.getElementById('editSubjectAbsent');
  const wrapper = document.getElementById('editSubjectMarksWrapper');
  if (cb && wrapper) {
    if (cb.checked) {
      wrapper.classList.add('opacity-40', 'pointer-events-none');
    } else {
      wrapper.classList.remove('opacity-40', 'pointer-events-none');
    }
  }
}

async function handleCreateSubject(e) {
  e.preventDefault();
  if (state.role !== 'admin' && state.role !== 'controlpanel') {
    showToast("Adding subjects can only be done by Admin or Control Panel", "error");
    return;
  }
  const nameInput = document.getElementById('addSubjectName');
  const marksInput = document.getElementById('addSubjectMarks');
  const absentCb = document.getElementById('addSubjectAbsent');
  if (!nameInput || !marksInput) return;

  const name = nameInput.value.trim();
  const isAbsent = absentCb ? absentCb.checked : false;

  if (!name) {
    showToast("Please enter a subject name", "error");
    return;
  }

  let marks = 0;
  let assignedGrade = 'AB';

  if (!isAbsent) {
    const marksVal = marksInput.value.trim();
    marks = parseFloat(marksVal);
    if (marksVal === '' || isNaN(marks) || marks < 0 || marks > 100) {
      showToast("Please enter valid marks between 0 and 100", "error");
      return;
    }
    assignedGrade = getGradeFromScore(marks);
  }

  const student = state.students.find(s => s.id === state.addSubjectStudentId) || getCurrentStudent();
  if (!student) return;

  if (!student.exams) student.exams = [];

  student.exams.push({
    id: `EXM-${Date.now()}`,
    sem: document.getElementById('addSubjectSem') ? document.getElementById('addSubjectSem').value : (state.selectedSem || 'Sem 1'),
    subject: name,
    code: `SUBJ-${Math.floor(100 + Math.random() * 900)}`,
    score: isAbsent ? 0 : marks,
    grade: assignedGrade,
    absent: isAbsent
  });

  student.lastUpdated = Date.now();
  await saveStudentDoc(student);
  await saveState();

  state.modals.addSubject = false;
  showToast(isAbsent ? `Subject "${name}" marked as Absent` : `Subject "${name}" added with Grade ${assignedGrade}`);
  renderApp();
}

function changeBatchFilter(batch) {
  state.selectedBatchFilter = batch || "Genesis 01";
  const available = state.students.filter(s => (s.class || 'Genesis 01') === state.selectedBatchFilter);
  if (available.length > 0) {
    if (!available.some(s => s.id === state.currentStudentId)) {
      state.currentStudentId = available[0].id;
    }
    if (!available.some(s => s.id === state.cpSelectedStudentId)) {
      state.cpSelectedStudentId = available[0].id;
    }
  }
  renderApp();
}

function renderBatchAndStudentSelectorHtml(currentSelectedStudentId, onStudentChangeCall) {
  const isControlPanel = state.role === 'controlpanel';
  const isAdmin = state.role === 'admin';
  const availableClasses = [...new Set(state.students.map(s => s.class || 'Genesis 01'))];
  const adminClasses = availableClasses.filter(c => c !== 'Genesis 01');

  const currentBatch = isControlPanel 
    ? "Genesis 01" 
    : isAdmin 
      ? (adminClasses.includes(state.selectedBatchFilter) ? state.selectedBatchFilter : (adminClasses[0] || 'Genesis 02'))
      : (state.selectedBatchFilter || "Genesis 01");

  const filteredStudents = state.students.filter(s => (s.class || 'Genesis 01') === currentBatch);
  
  return `
    <div class="flex items-center space-x-2 flex-wrap gap-y-1">
      ${isControlPanel ? `
        <span class="px-3 py-2 bg-brand-50 border border-brand-200 text-brand-700 rounded-xl text-xs font-black">
          Genesis 01
        </span>
      ` : `
        <select onchange="changeBatchFilter(this.value)" class="p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-extrabold text-brand-600 shadow-sm focus:ring-2 focus:ring-brand-500 cursor-pointer">
          ${(isAdmin ? adminClasses : availableClasses).map(cls => `
            <option value="${cls}" ${currentBatch === cls ? 'selected' : ''}>${cls}</option>
          `).join('')}
        </select>
      `}

      <select onchange="${onStudentChangeCall}" class="p-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-800 shadow-sm focus:ring-2 focus:ring-brand-500 cursor-pointer">
        ${filteredStudents.map(s => `
          <option value="${s.id}" ${s.id === currentSelectedStudentId ? 'selected' : ''}>${s.name}</option>
        `).join('')}
      </select>
    </div>
  `;
}

function editExamScoreForStudent(studentId, examIdentifier) {
  const s = state.students.find(st => st.id === studentId);
  if (!s) return;
  const examIndex = (s.exams || []).findIndex(e => e.id === examIdentifier || e.subject === examIdentifier);
  if (examIndex === -1) return;

  state.editSubjectStudentId = studentId;
  state.editSubjectIndex = examIndex;
  state.modals.editSubject = true;
  renderApp();
}

async function handleSaveEditSubject(e) {
  e.preventDefault();
  const s = state.students.find(st => st.id === state.editSubjectStudentId);
  if (!s) return;
  const exam = (s.exams || [])[state.editSubjectIndex];
  if (!exam) return;

  const newName = document.getElementById('editSubjectName').value.trim();
  const absentCb = document.getElementById('editSubjectAbsent');
  const isAbsent = absentCb ? absentCb.checked : false;

  if (!newName) {
    showToast("Please enter a subject name", "error");
    return;
  }

  if (!isAbsent) {
    const newScoreStr = document.getElementById('editSubjectMarks').value.trim();
    const newScore = parseFloat(newScoreStr);
    if (isNaN(newScore) || newScore < 0 || newScore > 100) {
      showToast("Please enter valid marks between 0 and 100", "error");
      return;
    }
    exam.score = newScore;
    exam.grade = getGradeFromScore(newScore);
  } else {
    exam.score = 0;
    exam.grade = 'AB';
  }

  exam.subject = newName;
  exam.absent = isAbsent;
  const semSelect = document.getElementById('editSubjectSem');
  if (semSelect) exam.sem = semSelect.value;
  s.lastUpdated = Date.now();

  await saveStudentDoc(s);
  await saveState();

  state.modals.editSubject = false;
  showToast(isAbsent ? `Subject "${newName}" marked as Absent` : `Subject "${newName}" updated with Grade ${exam.grade}`);
  renderApp();
}

async function deleteExamForStudent(studentId, examIdentifier) {
  const s = state.students.find(st => st.id === studentId);
  if (!s) return;
  s.exams = (s.exams || []).filter(e => e.id !== examIdentifier && e.subject !== examIdentifier);
  s.lastUpdated = Date.now();
  await saveStudentDoc(s);
  await saveState();
  showToast("Subject deleted");
  renderApp();
}

async function handleAdminInjectTxnForStudent(e, studentId) {
  e.preventDefault();
  const s = state.students.find(st => st.id === studentId);
  if (!s) return;

  const type = document.getElementById('adminTxnType').value;
  const amount = parseFloat(document.getElementById('adminTxnAmount').value);
  const desc = document.getElementById('adminTxnDesc').value.trim();
  if (!amount || isNaN(amount) || amount <= 0) return;

  if (!s.transactions) s.transactions = [];
  s.transactions.unshift({
    id: `TXN-${Math.floor(100 + Math.random() * 900)}`,
    date: new Date().toISOString().split('T')[0],
    description: desc || (type === 'Credit' ? 'Cash In' : 'Cash Out'),
    type,
    amount,
    category: type === 'Credit' ? 'Cash In' : 'Cash Out'
  });

  s.lastUpdated = Date.now();
  await saveStudentDoc(s);
  await saveState();
  showToast("Transaction recorded");
  renderApp();
}

async function deleteTxnForStudent(studentId, index) {
  const s = state.students.find(st => st.id === studentId);
  if (!s || !s.transactions[index]) return;
  s.transactions.splice(index, 1);
  s.lastUpdated = Date.now();
  await saveStudentDoc(s);
  await saveState();
  showToast("Transaction removed");
  renderApp();
}

async function deleteBroadcast(id) {
  state.announcements = state.announcements.filter(a => a.id !== id);
  await saveState();
  showToast("Broadcast deleted");
  renderApp();
}

function openEditBroadcastModal(id) {
  const ann = state.announcements.find(a => a.id === id);
  if (!ann) return;
  const newTitle = prompt("Edit Title:", ann.title);
  if (newTitle !== null) ann.title = newTitle;
  const newContent = prompt("Edit Content:", ann.content);
  if (newContent !== null) ann.content = newContent;
  saveState();
  renderApp();
}

function showAttendanceGraph() {
  state.activeGraphTag = "analytics";
  renderApp();
}

// --- CHART.JS INITIALIZATION ---
function initCharts() {
  const canvas = document.getElementById('attendanceCanvas');
  if (!canvas) {
    if (window.myChart) {
      window.myChart.destroy();
      window.myChart = null;
    }
    return;
  }

  const student = getCurrentStudent();
  const records = (student && student.attendanceRecords) ? student.attendanceRecords : {};

  const academicMonths = [
    { key: "August 2026", short: "Aug" },
    { key: "September 2026", short: "Sep" },
    { key: "October 2026", short: "Oct" },
    { key: "November 2026", short: "Nov" },
    { key: "December 2026", short: "Dec" },
    { key: "January 2027", short: "Jan" },
    { key: "February 2027", short: "Feb" },
    { key: "March 2027", short: "Mar" },
    { key: "April 2027", short: "Apr" },
    { key: "May 2027", short: "May" },
    { key: "June 2027", short: "Jun" },
    { key: "July 2027", short: "Jul" }
  ];

  const labels = academicMonths.map(m => m.short);
  const attendanceData = [];
  const leavesData = [];

  academicMonths.forEach(mObj => {
    let monthPresents = 0;
    let monthLeaves = 0;
    let monthEvaluatedDays = 0;

    Object.entries(records).forEach(([key, status]) => {
      if (key.startsWith(mObj.key)) {
        if (status === 'Upcoming') return;

        if (status === "Present") {
          monthPresents += 1;
          monthEvaluatedDays += 1;
        } else if (status === "Half Day") {
          monthPresents += 0.5;
          monthEvaluatedDays += 1;
        } else if (status === "Absent" || status === "Leave") {
          monthLeaves += 1;
          monthEvaluatedDays += 1;
        }
      }
    });

    const monthRate = monthEvaluatedDays > 0 
      ? parseFloat(((monthPresents / monthEvaluatedDays) * 100).toFixed(1)) 
      : 100.0;

    attendanceData.push(monthRate);
    leavesData.push(monthLeaves);
  });

  const ctx = canvas.getContext('2d');
  
  const gradBlue = ctx.createLinearGradient(0, 0, 0, 180);
  gradBlue.addColorStop(0, 'rgba(37, 99, 235, 0.12)');
  gradBlue.addColorStop(1, 'rgba(37, 99, 235, 0.0)');

  const gradRose = ctx.createLinearGradient(0, 0, 0, 180);
  gradRose.addColorStop(0, 'rgba(244, 63, 94, 0.12)');
  gradRose.addColorStop(1, 'rgba(244, 63, 94, 0.0)');

  if (window.myChart && window.myChart.ctx && window.myChart.canvas === canvas) {
    window.myChart.data.labels = labels;
    window.myChart.data.datasets[0].data = attendanceData;
    window.myChart.data.datasets[1].data = leavesData;
    window.myChart.update('none');
  } else {
    if (window.myChart) {
      window.myChart.destroy();
    }
    window.myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Attendance Rate (%)',
            data: attendanceData,
            borderColor: '#2563eb',
            backgroundColor: gradBlue,
            fill: true,
            tension: 0.4,
            borderWidth: 2,
            pointBackgroundColor: '#2563eb',
            pointBorderColor: '#ffffff',
            pointBorderWidth: 1.5,
            pointRadius: 0,
            pointHoverRadius: 5
          },
          {
            label: 'Leaves (Days)',
            data: leavesData,
            borderColor: '#f43f5e',
            backgroundColor: gradRose,
            fill: true,
            tension: 0.4,
            borderWidth: 2,
            pointBackgroundColor: '#f43f5e',
            pointBorderColor: '#ffffff',
            pointBorderWidth: 1.5,
            pointRadius: 0,
            pointHoverRadius: 5
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
        plugins: {
          legend: {
            position: 'top',
            align: 'end',
            labels: {
              boxWidth: 8,
              boxHeight: 8,
              usePointStyle: true,
              pointStyle: 'circle',
              font: { family: 'Plus Jakarta Sans', weight: '700', size: 10 },
              color: '#64748b',
              padding: 12
            }
          },
          tooltip: {
            mode: 'index',
            intersect: false,
            backgroundColor: '#0f172a',
            titleFont: { family: 'Plus Jakarta Sans', weight: 'bold', size: 11 },
            bodyFont: { family: 'Plus Jakarta Sans', size: 11 },
            padding: 8,
            cornerRadius: 10,
            displayColors: false
          }
        },
        scales: {
          x: {
            grid: { display: false, drawBorder: false },
            ticks: { font: { family: 'Plus Jakarta Sans', weight: '600', size: 10 }, color: '#94a3b8' }
          },
          y: {
            border: { display: false },
            grid: { color: 'rgba(241, 245, 249, 0.8)', drawBorder: false },
            ticks: { font: { family: 'Plus Jakarta Sans', weight: '600', size: 10 }, color: '#94a3b8', maxTicksLimit: 5 }
          }
        }
      }
    });
  }
}

// --- INITIALIZATION & GLOBAL BINDINGS ---
window.setActiveTab = typeof setActiveTab !== 'undefined' ? setActiveTab : null;
window.setAdminActiveTab = typeof setAdminActiveTab !== 'undefined' ? setAdminActiveTab : null;
window.setRole = typeof setRole !== 'undefined' ? setRole : null;
window.setLoginRole = typeof setLoginRole !== 'undefined' ? setLoginRole : null;
window.openRoleAuthModal = typeof openRoleAuthModal !== 'undefined' ? openRoleAuthModal : null;
window.closeRoleAuthModal = typeof closeRoleAuthModal !== 'undefined' ? closeRoleAuthModal : null;
window.handleRoleAuthSubmit = typeof handleRoleAuthSubmit !== 'undefined' ? handleRoleAuthSubmit : null;
window.handleLoginSubmit = typeof handleLoginSubmit !== 'undefined' ? handleLoginSubmit : null;
window.toggleModal = typeof toggleModal !== 'undefined' ? toggleModal : null;
window.toggleAttendanceDayState = typeof toggleAttendanceDayState !== 'undefined' ? toggleAttendanceDayState : null;
window.downloadMarksheetPDF = typeof downloadMarksheetPDF !== 'undefined' ? downloadMarksheetPDF : null;
window.toggleHeaderProfileMenu = typeof toggleHeaderProfileMenu !== 'undefined' ? toggleHeaderProfileMenu : null;
window.closeHeaderProfileMenu = typeof closeHeaderProfileMenu !== 'undefined' ? closeHeaderProfileMenu : null;
window.logout = typeof logout !== 'undefined' ? logout : null;
window.markRead = typeof markRead !== 'undefined' ? markRead : null;
window.quickLoginStudent = typeof quickLoginStudent !== 'undefined' ? quickLoginStudent : null;
window.handleCreateStudentUser = typeof handleCreateStudentUser !== 'undefined' ? handleCreateStudentUser : null;
window.handleSaveEditStudent = typeof handleSaveEditStudent !== 'undefined' ? handleSaveEditStudent : null;
window.handleApplyLeave = typeof handleApplyLeave !== 'undefined' ? handleApplyLeave : null;
window.handlePhotoSelect = typeof handlePhotoSelect !== 'undefined' ? handlePhotoSelect : null;
window.cropAndSavePhoto = typeof cropAndSavePhoto !== 'undefined' ? cropAndSavePhoto : null;
window.handleNewStudPhotoSelect = typeof handleNewStudPhotoSelect !== 'undefined' ? handleNewStudPhotoSelect : null;
window.cropAndSaveNewStudPhoto = typeof cropAndSaveNewStudPhoto !== 'undefined' ? cropAndSaveNewStudPhoto : null;
window.deleteStudentUser = typeof deleteStudentUser !== 'undefined' ? deleteStudentUser : null;
window.toggleStudentAccountStatus = typeof toggleStudentAccountStatus !== 'undefined' ? toggleStudentAccountStatus : null;
window.openEditStudentModal = typeof openEditStudentModal !== 'undefined' ? openEditStudentModal : null;
window.openEditSubjectModal = typeof openEditSubjectModal !== 'undefined' ? openEditSubjectModal : null;
window.handleSaveEditSubject = typeof handleSaveEditSubject !== 'undefined' ? handleSaveEditSubject : null;
window.editExamScoreForStudent = typeof editExamScoreForStudent !== 'undefined' ? editExamScoreForStudent : null;
window.deleteExamForStudent = typeof deleteExamForStudent !== 'undefined' ? deleteExamForStudent : null;
window.handleAdminInjectTxnForStudent = typeof handleAdminInjectTxnForStudent !== 'undefined' ? handleAdminInjectTxnForStudent : null;
window.deleteTxnForStudent = typeof deleteTxnForStudent !== 'undefined' ? deleteTxnForStudent : null;
window.deleteBroadcast = typeof deleteBroadcast !== 'undefined' ? deleteBroadcast : null;
window.openAddSubjectModal = typeof openAddSubjectModal !== 'undefined' ? openAddSubjectModal : null;
window.handleCreateSubject = typeof handleCreateSubject !== 'undefined' ? handleCreateSubject : null;
window.toggleAddSubjectAbsent = typeof toggleAddSubjectAbsent !== 'undefined' ? toggleAddSubjectAbsent : null;
window.toggleEditSubjectAbsent = typeof toggleEditSubjectAbsent !== 'undefined' ? toggleEditSubjectAbsent : null;
window.changeBatchFilter = typeof changeBatchFilter !== 'undefined' ? changeBatchFilter : null;
window.showAttendanceGraph = typeof showAttendanceGraph !== 'undefined' ? showAttendanceGraph : null;
window.handleUpdateAdminCredentials = typeof handleUpdateAdminCredentials !== 'undefined' ? handleUpdateAdminCredentials : null;
window.handleUpdateControlPanelCredentials = typeof handleUpdateControlPanelCredentials !== 'undefined' ? handleUpdateControlPanelCredentials : null;
window.toggleSpecificStudentStatus = typeof toggleSpecificStudentStatus !== 'undefined' ? toggleSpecificStudentStatus : null;

document.addEventListener('DOMContentLoaded', async () => {
  await loadState();
  await initFirebase();
  processDailyAutoAttendance();
  renderApp();

  let lastAutoAttendanceCheckHour = -1;
  setInterval(() => {
    const el = document.getElementById('liveClockPill');
    if (el) el.innerText = get12HourTimeString();

    const now = new Date();
    if (now.getHours() !== lastAutoAttendanceCheckHour) {
      lastAutoAttendanceCheckHour = now.getHours();
      processDailyAutoAttendance();
      renderApp();
    }
  }, 1000);
});
