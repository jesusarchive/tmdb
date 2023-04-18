import React from 'react';

import { Scenario as ButtonDefault } from './button.scenario';
import { Scenario as ButtonAsHref } from './button-as-href.scenario';
import { Scenario as ButtonColors } from './button-colors.scenario';
import { Scenario as ButtonIcons } from './button-icons.scenario';
import { Scenario as ButtonVariants } from './button-variants.scenario';

export const Button = () => <ButtonDefault />;
export const AsHref = () => <ButtonAsHref />;
export const Colors = () => <ButtonColors />;
export const Icons = () => <ButtonIcons />;
export const Variants = () => <ButtonVariants />;
