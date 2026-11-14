export const TAGS = ['bi', 'data-science', 'automatizacion', 'sql', 'finanzas', 'agro', 'ia'] as const;
export const VISUALS = ['soja', 'inflation-seasonality', 'dashboard'] as const;

export type Tag = (typeof TAGS)[number];
