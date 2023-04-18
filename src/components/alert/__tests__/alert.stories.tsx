import React from 'react';

import { Scenario as AlertDefault } from './alert.scenario';
import { Scenario as AlertColors } from './alert-colors.scenario';
import { Scenario as AlertCustomContent } from './alert-custom-content';

export const Alert = () => <AlertDefault />;
export const Colors = () => <AlertColors />;
export const CustomContent = () => <AlertCustomContent />;
