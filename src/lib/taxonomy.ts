export const TAGS = ['bi', 'data-science', 'automatizacion', 'sql', 'ia'] as const;
export const VISUALS = ['soja', 'inflation-seasonality', 'validation-flow'] as const;

export type Tag = (typeof TAGS)[number];
