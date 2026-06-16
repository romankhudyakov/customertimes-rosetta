export interface UseCase {
  id: string;
  num: string;
  title: string;
  who: string;
  pitch: string;
  outcomes: string[];
  input: string;
  output: string;
}

export const useCases: UseCase[] = [
  {
    id: 'audit',
    num: '01',
    title: 'Inherited Org Audit',
    who: 'PE / M&A / new admins',
    pitch: 'You acquired or inherited a Salesforce org you did not build. Rosetta scans it in hours, returns 12 exec-grade reports across code, automation, integration, security, license, and process maturity, and gives you a prioritized remediation backlog with hard-data ROI.',
    outcomes: [
      'Executive Brief with letter grade (A–F) on 8 dimensions',
      'Top 5 ROI opportunities, quantified',
      'Industry-calibrated process mining (BPMN + CMMI)',
      'Drop-in-ready JIRA backlog',
    ],
    input: 'Read-only OAuth connection to source org',
    output: '12 reports + scored backlog · 4–6 hours',
  },
  {
    id: 'tech-debt',
    num: '02',
    title: 'Tech Debt Remediation',
    who: 'Architects · Release Engineering',
    pitch: 'Most orgs sit on years of accumulated debt — unused classes, ancient API versions, zero-coverage triggers, monolith batches one governor limit from production failure. Rosetta names the offenders, ranks them by blast radius, and proposes the patch.',
    outcomes: [
      'Named-class remediation plan (not generic advice)',
      'Test coverage gap analysis with patch suggestions',
      'API version uplift roadmap',
      'Trigger consolidation refactor plan',
    ],
    input: 'Source org + sandbox',
    output: 'Per-class remediation tickets + executable patches via Cursor',
  },
  {
    id: 'process-mining',
    num: '03',
    title: 'Process Mining for Salesforce',
    who: 'COO · RevOps · Service Ops',
    pitch: 'Apromore-grade process mining, calibrated to your industry, applied to the data already in Salesforce. Theory of Constraints identifies the single binding constraint. DMAIC structures the fix. Little\'s Law quantifies the WIP problem. BPMN tells the story.',
    outcomes: [
      'CMMI maturity scoring per process',
      'Bottleneck identification with TOC framing',
      'Stuck-record inventory with $$$ attached',
      'Quick wins vs. strategic recommendations split',
    ],
    input: 'Read-only Salesforce + 90-day event log',
    output: 'Process maps + bottleneck dossier + improvement plan',
  },
  {
    id: 'license',
    num: '04',
    title: 'License & Limits Optimization',
    who: 'CFO · IT Procurement · Salesforce Admin',
    pitch: 'Inactive users. Storage on dead objects. API quota burned by polling. Async Apex jobs about to breach the daily ceiling. Rosetta turns governor headroom and license consumption into a recurring cost-reduction line item.',
    outcomes: [
      'Inactive-user license rightsize (typical: 15–30%)',
      'Storage cleanup plan with $$$ savings',
      'Governor limit headroom forecast',
      'Polling → Platform Events migration plan',
    ],
    input: 'Org metadata + Event Monitoring (optional)',
    output: 'Annualized savings model + rightsize plan',
  },
  {
    id: 'implementation',
    num: '05',
    title: 'Salesforce Implementation — Full SDLC',
    who: 'Net-new programs · Carve-in builds',
    pitch: 'Rosetta runs the full delivery loop: Scope Builder generates a defensible SOW from a discovery transcript. Configuration Template carries every scope decision through to the build. CLI-driven config executes via Cursor with diff review. UAT tracker closes the loop. Works across every Salesforce product.',
    outcomes: [
      'AI-generated Scope Builder (Excel) and SOW',
      'Configuration Template with carry-forward crosswalk',
      'CLI-executed configuration via Cursor + MCP',
      'UAT Tracker + Training Guide on handoff',
    ],
    input: 'Discovery transcripts + product selection',
    output: 'Scope → SOW → Config → UAT → Training',
  },
  {
    id: 'presales',
    num: '06',
    title: 'Pre-Sales / RFP Acceleration',
    who: 'SI partners · Internal SF teams',
    pitch: 'Connect a prospect\'s org under NDA, get a complexity score and the 12-report bundle in hours. Build SOWs grounded in their actual org data, not assumptions. Win the deal before the competition finishes their discovery.',
    outcomes: [
      'Complexity score grounded in real org data',
      'Defensible SOW with named risk items',
      'Pre-LOI diligence in hours',
      '75%+ reduction in pre-sales effort',
    ],
    input: 'Prospect read-only OAuth · NDA-friendly',
    output: 'Complexity dossier + draft SOW',
  },
  {
    id: 'migration',
    num: '07',
    title: 'Migration & Org Merge',
    who: 'M&A integration · Multi-org consolidation',
    pitch: 'Multi-org dependency mapping, field-level conflict detection, integration overlap analysis. Rosetta tells you what consolidates cleanly, what conflicts, and what the merged data model looks like before you migrate a single record.',
    outcomes: [
      'Cross-org field & object overlap map',
      'Integration redundancy report',
      'Conflict resolution playbook',
      'Phased merge plan (carve-in or carve-out)',
    ],
    input: 'Two or more source orgs',
    output: 'Merge dossier + phased rollout plan',
  },
  {
    id: 'monitoring',
    num: '08',
    title: 'Continuous Org Monitoring',
    who: 'Post-go-live governance · Managed services',
    pitch: 'Initial scan, then delta scans every N days. Drift detection flags new debt, new flows, new security exposure as it lands. Weekly executive brief auto-generated. Stop hoping nothing broke; know what changed.',
    outcomes: [
      'Delta scans (initial → delta1 → delta7 → ...)',
      'Drift detection with diff-style changelog',
      'Weekly auto-generated executive briefs',
      'Slack/Teams alerts on threshold breach',
    ],
    input: 'Ongoing read-only connection',
    output: 'Recurring change journal + alerts',
  },
];
