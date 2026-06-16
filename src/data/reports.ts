// Sanitized sample report excerpts.
// Real customer names redacted to [Higher Ed], [Sample Org], etc.

export interface Report {
  id: string;
  num: string;
  title: string;
  category: string;
  grade?: string;
  gradeClass?: 'ok' | 'warn' | 'bad';
  meta: string;
  body: string;
}

export const reports: Report[] = [
  {
    id: 'exec-brief',
    num: '01',
    title: 'AI Executive Brief',
    category: 'Strategy',
    grade: 'B · 78/100',
    gradeClass: 'ok',
    meta: 'Generated · Initial scan · Sample Org',
    body: `
      <p><b>The Sample Org's Salesforce org earns a solid B (78/100) overall</b>, with standout performance in security, automation, and process discipline — a strong operational foundation. However, two critical gaps are actively costing money and staff productivity today:</p>
      <ul>
        <li><b>15,157 leads</b> sitting untouched in a <code>New</code> status with no AI-assisted prioritization</li>
        <li><b>25,159 service cases</b> processed with zero published knowledge articles — every agent resolves every issue from scratch</li>
      </ul>
      <p>Compounding these, a grade of <b>F (30/100) on integrations</b> signals that connected systems are operating on fragile, outdated data-exchange patterns that elevate operational risk.</p>
      <p>The single highest-return lever available right now is activating <code>Einstein Lead Scoring</code> — a low-effort, high-impact change that would immediately redirect rep effort toward the 14% of leads most likely to convert. <b>Typical lift: 10–20% improvement in lead-to-opportunity conversion.</b></p>
    `,
  },
  {
    id: 'tech-debt',
    num: '02',
    title: 'AI Tech Debt Analysis',
    category: 'Code Quality',
    grade: 'D+ · 52/100',
    gradeClass: 'bad',
    meta: 'Generated · Delta scan · Org-wide Apex coverage at 76% (gate: 75%)',
    body: `
      <p>The org scores <b>78/B overall but a troubling 52/D+ on technical debt</b>, revealing a codebase that has grown faster than governance has kept up.</p>
      <p><b>Most acute risk: Code Quality.</b> 50+ Apex classes confirmed at API v27–v54 (some as old as v27 — 36 versions behind current v63). A cluster of <code>PORTAL_*</code> and <code>portal_*</code> custom classes have <b>0% test coverage</b> across revenue-critical paths.</p>
      <p>A 32,461-line monolith — <code>PORTAL_BATCH_NewsletterFilter</code> — is one DML governor limit away from a production incident. It executes SOQL inside loops, spawns chained batches, and performs DML in start() — all patterns that will break silently under governor limit pressure.</p>
      <p><b>Attack code quality first.</b> Eliminating zero-coverage classes and updating the most severely outdated metadata removes both the immediate deployment-failure risk and the platform-upgrade ceiling in a single workstream.</p>
      <p>Org-wide test coverage sits perilously close to the 75% deployment gate. Any additional untested code risks dropping below the threshold at the worst possible moment — a release.</p>
    `,
  },
  {
    id: 'process-mining',
    num: '03',
    title: 'Business Process Mining',
    category: 'Operations',
    meta: 'Generated · 90-day event-log window · BPMN + CMMI',
    body: `
      <p><b>The single binding constraint</b> in this org is a long-running approval stage: 200 pending approvals, average 489 days. By the Theory of Constraints, every other improvement is subordinated to breaking this constraint first.</p>
      <p><b>Priority queue:</b></p>
      <ul>
        <li>🔴 <b>Opportunity Pipeline</b> — 81,491 open records, 81,488 stuck (99.99% stuck rate), $1.18B+ pipeline immobilized</li>
        <li>🟠 <b>Lead Process</b> — 17,731 leads, 17,664 with unknown source, 0% activity engagement</li>
        <li>🟡 <b>Case Resolution</b> — 1,178 open cases with no shared knowledge infrastructure</li>
      </ul>
      <p><b>Frameworks applied:</b> Lean DOWNTIME (8 wastes), Theory of Constraints (Goldratt), Six Sigma DMAIC, BPMN 2.0, Little's Law, CMMI maturity model. All three active processes score <b>CMMI Level 1 (Initial/Ad-hoc)</b> — meaning improvements are both urgently needed and highly achievable with basic configuration changes.</p>
    `,
  },
  {
    id: 'code-quality',
    num: '04',
    title: 'AI Code Quality Analysis',
    category: 'Code Quality',
    grade: 'C · 64/100',
    gradeClass: 'warn',
    meta: 'Generated · 659 Apex classes scanned · v27–v63 API range',
    body: `
      <p>Among 659 Apex classes, <b>50+ are confirmed below API v55</b> — with an alarming tail stretching back to v27 (<code>AdHoc</code>), v28 (Stripe family), and v32 (a third-party scoring package with ~80 classes).</p>
      <p><b>Critical custom classes</b> supporting customer-facing portal operations carry <b>0% test coverage</b> and are at least 12 API versions stale.</p>
      <p>On the trigger side, <code>secureFieldUpdateDDP</code> (v16) and <code>ddpFileUpdateDDP</code> / <code>cioUpdateDDP</code> (v18) are ancient document-generation triggers that are 47 versions behind.</p>
      <p><b>Contact has 3 separate Apex triggers</b> — violating the one-trigger-per-object principle. Trigger execution order is non-deterministic and any new developer will spend hours debugging phantom failures.</p>
      <p><b>23 inactive Flows</b> clutter Setup. <b>All 123 flows lack descriptions</b>, making governance tribal knowledge. <b>5 flows run in System Mode without Sharing</b> — each is a potential privilege-escalation vector if invoked from a community context.</p>
    `,
  },
  {
    id: 'automation',
    num: '05',
    title: 'Automation Analysis by Trigger',
    category: 'Automation',
    meta: 'Generated · Apex + Flows + Workflow Rules · Object-level conflict detection',
    body: `
      <p><b>48 active Workflow Rules</b> overlap with Apex triggers on the same objects — an untested order-of-execution minefield that will block every major release.</p>
      <p>Multi-layer overlap on <code>Contact</code>: <b>3 Apex triggers</b> + 6 Workflow Rules + 4 record-triggered Flows. Execution order is non-deterministic; trigger order changes between deployments can silently break downstream logic.</p>
      <p>Zero Process Builders is commendable, but Salesforce is sunsetting Workflow Rules — every active WR is a migration target. Rosetta identifies the <b>shortest-effort migration path</b> rule-by-rule, including dedupe candidates where the same condition is implemented by two automations.</p>
      <p><b>Recommendation:</b> Single-trigger-per-object refactor, then collapse WR → Flow in priority order: revenue-critical objects first, then governance objects, then admin convenience.</p>
    `,
  },
  {
    id: 'integration',
    num: '06',
    title: 'Integration Architecture',
    category: 'Architecture',
    grade: 'F · 30/100',
    gradeClass: 'bad',
    meta: 'Generated · Connected apps, named credentials, remote sites, event channels',
    body: `
      <p>The org has 6 connected applications, 4 named credentials, and <b>173 remote site connections</b> — but <b>zero real-time event channels configured</b>.</p>
      <p>This strongly indicates external systems are synchronizing with Salesforce by <b>periodically polling for changes</b> rather than receiving instant notifications — a pattern that creates data latency, wastes API quota, and creates race conditions during high-throughput windows.</p>
      <p><b>Modernization path:</b></p>
      <ul>
        <li>Replace polling integrations with Change Data Capture or Platform Events</li>
        <li>Consolidate the 173 remote sites under MuleSoft or a structured iPaaS</li>
        <li>Audit named credentials for least-privilege scopes</li>
        <li>Add observability via Event Monitoring</li>
      </ul>
    `,
  },
  {
    id: 'security',
    num: '07',
    title: 'Security Analysis',
    category: 'Security',
    grade: 'B+ · 84/100',
    gradeClass: 'ok',
    meta: 'Generated · Profiles, perm sets, sharing, login policies',
    body: `
      <p>Strong baseline. MFA universally enforced; password policy meets enterprise standard; session timeout configured. However:</p>
      <ul>
        <li><b>5 Flows run in System Mode without Sharing</b> — privilege escalation risk if invoked from a community context</li>
        <li><b>2 profiles with "Modify All Data"</b> beyond Sysadmin — should be tightened</li>
        <li><b>17 permission sets with overlapping object access</b> create unclear effective permissions for end users</li>
        <li>Login IP ranges absent on 4 high-privilege profiles</li>
        <li>Field-level security on 6 sensitive PII fields is publicly readable</li>
      </ul>
      <p>None are emergencies; all are easy wins. The org would pass an external audit; it would not pass a sophisticated internal one.</p>
    `,
  },
  {
    id: 'limits',
    num: '08',
    title: 'Limits & License Optimization',
    category: 'Cost',
    meta: 'Generated · License utilization, governor headroom, storage cost',
    body: `
      <p>Of 240 paid Salesforce Platform licenses, <b>67 users have not logged in for 90+ days</b>. Rightsizing alone returns an estimated $200K+ annually.</p>
      <p><b>Storage:</b> 312 GB total — 41 GB sits in 4 deprecated custom objects that no longer have UI exposure. Archival saves recurring storage cost and reduces backup window.</p>
      <p><b>Governor headroom:</b> Daily Async Apex job consumption is at 78% of limit. The <code>PORTAL_BATCH_NewsletterFilter</code> alone consumes 23% of daily SOQL queries. One additional batch workload during peak hours would breach the limit and silently kill a customer-facing mail flow.</p>
      <p><b>API call volume:</b> 89% of daily limit, of which 41% is the polling integration pattern flagged in the Integration report. Moving to Platform Events would free ~30% of daily API budget.</p>
    `,
  },
  {
    id: 'improvements',
    num: '09',
    title: 'AI-Powered Improvement Suggestions',
    category: 'Roadmap',
    meta: 'Generated · 38 specific recommendations, prioritized by ROI',
    body: `
      <p>Rosetta synthesizes findings across all analyses into a single prioritized backlog. Each suggestion is scored on <b>Impact (High/Medium/Low)</b> × <b>Effort (Low/Medium/High)</b> with the underlying data Rosetta used to make the recommendation.</p>
      <p><b>Top 5 from this scan:</b></p>
      <ul>
        <li><b>Activate Einstein Lead Scoring</b> — High impact, low effort. Estimated ROI within 60 days.</li>
        <li><b>Launch Knowledge Base + Self-Service Portal</b> — Deflect 20–30% of inbound case volume.</li>
        <li><b>License rightsize</b> — Return 67 unused licenses. ~$200K/yr.</li>
        <li><b>Single-trigger-per-object refactor on Contact</b> — Unblock the release pipeline.</li>
        <li><b>Refactor <code>PORTAL_BATCH_NewsletterFilter</code> to bulkify</b> — Remove production-incident risk.</li>
      </ul>
      <p>The full backlog is exported as JIRA-ready tickets with acceptance criteria.</p>
    `,
  },
  {
    id: 'flow-risk',
    num: '10',
    title: 'Flow Risk Analysis',
    category: 'Automation',
    meta: 'Generated · 123 flows scanned · risk-scored per flow',
    body: `
      <p>Of 123 flows, <b>23 are inactive</b> (clutter), <b>5 run in System Mode without Sharing</b> (privilege risk), and <b>all 123 lack descriptions</b> (governance risk).</p>
      <p><b>High-risk flows identified:</b></p>
      <ul>
        <li><code>MCC_BackupWorkflow</code> — runs in System Mode, no error handling on the final node</li>
        <li><code>Proposal - Approval Process</code> — references a hardcoded user ID that no longer exists in production</li>
        <li><code>Deceasing Process</code> — invoked from a community context; reads from a custom setting writable by all standard users</li>
      </ul>
      <p>For each flow, Rosetta proposes a <b>concrete remediation patch</b> — the actual edit to make in Flow Builder, generated from the diagnosis.</p>
    `,
  },
  {
    id: 'dependencies',
    num: '11',
    title: 'Top Complex Dependencies',
    category: 'Architecture',
    meta: 'Generated · Cross-reference graph: Apex → Flow → Field → Object → Layout',
    body: `
      <p>Rosetta builds a complete dependency graph of every Apex class, trigger, flow, validation rule, field, and layout — then ranks by <b>blast radius</b> (how many other things break if this one changes).</p>
      <p><b>Top dependency hubs:</b></p>
      <ul>
        <li><code>Account.Industry</code> — referenced by 41 flows, 17 reports, 9 validation rules, 6 Apex classes</li>
        <li><code>Opportunity.StageName</code> — referenced by 89 flows, 234 reports, 28 validation rules</li>
        <li><code>Contact.Email</code> — referenced by 14 integrations, 22 flows, 8 validation rules</li>
      </ul>
      <p>If you rename or remove any of these without Rosetta, you find the dependencies the hard way — at runtime, in production. With Rosetta, you see the impact before you change anything.</p>
    `,
  },
  {
    id: 'custom-objects',
    num: '12',
    title: 'Troublesome Custom Objects',
    category: 'Data Model',
    meta: 'Generated · Field utilization + relationship complexity + abandon score',
    body: `
      <p>Of 187 custom objects, <b>32 are likely abandoned</b> (zero records added in 12 months, zero fields populated above 5%). Rosetta scores each on three dimensions: <b>utilization, complexity, and isolation</b>.</p>
      <p><b>Most troublesome:</b></p>
      <ul>
        <li><code>Opportunity</code> has <b>89 custom fields, 43 empty</b> (60% utilization). Field sprawl from an old package implementation.</li>
        <li><code>Account</code> carries <b>17 empty custom fields</b> at 70% utilization.</li>
        <li><b>5 custom objects with 0 records</b> but active validation rules — pure technical debt.</li>
      </ul>
      <p>Rosetta produces an <b>actionable cleanup plan</b>: which fields to deprecate, which objects to archive, which to keep but tighten. The plan respects existing references — anything that would break a dependency is flagged for review, not deletion.</p>
    `,
  },
];
