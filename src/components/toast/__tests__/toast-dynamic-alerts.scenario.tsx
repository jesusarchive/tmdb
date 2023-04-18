import * as React from 'react';

import Alert from '../../alert';
import Button from '../../button';
import Toast from '..';

const dynamicToastChildStatuses = ['info', 'success', 'warning', 'error'] as const;

type DynamicToastChild = {
  text: string;
  status: typeof dynamicToastChildStatuses[number];
};

export const Scenario = () => {
  const [alerts, setAlerts] = React.useState<DynamicToastChild[]>([
    { text: 'This is a custom alert!', status: 'info' }
  ]);

  const handleAddToast = () => {
    setAlerts((alerts) => [
      ...alerts,
      {
        text: 'New message arrived.',
        status: dynamicToastChildStatuses[Math.floor(Math.random() * dynamicToastChildStatuses.length)]
      }
    ]);
  };

  const handleRemoveToast = (index: number) => {
    setAlerts((alerts) => alerts.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Button onClick={handleAddToast}>Add Toast</Button>
      <Toast vertical="bottom" horizontal="end">
        {alerts.map((alert, index) => (
          <Alert key={index} status={alert.status}>
            <div className="w-full flex-row justify-between gap-2">
              <h3>{alert.text}</h3>
            </div>
            <Button color="ghost" onClick={() => handleRemoveToast(index)}>
              X
            </Button>
          </Alert>
        ))}
      </Toast>
    </div>
  );
};
