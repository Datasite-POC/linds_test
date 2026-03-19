import { useState } from "react";

// ─── Design tokens ───────────────────────────────────────────────────────────
const tokens = {
  teal: "#1D9E75",
  tealLight: "#E1F5EE",
  tealMid: "#9FE1CB",
  amber: "#BA7517",
  amberLight: "#FAEEDA",
  amberMid: "#FAC775",
  coral: "#D85A30",
  coralLight: "#FAECE7",
  text: "#2C2C2A",
  textSec: "#5F5E5A",
  textTer: "#888780",
  border: "rgba(44,44,42,0.12)",
  bg: "#F8F7F4",
  surface: "#FFFFFF",
  folderColors: ["#1D9E75","#D85A30","#378ADD","#BA7517","#7F77DD","#639922","#D4537E"],
};

// ─── Shared micro-components ──────────────────────────────────────────────────
const InfoIcon = () => (
  <span style={{
    width: 13, height: 13, borderRadius: "50%",
    border: `1px solid ${tokens.textTer}`,
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    fontSize: 9, color: tokens.textTer, flexShrink: 0, cursor: "default",
  }}>i</span>
);

const Card = ({ children, style = {} }) => (
  <div style={{
    background: tokens.surface,
    border: `1px solid ${tokens.border}`,
    borderRadius: 12,
    padding: "14px 16px",
    ...style,
  }}>
    {children}
  </div>
);

const CardTitleRow = ({ title, filter, children }) => (
  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, fontWeight: 500, color: tokens.textSec }}>
      {title} <InfoIcon />
    </div>
    {filter && (
      <span style={{ fontSize: 11, color: tokens.teal, cursor: "pointer" }}>{filter} ▾</span>
    )}
    {children}
  </div>
);

const SectionHeader = ({ label }) => (
  <div style={{
    fontSize: 11, fontWeight: 600, textTransform: "uppercase",
    letterSpacing: "0.06em", color: tokens.textTer,
    marginBottom: 10, paddingBottom: 8,
    borderBottom: `1px solid ${tokens.border}`,
  }}>
    {label}
  </div>
);

const BarRow = ({ label, pct, color = tokens.teal, wide = false }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 7 }}>
    <div style={{
      fontSize: 11, color: tokens.textSec,
      width: wide ? 100 : 80, flexShrink: 0,
      whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
    }}>{label}</div>
    <div style={{ flex: 1, height: 7, background: "#EDEBE6", borderRadius: 4, overflow: "hidden" }}>
      <div style={{ width: `${pct}%`, height: "100%", background: color, borderRadius: 4 }} />
    </div>
  </div>
);

const InfoChip = ({ text, color = tokens.teal, bg }) => (
  <div style={{
    display: "flex", alignItems: "center", gap: 5,
    fontSize: 11, color,
    background: bg || tokens.tealLight,
    padding: "5px 8px", borderRadius: 6, marginTop: 10,
  }}>
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
      <path d="M8 2a6 6 0 100 12A6 6 0 008 2zm0 4v4M8 11v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
    {text}
  </div>
);

// ─── Icons ────────────────────────────────────────────────────────────────────
const Icons = {
  dashboard: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="1" y="1" width="6" height="6" rx="1.5" fill="currentColor"/>
      <rect x="9" y="1" width="6" height="6" rx="1.5" fill="currentColor"/>
      <rect x="1" y="9" width="6" height="6" rx="1.5" fill="currentColor"/>
      <rect x="9" y="9" width="6" height="6" rx="1.5" fill="currentColor"/>
    </svg>
  ),
  document: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M4 2h5l3 3v9a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M9 2v3h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  search: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="7" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M11 11l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  tracker: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="1" y="3" width="14" height="2" rx="1" fill="currentColor"/>
      <rect x="1" y="7" width="10" height="2" rx="1" fill="currentColor"/>
      <rect x="1" y="11" width="12" height="2" rx="1" fill="currentColor"/>
    </svg>
  ),
  qa: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M6.5 6a1.5 1.5 0 013 .5c0 1-1.5 1.5-1.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="8" cy="12" r="0.75" fill="currentColor"/>
    </svg>
  ),
  users: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="6" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M1 13c0-2.8 2.2-4 5-4s5 1.2 5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 7a2 2 0 010 4M14 13c0-1.5-1-2.5-2-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  lock: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="3" y="7" width="10" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M5 7V5a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  redact: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="1" y="5" width="14" height="6" rx="2" fill="currentColor" opacity="0.15"/>
      <rect x="1" y="5" width="14" height="6" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="3" y="7" width="5" height="2" rx="1" fill="currentColor"/>
    </svg>
  ),
  checkDone: (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ color: tokens.teal, flexShrink: 0, marginTop: 1 }}>
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  checkPending: (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ color: tokens.amber, flexShrink: 0, marginTop: 1 }}>
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 5v3M8 11v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
};

