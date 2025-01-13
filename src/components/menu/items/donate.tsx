import { SiBuymeacoffee } from 'react-icons/si/index';

import { Item } from '../item';

export function Donate() {
  return (
    <Item
      href="https://buymeacoffee.com/moodist"
      icon={<SiBuymeacoffee />}
      label="给我买杯咖啡"
    />
  );
}
