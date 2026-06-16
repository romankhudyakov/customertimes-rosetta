export interface ComparatorRow {
  capability: string;
  sweep: 'yes' | 'partial' | 'no';
  hubbl: 'yes' | 'partial' | 'no';
  swantide: 'yes' | 'partial' | 'no';
  apromore: 'yes' | 'partial' | 'no';
  saltbox: 'yes' | 'partial' | 'no';
  rosetta: 'yes' | 'partial' | 'no';
  note?: string;
}

export const comparatorRows: ComparatorRow[] = [
  { capability: 'Visual org map',                   sweep: 'yes',     hubbl: 'yes',     swantide: 'no',  apromore: 'no',  saltbox: 'no',     rosetta: 'yes' },
  { capability: 'Exec-grade reports (12 distinct)', sweep: 'partial', hubbl: 'partial', swantide: 'no',  apromore: 'no',  saltbox: 'no',     rosetta: 'yes' },
  { capability: 'Process mining',                   sweep: 'no',      hubbl: 'no',      swantide: 'no',  apromore: 'yes', saltbox: 'no',     rosetta: 'yes' },
  { capability: 'Industry auto-calibration',        sweep: 'no',      hubbl: 'no',      swantide: 'no',  apromore: 'no',  saltbox: 'no',     rosetta: 'yes' },
  { capability: 'Tech debt — named classes + ROI',  sweep: 'partial', hubbl: 'no',      swantide: 'no',  apromore: 'no',  saltbox: 'no',     rosetta: 'yes' },
  { capability: 'Admin-as-code / IaC',              sweep: 'partial', hubbl: 'no',      swantide: 'partial', apromore: 'no',  saltbox: 'yes', rosetta: 'yes' },
  { capability: 'Scope / SOW / estimation engine',  sweep: 'no',      hubbl: 'no',      swantide: 'no',  apromore: 'no',  saltbox: 'no',     rosetta: 'yes' },
  { capability: 'Configuration templates (any product)', sweep: 'no', hubbl: 'no',      swantide: 'partial', apromore: 'no',  saltbox: 'partial', rosetta: 'yes' },
  { capability: 'Implementation playbooks',         sweep: 'no',      hubbl: 'no',      swantide: 'no',  apromore: 'no',  saltbox: 'no',     rosetta: 'yes' },
  { capability: 'CLI-driven configuration',         sweep: 'partial', hubbl: 'no',      swantide: 'no',  apromore: 'no',  saltbox: 'yes',    rosetta: 'yes' },
  { capability: 'UAT tracking',                     sweep: 'no',      hubbl: 'no',      swantide: 'no',  apromore: 'no',  saltbox: 'no',     rosetta: 'yes' },
  { capability: 'Delta / continuous scans',         sweep: 'partial', hubbl: 'partial', swantide: 'no',  apromore: 'yes', saltbox: 'no',     rosetta: 'yes' },
  { capability: 'LLM-flexible (BYO model)',         sweep: 'no',      hubbl: 'no',      swantide: 'no',  apromore: 'no',  saltbox: 'no',     rosetta: 'yes', note: 'Cursor partnership · MCP-native' },
  { capability: 'SI delivery muscle bundled in',    sweep: 'no',      hubbl: 'no',      swantide: 'no',  apromore: 'no',  saltbox: 'no',     rosetta: 'yes', note: 'Customertimes runs the engagement' },
];

export const competitors = ['Sweep', 'Hubbl', 'Swantide', 'Apromore', 'Saltbox', 'Rosetta'];