// ─── Section: Overview ────────────────────────────────────────────────────────
const ActionItems = () => {
  const items = [
    { icon: <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/><path d="M8 5v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="8" cy="11" r="0.75" fill="currentColor"/></svg>, label: "New", count: 1 },
    { icon: <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><rect x="2" y="3" width="12" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><path d="M5 7h6M5 10h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>, label: "Inbox", count: 1 },
    { icon: <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8 2L9.5 6h4l-3 2.5L12 13 8 10l-4 3 1.5-4.5L2 6h4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>, label: "Action Required", count: 0 },
  ];
  return (
    <Card>
      <CardTitleRow title="Action Items" />
      {items.map(({ icon, label, count }) => (
        <div key={label} style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "8px 10px", borderRadius: 8, background: tokens.bg,
          marginBottom: 6, cursor: "pointer",
        }}
          onMouseEnter={e => e.currentTarget.style.background = "#EFEDE8"}
          onMouseLeave={e => e.currentTarget.style.background = tokens.bg}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: tokens.text }}>
            <span style={{ color: tokens.textTer }}>{icon}</span>
            {label}
          </div>
          <span style={{
            fontSize: 11, fontWeight: 600,
            minWidth: 20, height: 20, borderRadius: 10,
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "0 6px",
            background: count > 0 ? tokens.teal : "#E8E6E0",
            color: count > 0 ? "#fff" : tokens.textTer,
          }}>{count}</span>
        </div>
      ))}
    </Card>
  );
};

const ProjectVolume = () => (
  <Card>
    <CardTitleRow title="Project Volume" filter="All Locations" />
    <div style={{ display: "flex", gap: 20, alignItems: "flex-end" }}>
      <div>
        <div style={{ fontSize: 32, fontWeight: 600, color: tokens.teal, lineHeight: 1 }}>865</div>
        <div style={{ fontSize: 11, color: tokens.textTer, marginTop: 4 }}>Documents</div>
      </div>
      <div style={{ width: 1, height: 36, background: tokens.border, alignSelf: "flex-end" }} />
      <div>
        <div style={{ fontSize: 32, fontWeight: 600, color: tokens.text, lineHeight: 1 }}>113</div>
        <div style={{ fontSize: 11, color: tokens.textTer, marginTop: 4 }}>Folders</div>
      </div>
    </div>
  </Card>
);

const EmptyFolders = () => (
  <Card>
    <CardTitleRow title="Empty Folders" filter="All Locations" />
    <div style={{ fontSize: 36, fontWeight: 600, color: tokens.teal, lineHeight: 1 }}>0</div>
    <div style={{ fontSize: 11, color: tokens.textTer, marginTop: 4 }}>Empty folders</div>
    <InfoChip text="All folders have content" />
  </Card>
);

const Placeholders = () => (
  <Card>
    <CardTitleRow title="Placeholders" filter="DD Docs" />
    <div style={{ fontSize: 36, fontWeight: 600, color: tokens.teal, lineHeight: 1 }}>0</div>
    <div style={{ fontSize: 11, color: tokens.textTer, marginTop: 4 }}>Placeholders</div>
    <InfoChip text="Placeholders accelerate prep" />
  </Card>
);

// ─── Section: Documents ───────────────────────────────────────────────────────
const folderData = [
  { label: "(8) Project…", pct: 100 },
  { label: "(3) Corpora…", pct: 38 },
  { label: "(11) Agree…", pct: 22 },
  { label: "(1) Business…", pct: 16 },
  { label: "(4) Financi…", pct: 28 },
  { label: "(root)", pct: 12 },
  { label: "(2) Benefit…", pct: 8 },
];

