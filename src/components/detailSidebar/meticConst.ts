export const METRIC_TYPE = {
	LIKE: 'like',
	VIEW: 'view',
	SHARE: 'share',
	SAVE: 'save',
} as const;
export const METRIC_ACTION = {
	INC: 'inc',
	DEC: 'dec',
} as const;

export type MetricType = (typeof METRIC_TYPE)[keyof typeof METRIC_TYPE];
export type MetricAction = (typeof METRIC_ACTION)[keyof typeof METRIC_ACTION];
