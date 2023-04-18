import React from 'react';

import { Scenario as ToastDefault } from './toast.scenario';
import { Scenario as ToastDynamicAlerts } from './toast-dynamic-alerts.scenario';
import { Scenario as ToastWithAlert } from './toast-with-alert.scenario';

export const Toast = () => <ToastDefault />;
export const WithAlerts = () => <ToastWithAlert />;
export const DynamicAlerts = () => <ToastDynamicAlerts />;