const publishedData = [
  { label: "(3) Corpora…", pct: 100 },
  { label: "(1) Busines…", pct: 72 },
  { label: "(2) Benefit…", pct: 58 },
  { label: "(4) Financi…", pct: 45 },
  { label: "(5) IP and P…", pct: 30 },
  { label: "(6) Insuran…", pct: 20 },
  { label: "(7) Litiati…", pct: 12 },
];

const redactedData = [
  { label: "Financial…", pct: 100 },
  { label: "Project Sp…", pct: 80 },
  { label: "Benefits | E…", pct: 65 },
  { label: "Business O…", pct: 52 },
  { label: "Litigation", pct: 40 },
  { label: "RedactFold…", pct: 28 },
  { label: "Corporate…", pct: 14 },
];

const langData = [
  { label: "English", pct: 100 },
  { label: "German", pct: 18 },
  { label: "Spanish", pct: 12 },
  { label: "French", pct: 9 },
  { label: "Italian", pct: 7 },
  { label: "Japanese", pct: 5 },
  { label: "Korean", pct: 4 },
];

const DocumentsByFolder = () => (
  <Card style={{ height: "100%" }}>
    <CardTitleRow title="Documents by Folder" filter="DD Docs" />
    {folderData.map(({ label, pct }, i) => (
      <BarRow key={label} label={label} pct={pct} color={tokens.folderColors[i % tokens.folderColors.length]} wide />
    ))}
  </Card>
);

const DocumentsPublished = () => (
  <Card>
    <CardTitleRow title="Docs Published" filter="DD Docs" />
    {publishedData.map(({ label, pct }, i) => (
      <BarRow key={label} label={label} pct={pct} color={tokens.folderColors[i % tokens.folderColors.length]} />
    ))}
  </Card>
);

const DocumentsRedacted = () => (
  <Card>
    <CardTitleRow title="Docs Redacted" filter="DD Docs" />
    {redactedData.map(({ label, pct }) => (
      <BarRow key={label} label={label} pct={pct} color={tokens.teal} />
    ))}
  </Card>
);

const DocumentsByLanguage = () => (
  <Card style={{ gridColumn: "span 2" }}>
    <CardTitleRow title="Documents by Language" filter="DD Docs" />
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 20px" }}>
      <div>{langData.slice(0, 4).map(({ label, pct }) => <BarRow key={label} label={label} pct={pct} color={tokens.teal} />)}</div>
      <div>{langData.slice(4).map(({ label, pct }) => <BarRow key={label} label={label} pct={pct} color={tokens.teal} />)}</div>
    </div>
  </Card>
);

// ─── Section: User Activity ───────────────────────────────────────────────────
const InvitationStatus = () => (
  <Card>
    <CardTitleRow title="Invitation Status" filter="All Roles" />
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <svg width="80" height="80" viewBox="0 0 80 80">
        <circle cx="40" cy="40" r="30" fill="none" stroke="#EDEBE6" strokeWidth="12"/>
        <circle cx="40" cy="40" r="30" fill="none" stroke={tokens.teal} strokeWidth="12" strokeDasharray="131 188" strokeDashoffset="47" strokeLinecap="round"/>
        <circle cx="40" cy="40" r="30" fill="none" stroke={tokens.amberMid} strokeWidth="12" strokeDasharray="38 188" strokeDashoffset="-84" strokeLinecap="round"/>
        <circle cx="40" cy="40" r="30" fill="none" stroke="#D4537E" strokeWidth="12" strokeDasharray="19 188" strokeDashoffset="-122" strokeLinecap="round"/>
      </svg>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {[
          { color: tokens.teal, label: "Accepted" },
          { color: tokens.amberMid, label: "Pending" },
          { color: "#D4537E", label: "Not sent" },
        ].map(({ color, label }) => (
          <div key={label} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: tokens.textSec }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: color }} />
            {label}
          </div>
        ))}
      </div>
    </div>
  </Card>
);

