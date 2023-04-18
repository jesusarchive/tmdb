import * as React from 'react';
import { useState } from 'react';

import Button from '../../button';
import Modal from '..';

export const Scenario = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <div className="font-sans">
      <Button onClick={toggleVisible}>Open Modal</Button>
      <Modal open={visible}>
        <Modal.Header className="font-bold">Congratulations random Interner user!</Modal.Header>

        <Modal.Body>
          {`You've been selected for a chance to get one year of subscription to use Wikipedia for free!`}
        </Modal.Body>

        <Modal.Actions>
          <Button onClick={toggleVisible}>Yay!</Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};
