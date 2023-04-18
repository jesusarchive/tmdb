import React from 'react';

import { Scenario as BadgeDefault } from './badge.scenario';
import { Scenario as BadgeColors } from './badge-colors.scenario';
import { Scenario as BadgeEmpty } from './badge-empty.scenario';
import { Scenario as BadgeInAButton } from './badge-in-button.scenario';
import { Scenario as BadgeInText } from './badge-in-text.scenario';
import { Scenario as BadgeOutline } from './badge-outline.scenario';
import { Scenario as BadgeSizes } from './badge-sizes.scenario';

export const Badge = () => <BadgeDefault />;
export const Colors = () => <BadgeColors />;
export const Outline = () => <BadgeOutline />;
export const Sizes = () => <BadgeSizes />;
export const Empty = () => <BadgeEmpty />;
export const InText = () => <BadgeInText />;
export const InAButton = () => <BadgeInAButton />;