const permData = [
  { label: "I do not cha…", w: 90 },
  { label: "Analyst", w: 72 },
  { label: "Associate", w: 58 },
  { label: "Bidder A", w: 44 },
  { label: "Grade A – P…", w: 32 },
  { label: "SMRP", w: 18 },
];

const PermissionsOverview = () => (
  <Card>
    <CardTitleRow title="Permissions Overview" />
    <div style={{ fontSize: 10, color: tokens.textTer, marginBottom: 8 }}>DD Documents ▾ &nbsp; View ▾</div>
    {permData.map(({ label, w }) => (
      <div key={label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6, fontSize: 11 }}>
        <span style={{ color: tokens.textSec }}>{label}</span>
        <div style={{ width: w, height: 5, borderRadius: 3, background: tokens.teal }} />
      </div>
    ))}
  </Card>
);

const qaItems = {
  required: [
    { label: "Question team created & members added", done: true },
    { label: "Answer team created & members added", done: true },
    { label: "Workflows configured", done: false },
  ],
  recommended: [
    { label: "Categories reviewed & updated", done: false },
  ],
};

const QAReadiness = () => {
  const requiredDone = qaItems.required.filter(i => i.done).length;
  const requiredTotal = qaItems.required.length;

  return (
    <Card>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, fontWeight: 500, color: tokens.textSec }}>
          Q&A Setup Status <InfoIcon />
        </div>
        <span style={{
          fontSize: 10, fontWeight: 500, padding: "3px 8px", borderRadius: 20,
          background: tokens.amberLight, color: tokens.amber,
          border: `1px solid ${tokens.amberMid}`, whiteSpace: "nowrap",
        }}>Not Launched</span>
      </div>

      <div style={{ fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.07em", color: tokens.textTer, marginBottom: 6 }}>Required</div>
      {qaItems.required.map(({ label, done }) => (
        <div key={label} style={{
          display: "flex", alignItems: "flex-start", gap: 8,
          marginBottom: 6, padding: "6px 8px", borderRadius: 7,
          background: done ? "rgba(29,158,117,0.07)" : "rgba(186,117,23,0.07)",
        }}>
          {done ? Icons.checkDone : Icons.checkPending}
          <span style={{ fontSize: 12, color: tokens.textSec, lineHeight: 1.4 }}>{label}</span>
        </div>
      ))}

      <div style={{ height: 1, background: tokens.border, margin: "12px 0" }} />

      <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.07em", color: tokens.textTer, marginBottom: 6 }}>
        Recommended
        <span style={{
          fontSize: 9, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em",
          padding: "2px 6px", borderRadius: 4,
          background: "rgba(44,44,42,0.07)", color: tokens.textTer,
        }}>Optional</span>
      </div>
      {qaItems.recommended.map(({ label, done }) => (
        <div key={label} style={{
          display: "flex", alignItems: "flex-start", gap: 8,
          marginBottom: 6, padding: "6px 8px", borderRadius: 7,
          background: done ? "rgba(29,158,117,0.07)" : "rgba(186,117,23,0.07)",
        }}>
          {done ? Icons.checkDone : Icons.checkPending}
          <span style={{ fontSize: 12, color: tokens.textSec, lineHeight: 1.4 }}>{label}</span>
        </div>
      ))}

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 12, paddingTop: 10, borderTop: `1px solid ${tokens.border}` }}>
        <span style={{ fontSize: 11, fontWeight: 500, color: tokens.textSec }}>
          Required: {requiredDone} of {requiredTotal} done &nbsp;·&nbsp;
          <span style={{ color: tokens.amber }}>{requiredTotal - requiredDone} pending</span>
        </span>
        <span style={{ fontSize: 11, color: tokens.teal, cursor: "pointer", textDecoration: "underline", textUnderlineOffset: 2 }}>
          Set up Q&A →
        </span>
      </div>
    </Card>
  );
};

// ─── Sidebar ──────────────────────────────────────────────────────────────────
const sidebarItems = [
  { key: "dashboard", icon: Icons.dashboard, label: "Dashboard" },
  { key: "documents", icon: Icons.document, label: "Documents" },
  { key: "search", icon: Icons.search, label: "Search" },
  { key: "trackers", icon: Icons.tracker, label: "Trackers" },
  { key: "qa", icon: Icons.qa, label: "Q&A" },
  { key: "users", icon: Icons.users, label: "Users" },
  { key: "permissions", icon: Icons.lock, label: "Permissions" },
  { key: "redaction", icon: Icons.redact, label: "Redaction" },
];

const Sidebar = ({ active }) => (
  <div style={{
    width: 52, background: tokens.surface,
    borderRight: `1px solid ${tokens.border}`,
    display: "flex", flexDirection: "column", alignItems: "center",
    padding: "12px 0", gap: 4, flexShrink: 0,
  }}>
    {sidebarItems.map(({ key, icon, label }) => (
      <div key={key} title={label} style={{
        width: 36, height: 36, borderRadius: 8,
        display: "flex", alignItems: "center", justifyContent: "center",
        cursor: "pointer",
        background: key === active ? tokens.tealLight : "transparent",
        color: key === active ? tokens.teal : tokens.textTer,
      }}>
        {icon}
      </div>
    ))}
  </div>
);

// ─── Top Nav ──────────────────────────────────────────────────────────────────
const TopNav = () => (
  <div style={{
    display: "flex", alignItems: "center", justifyContent: "space-between",
    padding: "10px 20px", background: tokens.surface,
    borderBottom: `1px solid ${tokens.border}`, gap: 12,
  }}>
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <div style={{ fontSize: 15, fontWeight: 600, color: tokens.text, display: "flex", alignItems: "center", gap: 6 }}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect width="20" height="20" rx="4" fill={tokens.teal}/>
          <path d="M5 10h10M10 5v10" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        Datasite
      </div>
      <div style={{ fontSize: 12, color: tokens.textTer, display: "flex", alignItems: "center", gap: 4 }}>
        <span style={{ color: tokens.textSec }}>Home</span> ›
        <span style={{ color: tokens.textSec }}>Projects</span> ›
        <span style={{ color: tokens.textSec }}>Eagle</span> ›
        Dashboard
      </div>
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      {["Suggest & vote", "Show me around", "Reset filters", "Manage dashboard ▾"].map(label => (
        <button key={label} style={{
          fontFamily: "inherit", fontSize: 12, color: tokens.textSec,
          border: `1px solid ${tokens.border}`, background: tokens.surface,
          padding: "5px 10px", borderRadius: 6, cursor: "pointer",
          display: "flex", alignItems: "center", gap: 5,
        }}>
          {label}
        </button>
      ))}
    </div>
  </div>
);

// ─── Root component ───────────────────────────────────────────────────────────
export default function DatasitePreLaunchDashboard() {
  const [activeNav] = useState("dashboard");

  return (
    <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", background: tokens.bg, color: tokens.text, minHeight: "100vh" }}>
      <TopNav />
      <div style={{ display: "flex" }}>
        <Sidebar active={activeNav} />
        <div style={{ flex: 1, padding: 20, overflowX: "hidden" }}>

          {/* Page header */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <h1 style={{ fontSize: 22, fontWeight: 600, color: tokens.text, margin: 0 }}>Eagle</h1>
            <span style={{
              fontSize: 11, fontWeight: 500, padding: "3px 10px", borderRadius: 20,
              background: tokens.amberLight, color: tokens.amber,
              border: `1px solid ${tokens.amberMid}`,
            }}>Pre-Launch</span>
          </div>

          {/* Overview */}
          <div style={{ marginBottom: 20 }}>
            <SectionHeader label="Overview" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
              <ActionItems />
              <ProjectVolume />
              <EmptyFolders />
              <Placeholders />
            </div>
          </div>

          {/* Documents */}
          <div style={{ marginBottom: 20 }}>
            <SectionHeader label="Documents" />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              <DocumentsByFolder />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "auto auto", gap: 10 }}>
                <DocumentsPublished />
                <DocumentsRedacted />
                <DocumentsByLanguage />
              </div>
            </div>
          </div>

          {/* User Activity */}
          <div style={{ marginBottom: 20 }}>
            <SectionHeader label="User Activity" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
              <InvitationStatus />
              <PermissionsOverview />
              <QAReadiness />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
